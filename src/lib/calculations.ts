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
