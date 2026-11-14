export type StateTankRuleResult = {
  gallons: number | null;
  citation: string | null;
  ruleLabel: string | null;
  note: string;
};

const sources: Record<string, { url: string; label: string }> = {
  georgia: { url: 'https://rules.sos.ga.gov/GAC/511-3-1', label: 'Georgia Rule 511-3-1-.05' },
  massachusetts: { url: 'https://www.mass.gov/doc/310-cmr-15000-title-5-of-the-state-environmental-code/download', label: '310 CMR 15.223' },
  'new-york': { url: 'https://regs.health.ny.gov/content/appendix-75-a6-septic-tanks', label: 'New York Appendix 75-A.6' },
  'north-carolina': { url: 'https://ehs.dph.ncdhhs.gov/oswp/docs/15A-NCAC-18E.pdf', label: '15A NCAC 18E .0801' },
  ohio: { url: 'https://codes.ohio.gov/ohio-administrative-code/rule-3701-29-12', label: 'Ohio Administrative Code 3701-29-12' },
  pennsylvania: { url: 'https://www.pacodeandbulletin.gov/display/pacode?d=reduce&file=%2Fsecure%2Fpacode%2Fdata%2F025%2Fchapter73%2Fs73.31.html', label: '25 Pa. Code § 73.31' },
  'south-carolina': { url: 'https://des.sc.gov/sites/des/files/Library/Regulations/R.61-56.pdf', label: 'South Carolina Regulation 61-56 § 201.1' },
  virginia: { url: 'https://law.lis.virginia.gov/admincode/title12/agency5/chapter610/section815/', label: '12VAC5-610-815' },
};

/**
 * State rule examples are shown only where the selected inputs map directly to
 * an accessible rule. These planning figures do not replace permits or local
 * design requirements.
 */
export function stateTankRule(
  state: string,
  bedrooms: number,
  garbageGrinder: boolean,
  liftPump: boolean,
  approvedDesignFlow?: number,
): StateTankRuleResult {
  const bedroomCount = bedrooms + (state === 'new-york' && garbageGrinder ? 1 : 0);
  const cite = sources[state];
  let gallons: number | null = null;
  let note = 'No bedroom-based minimum is computed for this state here. Ask the local permitting authority to confirm applicable requirements.';

  switch (state) {
    case 'georgia':
      gallons = 1000 + Math.max(0, bedroomCount - 4) * 250;
      if (garbageGrinder) gallons = Math.ceil(gallons * 1.5);
      note = 'Georgia specifies 1,000 gallons for up to four bedrooms, 250 gallons per additional bedroom, and a 50% capacity increase when a garbage grinder is used.';
      break;
    case 'massachusetts':
      if (approvedDesignFlow && approvedDesignFlow > 0) {
        gallons = approvedDesignFlow < 1000 ? Math.max(1500, Math.ceil(approvedDesignFlow * 2)) : 1500;
        note = approvedDesignFlow < 1000
          ? 'For a single-family dwelling below 1,000 GPD, Massachusetts requires at least 200% of approved design flow (or 48-hour detention), with an effective capacity no lower than 1,500 gallons.'
          : 'At 1,000 GPD or above, Massachusetts requires multiple compartments or tanks in series and a combined effective capacity of at least 1,500 gallons; the approving authority must determine the complete design.';
      } else {
        note = 'Massachusetts sizes by approved design flow, not bedroom count alone. Enter the flow from the approved plan to see a rule-based illustration.';
      }
      break;
    case 'new-york':
      if (bedroomCount <= 3) gallons = 1000;
      else if (bedroomCount === 4) gallons = 1250;
      else if (bedroomCount === 5) gallons = 1500;
      else if (bedroomCount === 6) gallons = 1750;
      else gallons = 1750 + 250 * (bedroomCount - 6);
      note = garbageGrinder
        ? 'New York counts a garbage grinder as one additional bedroom for tank sizing.'
        : 'New York Appendix 75-A bases the minimum on bedrooms; each bedroom above six adds 250 gallons.';
      break;
    case 'north-carolina':
      if (bedroomCount <= 4) gallons = 1000;
      else if (bedroomCount === 5) gallons = 1250;
      if (bedroomCount > 5) note = 'North Carolina uses an approved design-flow table above five bedrooms; this calculator does not infer that design flow.';
      else if (liftPump) {
        gallons = (gallons ?? 0) * 2;
        note = 'North Carolina doubles the required capacity when a grinder pump or sewage lift pump is installed before the septic tank.';
      } else {
        note = 'North Carolina uses 1,000 gallons through four bedrooms and 1,250 gallons at five bedrooms. Above five bedrooms it uses approved design flow.';
      }
      break;
    case 'ohio':
      if (bedroomCount <= 2) gallons = 1000;
      else if (bedroomCount === 3) gallons = 1500;
      else if (bedroomCount <= 5) gallons = 2000;
      if (bedroomCount > 5) note = 'Ohio’s rule changes at six or more bedrooms; confirm the applicable tank and compartment design with the local health district before relying on a figure.';
      else note = 'Ohio’s rule specifies 1,000 gallons for one or two bedrooms, 1,500 for three, and 2,000 for four or five.';
      break;
    case 'pennsylvania': {
      const flow = bedroomCount <= 3 ? 400 : 400 + 100 * (bedroomCount - 3);
      gallons = flow <= 500 ? Math.max(900, 3.5 * (flow - 400) + 900) : 1.5 * (flow - 500) + 1250;
      note = 'Pennsylvania sets a 400 GPD baseline for three bedrooms, adds 100 GPD per bedroom above three, and applies the capacity formula in § 73.31. The flow assumption already accounts for garbage grinders.';
      break;
    }
    case 'south-carolina':
      gallons = 1000 + Math.max(0, bedroomCount - 4) * 250;
      note = 'South Carolina requires at least 1,000 gallons through four bedrooms and 250 gallons for each additional bedroom.';
      break;
    case 'virginia': {
      const values: Record<number, number> = { 1: 750, 2: 750, 3: 900, 4: 1200, 5: 1500 };
      gallons = values[bedroomCount] ?? null;
      if (gallons === null) note = 'Virginia’s dwelling-unit table lists values through five bedrooms. Ask the local health department about a larger dwelling.';
      else note = 'Virginia’s table specifies dwelling-unit minimums by bedroom count, with a statewide floor of 750 gallons.';
      break;
    }
  }

  return {
    gallons: gallons === null ? null : Math.ceil(gallons),
    citation: cite?.url ?? null,
    ruleLabel: cite?.label ?? null,
    note,
  };
}
