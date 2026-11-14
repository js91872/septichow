export function bounded(value:number,min:number,max:number,label:string) {
 if(!Number.isFinite(value)||value<min||value>max) throw new Error(`${label} must be between ${min} and ${max}.`);
 return value;
}
export function tankPlan(bedrooms:number,people:number,gallons:number,state:string,disposal:boolean,ejector:boolean) {
 bounded(bedrooms,1,12,'Bedrooms'); bounded(people,1,20,'Household size'); bounded(gallons,20,150,'Daily water use');
 if(!Number.isInteger(bedrooms)||!Number.isInteger(people)) throw new Error('Bedrooms and household size must be whole numbers.');
 const flow=people*gallons;
 const base=bedrooms<=3?1000:bedrooms<=5?1500:bedrooms<=7?2000:bedrooms<=9?2500:2500+(bedrooms-9)*250;
 return {flow,scenario:flow*2,minimum:state==='MN'?base*((disposal||ejector)?1.5:1):null};
}
export function costPlan(base:number,access:number,disposal:number,emergency:number,tax:number) {
 [base,access,disposal,emergency].forEach(x=>bounded(x,0,20000,'Price'));
 bounded(tax,0,20,'Tax rate');
 const subtotal=base+access+disposal+emergency;
 return {subtotal,tax:subtotal*tax/100,total:subtotal*(1+tax/100)};
}
export function serviceWindow(last:string,early:number,late:number,now=new Date()) {
 bounded(early,0.25,5,'Earliest interval'); bounded(late,early,5,'Latest interval');
 if(!/^\d{4}-\d{2}-\d{2}$/.test(last)) throw new Error('Enter the last pumping date.');
 const start=new Date(last+'T12:00:00Z');
 if(!Number.isFinite(start.getTime())||start.toISOString().slice(0,10)!==last||start>now) throw new Error('Enter a valid past pumping date.');
 function add(years:number){const d=new Date(start);const day=d.getUTCDate();d.setUTCDate(1);d.setUTCMonth(d.getUTCMonth()+Math.round(years*12));const limit=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+1,0)).getUTCDate();d.setUTCDate(Math.min(day,limit));return d;}
 const from=add(early),to=add(late);
 return {from:from.toISOString().slice(0,10),to:to.toISOString().slice(0,10),status:now>to?'Past planning window':now>=from?'In planning window':'Upcoming planning window'};
}
export function urgency(symptom:string,backup:boolean,wet:boolean) {
 return backup||wet||symptom==='Backup'||symptom==='Wet yard'?'Urgent':symptom==='Alarm'?'Prompt service':'Arrange inspection';
}

// Suggested planning intervals adapted from the published EPA/University of
// Maryland matrix. Values are lookup values, not legal or inspection advice.
const intervalMatrix: Record<number, number[]> = {
  500:[5.8,2.6,1.5,1.0,.7,.4,.3,.2,.1,0],
  750:[9.1,4.2,2.6,1.8,1.3,1.0,.7,.6,.4,.3],
  1000:[12.4,5.9,3.7,2.6,2.0,1.5,1.2,1.0,.8,.7],
  1250:[15.6,7.5,4.8,3.4,2.6,2.0,1.7,1.4,1.2,1.0],
  1500:[18.9,9.1,5.9,4.2,3.3,2.6,2.1,1.8,1.5,1.3],
  1750:[22.1,10.7,6.9,5.0,3.9,3.1,2.6,2.2,1.9,1.6],
  2000:[25.4,12.4,8.0,5.9,4.5,3.7,3.1,2.6,2.2,2.0],
  2250:[29.6,14.0,9.1,6.7,5.2,4.2,3.5,3.0,2.6,2.3],
  2500:[31.9,15.6,10.2,7.5,5.9,4.8,4.0,4.0,3.0,2.6]
};
export function recommendedInterval(tank:number,people:number,disposal=false) {
  bounded(tank,500,2500,'Tank size'); bounded(people,1,10,'Household size');
  if(!Number.isInteger(tank)||!Number.isInteger(people)||!intervalMatrix[tank]) throw new Error('Choose a listed tank capacity and a whole-number household size.');
  const base=intervalMatrix[tank][people-1];
  // A transparent conservative planning adjustment; no official fixed
  // disposal multiplier exists. Inspection findings and local rules prevail.
  const adjusted=disposal?Math.max(.1,Math.round(base*.7*10)/10):base;
  return {base,years:Math.min(adjusted,5)};
}

export function estimatePumpingCost(tank:number,access:string,hose:boolean,timing:string) {
  const base:Record<number,[number,number]>={750:[250,550],1000:[250,700],1250:[300,850],1500:[350,1100],2000:[450,1400]};
  if(!base[tank]) throw new Error('Choose a listed tank size.');
  let [low,high]=base[tank];
  const add:Record<string,[number,number]>={riser:[0,0],buried:[75,175],deep:[150,450]};
  const extra=add[access]; if(!extra) throw new Error('Choose a lid access condition.');
  low+=extra[0]; high+=extra[1];
  if(hose){low+=50;high+=100;}
  if(timing==='emergency'){low+=150;high+=350;} else if(timing!=='routine') throw new Error('Choose service timing.');
  return {low,median:Math.round((low+high)/2),high};
}

export function tankVolume(length:number,width:number,depth:number,shape:'rectangular'|'cylindrical',diameter?:number) {
  [length,width,depth].forEach(x=>bounded(x,.1,1000,'Dimension'));
  const gallons=shape==='rectangular'?length*width*depth*7.48052:Math.PI*Math.pow(bounded(diameter??0,.1,1000,'Diameter')/2,2)*depth*7.48052;
  return {gallons,perInch:gallons/(depth*12)};
}

export function drainFieldPlan(flow:number,perc:number,loading:number,width:number) {
  bounded(flow,50,10000,'Daily design flow'); bounded(perc,1,240,'Percolation time'); bounded(loading,.01,2,'Soil loading rate'); bounded(width,1,6,'Trench width');
  const absorptionArea=flow/loading;
  return {absorptionArea,linearFeet:absorptionArea/width,flow,perc,loading,width};
}

export function riserPayback(install:number,dig:number,visits:number) {
  bounded(install,0,10000,'Installed riser cost'); bounded(dig,0,5000,'Recurring digging fee'); bounded(visits,1,30,'Planned service visits');
  return {breakEvenVisits:dig>0?Math.ceil(install/dig):Infinity,avoidedFees:dig*visits,netSavings:dig*visits-install};
}
