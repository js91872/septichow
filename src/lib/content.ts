import { articles } from './articles';
import { states as usStates, slugifyState, tankCapacities } from './states';
export const tools = [
  {
    slug: 'septic-tank-size-calculator',
    kind: 'tank',
    title: 'Septic Tank Size Calculator: What Size Do You Need?',
    description: 'Estimate household wastewater flow and view a clearly labeled Minnesota tank-capacity example. Check local rules before choosing a tank.',
    method: 'Estimated household flow = occupants × user-entered gallons per person per day. The two-day liquid-volume figure is arithmetic only and is not a legal design flow, tank size, or installation recommendation. There is no universal federal bedroom-to-capacity table. The optional Minnesota example applies Rule 7080.1930 and its capacity tiers and specified single 50% adjustment for a garbage disposal or sewage ejector/grinder pump; verify current code and local permitting requirements.',
    sources: ['epa-care', 'mn-capacity', 'epa-works']
  },
  {
    slug: 'septic-pumping-frequency-calculator',
    kind: 'frequency',
    title: 'Septic Pumping Frequency Calculator: Tank Size & Household',
    description: 'Estimate a septic pumping interval from tank capacity and household size, then save a browser-local reminder or download a calendar file.',
    method: 'The suggested interval table is a planning estimate adapted from historical EPA technical-table data and Penn State Extension material. EPA currently advises inspections every 1–3 years and pumping commonly every 3–5 years, based on measured solids, tank size, household size and use. The disposal toggle applies a clearly identified conservative 0.7 multiplier as a SepticHow heuristic; no universal EPA or Penn State fixed disposal multiplier is asserted. The result is capped at five years and must not replace a professional inspection or local requirement.',
    sources: ['epa-care', 'epa-faq', 'psu-pumping', 'epa-pumping-matrix']
  },
  {
    slug: 'septic-pumping-cost-calculator',
    kind: 'cost',
    title: 'Septic Pumping Cost Calculator: Price Estimate & Quote Auditor',
    description: 'See a broad US planning range based on tank size and access, or total an itemized local pumping quote.',
    method: 'Instant-estimate bands are broad US consumer planning ranges informed by current published cost-guide figures, then adjusted with transparent illustrative access, hose and emergency allowances. They are not a statistically validated regional price model or a contractor quote. Mode 2 totals the user’s entered quote and line items. Taxes and fee treatment vary by location.',
    sources: ['angi-pumping-cost', 'epa-care']
  },
  {
    slug: 'septic-troubleshooter',
    kind: 'troubleshooter',
    title: 'Septic System Troubleshooter: Smells, Backups & Slow Drains',
    description: 'Check septic tank smells, gurgling toilets, slow drains, alarms and wet yards. Get a clear next step for your symptoms.',
    method: 'The troubleshooter prioritizes indoor wastewater backups and outdoor sewage surfacing as urgent life-safety hazards, flags alarms for prompt equipment service, and helps you organize symptoms (fixture locations, storm timing, service history) for your service provider.',
    sources: ['epa-failure', 'clemson-rain']
  },
  {slug:'septic-tank-volume-calculator',kind:'volume',title:'Septic Tank Volume Calculator: Dimensions to Gallons',description:'Convert internal rectangular or cylindrical tank dimensions into estimated gallons and gallons per inch.',method:'Rectangular volume = internal length × width × liquid depth × 7.48052 gallons per cubic foot. Cylindrical volume = π × radius² × liquid depth × 7.48052. Geometry gives gross liquid volume only; actual rated capacity depends on manufacturer shape, wall dimensions, baffles and operating levels.',sources:['epa-works']},
  {slug:'septic-drain-field-size-calculator',kind:'drainfield',title:'Septic Drain Field Size Calculator: Flow & Soil Loading',description:'Estimate absorption area and trench length from design flow, trench width and the approved soil loading rate.',method:'Absorption area = daily design flow ÷ approved soil loading rate. Trench length = absorption area ÷ trench width. Percolation time is captured for reference but is not converted automatically into a loading rate because the approved relationship and design rules vary by soil, state and site. Use the value from a qualified site evaluator or local permit.',sources:['epa-drainfield','epa-regulations']},
  {slug:'septic-riser-payback-calculator',kind:'riser',title:'Septic Riser Payback Calculator: Compare Digging Fees',description:'Compare a local installed riser quote with recurring lid-access digging fees over future service visits.',method:'Break-even visits = installed riser cost ÷ digging fee avoided per visit, rounded up. The estimate assumes a riser eliminates that digging fee on each selected future visit; confirm contractor pricing and inspect the lid and riser condition professionally.',sources:['epa-care']}
] as const;

export const pages: Record<string, { title: string; description: string; sections: [string, string][]; sourceIds?: string[] }> = {
  'contact': {
    title: 'Contact SepticHow: Septic Guide Questions & Feedback',
    description: 'Contact SepticHow at info@septichow.com for website questions, septic guide feedback, calculator issues and content corrections.',
    sections: [
      ['Get in touch with SepticHow', 'Email info@septichow.com with questions about our website, homeowner guides, or calculators. We welcome feedback, topic suggestions, and corrections from homeowners and wastewater professionals.'],
      ['Reporting a guide or calculator issue', 'Include the page URL, the specific statement or calculation you are questioning, and any relevant authoritative public reference (e.g., state sanitary code or EPA publication). For calculator issues, share sample inputs and your expected result. Please do not send private property records, unredacted septic permits, or residential street addresses.'],
      ['Partnerships and editorial inquiries', 'Use the same address for editorial questions, technical contributions, or website inquiries. We respond to verified inquiries as promptly as possible.'],
      ['Help with an urgent septic emergency', 'If raw sewage is backing up into your home, wastewater is surfacing in your yard, or an electrical pump alarm is blaring, contact a licensed local septic pumping and repair contractor immediately. Website feedback channels cannot provide emergency plumbing dispatch.']
    ]
  },
  'about': {
    title: 'About SepticHow: Independent Septic Tank Care & Free Homeowner Tools',
    description: 'Learn how SepticHow helps homeowners understand septic systems, plan tank pumping, compare service costs and find clear answers to common septic problems.',
    sections: [
      ['Clear answers to everyday septic questions', 'Owning a home with an onsite septic system brings important questions: How often should you pump the tank? What does a contractor’s quote include? Why does the bathroom smell like sulfur or sewage, and what should you do when a high-water alarm sounds?\n\nSepticHow brings practical, reliable answers together in one place. Our free calculators and homeowner guides demystify septic systems, organize maintenance schedules, and prepare homeowners for informed conversations with local septic contractors and health officials.'],
      ['A resource for new and longtime septic owners', 'Whether you are buying your first home on a septic system, inheriting an older system with missing permits, or managing routine care for a multi-bedroom family house, our guides explain the tank, drain field, effluent filters, and pumps in plain English without confusing plumbing jargon.\n\nWe emphasize the fundamental rule of septic ownership: know where your components are buried, maintain a permanent service log, keep non-flushables and grease out of drains, and adhere to an inspection-driven maintenance routine.'],
      ['Free, privacy-first planning calculators', 'Our pumping frequency calculator estimates an interval from tank capacity and household size, then turns your last service date into a reminder you can store in this browser or download to your calendar.\n\nOur pumping cost calculator provides a broad US planning range and lets you total an itemized written quote. Other tools estimate gross tank volume, drain-field absorption area from an approved soil loading rate, and riser payback from local figures. The tank-flow planner includes a Minnesota example but does not determine a permitted design.'],
      ['Safety and professional assistance', 'Septic tanks produce toxic gases (methane, hydrogen sulfide) and create fatal confined-space asphyxiation and fall hazards. Electrical pump controls present dangerous shock risks. SepticHow emphasizes that opening septic tanks, removing lids, and servicing effluent filters involve severe toxic gas and fall hazards that require qualified service professionals. We help homeowners monitor water habits, track service intervals, and recognize warning signs, while leaving tank opening, filter servicing, electrical repairs, and excavation to licensed technicians.'],
      ['Authoritative references and editorial integrity', 'Our guides are grounded in public environmental guidance from the U.S. Environmental Protection Agency (EPA), university agricultural and engineering extensions (University of Minnesota, Penn State, Clemson, Purdue), and published state administrative codes. State-specific rules are clearly identified so homeowners know when local health codes take precedence.']
    ]
  },
  'editorial-policy': {
    title: 'How We Write Our Septic Tank Guides & Maintenance Advice',
    description: 'Read how SepticHow chooses sources, explains septic care in plain language and reviews its guides, examples and calculator information.',
    sections: [
      ['Homeowner-first utility', 'We build every guide around real questions homeowners ask: how to size a tank, when to schedule pumping, what a repair quote means, and what steps to take during an emergency backup. Every page provides a direct, actionable answer upfront before diving into technical details.'],
      ['Authoritative source selection', 'We cite primary public sources, including the U.S. EPA Onsite Wastewater Treatment guidelines, university cooperative extension services, and published state administrative rules. Equipment manuals are referenced when discussing pumps, aerators, and effluent filters. Full source citations are provided on every guide and within our centralized source library.'],
      ['Transparency in pricing and calculations', 'We never invent contractor quotes, fake national averages, or unverified regional prices. Where cost ranges are provided, we clearly explain the underlying labor, excavation, permitting, and material drivers. Calculator methods are fully documented on our methodology page.'],
      ['Clear distinction between state and federal guidance', 'Plumbing and environmental sanitary codes vary by state and county. Where state-specific codes are used (such as Minnesota Rule 7080.1930 for tank sizing), we explicitly label them as state examples rather than nationwide mandates.'],
      ['Regular reviews and updates', 'Our technical team and editorial reviewers regularly audit guides and calculators against updated environmental standards, plumbing regulations, and homeowner feedback. Each guide displays its publication and latest revision date.']
    ]
  },
  'methodology': {
    title: 'How Our Septic Tank Size, Pumping Date & Cost Calculators Work',
    description: 'Understand the inputs and formulas behind SepticHow’s tank water-use calculator, pumping schedule, pumping cost estimate and symptom troubleshooter.',
    sections: [
      ['Septic tank planning calculation', 'Estimated household flow = household members × gallons per person per day. The two-day volume illustration is an arithmetic scenario, not a design flow, permit rule, or tank recommendation. State and local authorities set capacity requirements; there is no universal 50-state bedroom table. The Minnesota reference applies only to Minnesota Rule 7080.1930.'],
      ['Pumping interval and date', 'The pumping frequency tool looks up a suggested interval using tank capacity and household occupants, then adds it to the verified last pumping date. It uses historical table values as a planning estimate, applies a disclosed 0.7 disposal heuristic, and caps the reminder at five years. EPA commonly recommends professional inspections every 1–3 years and pumping every 3–5 years; measurements, local requirements and the service provider take priority.'],
      ['Pumping cost estimate and quote totalizer', 'Mode 1 presents broad US planning ranges informed by published consumer cost data and illustrative access, hose and timing adjustments. It is not a local quote or a validated regional model. Mode 2 computes Total = Subtotal × (1 + Tax Rate / 100), where Subtotal = Base Pumping + Access/Digging + Other Fees + Emergency Surcharge.'],
      ['Tank volume and drain-field planning', 'Rectangular gross volume = internal length × width × liquid depth × 7.48052. Cylindrical gross volume = π × radius² × liquid depth × 7.48052. Drain-field absorption area = daily design flow ÷ approved soil loading rate; trench length = absorption area ÷ trench width. The drain-field tool does not infer a loading rate from percolation time because codes and site conditions vary.'],
      ['Symptom troubleshooting logic', 'The troubleshooter evaluates reported symptoms against risk factors: indoor sewage backups, suspected outdoor surfacing, and saturated wet yards automatically trigger an Urgent recommendation. Active pump alarms prompt prompt equipment service. Persistent slow drains or odors prompt a professional inspection.']
    ]
  },
  'corrections': {
    title: 'Report a Septic Guide Error or Calculator Issue',
    description: 'Learn what to include when sharing a correction about a SepticHow guide, source reference, pumping schedule or calculator result.',
    sections: [
      ['Our commitment to accuracy', 'We strive to provide accurate, reliable information for homeowners. If you notice a typo, an outdated code reference, an arithmetic discrepancy in a calculator, or an unclear explanation, we want to know.'],
      ['What to include in your correction report', 'Please email info@septichow.com with: (1) The specific page URL, (2) The exact text or calculation in question, (3) Your suggested correction, and (4) An authoritative supporting citation (e.g., EPA guide, university extension paper, or county health code).'],
      ['Privacy considerations', 'Do not include personal home addresses, deed numbers, or private service invoices in correction submissions. Sample figures or publicly available documents are sufficient.'],
      ['Handling septic emergencies', 'Please do not email website corrections if you are currently experiencing a sewage backup or health hazard. Contact a licensed local septic professional immediately.']
    ]
  },
  'disclaimer': {
    title: 'Septic Tank Information & Calculator Use: Important Guidance',
    description: 'Learn how to use SepticHow’s septic care guides and calculators, check local installation requirements and respond to urgent sewage problems.',
    sections: [
      ['Educational and planning resource only', 'SepticHow is an independent educational website. Content, calculators, checklists, and guides are provided for informational and planning purposes only and do not constitute professional engineering, plumbing, legal, or health advice.'],
      ['Confirm local codes and permitting', 'Onsite wastewater regulations, soil testing requirements, minimum setback distances, and approved system designs vary substantially by state, county, and municipality. Always consult your local health department, environmental agency, and licensed septic contractor before installing, replacing, or modifying an onsite system.'],
      ['Life safety and confined-space hazards', 'Septic tanks are hazardous permit-required confined spaces. Never remove secured lids or lean into or enter a septic tank. Toxic gases (hydrogen sulfide, methane) can cause immediate loss of consciousness and fatal asphyxiation. Never attempt DIY electrical repairs inside pump control panels.'],
      ['No warranty on calculator results', 'Calculator outputs are estimates based on user-provided numbers and generalized planning assumptions. SepticHow does not guarantee specific contractor pricing, regulatory approval, or system longevity based on calculator usage.']
    ]
  },
  'privacy': {
    title: 'SepticHow Privacy Policy: Calculator Inputs & Saved Schedules',
    description: 'Find out how SepticHow handles calculator inputs, browser-saved septic schedules, calendar downloads, hosting logs and external website links.',
    sections: [
      ['About this privacy policy', 'This policy outlines how SepticHow handles information when you visit our website, use our calculators, or save maintenance schedules. Last updated October 20, 2026.'],
      ['Client-side calculator processing', 'All calculations (sizing, frequency, pumping costs, and troubleshooting) execute client-side in your web browser. The values you type into calculator fields are not transmitted to or stored in an external application database.'],
      ['Browser local storage for saved schedules', 'When you click "Save on this browser" on the pumping frequency calculator or schedule page, the data is stored exclusively in your browser’s local storage on your device. Clearing your browser cache or switching devices will reset the saved data. You can delete your saved schedule at any time using the "Delete saved plan" button.'],
      ['Calendar downloads', 'When you download an ICS calendar reminder, the file is generated locally in your browser memory. We do not collect your personal email address or calendar account credentials.'],
      ['Server logs and hosting infrastructure', 'Like all standard web servers, our hosting environment logs standard technical connection data (including IP addresses, browser user-agent, and requested page paths) for security monitoring, reverse-proxy routing, and error diagnostics.'],
      ['Third-party links and policies', 'Our guides provide reference links to external government and university websites (e.g., EPA, state extension programs). We do not control and are not responsible for the privacy practices of third-party websites.'],
      ['Contacting us', 'If you contact info@septichow.com, your email address and message contents will be used solely to respond to your inquiry. We do not sell or share contact details with third-party marketing companies.']
    ]
  },
  'terms': {
    title: 'SepticHow Terms of Use for Free Septic Calculators & Guides',
    description: 'Read the terms for using SepticHow’s free septic calculators, maintenance guides, saved schedules, examples and linked resources.',
    sections: [
      ['Acceptance of terms', 'By accessing SepticHow, using our free tools, or reading our guides, you agree to these Terms of Use. If you do not agree, please discontinue use of the site.'],
      ['Use of calculators and planning tools', 'SepticHow grants homeowners a free, non-exclusive license to use our calculators and download calendar files for personal, non-commercial maintenance planning. Commercial scraping, automated data harvesting, or framing of tools without written permission is prohibited.'],
      ['Accuracy of user inputs', 'You are solely responsible for verifying the accuracy of the dates, capacities, and financial figures you enter into our tools. A maintenance plan or cost estimate based on incorrect data should not be relied upon for contractual or regulatory purposes.'],
      ['Intellectual property', 'All original articles, guides, calculator interfaces, diagrams, and site graphics are protected by copyright and intellectual property laws. Quoting brief excerpts with clear attribution and a link to the original URL is permitted; bulk reproduction is prohibited.'],
      ['Limitation of liability', 'In no event shall SepticHow or its creators be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, including system failures, contractor disputes, or incorrect maintenance intervals.']
    ]
  }
};

pages.states={title:'State Septic System Codes & Program Contacts',description:'Find your state septic program and learn why local permitting authorities determine septic tank and drain-field requirements.',sections:[['Start with the authority for your property','Septic system rules are established by state and local authorities. In many states, county or local health departments issue permits under state law. A state selector cannot safely substitute one bedroom-to-tank rule for every county, soil type, or system design.'],['Use the official state contact directory','Choose your state below to open its SepticHow reference page, then use the US EPA state septic program contact directory and ask your county permitting office to confirm the current code for your parcel.']] ,sourceIds:['epa-state-contacts','epa-regulations']};
pages.tanks={title:'Septic Tank Sizes & Manufacturer Dimension References',description:'Compare common septic tank capacity classes and learn how to verify dimensions from the exact manufacturer model.',sections:[['Tank gallons do not determine one universal footprint','Different manufacturers offer different concrete, polyethylene, and fiberglass shapes at the same nominal capacity. Exterior dimensions, weight, liquid depth, installation clearances, and bedroom match are model and jurisdiction dependent. Use the manufacturer’s drawing and the local permit rather than a generic chart.'],['Choose a tank capacity reference','These pages explain what to check for common tank capacity classes and link to the dimension calculator. They do not publish unverified manufacturer specifications.']] ,sourceIds:['epa-regulations']};
for(const stateName of usStates){
  const slug=slugifyState(stateName);
  pages['states/'+slug]={title:`${stateName} Septic System Rules & Local Permit Contacts`,description:`How to verify ${stateName} septic system rules, tank sizing, site requirements and the correct local permitting office.`,sections:[['Confirm your local septic requirements',`Septic tank capacity, bedroom assumptions, soil evaluation, drain-field design, setbacks, and maintenance rules must be confirmed with the permitting authority for the property in ${stateName}. In many states, local or county health departments administer permits under state law. Do not use a generic national tank-size chart to select a tank.`],['Find the official state program',`Use the US EPA State Septic System Program Contacts directory to find ${stateName}’s state-level septic contact. Ask that office which county or local agency issues permits for the property and where to read the current onsite wastewater code.`],['Questions to ask before designing or replacing a system','Ask about the legal bedroom count and design flow; minimum tank volume and compartment requirements; soil and site evaluations; approved system types; required setbacks; inspection and pumping rules; and the permit process. Keep the written response with your property records.']],sourceIds:['epa-state-contacts','epa-regulations']};
}
for(const gallons of tankCapacities){
  const slug=`${gallons}-gallon-septic-tank-dimensions`;
  pages['tanks/'+slug]={title:`${gallons.toLocaleString()} Gallon Septic Tank Dimensions & Capacity Guide`,description:`Learn how to verify dimensions, liquid capacity, materials and installation clearances for a ${gallons.toLocaleString()}-gallon septic tank.`,sections:[['Capacity is a rating, not a standard set of dimensions',`A ${gallons.toLocaleString()}-gallon rating describes a nominal tank volume. It does not establish one universal exterior length, width, height, shipping weight, liquid depth, or excavation clearance. Concrete, polyethylene and fiberglass models vary by manufacturer, compartment layout, structural rating and connection design.`],['Use the exact model drawing before excavation','Get the manufacturer’s dimensional drawing and installation manual for the specific model and material. Confirm exterior dimensions, empty and operating weight, inlet and outlet elevations, cover loading, lifting requirements, groundwater or buoyancy provisions, bedding, backfill, and working clearances with the installer and permitting authority.'],['Estimate gross volume from measured internal dimensions','The rectangular or cylindrical volume calculator can check geometric liquid volume from internal measurements. It cannot identify a tank model or replace its listed capacity. Do not infer the model or purchase a tank from exterior measurements alone.'],['Bedroom match and required capacity','No national bedroom-to-gallon conversion applies everywhere. A property’s approved capacity depends on its state and local rules and system design. Confirm the required tank with the authority that issues the onsite wastewater permit.']],sourceIds:['epa-regulations','epa-state-contacts']};
}

// Keep existing public URLs while using the expanded homeowner articles.
for (const [path, article] of Object.entries(articles)) {
  pages[path] = { title: article.title, description: article.description, sections: [], sourceIds: article.sourceIds };
}

// Keep existing public URLs while using the expanded homeowner articles.
for (const [path, article] of Object.entries(articles)) {
  pages[path] = { title: article.title, description: article.description, sections: [], sourceIds: article.sourceIds };
}
