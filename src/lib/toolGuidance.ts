import type { FAQ } from './articles';

export type ToolGuidance = {
  sections: { title: string; paragraphs: string[]; steps?: string[] }[];
  faqs: FAQ[];
  related: { href: string; label: string }[];
};

export const toolGuidance: Record<string, ToolGuidance> = {
  'septic-tank-size-calculator': {
    sections: [
      {
        title: 'What size septic tank do I need? Sizing by bedrooms',
        paragraphs: [
          'In the United States, residential septic tanks are sized primarily by the number of bedrooms in the home, rather than the number of people currently living there. Public health codes and plumbing standards use bedrooms as a legal proxy for potential occupancy, typically assuming two people per bedroom to ensure the system is not undersized when guests visit or when the property is sold.',
          'General legal sizing benchmarks across most US jurisdictions include:',
          '• 1 to 3 bedrooms: 1,000 gallons minimum (some older local codes permit 750 or 900 gallons for 1–2 bedrooms, but 1,000 gallons is the modern standard for new construction and replacements).',
          '• 4 bedrooms: 1,200 to 1,500 gallons minimum.',
          '• 5 bedrooms: 1,500 to 1,750 gallons minimum.',
          '• 6 or more bedrooms: Add roughly 250 gallons for each additional bedroom.',
          'If your home has extra plumbing fixtures (such as jetted bathtubs or multi-head body showers) or an unpermitted bedroom conversion, local health officials may require a larger tank or dual-compartment configuration.'
        ]
      },
      {
        title: 'Daily wastewater flow vs required tank capacity (Gallons per person)',
        paragraphs: [
          'Understanding your septic sizing requires separating daily wastewater flow from required tank capacity. The EPA estimates that the average individual generates 60 to 75 gallons of wastewater per day (GPD) in modern water-efficient homes, and up to 100 GPD with older fixtures.',
          'For example, a household of 4 people using 70 gallons each produces approximately 280 gallons of wastewater per day. However, you cannot install a 280-gallon septic tank. Septic tanks rely on gravity separation and anaerobic digestion, requiring a minimum 24- to 48-hour hydraulic retention time so that heavy solids (sludge) settle to the bottom and light fats, oils, and grease (scum) float to the top.',
          'In addition to retaining liquid wastewater for at least 24 to 48 hours, health regulations mandate dedicated reserve volume to accumulate sludge and scum between routine 3- to 5-year pumping cycles. That is why a 4-person family generating 280 GPD legally requires a 1,000- to 1,500-gallon tank capacity.'
        ]
      },
      {
        title: 'Septic tank size for a 3-bedroom or 4-bedroom house',
        paragraphs: [
          'For a 3-bedroom house, standard US design standards anticipate up to 6 occupants generating 360 to 450 GPD of design flow. Most state sanitary codes mandate a minimum 1,000-gallon tank for 3 bedrooms to provide sufficient settling time and sludge storage.',
          'For a 4-bedroom house, codes plan for up to 8 occupants and 480 to 600 GPD of design wastewater. As a result, 4-bedroom homes generally require a 1,200-gallon or 1,500-gallon tank. If the home includes a garbage disposal or basement sewage ejector pump, many local codes mandate a 1,500-gallon tank or a two-compartment tank regardless of bedroom count.',
          'Our calculator allows you to test both scenarios: enter your bedroom count and household size to view estimated daily wastewater flow, review the two-day liquid retention illustration, and compare against reference state rules.'
        ],
        steps: [
          'Enter the verified bedroom count from your property deed or tax records.',
          'Enter your actual household size to model real everyday water use.',
          'Adjust the gallons-per-person slider (standard is 70 GPD; set lower for high-efficiency fixtures or higher for heavy laundry).',
          'Choose general planning mode or the Minnesota Rule 7080.1930 reference.',
          'Toggle garbage disposal or sewage ejector options to see how food waste and pressurized pumps affect sizing.'
        ]
      },
      {
        title: 'Minnesota Rule 7080.1930: State-specific capacity reference',
        paragraphs: [
          'The state-rule option in our calculator models Minnesota Administrative Rule 7080.1930. This is explicitly a Minnesota-specific standard and is included as an illustrative example of how state administrative codes structure mandatory tank capacities.',
          'Minnesota Rule 7080.1930 specifies: 1,000 gallons for 1–3 bedrooms; 1,500 gallons for 4–5 bedrooms; 2,000 gallons for 6–7 bedrooms; 2,500 gallons for 8–9 bedrooms; and an additional 250 gallons per bedroom above 9. Furthermore, Minnesota requires a single 50% capacity expansion (or mandatory multiple compartments) when a garbage disposal or sewage ejector pump is installed.',
          'Do not apply the Minnesota rule as a legal standard in other states. Always consult your county environmental health department or local permitting authority for the exact sanitary code governing your property.'
        ]
      },
      {
        title: 'How garbage disposals and sewage ejector pumps affect sizing',
        paragraphs: [
          'Garbage disposals grind organic food waste into fine particles that take significantly longer to settle out of suspension. Food waste rapidly increases the organic loading rate and biological oxygen demand (BOD) inside the tank, accelerating sludge accumulation by 30% to 50%. Most health departments either require a 50% larger tank, mandatory dual compartments, or a dedicated effluent filter if a disposal is installed.',
          'Sewage ejector pumps (common in basements) grind and pump waste under pressure, creating turbulent flow and emulsifying fats and oils. This disrupts the quiet gravity settling required in the primary tank compartment, which is why jurisdictions require increased tank capacity or special baffle configurations.'
        ]
      }
    ],
    faqs: [
      {
        question: 'What size septic tank do I need for a 3-bedroom house?',
        answer: 'Across most US states and county health codes, a 3-bedroom house requires a minimum septic tank capacity of 1,000 gallons. If a garbage disposal or sewage ejector pump is installed, some jurisdictions require 1,250 or 1,500 gallons.'
      },
      {
        question: 'What size septic tank do I need for a 4-bedroom house?',
        answer: 'A 4-bedroom house typically requires a 1,200-gallon to 1,500-gallon septic tank under standard US building codes. In jurisdictions with strict environmental rules or where a garbage disposal is used, 1,500 gallons is the most common requirement.'
      },
      {
        question: 'How many gallons per person does a septic tank use per day?',
        answer: 'EPA estimates indicate typical indoor water use of 60 to 75 gallons per person per day for homes with water-efficient fixtures. Older homes with standard fixtures often average 80 to 100 gallons per person per day.'
      },
      {
        question: 'Can a septic tank be too big for a house?',
        answer: 'Generally, no. A larger septic tank provides longer hydraulic retention time, superior solids settling, cleaner effluent for the drain field, and longer intervals between pumping visits. The main disadvantages of an oversized tank are higher upfront installation costs and more required yard excavation.'
      },
      {
        question: 'Why do building codes size septic tanks by bedrooms instead of people?',
        answer: 'Home occupancy changes over time as families grow, rent out rooms, or sell to new owners. Sizing by bedroom count (assuming 2 persons per bedroom) ensures the permanent underground infrastructure remains adequately sized for the life of the home.'
      },
      {
        question: 'Where can I find the exact size of my existing septic tank?',
        answer: 'Look at the original septic installation permit, as-built drawing from your county health department, home inspection report, or past pumping receipts. A licensed septic contractor can also measure the tank dimensions during an inspection.'
      }
    ],
    related: [
      { href: '/guides/how-septic-system-works', label: 'How a septic tank and drain field work' },
      { href: '/guides/septic-system-installation-cost', label: 'New septic system installation costs' },
      { href: '/maintenance', label: 'Septic maintenance checklist and care plan' },
      { href: '/tools/septic-pumping-frequency-calculator', label: 'Calculate your next pumping date' }
    ]
  },
  'septic-pumping-frequency-calculator': {
    sections: [
      {
        title: 'How often should you pump your septic tank?',
        paragraphs: [
          'Under EPA guidance, typical single-family household septic tanks are pumped every 3 to 5 years, with routine inspections conducted every 1 to 3 years. However, the exact pumping frequency depends on four key factors: tank capacity, household occupancy, total wastewater volume, and the volume of solids generated.',
          'A small tank serving a large family requires significantly more frequent pumping than a 1,500-gallon tank serving a retired couple. Homes with garbage disposals accumulate sludge up to 50% faster, often necessitating pump-outs every 1 to 2 years.',
          'This calculator turns your verified last pumping date and recommended interval into a clear service planning window. Your tank size, household occupants, and system details are stored alongside the schedule for your records.'
        ]
      },
      {
        title: 'How to calculate your next septic pumping date',
        paragraphs: [
          'Start with the actual date on your most recent pumping receipt or inspection report. If you recently purchased the home and have no service records, do not guess a past date—schedule a professional inspection to measure current sludge depth and establish a verified baseline.'
        ],
        steps: [
          'Enter the verified last pumping date from your contractor receipt.',
          'Select your tank capacity and total household members.',
          'Indicate whether your system is conventional gravity or an alternative/pumped system.',
          'Specify your recommended service interval (standard EPA planning window is 3 to 5 years).',
          'Calculate your target service window, save it in your browser, or download an ICS calendar reminder.'
        ]
      },
      {
        title: 'EPA "Pump-Now" thresholds: When to pump based on measurement',
        paragraphs: [
          'While calendar intervals provide helpful planning targets, professional pumpers determine whether a tank actually requires pumping based on physical measurements of sludge and scum layers:',
          '• Bottom of scum layer is within 6 inches of the bottom of the outlet baffle or tee.',
          '• Top of settled sludge layer is within 12 inches of the outlet device.',
          '• Total sludge and scum layers combined occupy more than 25% to 33% of the liquid operating depth in the tank.',
          'If an inspection reveals solids exceeding these thresholds, the tank should be pumped immediately, regardless of how much time remains on your calendar reminder.'
        ]
      },
      {
        title: 'When to review your pumping schedule sooner',
        paragraphs: [
          'Review your maintenance schedule earlier if household occupancy increases (e.g., college students returning home, long-term guests, or property converted to a vacation rental). Alternative systems, aerobic treatment units (ATUs), and systems with mechanical pumps require annual inspection contracts.',
          'Never wait for a scheduled pumping date if you notice warning signs such as gurgling toilets, slow drains across multiple rooms, foul sewage odors, or wet spongy ground over the drain field. Use our troubleshooter for immediate symptom evaluation.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Does tank capacity change the date calculation in this tool?',
        answer: 'No. The calculator computes the target date directly from your verified last pumping date and selected interval. Tank size and household occupants are saved as context for your service contractor.'
      },
      {
        question: 'How do I save my septic schedule?',
        answer: 'Click "Save on this browser" to store your schedule in your device’s local browser memory, or click "Download calendar reminder" to import an ICS file into Google Calendar, Apple Calendar, or Outlook.'
      },
      {
        question: 'What happens if my pumping window is overdue?',
        answer: 'An overdue status means your planned maintenance window has passed. It does not necessarily mean your system has failed, but scheduling an inspection to measure solids depth is strongly recommended.'
      },
      {
        question: 'How often should an aerobic treatment unit (ATU) be serviced?',
        answer: 'Aerobic systems contain mechanical blowers, aerators, and disinfection units that require professional inspection every 6 to 12 months, usually under a mandatory maintenance contract.'
      }
    ],
    related: [
      { href: '/maintenance', label: 'Septic maintenance checklist & care plan' },
      { href: '/my-septic-schedule', label: 'View and manage your saved septic schedule' },
      { href: '/tools/septic-pumping-cost-calculator', label: 'Calculate septic pumping costs' },
      { href: '/problems', label: 'Recognize septic warning signs' }
    ]
  },
  'septic-pumping-cost-calculator': {
    sections: [
      {
        title: 'How much does septic tank pumping cost? Real quote calculator',
        paragraphs: [
          'Septic tank pumping typically costs between $350 and $650 for a standard 1,000-gallon residential tank, but actual prices vary considerably based on local labor rates, municipal waste dumping fees, and how easily your tank can be accessed.',
          'This calculator is designed to total your actual written contractor quotes and itemized fee schedules. Unlike generic online estimators that invent unverified regional averages, this tool allows you to plug in your pumper’s specific line items—base pumping, lid digging charges, dumping fees, extra hose runs, emergency surcharges, and sales tax—to see your true out-of-pocket cost.'
        ]
      },
      {
        title: 'Itemized septic pumping quote example & cost breakdown',
        paragraphs: [
          'A professional septic pumper’s written estimate typically includes several distinct line items. Here is an illustrative walkthrough of common charges:',
          '• Base Pumping Fee ($350 – $550): Covers the truck trip, driver/technician labor, and pumping and hauling up to 1,000 gallons of septage with accessible surface lids.',
          '• Lid Locating & Digging Fee ($50 – $175): Billed if your septic tank lids are buried underground and the crew must locate and excavate dirt to reach the access covers.',
          '• Waste Disposal / Environmental Fee ($40 – $120): Passed on from municipal wastewater treatment facilities or licensed septage receiving stations that charge pumpers by the gallon or load to treat hauled waste.',
          '• Extended Hose Surcharge ($50 – $100): Applied if the pumping truck cannot park within 50 to 100 feet of the tank, requiring extra vacuum hose sections.',
          '• Effluent Filter Inspection & Rinsing ($25 – $50): Often included with pumping, but some contractors list it as an optional line item.',
          '• Emergency / Weekend Surcharge ($150 – $350): Added for same-day emergency calls, weekend service, or holiday dispatch.',
          '• State / County Sales Tax (0% – 10%): Applied to labor and services depending on state and municipal tax rules.'
        ],
        steps: [
          'Enter the base pumping price from your written contractor quote.',
          'Add any access, locating, or manual digging fees.',
          'Add municipal septage disposal, environmental, or hauling fees.',
          'Include an emergency or weekend surcharge if booking urgent service.',
          'Enter your local sales tax rate (or leave at 0% if waste pumping services are tax-exempt in your state).'
        ]
      },
      {
        title: 'Common extra charges and hidden fees to ask about',
        paragraphs: [
          'Before booking a septic pumper, ask for an itemized written quote to avoid unexpected surprises on invoice day:',
          '• Ask if the quote covers both compartments: Modern septic tanks have two chambers separated by a dividing wall. Pumping only the primary chamber leaves accumulated solids in the secondary chamber.',
          '• Ask if crust agitation / back-flushing is included: Heavy sludge and hardened scum blankets must be broken up with an agitator tool or back-flushed with effluent to ensure complete removal.',
          '• Inquire about per-gallon overage fees: If your tank is 1,250 or 1,500 gallons, confirm whether the base rate covers the full volume or if there is a surcharge (typically $0.25 to $0.45 per additional gallon).',
          '• Ask about effluent filter service: If your tank has an outlet filter, make sure the contractor pulls, inspects, and sprays it clean during the visit.'
        ]
      },
      {
        title: 'Questions to ask before hiring a septic pumping contractor',
        paragraphs: [
          'Always verify that your septic pumping company is licensed, bonded, and insured with your county or state environmental health department. Ask whether they provide a written service report or disposal manifest detailing gallons pumped, tank structural condition, baffle integrity, and recommended next inspection date.',
          'Never hire a contractor who suggests leaving sludge at the bottom to "seed" the bacteria. Complete removal of settled solids and scum is the entire purpose of pumping. Natural bacteria re-establish within days of normal household water use.'
        ]
      }
    ],
    faqs: [
      {
        question: 'How much does it cost to pump a 1,000-gallon septic tank?',
        answer: 'Nationwide in the US, pumping a 1,000-gallon septic tank typically costs between $350 and $600 for routine service with accessible lids. Costs can rise to $700 or more if lids must be excavated from deep soil, if extra hose is required, or if the call is booked as an after-hours emergency.'
      },
      {
        question: 'Why do septic pumpers charge extra for digging or locating lids?',
        answer: 'Uncovering buried septic lids requires physical manual labor, probing, or electronic locating equipment. Installing permanent septic risers with secure, flush-to-ground lids eliminates future digging fees.'
      },
      {
        question: 'How does the sales tax calculation work in this tool?',
        answer: 'The calculator applies your entered tax rate to the full subtotal. If only parts of the service (such as equipment parts or disposal) are taxable in your state, enter 0% in the tax field and add the quoted tax amount directly as a fee line item.'
      },
      {
        question: 'Is septic tank pumping covered by homeowners insurance?',
        answer: 'No. Standard homeowners insurance policies consider septic tank pumping routine preventive home maintenance and exclude it from coverage. Insurance may only assist with sudden, accidental damage from external perils (such as a vehicle crushing a pipe), subject to your policy terms.'
      },
      {
        question: 'What fees are often excluded from cheap advertised prices?',
        answer: 'Low teaser rates (e.g., "$199 special") often exclude municipal waste disposal fees, extra gallonage over 500 or 750 gallons, digging fees, effluent filter cleaning, and sales tax. Always ask for the complete "out-the-door" price.'
      }
    ],
    related: [
      { href: '/guides/septic-tank-pumping-cost', label: 'Complete septic tank pumping cost guide' },
      { href: '/maintenance', label: 'How often should you pump your septic tank?' },
      { href: '/tools/septic-pumping-frequency-calculator', label: 'Calculate your next pumping service window' },
      { href: '/guides/septic-drain-field-replacement-cost', label: 'Compare drain field replacement costs' }
    ]
  },
  'septic-troubleshooter': {
    sections: [
      {
        title: 'What is wrong with my septic system? Symptom checklist',
        paragraphs: [
          'Septic issues usually present clear warning signs before catastrophic system failure occurs: foul odors indoors or outdoors, gurgling plumbing, slow drains in multiple fixtures, sewage backups into basements or showers, soggy soil over the leach field, or an audible pump alarm.',
          'The first step is identifying the exact symptoms and where they occur. An issue affecting a single sink is typically an isolated plumbing clog, whereas simultaneous backups across lower-level fixtures point to a main line blockage, full septic tank, or failing drain field.',
          'If raw wastewater is backing up indoors or surfacing on the lawn, treat it as an urgent biohazard: stop running water, keep children and pets away, and call a licensed septic professional immediately.'
        ]
      },
      {
        title: 'How to use the septic troubleshooter',
        paragraphs: [
          'Select your primary observed symptom, indicate whether any indoor backup or outdoor sewage pooling is occurring, and note recent heavy rain or storms. The tool assigns an urgency rating and outlines safe diagnostic observations to share with your service contractor.'
        ],
        steps: [
          'Choose your primary symptom: Alarm, Backup, Odor, Slow drains, Wet yard, or Gurgling.',
          'Check the box if raw sewage is backing up inside or surfacing outside.',
          'Indicate if your symptoms began during or immediately after heavy rain.',
          'Review the recommended urgency level and safe observations.',
          'Contact your licensed septic contractor with the organized details.'
        ]
      },
      {
        title: 'Septic tank smells: Indoor vs outdoor odor causes',
        paragraphs: [
          'A sewage or rotten-egg odor does not automatically mean your drain field has failed. The location of the odor provides crucial diagnostic clues:',
          '• Indoor smells: Often caused by a dry plumbing P-trap (common in unused guest bathrooms), a dried-out or failed wax ring seal under a toilet, or a plumbing vent pipe clogged by leaves or snow on the roof.',
          '• Outdoor smells near tank: Often caused by loose or unsealed tank access lids or inspection caps. If accompanied by gurgling or slow drains, it may indicate a full tank or clogged effluent filter.',
          '• Outdoor smells over drain field: May indicate effluent surfacing due to biomat buildup, saturated soil, or crushed distribution piping.'
        ]
      },
      {
        title: 'Septic problems after heavy rain or flooding',
        paragraphs: [
          'Heavy rain saturates the soil in your drain field, temporarily eliminating its capacity to absorb effluent. When the field cannot absorb water, wastewater backs up into the tank and house drains. Surface runoff may also enter the tank through unsealed lids or inspection ports.',
          'CRITICAL SAFETY WARNING: Do NOT pump your septic tank while the ground surrounding the system is flooded or heavily saturated. An empty tank buried in saturated soil can act like a boat hull—hydrostatic groundwater pressure can float the tank out of the ground, snapping inlet and outlet pipes and causing catastrophic structural damage. Wait until floodwaters recede and ground dries before pumping.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Can this troubleshooter diagnose whether my drain field has failed?',
        answer: 'The troubleshooter provides initial symptom triage and next-step safety advice. A definitive diagnosis of drain field failure requires an on-site physical evaluation by a licensed septic contractor or soil specialist.'
      },
      {
        question: 'What should I do immediately if sewage backs up into my house?',
        answer: 'Immediately stop using all water fixtures (toilets, showers, washing machine). Avoid all physical contact with wastewater. Keep children and pets away, and contact a licensed septic emergency contractor and remediation professional.'
      },
      {
        question: 'Why does my toilet gurgle when the washing machine drains?',
        answer: 'Gurgling occurs when air is trapped or pulled through plumbing traps due to negative pressure or downstream restrictions. Common causes include a blocked plumbing vent pipe, a full septic tank, or a restriction in the main sewer line.'
      },
      {
        question: 'Should I pump my septic tank if the high-water alarm is going off?',
        answer: 'Contact your septic maintenance provider first. An alarm indicates high water in the pump chamber, often caused by a tripped breaker, failed float switch, or burned-out pump. Emergency pumping may temporarily lower liquid levels, but the mechanical or electrical fault must be diagnosed and repaired.'
      }
    ],
    related: [
      { href: '/problems', label: 'Read the full septic problems and troubleshooting guide' },
      { href: '/guides/septic-tank-alarm-going-off', label: 'What to do when your septic alarm sounds' },
      { href: '/guides/clogged-septic-drain-field', label: 'Signs and causes of a clogged drain field' },
      { href: '/guides/how-to-fix-septic-drain-field', label: 'Drain field repair options and costs' }
    ]
  }
};
