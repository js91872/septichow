export type FAQ = { question: string; answer: string };
export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  steps?: string[];
  table?: { headers: string[]; rows: string[][] };
  links?: { href: string; label: string }[];
};
export type HomeownerArticle = {
  title: string;
  description: string;
  summary: string;
  keywords: string[];
  sourceIds: string[];
  sections: ArticleSection[];
  faqs: FAQ[];
  related: { href: string; label: string }[];
};

export const articles: Record<string, HomeownerArticle> = {
  'guides/how-to-fix-septic-drain-field': {
    title: "How to Fix a Septic Drain Field: Problems, Repair Options and Costs",
    description: "Learn the signs of septic drain field failure, what a technician checks, when repair might work and when replacement is necessary.",
    summary: "A failing septic drain field cannot be fixed with a single universal treatment. Reduce water use if wastewater backs up or surfaces, avoid the affected area and get a qualified septic professional to identify whether the problem involves a pipe, distribution box, pump, overloaded soil or the field itself.",
    keywords: ["fix septic drain field", "how to fix a septic drain field", "septic drain field repair", "drain field failure symptoms", "leach field repair"],
    sourceIds: ["epa-failure", "epa-works", "epa-care"],
    sections: [
      {
        id: "warning-signs",
        title: "Signs your septic drain field may be failing",
        paragraphs: [
          "Sewage pooling or surfacing above the field, foul odors, repeated backups and chronically slow drains can be warning signs. A wet patch after rain alone does not prove failure, but wastewater surfacing is a reason to keep people and pets away.",
          "Note where and when symptoms occur, recent rain and whether multiple fixtures are affected. Do not drive or dig over the treatment area while the cause is being evaluated."
        ]
      },
      {
        id: "check-first",
        title: "What a septic professional should check first",
        paragraphs: [
          "An evaluation may start with service history, tank levels, baffles, effluent filter, pumps and the distribution components. A blocked line or failed pump can resemble field failure, so diagnosis matters before authorizing replacement.",
          "Ask for findings in writing: which components were inspected, what evidence supports the diagnosis and whether further tests or permits are required."
        ]
      },
      {
        id: "repair-options",
        title: "Can a septic drain field be repaired?",
        paragraphs: [
          "A contractor might repair damaged piping, correct distribution problems or service a failed pump when the soil treatment area remains functional. Actual soil absorption failure may require an engineered solution or replacement, depending on site conditions and local regulations.",
          "Be wary of products that promise to restore every failed leach field. Chemical treatments and unverified DIY methods are not a substitute for evaluating soil, hydraulics and equipment."
        ]
      },
      {
        id: "repair-vs-replace",
        title: "Drain field repair versus replacement",
        paragraphs: [
          "A targeted repair addresses a verified fault, such as a broken line. Replacement may be needed when suitable soil treatment capacity is no longer available. Cost depends on excavation, soil testing, property access, system type, permits and the replacement area.",
          "Obtain an itemized written proposal and confirm local permitting before work begins. A cheaper quote is not necessarily comparable if it excludes design, inspection or restoration."
        ],
        table: {
          headers: ["Situation", "Possible professional response"],
          rows: [
            ["Blocked or broken pipe", "Inspect and repair the affected section"],
            ["Distribution box problem", "Inspect and correct flow distribution"],
            ["Pump or electrical fault", "Qualified equipment service"],
            ["Soil absorption failure", "Site evaluation and possible replacement"]
          ]
        }
      },
      {
        id: "what-homeowners-can-do",
        title: "Safe steps while you arrange service",
        paragraphs: [
          "Minimize laundry and other unnecessary water use when the system is struggling. Keep surface runoff away from the area only through approved drainage arrangements; do not redirect wastewater or excavate the field yourself.",
          "Take photos from a safe distance and collect previous pumping and inspection reports. If sewage reaches the house or ground surface, seek prompt professional help."
        ]
      },
      {
        id: "further-guidance",
        title: "How contractors identify the correct repair",
        paragraphs: [
          "A professional should review the system plans, pumping history, household water use and site conditions before deciding that the soil treatment area has failed. Accessible filters, pipes, pumps and distribution devices may need inspection. A correctable component problem can look like field failure from the house.",
          "Ask for written findings that explain the proposed repair, which alternatives were ruled out and whether permits are required. Avoid products promising guaranteed drain field restoration. Keep vehicles and construction equipment away from the field until the issue is assessed."
        ]
      },
      {
        id: "deep-dive-1",
        title: "Repair options depend on what failed",
        paragraphs: [
          "A cracked or displaced pipe may be repairable without replacing the entire treatment area. A clogged outlet filter, malfunctioning pump or distribution box could also produce symptoms attributed to the field. When the soil itself can no longer accept effluent, a permitted replacement or alternative treatment design may be necessary.",
          "The distinction is important: paying to pump the tank repeatedly will not permanently correct a broken distribution component or unsuitable soil. Ask for evidence behind a proposed repair rather than buying a generic drain field cleaning product."
        ]
      },
      {
        id: "deep-dive-2",
        title: "What makes a replacement necessary",
        paragraphs: [
          "The feasibility of rebuilding a field depends on the approved design, remaining space, groundwater, slopes, setbacks and soil properties. Some sites require engineered treatment options rather than repeating the original layout. Local authorities determine acceptable methods, so internet diagrams are not installation instructions.",
          "Before major excavation, ask whether a site evaluation and permit are needed, how long approval may take and what temporary restrictions apply. A professional quote should distinguish evaluation, construction and restoration."
        ]
      },
      {
        id: "deep-dive-3",
        title: "Preventing another failure",
        paragraphs: [
          "Spread water-intensive chores when practical and repair leaking toilets or faucets promptly. Keep structures, heavy vehicles and stored material off the field and any reserved replacement area. Protect surface drainage so roof and driveway runoff does not concentrate over the treatment soil.",
          "Schedule inspections and tank pumping based on actual system requirements and provider guidance. Keep a simple service history including dates, invoices, photographs and any changes to household occupancy or yard layout."
        ]
      },
      {
        id: "drain-field-diagnosis-checklist",
        title: "Drain field repair checklist: what to ask before paying",
        paragraphs: [
          "If you searched for drain field repair, septic drain field help or leach field repair, begin with a diagnosis rather than a treatment product. Write down whether the trouble began after heavy rain, whether several drains are slow, whether an alarm is sounding and when the tank was last inspected.",
          "Ask the licensed septic professional to distinguish a tank outlet or filter problem, pump failure, broken distribution pipe and actual soil absorption failure. Request photos or test findings, a written repair scope, permit requirements and a separate price for any recommended replacement. Do not enter a septic tank or open buried components yourself."
        ],
        table: {
          headers: ["What you notice", "What to ask the professional"],
          rows: [
            ["Sewage backing up indoors", "Is the tank, outlet, line or downstream field restricting flow?"],
            ["Wet or unusually green patch", "Is wastewater surfacing, or could rain and drainage explain it?"],
            ["Pump or high-water alarm", "Have the pump, floats, power supply and discharge line been checked?"],
            ["Repeated problems after pumping", "What evidence confirms the field needs repair or replacement?"]
          ]
        },
        links: [
          { href: "/guides/septic-drain-field-replacement-cost", label: "Compare drain field replacement costs" },
          { href: "/tools/septic-troubleshooter", label: "Check septic symptoms step by step" }
        ]
      }
    ],
    faqs: [
      { question: "Can pumping fix a failed drain field?", answer: "Pumping removes tank solids and may buy temporary time, but it does not by itself restore soil absorption capacity or repair buried distribution faults." },
      { question: "Can I unclog a drain field myself?", answer: "Avoid digging, pressure-jetting or adding chemicals to buried field lines yourself. Have a professional diagnose the actual restriction and local requirements." },
      { question: "How long does repair take?", answer: "It depends on diagnosis, weather, permits, access and whether the work is a component repair or full replacement. Get a written work plan." }
    ],
    related: [
      { href: "/problems", label: "Check common septic problems" },
      { href: "/guides/septic-drain-field-replacement-cost", label: "Compare drain field replacement cost factors" },
      { href: "/tools/septic-troubleshooter", label: "Use the septic troubleshooter" }
    ]
  },

  'guides/septic-drain-field-replacement-cost': {
    title: "Septic Drain Field Replacement Cost: Repair vs Replace Guide",
    description: "Understand drain field replacement costs ($5,000–$20,000+), component repairs ($1,000–$3,500), soil testing, permits and contractor quotes.",
    summary: "The cost to replace a septic drain field depends heavily on soil conditions, system type, permits, excavation and site access. Do not treat a national average as a quote. Ask for a site evaluation and compare itemized local proposals that clearly separate minor component repair from full absorption field replacement.",
    keywords: ["replace septic drain field cost", "septic drain field replacement cost", "septic drain field repair cost", "cost of new septic drain field", "leach field replacement cost"],
    sourceIds: ["epa-failure", "epa-types", "epa-faq"],
    sections: [
      {
        id: "what-you-pay-for",
        title: "How much does a drain field replacement cost?",
        paragraphs: [
          "In the United States, replacing a residential septic drain field typically costs between $5,000 and $15,000 for a conventional gravity trench or plastic chamber system. If challenging soil conditions, shallow bedrock, or high groundwater require an engineered mound system or pressure-dosed sand filter, costs often range from $12,000 to $25,000 or more.",
          "In contrast, localized component repairs—such as replacing a cracked distribution box, clearing a crushed pipe section, or installing an effluent filter—usually cost between $1,000 and $3,500. This is why obtaining an accurate diagnostic inspection before approving a total replacement is essential."
        ]
      },
      {
        id: "main-factors",
        title: "Seven factors that drive drain field replacement costs",
        paragraphs: [
          "A replacement quote is driven by site geography and health code standards rather than just pipe materials. An online estimator cannot see your yard's slope, soil percolation rate, or distance to local water bodies.",
          "The major line items that determine the final contractor bill include:"
        ],
        table: {
          headers: ["Cost factor", "Typical price range", "Why it matters"],
          rows: [
            ["Soil testing & perc test", "$400 – $1,500", "Determines soil absorption rate and legally approved design"],
            ["Engineered site design", "$600 – $2,000", "Required by health departments for non-standard systems"],
            ["County permits & inspections", "$250 – $1,200", "Mandatory regulatory review and sign-off"],
            ["Excavation & site prep", "$1,500 – $4,500", "Clearing vegetation, digging trenches, hauling heavy equipment"],
            ["Piping, chambers & gravel", "$2,500 – $7,500", "Distribution media (perforated pipe & gravel or plastic chambers)"],
            ["Distribution box & valves", "$500 – $1,200", "Distributes effluent evenly among trench lines"],
            ["Final backfill & yard grading", "$1,000 – $2,500", "Covering system, establishing positive runoff, reseeding grass"]
          ]
        }
      },
      {
        id: "repair-or-replace",
        title: "Can you repair the existing drain field instead?",
        paragraphs: [
          "Before committing to a multi-thousand-dollar replacement, ask the technician to confirm whether the soil absorption area has failed or if an upstream component is causing the issue. A blocked outlet baffle, clogged effluent filter, or failed effluent pump can cause identical backups.",
          "If the soil itself has become clogged by biomat (a dense organic slime layer caused by years of grease and solids escaping the tank), physical resting or shock aeration may sometimes restore marginal flow, but heavily saturated or hydraulically compacted soil typically requires a permitted replacement."
        ],
        table: {
          headers: ["Symptom or fault", "Likely solution", "Typical scope"],
          rows: [
            ["Broken pipe from vehicle weight", "Targeted pipe repair", "$800 – $2,000"],
            ["Tilted or rotted distribution box", "D-box replacement with levelers", "$1,000 – $2,500"],
            ["Clogged effluent filter", "Remove and spray clean filter", "$0 (DIY) – $150"],
            ["Burned-out dosing pump", "Pump and float replacement", "$1,200 – $2,800"],
            ["Biomat-clogged soil trenches", "Full field replacement in reserve area", "$6,000 – $20,000+"]
          ]
        }
      },
      {
        id: "compare-quotes",
        title: "How to compare two contractor replacement quotes",
        paragraphs: [
          "When comparing contractor bids, make sure both proposals are based on the same approved county design. A lower headline quote often omits essential items such as permit fees, soil testing, utility line marking, tree stump removal, or final lawn restoration.",
          "Require contractors to specify whether they are installing traditional gravel-and-pipe trenches or proprietary plastic chambers (such as Infiltrator chambers), which can reduce trench length requirements by 25% to 40% in many jurisdictions."
        ]
      },
      {
        id: "timeline-permitting",
        title: "Typical drain field replacement timeline & permitting",
        paragraphs: [
          "A full drain field replacement is not an overnight project. The entire process typically takes between 2 to 6 weeks from initial site evaluation to final county sign-off.",
          "The process begins with a certified soil scientist or sanitarian performing a percolation (perc) test or deep soil borings to determine soil depth, seasonal high water table, and permeability. Next, an engineered site plan is submitted to your local public health or environmental agency.",
          "Once the permit is granted, physical excavation and installation usually take 2 to 4 days, depending on weather and equipment access. The health inspector conducts an open-trench inspection before backfilling is permitted. Knowing this timeline helps homeowners plan temporary water conservation measures or alternative living arrangements while excavation is underway."
        ]
      },
      {
        id: "after-installation",
        title: "How to protect your new drain field investment",
        paragraphs: [
          "Once your new drain field is installed, protecting it requires strict adherence to simple habits: never drive, park, or place heavy structures (sheds, pools, driveways) over the field. Compacted soil permanently ruins percolation capacity.",
          "Divert all gutter downspouts and surface runoff away from the absorption trenches, plant only grass over the lines, and pump your septic tank every 3 to 5 years to keep solids from damaging the new soil."
        ]
      }
    ],
    faqs: [
      { question: "Is drain field repair cheaper than replacement?", answer: "Yes. Targeted repairs to broken pipes, distribution boxes, or pumps typically cost $1,000 to $3,500, whereas complete replacement of the absorption area ranges from $5,000 to $20,000+." },
      { question: "Does homeowners insurance cover septic drain field replacement?", answer: "Standard policies generally exclude wear-and-tear, age, and biomat clogging. Coverage is occasionally available if sudden, accidental external physical damage occurred (e.g., an unauthorized vehicle crushing a pipe), subject to your policy terms." },
      { question: "Can a new drain field be installed in the exact same spot?", answer: "Generally no, unless the old contaminated soil and gravel are completely excavated and replaced with clean fill under an approved engineering variance. Most county health codes require the new field to be installed in the designated 'reserve area' on the property." }
    ],
    related: [
      { href: "/guides/how-to-fix-septic-drain-field", label: "Understand drain field repair options" },
      { href: "/guides/septic-system-installation-cost", label: "Compare complete septic system installation costs" },
      { href: "/tools/septic-pumping-cost-calculator", label: "Calculate septic pumping quotes" }
    ]
  },

  'guides/septic-inspection-cost': {
    title: "Septic Inspection Cost: What It Costs, Scope & Buyer Guide",
    description: "Learn what affects septic inspection cost ($200–$900), the difference between visual and Level 2 inspections, homebuyer contingencies and who pays.",
    summary: "Septic inspection prices typically range from $200 to $450 for a routine maintenance check, and $400 to $900 for a comprehensive real estate transfer inspection. Video camera line scoping or load tests can add $250 to $500. Always demand a written report detailing what was and was not inspected.",
    keywords: ["septic inspection cost", "how much does a septic inspection cost", "well and septic inspection cost", "septic inspection before buying house", "septic camera inspection cost"],
    sourceIds: ["epa-care", "epa-faq", "psu-buying"],
    sections: [
      {
        id: "inspection-types",
        title: "Visual check vs comprehensive Level 2 septic inspection",
        paragraphs: [
          "When budgeting for an inspection, you must understand the distinction between a basic visual check and a comprehensive professional septic evaluation. A standard home inspector often only flushes a toilet and walks the yard looking for standing puddles. This visual-only check does NOT verify the health of the underground tank, baffles, or absorption field.",
          "A comprehensive septic inspection (often called a Level 2 or real estate transfer inspection) is conducted by a licensed septic contractor. The inspector uncovers access lids, measures accumulated sludge and scum depths, inspects the structural integrity of the concrete or poly tank, checks that baffles and filters are intact, and conducts a continuous hydraulic load test on the drain field."
        ],
        table: {
          headers: ["Inspection tier", "Typical cost", "Scope & checks performed", "Recommended use"],
          rows: [
            ["Visual / Walkthrough", "$150 – $300", "Checks fixture drainage, walks lawn for odors or wet spots", "Routine checkup between service cycles"],
            ["Comprehensive / Level 2", "$400 – $800", "Opens lids, measures solids, inspects baffles & load test", "Buying or selling a home, persistent alarms"],
            ["Camera Pipe Scope", "$250 – $500", "Feeds fiber-optic camera down main sewer line to tank", "Older homes, suspected root invasion, bellies"],
            ["Combined Well & Septic", "$550 – $1,100", "Inspects septic system plus well pump, pressure tank & water purity", "Rural home purchase real estate contingency"]
          ]
        }
      },
      {
        id: "cost-factors",
        title: "What factors change the septic inspection price?",
        paragraphs: [
          "Inspection fees vary based on tank accessibility, system design, and required laboratory tests. Key price drivers include:",
          "• Buried lids & manual digging: If the septic tank lids are buried 1 to 3 feet below the lawn, contractors charge $50 to $200 for electronic locating and manual excavation.",
          "• Mandatory pumping during inspection: Many county health departments and mortgage lenders require the tank to be pumped dry during the inspection so the inspector can examine the bottom and walls for cracks or ground water infiltration. Pumping adds $350 to $600 to the bill.",
          "• Alternative or engineered systems: Aerobic units, mound systems, and drip irrigation systems have electrical control panels, air compressors, and effluent pumps that take longer to test."
        ]
      },
      {
        id: "buyers-sellers",
        title: "Septic inspection before buying a house: The buyer's checklist",
        paragraphs: [
          "If you are buying a home with a septic system, never waive the dedicated septic inspection contingency. Replacing a failed drain field or cracked tank can cost $10,000 to $25,000 immediately after closing.",
          "Before the inspection, demand that the seller provide the original county installation permit, the as-built diagram showing the exact location of the tank and drain field, and at least 3 to 5 years of pumping receipts. If the seller cannot prove when the tank was last pumped, treat that as a red flag."
        ],
        bullets: [
          "Verify the system is legally permitted for the number of bedrooms listed on the MLS.",
          "Require a hydraulic load test to verify the drain field accepts water under sustained flow.",
          "Ensure both tank compartments and the distribution box are opened and inspected.",
          "Ask for video camera scoping of the main sewer line if mature trees grow between the house and tank.",
          "Confirm the existence of an approved, undisturbed reserve drain field area on the property drawing."
        ]
      },
      {
        id: "who-pays",
        title: "Who pays for a septic inspection: Buyer or seller?",
        paragraphs: [
          "In most standard real estate transactions, the buyer hires and pays for the independent septic inspector to ensure an unbiased assessment. However, who pays is negotiable in the purchase contract.",
          "If the inspection reveals significant defects (such as deteriorated baffles, roots in the line, or drain field saturation), the buyer can use the written report to negotiate seller-paid repairs, an escrow holdback, or a reduction in purchase price prior to closing."
        ]
      },
      {
        id: "report",
        title: "What a certified septic inspection report should include",
        paragraphs: [
          "A valid inspection report should clearly list: tank capacity, material, operating liquid level, measured sludge and scum depths, physical condition of inlet and outlet baffles, effluent filter status, pump and float operation, distribution box condition, and drain field observations.",
          "The report must clearly distinguish confirmed component defects from temporary conditions or limitations (such as frozen ground or inaccessible buried components). Keep this document in your permanent home records."
        ]
      }
    ],
    faqs: [
      { question: "Is a septic inspection included in a standard home inspection?", answer: "No. Standard home inspectors perform only a basic visual check of plumbing fixtures. You must hire a licensed septic inspector or certified wastewater specialist for a true evaluation." },
      { question: "Do you have to pump the tank for an inspection?", answer: "Many lenders and comprehensive inspection standards require pumping so the inspector can examine the interior tank walls and floor for cracks, root intrusion, or groundwater infiltration." },
      { question: "How long does a thorough septic inspection take?", answer: "A comprehensive inspection typically takes 1.5 to 3 hours, depending on whether lids need excavation, whether a hydraulic load test is performed, and system complexity." }
    ],
    related: [
      { href: "/maintenance", label: "Review regular septic maintenance plans" },
      { href: "/guides/signs-septic-tank-is-full", label: "7 warning signs a septic tank needs attention" },
      { href: "/guides/how-septic-system-works", label: "Learn the parts of a septic system" }
    ]
  },

  'guides/septic-tank-alarm-going-off': {
    title: "Septic Tank Alarm Going Off? Immediate Steps, Causes & Fixes",
    description: "Why is your septic alarm buzzing or flashing red? Immediate steps to stop water, how to silence it safely, heavy rain causes and pump troubleshooting.",
    summary: "A septic high-water alarm sounds when liquid in the pump chamber exceeds its normal operating level. Cut household water use immediately, silence the exterior buzzer, and do NOT flip off the circuit breaker if it powers the pump. Call your service provider for diagnostic assistance.",
    keywords: ["septic tank alarm went off", "septic tank alarm troubleshooting", "septic tank alarm going off after rain", "how to silence septic alarm", "septic high water alarm"],
    sourceIds: ["epa-types", "epa-failure", "epa-care", "clemson-rain"],
    sections: [
      {
        id: "first-steps",
        title: "What to do right now when your septic alarm sounds",
        paragraphs: [
          "When a septic alarm begins buzzing or flashing a red beacon, your pump chamber has reached a high-water condition. Wastewater is entering the chamber faster than the pump is removing it, or the pump has stopped working entirely.",
          "Take these immediate steps:"
        ],
        bullets: [
          "Stop all non-essential water use immediately: pause laundry, stop dishwashers, take quick sponge baths, and avoid flushing toilets unnecessarily.",
          "Silence the audible buzzer: Go to the exterior control panel and press the 'Silence' or 'Acknowledge' button on the outside of the box. This mutes the horn while leaving the red warning light illuminated.",
          "DO NOT turn off the main circuit breaker if the breaker supplies power to the pump itself. Shutting off the breaker prevents the pump from running if it recovers.",
          "Check lowest household fixtures: Inspect basement floor drains, utility sinks, and ground-floor toilets for any sign of sluggishness or wastewater backup.",
          "Call your licensed septic service provider: Report the alarm, visible panel lights, and any recent heavy rain or high water use."
        ]
      },
      {
        id: "why-alarm",
        title: "Why did your septic high-water alarm trigger?",
        paragraphs: [
          "In a pumped or alternative septic system, wastewater flows from the primary settling tank into a secondary pump chamber. A series of float switches control pump operation. The alarm triggers when liquid reaches the top high-level float switch.",
          "Common mechanical, electrical, and hydraulic causes include:"
        ],
        table: {
          headers: ["Underlying cause", "Why it occurs", "Typical fix"],
          rows: [
            ["Tripped circuit breaker", "Electrical surge or pump motor overload", "Reset breaker once; if it trips again, call technician"],
            ["Tangled or failed float switch", "Grease buildup or mechanical switch failure", "Clean or replace the high-water or pump float"],
            ["Burned-out effluent pump", "Pump motor reached end-of-life (7–12 years)", "Replace submersible effluent pump"],
            ["Clogged effluent filter", "Solids blocked flow into the pump chamber", "Remove and rinse filter with garden hose"],
            ["Blocked discharge pipe", "Ice freeze-up, tree root crush, or closed check valve", "Clear or repair discharge force main"],
            ["Heavy rain / ground infiltration", "Stormwater flooding through unsealed lids", "Reduce water use until water table recedes"]
          ]
        }
      },
      {
        id: "rain",
        title: "Septic alarm going off after heavy rain or storms",
        paragraphs: [
          "During severe rainstorms or rapid snowmelt, ground surrounding the septic system becomes saturated. If stormwater seeps into unsealed riser lids, damaged electrical conduit, or inspection caps, hundreds of gallons of rainwater can flood the pump chamber in hours.",
          "CRITICAL SAFETY WARNING: Do NOT pump your septic tank while the yard is submerged or saturated with floodwater. An empty tank in saturated soil can act like a boat hull—hydrostatic groundwater pressure can literally pop the tank out of the ground, snapping underground pipes and destroying the system. Wait until floodwaters recede."
        ]
      },
      {
        id: "reset",
        title: "Can you keep using water while the alarm is silenced?",
        paragraphs: [
          "Most pump chambers have approximately 24 to 48 hours of emergency reserve storage capacity above the high-water float switch under normal, minimal water use. However, running a single load of laundry (30–45 gallons) or taking a long shower can completely exhaust that remaining reserve capacity and cause raw sewage to back up into your home.",
          "Limit water strictly to essential toilet flushes until the technician arrives to inspect the pump and controls."
        ]
      },
      {
        id: "safety",
        title: "Critical safety warnings: High voltage and toxic gas",
        paragraphs: [
          "Never open the interior electrical panel enclosure if you see bare wires, water pooling inside the box, or smelling burning plastic. Pump control panels carry 120V to 240V electricity that can deliver a fatal shock in damp outdoor conditions.",
          "Never remove secured tank covers or lean into the pump chamber. Septic tanks generate fatal concentrations of hydrogen sulfide and methane that can cause immediate unconsciousness."
        ]
      }
    ],
    faqs: [
      { question: "Can I use the toilet if my septic alarm is buzzing?", answer: "You can use the toilet for essential flushes, but eliminate all laundry, showers, and dishwasher runs until the pump is checked, as reserve tank capacity is limited." },
      { question: "Does a septic alarm mean the tank needs pumping?", answer: "Not necessarily. Alarms signal high water in the pump chamber, usually caused by a tripped breaker, stuck float, or failed pump. Emergency pumping lowers liquid temporarily, but the mechanical fault must still be fixed." },
      { question: "Why does the alarm keep sounding after I pressed reset?", answer: "Pressing silence only mutes the buzzer. The red warning light stays on and the buzzer may re-trigger after a timer cycle until the high water level drops below the float switch." }
    ],
    related: [
      { href: "/tools/septic-troubleshooter", label: "Check alarm and backup symptoms" },
      { href: "/guides/septic-tank-backing-up-after-rain", label: "Septic issues after heavy rain" },
      { href: "/problems", label: "Read general septic troubleshooting guidance" }
    ]
  },

  'guides/clogged-septic-drain-field': {
    title: "Clogged Septic Drain Field: Warning Signs, Causes & Solutions",
    description: "Learn how a clogged or failing septic drain field can appear, how it differs from a blocked pipe and what homeowners should do safely.",
    summary: "Slow drains, odors, backups and wet soil can point to a septic drain field problem, but the cause may also be a clogged house pipe, blocked outlet or pump failure. Avoid DIY chemicals and digging; a professional needs to identify the restriction and check the soil treatment area.",
    keywords: ["clogged septic drain field", "septic drain field clogged", "clogged leach field signs", "septic drain field failure", "unclog septic drain field"],
    sourceIds: ["epa-failure", "epa-works", "epa-care"],
    sections: [
      {
        id: "signs",
        title: "Signs a septic drain field may be clogged or overloaded",
        paragraphs: [
          "A clogged septic drain field (or leach field) cannot disperse treated effluent into the surrounding soil. When the soil trenches fill up with water, effluent backs up toward the tank and home.",
          "Common warning signs of a clogged absorption field include:"
        ],
        bullets: [
          "Multiple drains running slowly across different bathrooms, kitchens, and utility sinks simultaneously.",
          "Toilets gurgling when the washing machine drains or shower runs.",
          "Foul sewage odors hovering outdoors directly over the drain field lawn, especially on humid evenings.",
          "Patches of spongy, soggy ground or unusually bright green, fast-growing stripes of grass over the trenches.",
          "Black, foul-smelling wastewater pooling on the lawn surface during dry weather."
        ]
      },
      {
        id: "pipe-vs-field",
        title: "Is it a clogged sewer pipe, clogged filter, or failed drain field?",
        paragraphs: [
          "Before assuming your drain field has failed, have a licensed plumber or septic contractor isolate where the restriction is located. Many homeowners spend thousands on unnecessary drain field replacements when the real culprit was an inexpensive pipe clog."
        ],
        table: {
          headers: ["Observed symptom", "Probable restriction point", "How to confirm"],
          rows: [
            ["One sink or shower drains slowly", "Local branch drain pipe clog", "Plumbing snake or auger clears fixture line"],
            ["All fixtures back up into basement", "Main sewer line between house & tank", "Camera scope through main cleanout pipe"],
            ["High liquid in tank; house drains slow", "Clogged effluent outlet filter", "Pull and inspect filter at outlet tee"],
            ["One trench wet; others dry", "Distribution box unlevel or blocked", "Inspect D-box flow levelers"],
            ["All trenches ponded; foul odor", "Biomat clogging of soil absorption trenches", "Professional soil test and trench probe"]
          ]
        }
      },
      {
        id: "causes",
        title: "What causes a septic drain field to clog?",
        paragraphs: [
          "The most common cause of drain field failure is biomat buildup. Biomat is a naturally occurring anaerobic biological slime layer that forms on the bottom and sidewalls of absorption trenches. Under normal conditions, biomat helps filter pathogens.",
          "However, when homeowners neglect routine tank pumping, or when garbage disposals send excess organic matter down the drain, suspended solids and grease wash out into the field. This causes the biomat to grow excessively thick and waterproof, completely sealing soil pores."
        ]
      },
      {
        id: "avoid",
        title: "What NOT to pour into a clogged drain field (Chemical myths)",
        paragraphs: [
          "Never pour sulfuric acid, caustic lye, chemical solvents, or advertised 'miracle septic restorers' down your toilets. The EPA and state university extension programs warn that chemical additives do not restore soil porosity and can kill the beneficial bacteria breaking down waste in your tank.",
          "Furthermore, caustic chemicals can corrode concrete tank baffles, destroy plastic distribution pipes, and contaminate local groundwater drinking wells."
        ]
      },
      {
        id: "remediation",
        title: "Genuine professional repair and remediation options",
        paragraphs: [
          "If a licensed technician diagnoses a clogged drain field, several legitimate engineering solutions may be available:",
          "• Hydro-jetting distribution pipes: High-pressure water jetting clears silt, roots, and sludge from perforated pipes.",
          "• Terralift pneumatic soil fracturing: A specialized probe injects compressed air into the soil to fracture compacted hardpan and inject polystyrene beads to maintain porosity.",
          "• Installing an effluent filter: Catches fine particles before they reach the restored field.",
          "• Alternating trench resting: If your property has a dual-field layout with a diversion valve, resting the clogged field for 6 to 12 months allows oxygen to enter and aerobic bacteria to naturally digest the biomat.",
          "• Replacement field installation: If the soil has reached the end of its functional lifespan, a new absorption field in the designated reserve area is required."
        ]
      }
    ],
    faqs: [
      { question: "Can pumping a septic tank unclog the drain field?", answer: "No. Pumping removes solids from the septic tank, but it does not restore soil porosity or dissolve biomat already clogging the underground absorption trenches." },
      { question: "Will a clogged drain field dry out on its own?", answer: "Temporary surface moisture may dry during hot weather, but structural biomat clogging will cause wastewater to resurface as soon as normal household water use resumes." },
      { question: "How long does a septic drain field typically last?", answer: "A properly sized, well-maintained drain field typically lasts 20 to 30 years or more. Neglecting tank pumping or flushing non-biodegradable items can cause premature failure in under 10 years." }
    ],
    related: [
      { href: "/guides/how-to-fix-septic-drain-field", label: "Review drain field repair options" },
      { href: "/guides/septic-drain-field-replacement-cost", label: "Understand replacement cost factors" },
      { href: "/tools/septic-troubleshooter", label: "Evaluate symptoms with the troubleshooter" }
    ]
  },

  'guides/signs-septic-tank-is-full': {
    title: "How to Tell if Your Septic Tank Is Full: 7 Warning Signs",
    description: "Wondering if your septic tank is full? Check 7 warning signs, what is normal after pumping, and when to call a septic professional.",
    summary: "Slow drains in several rooms, gurgling, sewage odors, backups and wastewater surfacing can signal septic trouble. But a tank normally contains liquid, so 'full of water' alone does not mean it needs pumping. Keep people away from sewage and arrange professional help for backups or surfacing.",
    keywords: ["how to tell if septic tank is full", "how to tell septic tank full", "septic tank full signs", "signs septic tank needs pumping", "septic tank full or clogged", "septic tank full of water"],
    sourceIds: ["epa-care", "epa-failure", "epa-faq"],
    sections: [
      {
        id: "meaning-of-full",
        title: "What does a 'full' septic tank actually mean?",
        paragraphs: [
          "A septic tank is designed to hold liquid at all times up to its operating level (just below the invert of the outlet pipe). Seeing water in the tank does not mean it is overdue for pumping. When homeowners say 'my septic tank is full,' they usually mean that solid waste (sludge at the bottom and scum at the top) has accumulated to the point where wastewater retention time is severely compromised.",
          "A tank full of accumulated solids requires pumping to prevent sludge from washing into and destroying the drain field. Never open or lean into a tank to check levels yourself; toxic sewer gases are lethal."
        ]
      },
      {
        id: "seven-signs",
        title: "7 warning signs your septic tank needs attention",
        paragraphs: [
          "Look for these seven common warning signs across your property to determine whether a service call is warranted:"
        ],
        table: {
          headers: ["Warning sign", "What it indicates", "Recommended action"],
          rows: [
            ["1. Multiple drains running slowly", "Shared main line blockage or excessive solids in tank", "Record affected fixtures; schedule inspection"],
            ["2. Gurgling toilets and sink traps", "Air trapped in plumbing from restricted wastewater exit", "Check roof vent pipe and arrange septic check"],
            ["3. Wastewater backing up into showers", "Severe drainage restriction or flooded system", "Stop all water use immediately; call emergency service"],
            ["4. Rotten-egg sewage odors indoors", "Dry P-traps, faulty wax rings, or full system", "Pour water in floor traps; call pumper if persistent"],
            ["5. Sewage odors outside near tank/field", "Surfacing effluent, leaking lid, or saturated field", "Keep people/pets away; schedule professional evaluation"],
            ["6. Spongy, wet lawn over drain field", "Treated effluent unable to perk into saturated soil", "Do not drive over yard; arrange drain field check"],
            ["7. High-water alarm activation", "Pump failure or liquid level above high-water float", "Silence buzzer; cut water use; call technician"]
          ]
        },
        links: [{ href: "/tools/septic-troubleshooter", label: "Use the septic symptoms troubleshooter" }]
      },
      {
        id: "full-vs-clogged",
        title: "Is your septic tank full or is a pipe clogged?",
        paragraphs: [
          "If only a single sink or toilet drains slowly, the issue is almost certainly an isolated plumbing clog within that fixture's branch line. If multiple fixtures on the ground floor or basement back up simultaneously, the issue is downstream in the main building sewer, the tank, or the drain field."
        ]
      },
      {
        id: "after-pumping",
        title: "Why is my septic tank full of water again right after pumping?",
        paragraphs: [
          "Within 3 to 7 days of normal household water use, a freshly pumped septic tank naturally refills with liquid up to its operating level. That is completely normal. The key indicator of health is not liquid level, but whether effluent flows freely out the outlet pipe into the drain field without ponding."
        ]
      },
      {
        id: "what-not-to-do",
        title: "What NOT to do when you suspect a full septic tank",
        paragraphs: [
          "Never enter a septic tank. Even leaning over an open hatch can cause asphyxiation from toxic hydrogen sulfide or methane gases. Keep children and pets away from open risers.",
          "Never pour gallons of chemical drain openers, chlorine bleach, or solvents into the toilets to 'clear' the tank. Chemicals kill natural bacteria and compound the problem."
        ]
      }
    ],
    faqs: [
      { question: "What is the very first sign a septic tank is full?", answer: "Sluggish drainage in lower-level fixtures and faint gurgling sounds after flushing are often the earliest subtle warning signs of solids restricting flow." },
      { question: "Can a septic tank be full without backing up?", answer: "Yes. Sludge and scum layers can reach dangerous levels near the outlet baffle without causing a backup, which is why routine 3- to 5-year pumping is critical." },
      { question: "Is it safe to open the tank lid to look inside?", answer: "No. Opening tank lids exposes you to toxic gases and dangerous fall hazards. Leave lid access and inspections to licensed professionals." }
    ],
    related: [
      { href: "/tools/septic-troubleshooter", label: "Find the next step for septic problems" },
      { href: "/problems", label: "Read about septic odors, alarms and slow drains" },
      { href: "/maintenance", label: "Septic maintenance checklist and schedule" }
    ]
  },

  'guides/how-septic-system-works': {
    title: "How Does a Septic System Work? A Simple Homeowner Guide",
    description: "Learn how a septic tank and drain field work, where household wastewater goes, why tanks need pumping, and what to check when buying a home with septic.",
    summary: "A septic system treats wastewater on your property. The tank separates solids from liquid, and the drain field handles further treatment in the soil. Pumping removes the solids that build up over time.",
    keywords: ["how does a septic system work", "how does a septic tank work", "septic tank vs drain field", "buying a house with a septic tank", "septic system parts"],
    sourceIds: ["epa-works", "epa-types", "epa-faq"],
    sections: [
      {
        id: "the-basic-idea",
        title: "How does a septic system work in a house?",
        paragraphs: [
          "When you flush a toilet, run the washing machine, or take a shower, wastewater flows down your drains into a single main sewer line leading outside to your septic tank.",
          "A conventional onsite wastewater treatment system consists of two primary components: a watertight underground septic tank and a subsurface soil absorption area (drain field). The tank separates solids from liquid, while the soil provides biological treatment before purified water re-enters the groundwater table."
        ]
      },
      {
        id: "inside-the-tank",
        title: "What happens inside the septic tank?",
        paragraphs: [
          "Inside the tank, wastewater naturally separates by gravity into three distinct layers over a 24- to 48-hour settling period:",
          "• Sludge (Bottom layer): Heavy solid particles, human waste, and organic matter settle to the floor of the tank. Anaerobic bacteria digest some solids, but the remaining sludge must be pumped out periodically.",
          "• Scum (Top layer): Fats, oils, grease, and floating soap suds float to the surface, creating an airtight blanket that supports anaerobic bacterial breakdown.",
          "• Clarified Effluent (Middle layer): The relatively clear liquid between the scum and sludge layers exits the tank through the outlet tee and flows to the drain field."
        ]
      },
      {
        id: "parts-explained",
        title: "Septic system parts explained in plain English",
        paragraphs: [
          "Understanding your system layout helps you communicate clearly with service technicians and avoid costly landscaping mistakes:"
        ],
        table: {
          headers: ["Component", "Plain-English function", "Homeowner maintenance task"],
          rows: [
            ["House Sewer Pipe", "Transports wastewater from home to tank", "Keep non-flushables and grease out"],
            ["Septic Tank", "Separates sludge, scum, and effluent", "Pump every 3 to 5 years"],
            ["Inlet & Outlet Baffles", "Prevents floating scum from blocking pipes", "Inspect during every pumping service"],
            ["Effluent Filter", "Screens fine solids before liquid leaves tank", "Rinse with garden hose annually"],
            ["Risers & Secured Lids", "Provides ground-level service access", "Keep securely bolted and unobstructed"],
            ["Distribution Box (D-Box)", "Distributes effluent evenly to trenches", "Verify level flow during inspections"],
            ["Drain Field Trenches", "Perforated pipes in gravel or chambers", "Protect from vehicles and tree roots"]
          ]
        }
      },
      {
        id: "drain-field",
        title: "What is a septic drain field or leach field?",
        paragraphs: [
          "The drain field receives liquid effluent from the septic tank. In a conventional system, effluent trickles through perforated pipes into gravel trenches or plastic chambers and percolates downward into natural soil.",
          "Soil microbes, oxygen, and soil particles filter out harmful bacteria, viruses, and excessive nutrients before the purified water rejoins the groundwater table."
        ]
      },
      {
        id: "locating-system",
        title: "How to locate your underground septic tank and drain field",
        paragraphs: [
          "Many new homeowners have never seen their septic tank or drain field because all components are buried beneath lawn or mulch. Locating your system is essential before landscaping, building a fence, or scheduling service:",
          "• Obtain your county as-built diagram: Visit or contact your county environmental health department. Most jurisdictions maintain the original installation permit and site sketch showing exact distances from the foundation, well, and property lines.",
          "• Trace the main plumbing exit: Head down to your basement or crawl space to identify where the 3- to 4-inch main sewer pipe exits through the foundation wall. The septic tank is usually located 10 to 25 feet straight out from that exit point.",
          "• Look for ground clues: Look for slight depressions in the lawn, circular green grass rings, or green plastic or concrete riser lids flush with the lawn. During dry summer months, grass directly over the drain field trenches often stays greener than the rest of the lawn.",
          "• Use a soil probe rod: A professional contractor uses an insulated T-handle soil probe to gently tap into the soil until feeling the solid concrete or fiberglass lid roughly 12 to 36 inches deep."
        ]
      },
      {
        id: "homebuyer-tips",
        title: "Buying a house with a septic system: Essential rules",
        paragraphs: [
          "If you are purchasing a home with an onsite septic system, treat the septic system with the same scrutiny you would give the roof or foundation:",
          "• Never rely solely on a standard home inspection: General home inspectors typically only run water and confirm fixtures drain. Hire a licensed septic technician to open the lids, inspect baffles, measure sludge depths, and conduct a hydraulic flow test.",
          "• Demand proof of recent pumping: Require the seller to provide written pumping receipts from a licensed pumper within the past 12 months, or make professional pumping a condition of the sale.",
          "• Verify bedroom capacity matches marketing: In some listings, a home is advertised as having 4 or 5 bedrooms, but the county septic permit was only approved for a 3-bedroom design. Undersized systems are prone to early failure and costly legal complications."
        ]
      }
    ],
    faqs: [
      { question: "Does shower and laundry water go into the septic tank?", answer: "Yes. In standard residential systems, all household greywater (sinks, showers, laundry) and blackwater (toilets) discharge into the septic tank." },
      { question: "Does a septic tank empty itself?", answer: "Liquid effluent exits naturally into the drain field, but accumulated solid sludge and scum do not empty themselves and must be mechanically pumped out." },
      { question: "Can you pour bleach or drain cleaners down a septic system?", answer: "Normal, moderate household cleaning using diluted bleach is acceptable. However, avoid dumping concentrated chemicals, solvents, or chemical drain openers that kill beneficial tank bacteria." }
    ],
    related: [
      { href: "/maintenance", label: "Septic maintenance checklist and care plan" },
      { href: "/problems", label: "Troubleshoot smells, slow drains and alarms" },
      { href: "/tools/septic-tank-size-calculator", label: "Estimate required septic tank sizing" }
    ]
  },

  'maintenance': {
    title: "Septic Tank Maintenance Plan & Checklist: How Often to Pump",
    description: "Complete homeowner septic system maintenance plan. Practical inspection checklist, EPA 3–5 year pumping schedule, record-keeping guide and warning signs.",
    summary: "A reliable septic maintenance plan combines routine 3- to 5-year pumping with regular inspections, mindful water habits, and drain field protection. Never wait for sewage to back up before scheduling service.",
    keywords: ["septic maintenance plan", "septic system maintenance plan", "septic tank maintenance checklist", "how often to pump septic tank", "septic system maintenance schedule", "how to maintain a septic tank"],
    sourceIds: ["epa-care", "umn-care", "epa-faq", "purdue-filter"],
    sections: [
      {
        id: "pumping-frequency",
        title: "How often should you pump a septic tank? (EPA Sizing Matrix)",
        paragraphs: [
          "Under official U.S. Environmental Protection Agency (EPA) guidelines, standard residential septic tanks should be inspected by a professional every 1 to 3 years and pumped out every 3 to 5 years. However, your exact pumping frequency depends on tank capacity, total household occupants, water habits, and whether you use a garbage disposal.",
          "Use this EPA-aligned household pumping frequency planning matrix to estimate your recommended service interval:"
        ],
        table: {
          headers: ["Tank size (gal)", "1–2 occupants", "3–4 occupants", "5–6 occupants", "With garbage disposal"],
          rows: [
            ["1,000 gallons", "4.0 – 5.0 years", "2.5 – 3.5 years", "1.5 – 2.0 years", "1.5 – 2.5 years"],
            ["1,250 gallons", "4.5 – 5.0 years", "3.0 – 4.0 years", "2.0 – 2.5 years", "2.0 – 3.0 years"],
            ["1,500 gallons", "5.0 years", "3.5 – 4.5 years", "2.5 – 3.0 years", "2.5 – 3.5 years"]
          ]
        },
        links: [
          { href: "/tools/septic-pumping-frequency-calculator", label: "Calculate your exact service window" },
          { href: "/my-septic-schedule", label: "Save your maintenance schedule in browser" }
        ]
      },
      {
        id: "epa-solids-thresholds",
        title: "EPA 'Pump-Now' solids measurement thresholds",
        paragraphs: [
          "A licensed septic inspector does not guess when to pump based on a calendar date alone. Instead, they use specialized measuring tools (such as a 'Sludge Judge') to physically measure solid layers inside the tank. According to EPA and university extension standards, pump your tank immediately if:",
          "• The bottom of the floating scum layer is within 6 inches of the bottom of the outlet baffle or tee.",
          "• The top of the settled sludge layer is within 12 inches of the bottom of the outlet device.",
          "• The combined thickness of sludge and scum exceeds 25% to 33% of the total liquid operating depth.",
          "If an inspection reveals solids exceeding these thresholds, waiting for a calendar reminder risks sending solids into the drain field, which can cause thousands of dollars in permanent soil damage."
        ]
      },
      {
        id: "maintenance-checklist",
        title: "The homeowner's practical septic maintenance checklist",
        paragraphs: [
          "Follow this structured maintenance routine to protect your system from premature failure:"
        ],
        table: {
          headers: ["Cadence", "Homeowner task", "What to verify & record"],
          rows: [
            ["Everyday", "Practice strict flushing discipline", "Toilets: human waste and toilet paper only; zero wipes"],
            ["Weekly", "Spread out laundry wash loads", "Wash 1 load per day rather than 5 loads on one weekend day"],
            ["Monthly", "Inspect plumbing for silent leaks", "Check toilet flappers and faucets; verify drain field has no spongy spots"],
            ["Every 6–12 months", "Clean effluent filter", "Remove and spray clean filter with garden hose over open tank"],
            ["Every 1–3 years", "Professional septic inspection", "Measure sludge/scum; inspect baffles, pump, floats, and D-box"],
            ["Every 3–5 years", "Complete tank pump-out", "Retain disposal manifest, gallons pumped, and condition notes"]
          ]
        }
      },
      {
        id: "toilet-and-sink",
        title: "What can you flush with a septic tank? The golden rules",
        paragraphs: [
          "A septic tank is a biological ecosystem. Beneficial bacteria digest organic human waste, but synthetic materials, non-biodegradable items, and harsh chemicals do not break down and quickly fill the tank or clog the drain field.",
          "Post these simple rules for family members and guests:"
        ],
        bullets: [
          "NEVER flush wipes: 'Flushable' wipes do NOT disintegrate in septic tanks. They form dense synthetic mats that jam pumps and clog filters.",
          "Keep trash out: Paper towels, facial tissues, feminine hygiene products, cotton swabs, condoms, dental floss, diapers, and cigarette butts belong in the trash can.",
          "Never pour cooking grease down the sink: Fats, oils, and grease (FOG) solidify in the tank, expand the scum layer, and can wash into the drain field.",
          "Avoid excessive harsh cleaners: Concentrated bleach, chemical drain openers, paint thinners, and antibacterial soaps kill beneficial bacteria."
        ]
      },
      {
        id: "water-and-laundry",
        title: "Water efficiency, laundry habits, and hydraulic overload",
        paragraphs: [
          "Hydraulic overload occurs when excessive water rushes through the tank too quickly. When this happens, wastewater does not remain in the tank long enough for solids to settle by gravity. Unsettled solids wash straight out the outlet into the drain field, sealing soil pores.",
          "Install low-flow showerheads and dual-flush toilets, spread laundry across the week, and immediately replace leaking toilet flappers, which can silently waste 200 gallons of water per day."
        ]
      },
      {
        id: "drain-field-protection",
        title: "How to protect your septic drain field",
        paragraphs: [
          "The drain field is the most expensive component of your septic system to replace ($5,000 to $20,000+). Protect it with these strict rules:",
          "• Never drive or park vehicles, trailers, RVs, or construction equipment over the drain field or reserved replacement area. Heavy weight crushes PVC pipes and compacts soil.",
          "• Plant only lawn grass over the field. Avoid trees and deep-rooted shrubs within 30 feet, as roots penetrate perforations and shatter pipes.",
          "• Divert all surface drainage: Ensure roof gutter downspouts, sump pump discharge, and driveway runoff flow completely away from the drain field to prevent waterlogging."
        ]
      },
      {
        id: "effluent-filter-care",
        title: "Annual effluent filter inspection and cleaning",
        paragraphs: [
          "If your septic tank was installed or updated in the last 20 years, it likely contains an effluent filter inside the outlet tee. This cylindrical filter catches hair, lint, and suspended solids before they can enter the drain field.",
          "Effluent filters should be pulled and sprayed clean with a garden hose every 6 to 12 months. When cleaning, always hold the filter directly over the open tank riser so that dislodged debris washes right back into the tank."
        ],
        links: [{ href: "/guides/septic-tank-filter-cleaning", label: "Read our step-by-step filter cleaning guide" }]
      },
      {
        id: "service-records-log",
        title: "Building a permanent septic service record folder",
        paragraphs: [
          "Keep a dedicated physical or digital septic folder containing: the original county permit and as-built installation drawing, all pumping and inspection receipts, licensed contractor contact numbers, and notes on household occupancy changes.",
          "Documenting a consistent maintenance history increases home resale value and gives technicians vital baseline data when diagnosing issues."
        ]
      },
      {
        id: "warning-signs",
        title: "Warning signs requiring immediate emergency service",
        paragraphs: [
          "Do not wait for a calendar reminder if you observe emergency warning signs: sewage backing up into basement drains or bathtubs, gurgling plumbing across multiple rooms, foul sewage odors, spongy wet grass over the drain field, or an audible high-water alarm.",
          "If sewage is backing up or surfacing, cut water use immediately, keep children and pets away from contaminated areas, and contact a licensed septic contractor."
        ],
        links: [{ href: "/tools/septic-troubleshooter", label: "Diagnose symptoms with our troubleshooter" }]
      }
    ],
    faqs: [
      { question: "How often should a septic tank be pumped for a family of four?", answer: "Under typical water use, a 1,000-gallon septic tank for a family of four should be pumped every 2.5 to 3.5 years. If the home has a 1,500-gallon tank, the interval is typically 3.5 to 4.5 years." },
      { question: "Do septic tank additives eliminate the need for pumping?", answer: "No. The EPA and independent university testing confirm that commercial additives, bacteria packs, and yeast do not eliminate the need for routine pumping. Accumulated inorganic solids and mineral sludge must be physically removed." },
      { question: "What should I do if I don't know when the tank was last pumped?", answer: "Schedule a professional septic inspection. The technician can measure sludge and scum depth with a measuring probe to determine whether immediate pumping is required and establish a fresh service record." },
      { question: "Can a garbage disposal damage a septic system?", answer: "Yes. Garbage disposals grind food waste into fine particles that take longer to settle, increasing solids accumulation in the tank by 30% to 50% and requiring more frequent pumping." },
      { question: "How can I protect my drain field in the winter?", answer: "Let grass grow a bit longer in the fall to act as natural insulation, fix all plumbing leaks to prevent continuous trickle freezing, and never drive snowmobiles or vehicles over the field." }
    ],
    related: [
      { href: "/my-septic-schedule", label: "Set up and save your septic schedule" },
      { href: "/tools/septic-pumping-frequency-calculator", label: "Calculate your next pumping date" },
      { href: "/tools/septic-pumping-cost-calculator", label: "Compare septic pumping quotes" },
      { href: "/guides/how-septic-system-works", label: "Understand how your septic system works" }
    ]
  },

  'problems': {
    title: "Septic Tank Problems: Smells, Slow Drains, Backups & Alarms",
    description: "Find the next step for septic tank smells, gurgling toilets, slow drains, sewage backups, wet yards and septic alarms, with a clear homeowner checklist.",
    summary: "Start with what you can observe: which drains are affected, where the smell is, whether an alarm is sounding and whether wastewater is backing up. Sewage indoors or surfacing outside needs prompt professional attention.",
    keywords: ["septic tank problems", "septic tank smells", "signs septic tank is full", "septic tank backing up", "septic alarm going off", "gurgling toilet septic tank", "septic tank smells in house"],
    sourceIds: ["epa-failure", "epa-faq", "umn-care", "clemson-rain"],
    sections: [
      {
        id: "first-steps",
        title: "Septic tank problems: what should you do first?",
        paragraphs: [
          "When a plumbing or septic issue appears, start by gathering concrete observations rather than guessing which component failed. Knowing whether multiple fixtures are affected, where odors are strongest, and whether symptoms began after heavy rain helps your contractor diagnose the issue faster.",
          "If raw wastewater is backing up into living areas or surfacing on the lawn, treat it as a biohazard: stop running all water, keep children and pets away, and contact a licensed septic professional immediately."
        ],
        links: [{ href: "/tools/septic-troubleshooter", label: "Check septic symptoms with the troubleshooter" }]
      },
      {
        id: "symptom-table",
        title: "Common septic problems at a glance",
        paragraphs: [
          "Use this symptom matrix to match what you observe with the appropriate professional response:"
        ],
        table: {
          headers: ["What you notice", "Probable cause", "Urgency & next step"],
          rows: [
            ["Sewage backing up into shower/sink", "Main line clog, full tank, or saturated field", "URGENT: Stop water; call emergency pumper"],
            ["Wastewater pooling in yard", "Effluent surfacing due to field failure or rain", "URGENT: Keep pets away; call septic contractor"],
            ["High-water alarm horn/beacon active", "Pump chamber high water, failed float or pump", "PROMPT: Silence buzzer; cut water; call technician"],
            ["Multiple slow drains across house", "Main drain restriction, full tank, or clogged filter", "PROMPT: Arrange inspection and filter cleaning"],
            ["Persistent sewage odor indoors", "Dry P-trap, failed toilet wax ring, or vent clog", "CHECK: Fill traps; check wax rings; call plumber"],
            ["Toilets gurgling when washer drains", "Negative venting pressure or sewer line restriction", "CHECK: Check roof vent stack; inspect main sewer"]
          ]
        }
      },
      {
        id: "septic-smell",
        title: "Why does my septic tank smell outside or inside the house?",
        paragraphs: [
          "A sewage or rotten-egg odor is caused by hydrogen sulfide and methane gases. The location of the smell indicates the probable cause:",
          "• Smells indoors: Often caused by a dry plumbing P-trap in an unused shower or floor drain (run water for 60 seconds to refill the water seal), a broken wax ring seal under a toilet (replace wax ring), or a plumbing vent stack blocked by leaves or bird nests on the roof.",
          "• Smells outdoors near tank: Often caused by unsealed or cracked access lids, or a loose inspection port. In windy weather, downdrafts can also push vent pipe gases down toward the ground.",
          "• Smells outdoors over drain field: May indicate that effluent is ponding underground or surfacing due to biomat clogging, saturated soil, or crushed pipes."
        ]
      },
      {
        id: "slow-drains",
        title: "Slow drains: one fixture or the whole house?",
        paragraphs: [
          "If only one bathroom sink drains slowly, the clog is local to that fixture's P-trap or pop-up drain. Clear it mechanically with a small drain snake.",
          "If multiple fixtures across different rooms or floors drain sluggishly at the same time, the restriction is in the shared building sewer, a clogged effluent filter at the tank outlet, a full septic tank, or a failing drain field."
        ]
      },
      {
        id: "gurgling",
        title: "Why is my toilet gurgling when I have a septic tank?",
        paragraphs: [
          "Gurgling sounds indicate that air is being pulled through water traps due to negative pressure or trapped sewer gas. If a toilet gurgles when the washing machine empties or bathtub drains, wastewater cannot move freely downstream.",
          "Check whether the plumbing vent on your roof is clear. If venting is unobstructed, the gurgling points to a restriction in the sewer line or high liquid in the septic tank."
        ]
      },
      {
        id: "backup",
        title: "Septic tank backing up into the house: act promptly",
        paragraphs: [
          "Raw sewage backing up into bathtubs, showers, or floor drains requires immediate action. Stop running all water fixtures in the house.",
          "Wear protective rubber boots and waterproof gloves. Do not allow children or pets near contaminated areas. Contact an emergency septic pumping contractor and a professional water damage/biohazard remediation service."
        ]
      },
      {
        id: "wet-yard-and-rain",
        title: "Septic problems after heavy rain or storms",
        paragraphs: [
          "When severe rain saturates the soil, the drain field temporarily loses its ability to absorb liquid effluent. This can cause wastewater to back up into the house or pond on the lawn surface.",
          "CRITICAL WARNING: NEVER pump a septic tank while the surrounding yard is submerged or heavily saturated with rain. An empty tank in saturated soil can float out of the ground due to hydrostatic pressure, destroying underground pipes."
        ],
        links: [{ href: "/guides/septic-tank-backing-up-after-rain", label: "Read our heavy rain septic backup guide" }]
      }
    ],
    faqs: [
      { question: "Why does my bathroom smell like sewer after a shower?", answer: "Hot water rushing down the drain can push air past a dried-out P-trap, a compromised toilet wax seal, or an obstructed roof plumbing vent stack." },
      { question: "Can a clogged septic filter cause sewage to back up?", answer: "Yes. An effluent filter completely caked with hair and lint prevents wastewater from exiting the tank, causing water levels to rise and back up into the house." },
      { question: "What should I do if raw sewage spills into my yard?", answer: "Fence off the area to keep people and pets away, avoid touching the wastewater, contact a licensed septic contractor to resolve the source, and contact your local health department for disinfection guidance (such as applying agricultural lime)." }
    ],
    related: [
      { href: "/tools/septic-troubleshooter", label: "Use the septic symptom checker" },
      { href: "/maintenance", label: "Septic maintenance checklist and pumping plan" },
      { href: "/guides/septic-tank-alarm-going-off", label: "What to do when your septic alarm sounds" }
    ]
  },

  'guides/septic-tank-pumping-cost': {
    title: "How Much Does Septic Tank Pumping Cost? Price Guide & Quotes",
    description: "Understand septic tank pumping costs ($350–$650), price per gallon, lid digging fees, dumping surcharges and how to compare contractor quotes.",
    summary: "Septic tank pumping typically costs between $350 and $650 for a standard 1,000-gallon residential tank with accessible lids. Costs can reach $700 to $900+ if lids are buried deep, if extra hose length is required, or if emergency after-hours dispatch is requested.",
    keywords: ["septic tank pumping cost", "how much does septic pumping cost", "septic tank pumping price", "cost to pump 1000 gallon septic tank", "septic pumping quote"],
    sourceIds: ["epa-care", "epa-faq"],
    sections: [
      {
        id: "average-pumping-cost",
        title: "How much does septic tank pumping cost on average?",
        paragraphs: [
          "Nationwide in the United States, pumping a standard 1,000-gallon septic tank costs between $350 and $650 under normal conditions with surface-accessible lids. For larger tanks (1,250 to 1,500 gallons), routine pumping generally runs between $450 and $750.",
          "Prices vary based on local labor costs, distance from the pumper's base, and municipal septage disposal fees charged by local wastewater treatment plants. A written quote detailing line items is the only reliable way to know your exact out-of-pocket cost."
        ]
      },
      {
        id: "costs-by-tank-size",
        title: "Septic tank pumping cost breakdown by tank capacity",
        paragraphs: [
          "Most septic pumping companies price routine service based on total tank gallonage. Standard pricing benchmarks include:"
        ],
        table: {
          headers: ["Tank capacity", "Typical routine cost", "Typical home size", "Pumping frequency"],
          rows: [
            ["750 – 900 gallons", "$300 – $475", "1 – 2 bedrooms", "Every 2 – 3 years"],
            ["1,000 gallons", "$350 – $550", "3 bedrooms", "Every 3 – 4 years"],
            ["1,250 gallons", "$400 – $650", "3 – 4 bedrooms", "Every 3 – 4 years"],
            ["1,500 gallons", "$475 – $750", "4 – 5 bedrooms", "Every 3 – 5 years"],
            ["2,000+ gallons", "$600 – $950+", "5+ bedrooms / large family", "Every 3 – 5 years"]
          ]
        }
      },
      {
        id: "itemized-cost-factors",
        title: "Seven line items that change your septic pumping bill",
        paragraphs: [
          "When comparing quotes from local septic companies, look beyond the advertised headline rate. Contractors frequently charge separately for these common line items:"
        ],
        table: {
          headers: ["Line item", "Typical fee range", "When it applies"],
          rows: [
            ["Base pumping service", "$350 – $550", "Covers truck trip, labor, and pumping up to 1,000 gal"],
            ["Lid locating & digging fee", "$50 – $175", "Billed when access lids are buried under dirt/grass"],
            ["Municipal disposal fee", "$40 – $120", "Fee charged by treatment plant to accept hauled waste"],
            ["Extended hose surcharge", "$50 – $100", "Billed if truck must park >75–100 feet from tank"],
            ["Effluent filter cleaning", "$25 – $50", "Pulling and spraying clean the outlet baffle filter"],
            ["Heavy sludge agitation", "$50 – $100", "Required when neglected sludge is hardened/crusted"],
            ["Emergency dispatch fee", "$150 – $350", "Same-day, evening, weekend, or holiday emergency calls"]
          ]
        }
      },
      {
        id: "extra-charges-to-watch",
        title: "Hidden fees to ask about before booking septic pumping",
        paragraphs: [
          "Beware of low 'teaser' rates advertised online (such as '$199 septic pumping'). These cheap rates often cover only the first 500 or 750 gallons, then bill $0.35 to $0.60 for every additional gallon.",
          "Always confirm that the quoted price includes pumping BOTH compartments of a dual-compartment tank through their respective lids. Pumping only one compartment leaves half the sludge behind."
        ]
      },
      {
        id: "questions-to-ask-pumper",
        title: "Checklist: What to ask before hiring a septic contractor",
        paragraphs: [
          "Ask these practical questions before authorizing work:"
        ],
        bullets: [
          "Are you licensed, bonded, and insured with the county/state health department?",
          "Does your base price include municipal waste disposal and environmental dumping fees?",
          "Are you pumping both compartments through both access lids?",
          "Will you inspect and rinse the effluent filter as part of the service?",
          "Do you provide a written receipt documenting gallons pumped, tank structural condition, and next recommended inspection date?"
        ],
        links: [{ href: "/tools/septic-pumping-cost-calculator", label: "Add up your quote with our pumping cost calculator" }]
      }
    ],
    faqs: [
      { question: "How long does a septic pumping appointment take?", answer: "A routine pumping appointment for an accessible 1,000-gallon tank typically takes 30 to 60 minutes. If lids must be located and dug up by hand, add 30 to 45 minutes." },
      { question: "How can I avoid paying digging fees every time I pump?", answer: "Install permanent septic tank risers with heavy-duty, child-safe lids brought flush with ground level. Risers cost $300 to $600 to install once and eliminate digging charges forever." },
      { question: "Does homeowners insurance pay for septic tank pumping?", answer: "No. Insurance policies classify septic pumping as routine homeowner maintenance and exclude it from standard coverage." },
      { question: "Should a contractor leave a little sludge to 'seed' the tank?", answer: "No. This is an outdated myth. Complete removal of settled sludge and scum is the entire goal of pumping. Healthy digestive bacteria naturally re-establish within days of normal household use." }
    ],
    related: [
      { href: "/tools/septic-pumping-cost-calculator", label: "Calculate itemized pumping quotes" },
      { href: "/maintenance", label: "Septic maintenance checklist and frequency guide" },
      { href: "/tools/septic-pumping-frequency-calculator", label: "Plan your next pumping service window" },
      { href: "/guides/septic-drain-field-replacement-cost", label: "Compare drain field replacement costs" }
    ]
  },

  'guides/septic-system-installation-cost': {
    title: "How Much Does a New Septic System Cost? Installation & Replacement",
    description: "Compare new septic system installation and replacement costs ($5,000–$25,000+), soil perc testing, permits, conventional vs mound systems and labor.",
    summary: "Installing a new septic system typically costs between $5,000 and $12,000 for a conventional gravity gravel or chamber system, and $12,000 to $25,000+ for an engineered mound or alternative system on challenging soils. Replacing an existing system may add decommissioning and removal costs.",
    keywords: ["septic system installation cost", "how much does a new septic system cost", "septic tank replacement cost", "cost to install septic tank and drain field", "new septic system cost"],
    sourceIds: ["epa-types", "epa-works", "epa-faq"],
    sections: [
      {
        id: "installation-cost-overview",
        title: "How much does a new septic system cost?",
        paragraphs: [
          "In the United States, installing a complete new septic system (tank, distribution network, and drain field) typically costs between $5,000 and $12,000 for a standard conventional gravity system in permeable soil. However, if your lot has slow-draining clay, high seasonal groundwater, or steep slopes, health codes will mandate an engineered mound, aerobic treatment unit (ATU), or sand filter system, which typically costs $12,000 to $25,000 or more.",
          "If you only need to replace a damaged or deteriorating septic tank while retaining an intact, approved drain field, tank-only replacement typically costs between $3,500 and $7,000 including excavation and permits."
        ]
      },
      {
        id: "component-cost-breakdown",
        title: "Itemized septic installation cost breakdown",
        paragraphs: [
          "A complete septic installation involves engineering, regulatory approvals, heavy excavation, and specialized materials. Typical price ranges by project stage include:"
        ],
        table: {
          headers: ["Project stage", "Typical price range", "What is included"],
          rows: [
            ["Soil testing & perc test", "$400 – $1,500", "Deep hole soil profile & percolation rate analysis"],
            ["Engineering & site plan", "$800 – $2,500", "Certified engineered layout and system specifications"],
            ["County health department permits", "$300 – $1,500", "Permit application, review, and inspection fees"],
            ["Site excavation & earthmoving", "$2,000 – $5,000", "Clearing trees, digging tank hole and absorption trenches"],
            ["Septic tank purchase & setting", "$1,500 – $4,000", "1,000–1,500 gal concrete, poly, or fiberglass tank"],
            ["Drain field piping & media", "$3,500 – $10,000", "Perforated pipe, washed gravel, or plastic chamber modules"],
            ["Electrical wiring & pump (if needed)", "$1,000 – $2,500", "Dosing pump, control panel, alarm, and conduit"],
            ["Backfill, compaction & grading", "$1,000 – $2,500", "Covering system, establishing drainage slope, reseeding"]
          ]
        }
      },
      {
        id: "system-types-comparison",
        title: "Cost comparison by septic system type",
        paragraphs: [
          "Your soil percolation test and county sanitary code determine which system type is legally permitted for your property:"
        ],
        table: {
          headers: ["System type", "Average installed cost", "Soil & site requirements", "Maintenance profile"],
          rows: [
            ["Conventional Gravity", "$5,000 – $10,000", "Deep, permeable, well-draining soil with low water table", "Lowest maintenance; pump every 3–5 yrs"],
            ["Plastic Chamber System", "$6,000 – $12,000", "Permeable soil; 25–40% smaller footprint than gravel", "Low maintenance; pump every 3–5 yrs"],
            ["Engineered Mound System", "$12,000 – $25,000", "High groundwater table, shallow bedrock, or heavy clay", "Requires dosing pump and annual inspection"],
            ["Aerobic Treatment Unit (ATU)", "$10,000 – $22,000", "Small lots or sensitive environmental watersheds", "Requires electric aerator & ongoing service contract"],
            ["Drip Distribution System", "$14,000 – $26,000", "Steep slopes, shallow soil, or wooded lots", "Requires pre-filters and pressurized pump dosing"]
          ]
        }
      },
      {
        id: "replacement-vs-new",
        title: "Replacing an existing septic system vs new construction",
        paragraphs: [
          "Replacing an old, failed septic system often costs 15% to 30% more than installing a system on raw, undeveloped land. Extra replacement costs include:",
          "• Decommissioning the old tank: Pumping dry, crushing or removing the old concrete tank, and backfilling with clean sand ($500 to $1,500).",
          "• Property access constraints: Established driveways, fences, mature trees, and buried utility lines limit machine maneuvering.",
          "• Installing in the designated reserve area: If the original drain field failed, the new field must be excavated in the property's pre-approved replacement area."
        ]
      },
      {
        id: "vetting-contractors",
        title: "How to compare contractor proposals and protect your budget",
        paragraphs: [
          "Obtain at least two or three written proposals from licensed, bonded installers. Require that all bids specify the exact tank manufacturer and material (concrete vs polyethylene), drain field dimensions, trench depth, warranty terms, and responsibility for final grading and lawn restoration.",
          "Ensure your contract specifies payment milestones tied to official county health department inspection sign-offs."
        ]
      }
    ],
    faqs: [
      { question: "How long does it take to install a new septic system?", answer: "The physical excavation and installation typically take 3 to 7 working days. However, the entire process—including soil testing, engineering design, and county permit issuance—usually takes 4 to 8 weeks." },
      { question: "Is a concrete septic tank better than a plastic (polyethylene) tank?", answer: "Concrete tanks are heavier and resist floating in high water tables, but require heavy crane trucks to set. Poly tanks are corrosion-resistant, lighter, and easier to install in tight, wooded locations." },
      { question: "Can I install my own septic system to save money?", answer: "In almost all US jurisdictions, septic system installation legally requires a licensed and certified septic contractor. DIY installation without permits violates local sanitary codes and will prevent home resale or title transfer." }
    ],
    related: [
      { href: "/guides/septic-drain-field-replacement-cost", label: "Drain field replacement cost guide" },
      { href: "/guides/septic-tank-pumping-cost", label: "Septic tank pumping cost breakdown" },
      { href: "/tools/septic-tank-size-calculator", label: "Size your septic tank by bedroom count" }
    ]
  },

  'guides/septic-tank-filter-cleaning': {
    title: "How to Clean a Septic Tank Filter: Step-by-Step DIY Guide",
    description: "Learn how to locate, remove, clean and inspect your septic tank effluent filter safely. Step-by-step instructions, tools needed, frequency and safety rules.",
    summary: "An effluent filter protects your septic drain field by catching suspended solids before liquid leaves the tank. Clean your filter every 6 to 12 months with a garden hose directly over the open tank riser. Wear waterproof gloves and eye protection.",
    keywords: ["how to clean septic tank filter", "septic tank filter cleaning", "how often to clean septic filter", "septic effluent filter maintenance", "clogged septic filter signs"],
    sourceIds: ["purdue-filter", "epa-care", "epa-works"],
    sections: [
      {
        id: "what-is-filter",
        title: "What is a septic tank effluent filter and what does it do?",
        paragraphs: [
          "An effluent filter (or septic tank filter) is a cylindrical slotted plastic cartridge inserted inside the outlet tee of your septic tank. Its critical job is to act as a physical strainer, trapping suspended hair, lint, and fine solid particles before wastewater flows into your drain field.",
          "Without an effluent filter, fine solids gradually migrate out into the underground absorption trenches, forming a waterproof biomat layer that clogs soil pores and causes thousands of dollars in premature drain field failure."
        ]
      },
      {
        id: "how-often-to-clean",
        title: "How often should you clean an effluent filter?",
        paragraphs: [
          "Most wastewater engineers and manufacturers (such as Polylok, Zabel, or Sim/Tech) recommend cleaning your effluent filter every 6 to 12 months for a standard single-family home.",
          "Clean it more frequently (every 3 to 6 months) if you have a large family, wash heavy loads of laundry, or use a kitchen garbage disposal. At an absolute minimum, ensure your septic pumper pulls and washes the filter during every routine 3- to 5-year pumping service."
        ]
      },
      {
        id: "tools-and-safety",
        title: "Required tools and critical safety precautions",
        paragraphs: [
          "Cleaning an effluent filter is a straightforward 15-minute DIY task, but because you are handling raw wastewater, observe strict hygiene precautions:"
        ],
        bullets: [
          "Wear heavy-duty waterproof rubber gloves (elbow length preferred) and safety goggles.",
          "Wear old clothes or coveralls and wash your hands thoroughly with soap afterward.",
          "Never lean into or enter the septic tank. Lethal sewer gases (hydrogen sulfide, methane) can cause immediate loss of consciousness.",
          "Keep children and pets away from open risers at all times.",
          "Have a garden hose with an adjustable spray nozzle ready beside the tank before opening the lid."
        ]
      },
      {
        id: "step-by-step-instructions",
        title: "Step-by-step instructions: How to clean your septic filter",
        paragraphs: [
          "Follow these step-by-step directions:"
        ],
        steps: [
          "1. Locate and remove the outlet riser lid: Find the access cover positioned directly over the outlet end of your tank (the side closest to the drain field). Unscrew or unbolt the safety lid.",
          "2. Check the operating liquid level: Shine a flashlight into the riser. The wastewater level should be resting at or below the bottom of the outlet pipe. If liquid is sitting high above the filter, the filter is completely clogged—be prepared for liquid to surge down as you lift it.",
          "3. Turn off effluent pump power (if equipped): If your system uses a secondary pump chamber, switch off its breaker so the pump does not dry-cycle while servicing.",
          "4. Pull the filter straight up: Grip the filter handle or pull-rod and pull the filter straight up out of the outlet tee. CRUCIAL RULE: Keep the filter positioned directly over the open septic tank opening while lifting.",
          "5. Spray clean with a garden hose: Holding the filter over the open hatch, spray it thoroughly with the garden hose from top to bottom. Wash all dislodged sludge, hair, and scum directly back into the tank where it belongs. Never spray the filter over your lawn or driveway.",
          "6. Inspect the cartridge: Look through the plastic bristles or mesh slots. Verify there are no tears, warped fins, or broken bypass seals. If damaged, replace the filter immediately.",
          "7. Reseat the filter firmly: Lower the clean filter back into the outlet tee. Ensure any alignment arrows or 'TOP' markings point upward, and push it firmly into place so wastewater cannot bypass the mesh.",
          "8. Fasten the access lid securely: Replace the riser cover and tighten all safety bolts to prevent accidental child or pet entry."
        ]
      },
      {
        id: "signs-of-clogged-filter",
        title: "Signs of a clogged septic effluent filter",
        paragraphs: [
          "When an effluent filter becomes completely plugged with debris, wastewater cannot exit the tank. This produces clear warning signs:",
          "• Slow drainage or gurgling in ground-floor toilets and showers.",
          "• High liquid levels in the primary septic tank.",
          "• High-water alarm sounding (on systems equipped with an effluent filter alarm float).",
          "If your drains suddenly slow down across the entire house, checking and rinsing your effluent filter is the fastest, cheapest troubleshooting step before calling an emergency plumber."
        ]
      }
    ],
    faqs: [
      { question: "Where is the septic tank filter located?", answer: "The effluent filter is located inside the outlet tee (the exit pipe) of the septic tank, under the access riser lid closest to the drain field." },
      { question: "Can I run my septic system without an effluent filter?", answer: "Never remove a filter and leave the outlet open. Doing so allows suspended solids to flow directly into your drain field, leading to rapid and permanent soil clogging." },
      { question: "How much does a replacement septic filter cost?", answer: "Standard residential replacement effluent filter cartridges cost between $35 and $85 online or from local plumbing supply houses." }
    ],
    related: [
      { href: "/maintenance", label: "Complete septic maintenance checklist" },
      { href: "/guides/how-septic-system-works", label: "Learn how septic tanks and baffles work" },
      { href: "/guides/clogged-septic-drain-field", label: "Signs of a clogged septic drain field" }
    ]
  },

  'guides/septic-tank-backing-up-after-rain': {
    title: "Septic Tank Backing Up After Heavy Rain: Causes & Immediate Steps",
    description: "Why is your septic system backing up after rain? Learn what to do immediately, why you must NOT pump a flooded tank, and how to protect your drain field.",
    summary: "When heavy rain saturates the drain field, wastewater cannot percolate into the soil and backs up into household drains. Cut indoor water use immediately and do NOT pump your septic tank while the ground is flooded, as an empty tank can float and snap pipes.",
    keywords: ["septic tank backing up after rain", "septic tank flooding heavy rain", "drains slow after heavy rain septic", "septic system backup after storm", "can you pump a flooded septic tank"],
    sourceIds: ["clemson-rain", "epa-failure", "epa-care"],
    sections: [
      {
        id: "why-rain-causes-backups",
        title: "Why does heavy rain cause septic tanks to back up?",
        paragraphs: [
          "A septic drain field relies on unsaturated soil pores to accept and biologically filter wastewater. During heavy rainfall, prolonged storms, or rapid snowmelt, the surrounding soil becomes completely saturated with rainwater.",
          "Because saturated soil cannot absorb additional liquid, effluent has nowhere to go. It ponds inside the absorption trenches and backs up through the outlet pipe into the septic tank. Once the tank fills to capacity, wastewater backs up through the main sewer line into your home's lowest plumbing fixtures (basement floor drains, utility sinks, and ground-floor toilets).",
          "Additionally, rainwater can flood into the tank directly if access riser lids are unsealed, inspection port caps are cracked, or roof downspouts discharge near the tank."
        ]
      },
      {
        id: "immediate-emergency-actions",
        title: "Immediate emergency actions: What to do right now",
        paragraphs: [
          "If your drains are sluggish or sewage is backing up during or immediately after a storm, take these immediate actions:"
        ],
        bullets: [
          "Reduce household water use by 90%: Immediately stop running laundry machines and dishwashers. Take quick sponge baths and avoid running faucets.",
          "Silence audible alarms: If your pump control box is sounding, press the external silence button to mute the horn while keeping the red warning light active.",
          "Avoid direct contact with wastewater: Raw sewage contains dangerous pathogens and bacteria. Wear waterproof rubber boots and heavy gloves if walking in contaminated areas.",
          "Keep people and pets off the drain field: Walking on waterlogged soil compacts the earth and pushes water into surfacing pools.",
          "Inspect the lowest house fixtures: Check basement floor drains and lower showers; plug them if safe to prevent rising backups."
        ]
      },
      {
        id: "critical-dont-pump-warning",
        title: "CRITICAL WARNING: Why you must NOT pump a flooded septic tank",
        paragraphs: [
          "Many homeowners instinctively call an emergency pumper to pump out their tank during a flood. However, the EPA, state environmental protection departments, and university cooperative extensions explicitly warn:",
          "DO NOT pump your septic tank while the ground surrounding the system is flooded or heavily saturated.",
          "Here is why: an empty septic tank buried in water-saturated soil acts like a hollow boat hull. Enormous hydrostatic groundwater pressure pushes upward against the tank. If the weight of the wastewater is pumped out, the tank can literally pop or float right out of the ground, shearing inlet and outlet PVC pipes and causing catastrophic structural damage costing $10,000+ to repair.",
          "Furthermore, pumping a submerged tank draws waterlogged mud, silt, and sand backwards from the drain field into the tank, permanently clogging gravel trenches. Wait until floodwaters recede and ground soil dries before scheduling service."
        ]
      },
      {
        id: "temporary-vs-permanent-failure",
        title: "Is your drain field failing permanently or just saturated?",
        paragraphs: [
          "Once the storm passes and sunny weather returns, monitor your plumbing over 3 to 7 dry days as the local water table recedes.",
          "If your toilets, showers, and sinks return to normal drainage once the yard dries out, your system experienced temporary weather-induced hydraulic saturation. However, if slow drains, gurgling plumbing, and foul sewage odors persist after the ground is thoroughly dry, your drain field has likely suffered permanent biomat clogging or structural compaction and requires a professional evaluation."
        ]
      },
      {
        id: "long-term-drainage-fixes",
        title: "Long-term fixes to prevent rain backups",
        paragraphs: [
          "To protect your septic system from future heavy storms, implement these property drainage improvements:",
          "• Reroute roof gutter downspouts: Extend downspouts so they discharge at least 15 to 20 feet away from both the septic tank and the drain field.",
          "• Regrade yard slopes: Ensure the surface topography slopes away from the absorption field so stormwater runoff does not pool over trenches.",
          "• Install curtain drains (French drains): A shallow gravel-and-pipe curtain drain installed upslope of the drain field intercepts subsurface stormwater before it can saturate your absorption trenches.",
          "• Install watertight riser gaskets: Seal tank access lids with watertight rubber gaskets to prevent stormwater from entering the tank."
        ]
      }
    ],
    faqs: [
      { question: "Can heavy rain ruin a septic drain field?", answer: "Temporary rain saturation will not ruin a healthy drain field once the water table recedes. However, driving heavy vehicles over waterlogged soil or pumping a flooded tank can cause permanent structural destruction." },
      { question: "Why does my toilet gurgle only when it rains?", answer: "Rainwater saturating your drain field prevents wastewater from displacing air freely in the pipes, forcing trapped air backwards through your toilet traps and causing audible gurgling." },
      { question: "How long after heavy rain does a septic system take to recover?", answer: "Depending on your soil composition and the severity of the storm, permeable sandy soil typically recovers within 24 to 48 hours, while dense clay or silt soil may take 4 to 7 days to dry out." }
    ],
    related: [
      { href: "/problems", label: "Troubleshoot common septic problems" },
      { href: "/tools/septic-troubleshooter", label: "Use the septic symptom checker" },
      { href: "/guides/septic-tank-alarm-going-off", label: "What to do when your septic alarm sounds" },
      { href: "/guides/clogged-septic-drain-field", label: "Signs of a clogged septic drain field" }
    ]
  }
};