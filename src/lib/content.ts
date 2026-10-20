import { articles } from './articles';
export const tools = [
  {
    slug: 'septic-tank-size-calculator',
    kind: 'tank',
    title: 'Septic Tank Size Calculator: What Size Do You Need?',
    description: 'Calculate septic tank size by bedroom count and daily household water use. Compare household flow against state capacity rules.',
    method: 'Daily wastewater = people × gallons used per person. US health codes size residential septic systems primarily by bedroom count (assuming 2 persons per bedroom at 60–75 gallons per person per day). The two-day liquid storage illustration represents hydraulic settling and biological retention time, not an installation minimum. Minnesota mode illustrates Rule 7080.1930 bedroom tiers with a single 50% adjustment for garbage disposals or sewage ejector pumps. Always verify local health department requirements for permitted capacity.',
    sources: ['epa-care', 'mn-capacity', 'epa-works']
  },
  {
    slug: 'septic-pumping-frequency-calculator',
    kind: 'frequency',
    title: 'Septic Pumping Frequency Calculator: Service Window Planner',
    description: 'Find your next septic tank pumping window from the last service date. Save your schedule or download a calendar reminder.',
    method: 'The calculator adds your selected service interval to the recorded last pumping date. Under EPA guidelines, typical household tanks are pumped every 3 to 5 years; adjust the interval to reflect your service technician’s recommendation, measured solids levels, or garbage disposal use. Tank capacity and household details are saved with your plan as context.',
    sources: ['epa-care', 'epa-faq']
  },
  {
    slug: 'septic-pumping-cost-calculator',
    kind: 'cost',
    title: 'Septic Tank Pumping Cost Calculator: Total Quote Estimator',
    description: 'Estimate total septic pumping costs from your written contractor quote, including base pumping, lid access, disposal fees and taxes.',
    method: 'The calculator totals your entered contractor quote and itemized fees (lid locating/digging, disposal fees, long hose runs, emergency surcharges), then applies your local sales tax rate to the taxable subtotal. If only parts of the service are taxable, enter zero percent and enter the tax as a fee line item. Avoid re-entering fees already included in the contractor base price.',
    sources: ['epa-care', 'epa-faq']
  },
  {
    slug: 'septic-troubleshooter',
    kind: 'troubleshooter',
    title: 'Septic System Troubleshooter: Smells, Backups & Slow Drains',
    description: 'Check septic tank smells, gurgling toilets, slow drains, alarms and wet yards. Get a clear next step for your symptoms.',
    method: 'The troubleshooter prioritizes indoor wastewater backups and outdoor sewage surfacing as urgent life-safety hazards, flags alarms for prompt equipment service, and helps you organize symptoms (fixture locations, storm timing, service history) for your service provider.',
    sources: ['epa-failure', 'clemson-rain']
  }
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
      ['Free, privacy-first planning calculators', 'Our pumping frequency calculator turns your last service date and pumper’s recommended interval into a clear service window that you can store in your browser or download to your calendar.\n\nOur pumping cost calculator allows you to itemize written contractor quotes—including base pumping, lid depth digging fees, municipal dumping fees, and taxes—to see your true out-of-pocket total. The tank size calculator compares household water use against standard biological retention requirements and state codes like Minnesota Rule 7080.1930.'],
      ['Safety and professional assistance', 'Septic tanks produce toxic gases (methane, hydrogen sulfide) and create fatal confined-space asphyxiation hazards. Electrical pump controls present shock risks. SepticHow clearly distinguishes safe homeowner checks (such as rinsing an accessible effluent filter or monitoring water habits) from tasks that strictly require licensed professionals (tank entry, pump wiring, heavy excavation, and permitted soil remediation).'],
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
      ['Septic tank size and household flow formula', 'General sizing mode calculates estimated daily wastewater flow: Flow (GPD) = Household Members × Gallons Per Person Per Day (default 70 GPD, adjustable from 20 to 150 GPD).\n\nThe two-day liquid storage illustration multiplies daily flow by two, representing standard biological hydraulic retention time (24 to 48 hours) required for solids separation. This is an arithmetic planning model, not a substitute for legal tank sizing. Minnesota mode applies Minnesota Rule 7080.1930 bedroom tiers (1–3 bedrooms: 1,000 gal; 4–5 bedrooms: 1,500 gal; 6–7 bedrooms: 2,000 gal; 8–9 bedrooms: 2,500 gal; +250 gal/bedroom thereafter) and applies a 1.5× multiplier if a garbage disposal or sewage ejector pump is present.'],
      ['Next pumping date calculation', 'The pumping frequency calculator takes your verified last service date and adds your chosen earliest and latest intervals (in years, adjustable in quarter-year increments). The result is displayed as a target calendar window.\n\nTank capacity, household occupants, and system type are stored alongside the schedule for your records, but do not override the professional interval recommended by your inspector.'],
      ['Pumping cost quote totalizer', 'The pumping cost tool computes Total = Subtotal × (1 + Tax Rate / 100), where Subtotal = Base Pumping + Lid Access/Digging Fee + Waste Disposal Fee + Emergency Surcharge. If some line items are exempt from sales tax in your jurisdiction, enter 0% for tax and enter the exact quoted tax amount as a fee item.'],
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

// Keep existing public URLs while using the expanded homeowner articles.
for (const [path, article] of Object.entries(articles)) {
  pages[path] = { title: article.title, description: article.description, sections: [], sourceIds: article.sourceIds };
}

// Keep existing public URLs while using the expanded homeowner articles.
for (const [path, article] of Object.entries(articles)) {
  pages[path] = { title: article.title, description: article.description, sections: [], sourceIds: article.sourceIds };
}
