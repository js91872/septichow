export type FAQ = { question: string; answer: string };
export type ArticleSection = { id: string; title: string; paragraphs: string[]; bullets?: string[]; table?: { headers: string[]; rows: string[][] }; links?: { href: string; label: string }[] };
export type HomeownerArticle = { title: string; description: string; summary: string; keywords: string[]; sourceIds: string[]; sections: ArticleSection[]; faqs: FAQ[]; related: { href: string; label: string }[] };

export const articles: Record<string, HomeownerArticle> = {
  'guides/signs-septic-tank-is-full': {
    title: 'How to Tell if Your Septic Tank Is Full: 7 Warning Signs',
    description: 'Wondering if your septic tank is full? Check 7 warning signs, what is normal after pumping, and when to call a septic professional.',
    summary: 'Slow drains in several rooms, gurgling, sewage odors, backups and wastewater surfacing can signal septic trouble. But a tank normally contains liquid, so “full of water” alone does not mean it needs pumping. Keep people away from sewage and arrange professional help for backups or surfacing.',
    keywords: ['how to tell if septic tank is full', 'how to tell septic tank full', 'septic tank full signs', 'signs septic tank needs pumping', 'septic tank full or clogged', 'septic tank full of water'],
    sourceIds: ['epa-care', 'epa-failure', 'epa-faq'],
    sections: [
      { id: 'meaning-of-full', title: 'What does a full septic tank actually mean?', paragraphs: [
        'A septic tank is not supposed to stay empty. It normally contains wastewater up to its operating level while liquid flows onward to the drain field. The solids accumulating at the bottom and floating near the top are what routine pumping removes. A tank that refills with liquid after pumping is not automatically failing.',
        'When someone says “my septic tank is full,” they may mean too much sludge and scum, a blocked pipe, an outlet problem, a pump failure or a saturated drain field. These can look similar from inside the house, but the repairs are not the same. A technician can check the tank, measure accumulated solids where appropriate and inspect the flow path.',
        'The safest approach is to pay attention to symptoms and the last inspection rather than trying to open the tank yourself. Septic tanks contain hazardous gases and unsecured access openings are dangerous.'
      ] },
      { id: 'seven-signs', title: '7 signs your septic tank or septic system needs attention', paragraphs: [
        'One symptom does not prove a tank needs pumping. Several symptoms together, especially across different fixtures, make a prompt inspection more important. Use this table to describe exactly what is happening before calling a provider.',
        'If raw sewage is entering the home or wastewater is surfacing in the yard, avoid contact, limit water use and request professional help promptly. Keep children and pets away from the affected area.'
      ], table: { headers: ['Warning sign', 'What it may indicate', 'What to do'], rows: [
        ['1. Multiple drains are slow', 'A shared drain restriction or septic system problem', 'Note which fixtures are affected; request a check if the issue persists'],
        ['2. Toilets or drains gurgle', 'Airflow or wastewater movement is being disrupted', 'Record when it happens and whether several fixtures are involved'],
        ['3. Sewage backs up', 'A blocked or overloaded wastewater path', 'Stop unnecessary water use and arrange urgent professional service'],
        ['4. Sewage smell indoors', 'A plumbing vent, drain seal or septic issue', 'Identify where the odor is strongest; seek an assessment if persistent'],
        ['5. Sewage smell outdoors', 'Possible tank, pipe, vent or drain field issue', 'Keep clear of suspicious wet areas and contact a septic professional'],
        ['6. Wet or unusually lush drain-field area', 'Potential effluent surfacing or abnormal soil moisture', 'Avoid the area, do not dig, and arrange professional evaluation'],
        ['7. High-water alarm sounds', 'A pump or treatment system may not be moving wastewater properly', 'Reduce water use and contact the service provider; do not bypass controls']
      ] }, links: [{ href: '/tools/septic-troubleshooter', label: 'Use the septic symptoms troubleshooter' }] },
      { id: 'full-vs-clogged', title: 'Is your septic tank full or is a pipe clogged?', paragraphs: [
        'A single slow sink may point to a local plumbing blockage, while trouble in several toilets, showers and sinks deserves investigation of the shared drainage system. Neither pattern is a home diagnosis. A septic professional or plumber can isolate the likely location safely.',
        'Pumping removes tank contents but does not automatically remove pipe obstructions, repair pumps or restore a failing drain field. Ask the provider what was actually found instead of booking repeated pumping without a diagnosis.'
      ], table: { headers: ['Observation', 'Possible explanation', 'Next step'], rows: [
        ['Only one fixture drains slowly', 'Local fixture or branch drain issue', 'Ask a plumber to evaluate the affected fixture'],
        ['Multiple fixtures back up or drain slowly', 'Shared plumbing or septic system issue', 'Contact an appropriate professional promptly'],
        ['Tank has liquid after pumping', 'Normal refilling can occur', 'Use the inspection report, not liquid level alone'],
        ['Alarm sounds at a pumped system', 'Pump, float, power or control issue', 'Contact the system service provider']
      ] } },
      { id: 'after-pumping', title: 'Why is my septic tank full again right after pumping?', paragraphs: [
        'When toilets, sinks and showers are used, the tank fills back to its normal working liquid level. That is expected. The key question is whether wastewater flows normally onward and whether solids have accumulated to a level that calls for another service.',
        'If sewage backs up or an alarm continues after pumping, contact the provider with the service date and symptoms. The problem might be elsewhere in the system. Ask for the tank observations and any recommended follow-up in writing.'
      ] },
      { id: 'when-to-pump', title: 'How do you know when to pump a septic tank?', paragraphs: [
        'The EPA commonly advises household septic tanks to be inspected about every three years and pumped about every three to five years, depending on tank size, household size, water use and solids accumulation. Some alternative systems require more frequent attention.',
        'Do not wait for a backup before planning routine service. Keep the last pumping date, inspection findings and contractor recommendation together. A reminder calculator is useful for planning, but it cannot replace inspection measurements or local requirements.'
      ], links: [{ href: '/tools/septic-pumping-frequency-calculator', label: 'Calculate a septic tank pumping window' }, { href: '/maintenance', label: 'Read the septic maintenance checklist' }] },
      { id: 'what-to-check', title: 'What to check before calling a septic service company', paragraphs: [
        'You do not have to open the tank, test gases or uncover buried lines. Instead, collect a few safe observations so the provider can recommend the right visit. Do not walk on or work in areas where sewage may be surfacing.',
        'Ask whether the quoted visit includes an inspection, pumping, filter cleaning, equipment diagnosis or separate repair charges. A recent pumping receipt may not show that the drain field or pump was inspected.'
      ], bullets: [
        'Write down when the symptoms began and which drains are affected.',
        'Check your records for the last pumping and inspection dates.',
        'Note recent heavy rain, unusually high household water use or guests.',
        'Record any visible alarm message without opening electrical equipment.',
        'Keep people and pets away from suspected wastewater on the ground.',
        'Ask for a written explanation of findings and recommended next steps.'
      ], links: [{ href: '/tools/septic-pumping-cost-calculator', label: 'Estimate your quoted pumping charges' }] },
      { id: 'what-not-to-do', title: 'What NOT to do when you suspect a full septic tank', paragraphs: [
        'Do not enter a septic tank, lean into an open access hole or remove secured lids yourself. Toxic gases and fall hazards can cause severe injury or death. Never ask a family member to inspect inside.',
        'Avoid chemical drain cleaners, improvised drain-field treatments and repeated flushing to test whether the problem has disappeared. Do not drive over a wet drain field or divert more water toward it. When wastewater is surfacing or returning into the house, professional assessment takes priority over DIY fixes.'
      ] },
      { id: 'service-report', title: 'What a useful septic inspection report should tell you', paragraphs: [
        'Ask the professional to record the tank condition, pumping details if performed, any measured sludge or scum accumulation, the inspected components and whether additional diagnosis is recommended. If the cause of a backup is unclear, the report should say what still needs investigation.',
        'Keep this report with your home maintenance records. It is more useful than relying on the phrase “tank was full” because it distinguishes normal liquid level from problems that require repairs.'
      ] }
    ],
    faqs: [
      { question: 'What is the first sign that a septic tank is full?', answer: 'There is no single reliable first sign. Multiple slow drains, gurgling, sewage smells or backups warrant attention, but only an inspection can establish whether pumping is needed or another fault is responsible.' },
      { question: 'Can a septic tank be full without backing up?', answer: 'Yes. A healthy tank normally holds liquid, and accumulated solids can increase before a backup occurs. Routine inspections help establish when pumping is appropriate.' },
      { question: 'Will a septic tank fill with water again after pumping?', answer: 'Yes. The normal operating liquid level returns as the home uses water. Recurring backups, alarms or surface wastewater are not normal and need assessment.' },
      { question: 'How do I know if my septic tank is full or clogged?', answer: 'You generally cannot tell from symptoms alone. A technician can evaluate the tank, pipes, pump if fitted and drain field to identify what needs attention.' },
      { question: 'Is it safe to open the septic tank to check?', answer: 'No. Do not open or enter septic tanks yourself. Hazardous gases and unsafe access openings make this dangerous; contact a qualified service provider.' },
      { question: 'Should I pump the septic tank if it smells?', answer: 'Not automatically. Odors can have several causes, including plumbing vents and drain issues. Have the cause assessed, particularly if smells persist or are accompanied by backups or wet ground.' }
    ],
    related: [
      { href: '/tools/septic-troubleshooter', label: 'Find the next step for septic problems' },
      { href: '/problems', label: 'Read about septic odors, alarms and slow drains' },
      { href: '/guides/how-septic-system-works', label: 'Understand how a septic tank and drain field work' },
      { href: '/tools/septic-pumping-frequency-calculator', label: 'Plan your next septic pumping date' }
    ]
  },
  'guides/how-septic-system-works': {
    title: 'How Does a Septic System Work? A Simple Homeowner Guide',
    description: 'Learn how a septic tank and drain field work, where household wastewater goes, why tanks need pumping, and what to check when buying a home with septic.',
    summary: 'A septic system treats wastewater on your property. The tank separates solids from liquid, and the drain field handles further treatment in the soil. Pumping removes the solids that build up over time.',
    keywords: ['how does a septic system work', 'how does a septic tank work', 'septic tank vs drain field', 'buying a house with a septic tank', 'septic system parts'],
    sourceIds: ['epa-works', 'epa-types', 'epa-faq'],
    sections: [
      { id: 'the-basic-idea', title: 'How does a septic system work in a house?', paragraphs: [
        'When you flush a toilet, take a shower or run the washing machine, the used water leaves through the house drains. In a home connected to a public sewer, it travels to a community treatment plant. In a home with a septic system, treatment takes place on the property. That is why your everyday water habits and the condition of the yard both matter.',
        'A conventional septic system has two main working parts: a buried septic tank and a drain field. The tank separates the wastewater. The drain field receives the liquid coming out of the tank and allows it to move through suitable soil. Think of the tank as the first stage and the soil as another essential stage, rather than thinking of the tank as a container that stores every gallon forever.',
        'You do not need to learn every plumbing term to look after the system. Start with four questions: Where is the tank? Where is the drain field? When was the tank last pumped? Does the system have a pump, alarm or treatment unit? The answers make service calls easier and help you avoid accidentally damaging equipment hidden under the lawn.'
      ] },
      { id: 'inside-the-tank', title: 'What happens inside a septic tank?', paragraphs: [
        'Household wastewater contains liquid and material that behaves differently in water. Heavier solids settle at the bottom. Grease and other lighter material can collect near the top. The liquid between these layers flows onward through the outlet. You may hear a service technician call the bottom layer sludge, the floating layer scum and the liquid effluent.',
        'Those words describe where the waste is, not three separate tanks you need to buy. Bacteria break down some organic material, but they do not make all of the accumulated solids disappear. The tank still needs periodic pumping. A tank that seems quiet from the outside can be overdue for service inside.',
        'A useful question after a pumping visit is: “What did you find, and what interval do you recommend next time?” Ask the provider to include observations in the service report. A dated receipt that only says “pumped” is less helpful than a record identifying the tank, the work completed and anything that needs follow-up.'
      ] },
      { id: 'normal-water-level', title: 'Is a septic tank supposed to be full of water?', paragraphs: [
        'A working septic tank normally contains liquid. Seeing water in a tank does not, by itself, tell you that pumping is overdue. Normal operating liquid level and excessive solids buildup are different things. A tank is not meant to stay empty between service visits.',
        'This distinction explains a common worry: “My septic tank is full again after pumping.” As the home uses water, liquid returns. The more useful questions are whether drains work normally, whether the professional found unusual levels, and whether the liquid can leave through the intended outlet.',
        'Do not remove a tank lid to judge the level yourself. Ask the technician to explain the findings in plain language while keeping the access area secure. If symptoms continue after a service visit, tell the provider exactly what changed and what did not. A repeat symptom deserves follow-up rather than a guess based on the word full.'
      ] },
      { id: 'drain-field', title: 'What is a septic drain field or leach field?', paragraphs: [
        'Drain field, leach field and soil absorption field are names you may hear for the area that receives liquid from a septic tank. In a conventional system, buried distribution components spread the liquid into the soil treatment area. The tank and field need to work together; pumping the tank does not replace the field’s job.',
        'The part that looks like ordinary lawn may therefore be one of the most valuable working areas of your property. Keep its location marked on your property sketch. Before arranging a shed, driveway, patio, pool or major landscaping project, check that the proposed work stays clear of the system and any reserved replacement area.',
        'For a new homeowner, an easy habit is to keep the septic drawing with the home’s other important documents. Give a copy of the relevant layout to anyone planning heavy work in the yard. “The tank is somewhere behind the house” leaves too much room for expensive mistakes.'
      ], links: [{ href: '/maintenance', label: 'See the septic maintenance checklist and drain field care tips' }] },
      { id: 'parts-explained', title: 'Septic system parts explained without the jargon', paragraphs: [
        'Your installation drawing may use terms that sound more complicated than the equipment itself. Use the list below to follow a service conversation. The exact arrangement depends on the system installed at your property, so keep the drawing alongside this general explanation.',
        'Not every system has every part listed here. For example, a gravity system may not need a wastewater pump. If an invoice mentions a component you cannot identify, ask the provider to point out where it appears on the drawing and explain what it does. You should leave the conversation knowing what was serviced, not just recognizing a new technical word.'
      ], table: { headers: ['Part', 'Plain-language job', 'Useful homeowner question'], rows: [
        ['House drain pipe', 'Carries wastewater out of the home', 'Which fixtures connect to this line?'],
        ['Septic tank', 'Separates solids and liquid', 'What capacity and number of compartments do I have?'],
        ['Baffle or outlet tee', 'Helps retain solids in the tank', 'Was its condition checked during service?'],
        ['Outlet filter, if fitted', 'Catches some particles before liquid leaves', 'Who services it, and when?'],
        ['Distribution box, if fitted', 'Directs liquid toward field lines', 'Is it shown on my layout?'],
        ['Pump and alarm, if fitted', 'Moves wastewater and signals a problem', 'Who do I call when the alarm sounds?'],
        ['Drain field', 'Provides soil treatment for the liquid', 'Which part of the yard must stay protected?'],
        ['Riser and secured lid', 'Provides access for service', 'Are the lids secure and accessible?']
      ] } },
      { id: 'system-types', title: 'Conventional, aerobic and mound systems: what is the difference?', paragraphs: [
        'A conventional system uses a tank followed by a soil treatment area. Other installations may need pumps, raised soil treatment areas or additional treatment equipment. An aerobic treatment unit adds air as part of its treatment process. A mound system uses a raised treatment area. These names describe different arrangements, not a simple ranking from good to bad.',
        'If you are buying a house with a septic tank, ask for the actual system type rather than accepting “it has septic” as the whole answer. A system with mechanical parts can come with a service contract, scheduled checks and equipment instructions. Put those obligations into your home budget alongside heating and other maintenance.',
        'Do not apply a neighbor’s service routine automatically. Two homes on the same road can have different equipment, soil conditions and household use. Ask for the manufacturer’s manual where applicable, the installation records and the contact details of the company that last serviced your system.'
      ] },
      { id: 'tank-size', title: 'What size septic tank does my house need?', paragraphs: [
        'Homeowners often search for a septic tank size for a three-bedroom or four-bedroom house. Bedroom count can be part of local sizing requirements, but a single nationwide chart cannot settle every property’s needs. The approved design and the local permitting office are the starting points when selecting or replacing equipment.',
        'For an existing home, look for the capacity in the permit, installation drawing or pumping report. Do not assume the number of people living there today proves what tank was installed. A previous renovation, an added bedroom or a change in use may also make the records worth reviewing.',
        'Our tank size calculator helps you explore household wastewater use and includes a Minnesota bedroom-based rule reference. Its general water-use calculation is useful for understanding the effect of more household members or higher water use. It is not a universal minimum-size formula. Keep the reference mode visible when discussing a result with a contractor.'
      ], links: [{ href: '/tools/septic-tank-size-calculator', label: 'Try the septic tank size and household water-use calculator' }] },
      { id: 'pumping', title: 'Why does a septic tank need pumping?', paragraphs: [
        'Pumping removes accumulated material from the tank. It is different from clearing a blocked house drain, repairing a pump or replacing a drain field. These jobs may be discussed during the same visit, but they answer different problems. Ask what is included before agreeing to a service price.',
        'Keep the last pumping date and the provider’s recommended next interval together. If you have just bought the property and the records are missing, arrange a review instead of assigning an imaginary service date. Starting with a known condition gives you a better maintenance plan.',
        'Use our pumping schedule calculator once you have a reliable last-service date. You can enter the interval recommended for your household and save a reminder. Treat the reminder as a prompt to arrange service, not as a reason to wait when you already have a problem.'
      ], links: [{ href: '/tools/septic-pumping-frequency-calculator', label: 'Work out when to plan your next septic pumping visit' }] },
      { id: 'homebuyer-checklist', title: 'Buying a house with a septic tank: what should you ask?', paragraphs: [
        'A home inspection and a septic inspection may cover different things. Ask the seller and your inspector what septic work has actually been completed, who did it and what records support it. “The toilets flush” is a useful observation, but it is not the same as a documented system evaluation.',
        'Gather the information before the sale is complete wherever possible. It is easier to ask about an unexplained invoice while the seller can still answer than to discover the question months after moving in. Keep original reports rather than relying on a verbal summary.',
        'For example, a seller may provide a recent pumping receipt but no layout. Your next question is where the tank, field and access lids are located. Another seller may have a service contract but no recent pumping date. Ask what work the contract includes. These are separate pieces of information, and each helps you plan a different part of ownership.'
      ], bullets: ['Request the permit, layout and available inspection reports.', 'Confirm tank capacity and system type.', 'Find the last pumping date and any repair history.', 'Ask whether there is an active service contract.', 'Locate the drain field and replacement area on the property drawing.', 'Keep the alarm instructions and service provider’s phone number.', 'Ask the inspector to explain unresolved findings before budgeting for repairs.'] },
      { id: 'your-first-month', title: 'Your first month in a home with septic', paragraphs: [
        'Start by making one simple septic folder, either on paper or on your phone. Add the property drawing, service receipts, equipment manuals and provider’s contact details. Write the tank capacity and system type on the first page so you can find them during a call.',
        'Next, agree on the household basics. Explain that toilets are not a disposal route for wipes or other trash, and make sure everyone knows where the drain field is. If visitors park in the yard, choose a parking area that stays clear of the system. These small arrangements are easier than trying to change habits after something goes wrong.',
        'Finally, put the recommended service dates into a calendar. Keep the inspection reminder separate from the pumping reminder if they happen on different schedules. Our saved septic schedule is a convenient place to start, while the original service reports remain your detailed record.'
      ], links: [{ href: '/my-septic-schedule', label: 'Create your septic tank maintenance reminder' }] }
    ],
    faqs: [
      { question: 'Does shower water go into the septic tank?', answer: 'In a typical home septic arrangement, shower water joins the household wastewater going to the system. Your plumbing and installation records show the actual connections at your property.' },
      { question: 'What is the difference between a septic tank and a septic system?', answer: 'The tank is one part. The whole septic system also includes the pipes, soil treatment area and any pumps or additional treatment equipment used at the property.' },
      { question: 'Does a septic tank empty itself?', answer: 'Liquid flows onward through the system, but accumulated solids still need to be removed by pumping. Normal drainage does not eliminate the need for maintenance.' },
      { question: 'Can I use the washing machine with a septic tank?', answer: 'Yes, household laundry is normally part of the system’s wastewater load. Spread loads out, use the appropriate load setting and avoid treating a service problem as a reason to keep adding water.' },
      { question: 'Should I open my septic tank to see how it works?', answer: 'No. Keep lids secure and leave tank access and inspection to trained professionals. Use your layout, service report and the diagram on this page to understand the system.' }
    ],
    related: [{ href: '/maintenance', label: 'How to maintain a septic tank' }, { href: '/problems', label: 'Septic tank problems and warning signs' }, { href: '/tools/septic-pumping-cost-calculator', label: 'Compare the total cost of a pumping quote' }]
  },
  maintenance: {
    title: 'Septic Tank Maintenance: Pumping Schedule & Care Checklist',
    description: 'Learn how often to pump a septic tank, what to flush, how to protect your drain field, and how to make a simple septic maintenance schedule.',
    summary: 'Keep the service records, follow your recommended pumping and inspection schedule, use water sensibly, and protect the drain field. A short routine is easier to maintain than waiting for a backup.',
    keywords: ['septic tank maintenance', 'how often to pump septic tank', 'septic maintenance checklist', 'septic tank pumping schedule', 'how to take care of a septic tank'],
    sourceIds: ['epa-care', 'umn-care'],
    sections: [
      { id: 'simple-routine', title: 'How to take care of a septic tank without overcomplicating it', paragraphs: [
        'Good septic tank maintenance starts with a routine you can actually follow. You need to know when service is due, what belongs down the drains and which part of the yard is the drain field. You do not need to inspect underground equipment every weekend or buy a cupboard full of septic products.',
        'If you have inherited a system without clear records, make getting those records your first task. Ask the previous owner, the last service company or the local permitting office for the layout and available reports. A known tank capacity and a reliable last pumping date are more useful than guessing from the age of the house.',
        'Build your plan around the system installed at your property. A basic conventional system and a home with an aerobic treatment unit may need different service routines. Keep the provider’s recommendation and any equipment service contract together so you are following one clear plan rather than a collection of conflicting tips.'
      ] },
      { id: 'pumping-frequency', title: 'How often should you pump a septic tank?', paragraphs: [
        'EPA guidance describes pumping every three to five years as typical for household septic tanks. The right timing depends on the system and how it is used. Inspection findings can call for an earlier visit. A pumping schedule is therefore a starting point for planning, not a promise that nothing needs attention before the date.',
        'For a practical example, suppose your last pumping visit was in October 2023 and your provider recommended a three-year interval. October 2026 becomes your next planned service month. If the recommendation changes after an inspection, update the reminder and keep the reason in the service folder. The date should follow the advice, rather than the other way around.',
        'A frequent question is how often to pump a 1,000-gallon septic tank. The gallon number alone does not provide the whole answer. Tell the provider how many people use the home, whether occupancy has changed and what the previous service report says. A larger family moving in is a good reason to review the plan instead of copying the previous owner’s routine.',
        'Do not wait for sewage to back up before arranging maintenance. If you do not know when the tank was last pumped, schedule a professional assessment and establish a new record. Entering a made-up date into a calculator creates a tidy calendar but leaves the original uncertainty unresolved.'
      ], links: [{ href: '/tools/septic-pumping-frequency-calculator', label: 'Calculate your septic pumping schedule from the last service date' }] },
      { id: 'inspection-vs-pumping', title: 'Septic inspection vs pumping: do you need both?', paragraphs: [
        'Pumping removes accumulated material. An inspection looks at the condition and operation of the system. A visit may include both, but the invoice should say what was included. Ask before booking rather than assuming that every pumping company provides the same checks.',
        'For equipment with pumps, controls or other mechanical parts, follow the specified inspection and service routine. Set a separate reminder if that routine is more frequent than pumping. In your calendar, “annual equipment service” and “tank pumping” should be recognizable as different appointments.',
        'After any visit, ask for a written report that you can use next time. Record whether additional work was recommended, who will handle it and when it should be completed. A small follow-up task is easy to lose when it is only mentioned at the driveway as the truck leaves.'
      ] },
      { id: 'maintenance-checklist', title: 'A septic tank maintenance checklist for homeowners', paragraphs: [
        'Use this checklist as a place to organize your routine. The dates belong in your calendar; the details belong in the service folder. Adapt the equipment checks to your own installation and let the service provider handle tank access and technical work.',
        'Make the routine easy for other household members to follow. A short note near the laundry area can be more effective than a long explanation no one remembers. Keep the emergency contact in the same place as the normal service number so a family member can find it while you are away.'
      ], table: { headers: ['When', 'Homeowner task', 'What to record'], rows: [
        ['During everyday use', 'Keep trash and grease out of the drains; use water sensibly', 'Any recurring slow drain or unusual smell'],
        ['When household use changes', 'Tell the provider about more occupants or new equipment', 'Date of the change and revised advice'],
        ['Before the planned service date', 'Book the visit and confirm access and included work', 'Appointment and written quote'],
        ['After each service visit', 'Save the report and arrange recommended follow-up', 'Work done and next recommended dates'],
        ['Before work in the yard', 'Check the septic layout with the contractor', 'Protected tank, pipes and field areas'],
        ['When an alarm or backup appears', 'Contact the appropriate service provider promptly', 'Symptoms and visible alarm details']
      ] } },
      { id: 'toilet-and-sink', title: 'What can you flush with a septic tank?', paragraphs: [
        'Keep the household rule simple: toilets are for human waste and toilet paper. Put wipes, paper towels and other trash in a bin. At the kitchen sink, keep cooking grease and food scraps out of the drain. A visible bin and a grease container make the preferred habit easier for everyone.',
        'Read product labels instead of assuming that every item labeled convenient for bathrooms belongs in your septic system. If guests use the home, a polite “please do not flush wipes” note removes guesswork. In a rental or vacation property, include the same instruction in the welcome information.',
        'You do not have to turn the home into a chemistry laboratory. Use household products as directed and ask your provider about any system-specific restrictions. If a drain is blocked, explain that the home has septic before arranging plumbing work so the person handling the blockage has the right context.'
      ], bullets: ['Keep wipes and paper towels out of toilets.', 'Collect cooking grease for appropriate disposal rather than pouring it into the sink.', 'Keep paint, solvents and hazardous waste out of household drains.', 'Ask about a recurring blockage instead of repeatedly adding a drain treatment.', 'Give visitors the same simple flushing rules as the household.'] },
      { id: 'water-and-laundry', title: 'Laundry, showers and water use with a septic system', paragraphs: [
        'Think about the pattern of water use as well as the total. Spreading laundry across the week avoids putting every wash load into one busy day. Choose the appropriate machine setting and keep an eye on toilets or taps that run continuously. A quiet leak can become an everyday load you did not plan for.',
        'As a household exercise, list the jobs that use substantial water: laundry, baths, long showers and dishwasher cycles. See whether they all happen on the same morning. You may be able to spread them out without reducing convenience. The aim is a manageable routine, not making everyone afraid to turn on a tap.',
        'Tell the provider if use changes significantly. A home that was occupied only at weekends may be used full time later. Hosting several guests for an extended stay is another useful piece of context. Keeping these notes helps the next service conversation focus on what has changed since the previous visit.'
      ] },
      { id: 'drain-field-care', title: 'How to protect your septic drain field', paragraphs: [
        'Keep vehicles and heavy loads off the soil treatment area, and check proposed landscaping or construction against the system layout. Surface runoff also deserves attention: the drain field should not become the convenient destination for roof or yard drainage. Ask your provider about the arrangement at your property before changing it.',
        'Make the location clear to anyone working in the yard. If a delivery driver needs to turn around, give a safe route. If you hire a landscaper, show the drawing before machinery arrives. These conversations take a few minutes and avoid relying on someone to recognize a buried septic system from the grass.',
        'Do not decide that an area is available for building just because there is no visible lid there. Pipes, field lines and a reserved replacement area may all be shown on the installation records. Keep the original drawing available when discussing a fence, patio or driveway.'
      ] },
      { id: 'pumping-visit', title: 'What to ask before a septic tank pumping visit', paragraphs: [
        'When you call a service company, have the address, tank details and last report ready. Explain any access issues and whether the lids are buried. Ask what the quoted price includes: pumping, access work, disposal charges, inspection items and taxes. A clear written quote makes comparisons much easier.',
        'Before the appointment, arrange the access requested by the company and keep children and pets away from the work area. Leave lids secured until the provider handles them. If you have more than one tank, confirm that the quote covers the required work rather than assuming one price includes every component.',
        'Afterward, ask what was found and whether the service interval should change. Keep any repair recommendations with the report. If the report uses a term you do not understand, ask for a plain-language explanation before filing it away. You should know the next action and who is responsible for it.'
      ], links: [{ href: '/tools/septic-pumping-cost-calculator', label: 'Add up a septic pumping quote and extra charges' }] },
      { id: 'products-and-additives', title: 'Do septic tank additives replace pumping?', paragraphs: [
        'No. Do not replace a scheduled pumping visit with a bottle of septic treatment. A normally operating household system does not need additives to perform its basic job. Keep attention on service dates, household habits and any specific equipment instructions.',
        'When comparing products, ask what problem you are trying to solve. If the problem is an overdue tank, arrange service. If the problem is an alarm or repeated backup, describe the symptoms to a professional. Buying a product before identifying the problem can delay the visit that actually matters.',
        'Keep any product-specific question with the model information for your equipment. Advice for a conventional system may not answer a question about a treatment unit’s service requirements. The provider who knows the installation can help you distinguish routine use from something that needs a closer look.'
      ] },
      { id: 'records-and-reminders', title: 'Make a septic maintenance schedule you will remember', paragraphs: [
        'A useful septic maintenance schedule has a small number of clear entries. Record the last pumping date, the next recommended pumping window, any equipment inspection date and the provider’s contact details. Avoid using one vague reminder labeled “septic” if different jobs happen at different times.',
        'Our schedule tool lets you calculate dates, save the plan in your browser and download a calendar reminder. Use the same device when returning to a saved browser plan. Keep a separate copy of important reports so the whole service history does not depend on browser storage.',
        'At the next appointment, compare the old recommendation with the new report. Update the calendar immediately. If the provider says to return sooner, make that the new plan and write down why. A reminder works best when it reflects the latest information rather than becoming a date no one has reviewed.'
      ], links: [{ href: '/my-septic-schedule', label: 'Save your septic maintenance plan and download a reminder' }] }
    ],
    faqs: [
      { question: 'How often should a septic tank be pumped for a family of four?', answer: 'Household size is one factor, but the tank, water use and accumulated solids also matter. Use the service provider’s recommendation; EPA’s typical household pumping range is three to five years.' },
      { question: 'Can I maintain a septic system myself?', answer: 'You can manage water habits, keep records, protect the drain field and schedule service. Leave tank access, pumping, electrical work and system diagnosis to qualified professionals.' },
      { question: 'What if I do not know when my septic tank was last pumped?', answer: 'Look for receipts and ask the previous owner or service company. If the history remains unknown, arrange a professional assessment and start a documented schedule.' },
      { question: 'Is septic tank cleaning the same as pumping?', answer: 'Companies may use the terms differently. Ask what will be removed, which tanks are included, whether inspection is included and what appears on the service report.' },
      { question: 'Do I need to pump an unused septic tank every year?', answer: 'A calendar rule alone does not answer every unused-property situation. Tell the provider how the property is used and follow the system’s inspection and maintenance requirements.' }
    ],
    related: [{ href: '/guides/how-septic-system-works', label: 'Understand how your septic system works' }, { href: '/problems', label: 'Recognize septic problems before the next service date' }, { href: '/tools/septic-pumping-frequency-calculator', label: 'Calculate the next pumping window' }]
  },
  problems: {
    title: 'Septic Tank Problems: Smells, Slow Drains, Backups & Alarms',
    description: 'Find the next step for septic tank smells, gurgling toilets, slow drains, sewage backups, wet yards and septic alarms, with a clear homeowner checklist.',
    summary: 'Start with what you can observe: which drains are affected, where the smell is, whether an alarm is sounding and whether wastewater is backing up. Sewage indoors or surfacing outside needs prompt professional attention.',
    keywords: ['septic tank problems', 'septic tank smells', 'signs septic tank is full', 'septic tank backing up', 'septic alarm going off', 'gurgling toilet septic tank'],
    sourceIds: ['epa-failure', 'epa-faq', 'umn-care'],
    sections: [
      { id: 'first-steps', title: 'Septic tank problems: what should you do first?', paragraphs: [
        'When something goes wrong, start by describing the symptom rather than deciding which part has failed. “Both downstairs drains are slow” is more useful than “the septic tank is broken.” “There is a sewage smell near the back patio” is more useful than “the whole system needs replacing.” Specific observations give the service company a better starting point.',
        'If sewage is backing up indoors or appears to be surfacing outside, reduce wastewater use, keep people and pets away and arrange prompt professional help. Do not keep flushing toilets to test the system. Where a sewage release affects the property or nearby water, contact the local health or environmental department for guidance.',
        'For other symptoms, note when they started and whether they happen at one fixture or across the home. Keep the last service report nearby. Our septic troubleshooter can organize those observations and suggest a next step, while a service visit identifies what is happening at the property.'
      ], links: [{ href: '/tools/septic-troubleshooter', label: 'Check septic symptoms with the troubleshooter' }] },
      { id: 'symptom-table', title: 'Common septic problems at a glance', paragraphs: [
        'Use the table to decide what information to collect and how to explain it during a call. These symptoms can overlap. A slow sink and a wet yard on the same day deserve to be reported together, rather than treated as two unrelated problems.',
        'The last column is a next action, not a parts-shopping list. You do not need to know whether a baffle, pump or pipe is responsible before asking for help. The service provider can decide which checks are appropriate once the situation is clear.'
      ], table: { headers: ['What you notice', 'What to tell the provider', 'Next step'], rows: [
        ['Sewage backing up indoors', 'Which fixtures are affected and when it began', 'Reduce water use and arrange prompt help'],
        ['Possible sewage in the yard', 'Location and whether the area is accessible safely', 'Keep people away and contact a septic professional'],
        ['Septic alarm sounding', 'Visible light, display or label; time it started', 'Contact the equipment service provider'],
        ['Several slow drains', 'Whether toilets, showers and sinks are all affected', 'Arrange inspection if persistent'],
        ['Recurring sewage smell', 'Indoor or outdoor location and any other symptoms', 'Contact a plumber or septic provider'],
        ['Gurgling toilet', 'When it happens and which other fixtures are running', 'Report persistent or combined symptoms'],
        ['Problem after heavy rain', 'Rain timing, wet areas and changes in drain behavior', 'Discuss ground conditions and system checks']
      ] } },
      { id: 'septic-smell', title: 'Why does my septic tank smell outside or inside the house?', paragraphs: [
        'A sewage smell does not automatically prove that the drain field has failed. Plumbing ventilation and wastewater-system issues can both be relevant. The location of the smell and any accompanying symptoms help a professional decide what to check.',
        'When calling, say whether the smell is strongest in a bathroom, near a particular drain, near the tank area or around the drain field. Mention whether it is occasional or persistent. Also report slow drainage, gurgling, alarms or wet ground if you have noticed them.',
        'Do not climb onto a roof, open a tank or buy a chemical treatment simply because the smell seems to point in that direction. Ask a plumber or septic provider to evaluate the situation. A useful request is: “Please check the cause of the smell and tell me whether this is a plumbing issue, a septic service issue or something that needs further investigation.”',
        'Keep a short symptom log if the smell comes and goes. For example, record that it appeared after laundry on Saturday and again near the patio on Monday. A pattern is useful context, but you do not need to create a theory about wind, tank levels or soil before arranging the visit.'
      ] },
      { id: 'slow-drains', title: 'Slow drains with a septic system: one fixture or the whole house?', paragraphs: [
        'Start with the number of fixtures affected. A single slow bathroom sink is a different observation from toilets, showers and kitchen drains all struggling together. Tell the person you call which situation you have. Mention if the problem follows a particular activity, such as doing several loads of laundry.',
        'Do not treat every slow drain as proof that the tank needs pumping. The blockage may be in house plumbing, or the issue may require septic checks. Asking for the correct evaluation is more useful than booking a specific repair before the cause is known.',
        'If sewage begins backing up, the priority changes. Stop using the affected fixtures, reduce other wastewater use and arrange prompt help. Avoid repeatedly running water to see if the problem has gone away. Keep the observation short and let the provider guide the next step.'
      ] },
      { id: 'gurgling', title: 'Why is my toilet gurgling when I have a septic tank?', paragraphs: [
        'Gurgling is a symptom to describe, not a diagnosis by itself. Note which toilet or drain makes the sound and what is happening elsewhere in the home. Does it happen when the washing machine drains, when a shower runs or when another toilet flushes?',
        'A short description makes the service call easier: “The downstairs toilet gurgles when the washing machine empties, and the shower has been slow for two days.” This gives more useful context than “the toilet makes a strange noise.” If there is an alarm or sewage smell as well, include that in the same call.',
        'For a persistent sound or several affected fixtures, arrange a plumbing or septic assessment. If wastewater comes back through a drain, use the backup steps immediately. Do not let a familiar noise become something everyone ignores simply because it has happened before.'
      ] },
      { id: 'backup', title: 'Septic tank backing up into the house: act promptly', paragraphs: [
        'A sewage backup needs prompt attention. Reduce water use and keep people away from the affected area. Call a septic service provider or plumber and clearly say that wastewater is backing up indoors. That wording helps the company assess the urgency instead of treating the call as routine maintenance.',
        'Tell the provider when it started, which fixtures are affected and whether you have an alarm or outdoor wet area. Have the last pumping and repair reports ready if they are easy to reach. You do not need to locate or uncover the tank before making the call.',
        'Ask about both restoring the system and handling contamination. Cleanup and septic repair are separate tasks, and one company may not perform both. Local health guidance can help where sewage has entered living areas or affected the property. Do not mix household chemicals while trying to manage a contaminated area.',
        'After the urgent visit, get a written explanation of what was found and what follow-up remains. “Working now” is the immediate result; the report should also tell you whether there is a repair recommendation or a revised service schedule. File it where you can find it before the next appointment.'
      ] },
      { id: 'alarm', title: 'Septic alarm going off: what information should you collect?', paragraphs: [
        'An alarm is a reason to contact the service provider for the installed equipment. Read the visible label, display or indicator without opening an electrical enclosure. Record the time it started and whether household drains are working normally.',
        'Keep the alarm instructions beside the service number. If the manual provides a homeowner action, follow those instructions rather than advice for a different model found online. Silencing a sound is not the same as solving the underlying issue, so make the call even if the noise stops.',
        'Do not bypass controls, reset breakers repeatedly or handle exposed wiring. Explain any recent power interruption to the provider. Ask when the system can be used normally and whether a written follow-up report will be provided. This gives the household a clear plan while the equipment is being checked.'
      ] },
      { id: 'wet-yard-and-rain', title: 'Wet ground over the drain field or septic problems after heavy rain', paragraphs: [
        'Report an unusual wet or spongy area near the septic system, especially if it appears with smells, alarms or drainage trouble. Keep people and pets away if wastewater may be present. Observe from a safe position rather than walking through the area to investigate.',
        'Tell the provider about recent rain or flooding, but do not assume rain explains every symptom. A useful description includes when the wet area appeared, where it is compared with the layout, and whether the home’s drainage changed at the same time. Let the professional assess the system and ground conditions together.',
        'Do not book pumping solely because the yard is wet after a flood. Discuss the conditions first so the company can decide on the appropriate response. Keep heavy vehicles out of the area and avoid digging, covering the patch or rerouting water as an improvised repair.'
      ] },
      { id: 'full-tank-signs', title: 'What are the signs a septic tank is full?', paragraphs: [
        'People often use “full septic tank” to describe any septic trouble. A tank normally contains liquid, so the phrase can be confusing. Excess solids, a plumbing blockage, equipment trouble and drainage problems are different possibilities that need different checks.',
        'Slow drains, recurring smells, gurgling or backups can be reasons to arrange an assessment, but they do not tell you the cause on their own. Check the last service date and report the symptoms. Do not use the calendar to dismiss a current problem just because pumping was done recently.',
        'The most useful answer comes from a service report identifying what was found. Ask whether pumping is needed, whether another component requires work and what would happen if the recommended repair is delayed. You should be able to describe the next task clearly after the visit.'
      ], links: [{ href: '/tools/septic-pumping-frequency-calculator', label: 'Review your next planned pumping date' }] },
      { id: 'after-pumping', title: 'Septic problems after pumping: what should you ask?', paragraphs: [
        'If the original problem continues after pumping, contact the provider and explain what remains. Give the service date and describe whether the symptom improved briefly, changed or stayed exactly the same. Keep the invoice and report available during the call.',
        'Do not assume another pumping visit is the only answer. Ask what was checked at the first visit and whether the next step is a plumbing check, equipment inspection or broader system assessment. A precise follow-up request is: “The shower is still backing up after yesterday’s pumping. What should be checked next?”',
        'If sewage is backing up or surfacing, continue to treat it as urgent even though the tank was recently serviced. Once the immediate issue is addressed, request a written summary of the findings and keep it with the maintenance records.'
      ] },
      { id: 'service-call', title: 'A simple checklist before you call for septic help', paragraphs: [
        'Keep the call focused on observations, history and access. You can use the questions below as a note on your phone. Gather only what is safe and readily available; an urgent call should not wait while you search for every old receipt.',
        'Ask the company what the initial visit includes and how additional work will be quoted. If a price is offered, separate the call-out or inspection charge from pumping and repairs. Our cost calculator helps total a pumping quote, while repairs should have their own written scope.'
      ], bullets: ['What started happening, and when?', 'Is one drain affected, or are several fixtures involved?', 'Is wastewater backing up or possibly surfacing?', 'Is an alarm sounding, and what does the visible label show?', 'When was the last pumping or repair visit?', 'Has household water use, occupancy or weather changed?', 'What work and charges are included in the initial visit?', 'Who will provide the report and arrange follow-up?'], links: [{ href: '/tools/septic-pumping-cost-calculator', label: 'Check the total of a quoted pumping service' }] }
    ],
    faqs: [
      { question: 'Does a septic smell mean the tank needs pumping?', answer: 'Not always. Describe where the smell is and whether there are slow drains, wet ground or other symptoms. A plumber or septic provider can determine what checks and service are needed.' },
      { question: 'Will pumping fix a septic backup?', answer: 'Pumping may be part of the response, but a backup can require other plumbing or system work. Ask the provider what caused the problem and what follow-up is needed.' },
      { question: 'Can I use water while the septic alarm is going off?', answer: 'Reduce wastewater use and contact the equipment service provider for instructions. Follow the manual for your system and do not bypass the alarm or controls.' },
      { question: 'Why are my drains still slow after septic pumping?', answer: 'The remaining symptom needs follow-up. Tell the provider which drains are affected and when pumping was completed so they can decide whether plumbing, equipment or field checks are required.' },
      { question: 'Who should I call for septic problems?', answer: 'A local septic service provider is a starting point for system issues. A plumber may handle house drainage, and the local health or environmental department can advise on sewage releases and local requirements.' }
    ],
    related: [{ href: '/tools/septic-troubleshooter', label: 'Get a next step for your septic symptoms' }, { href: '/maintenance', label: 'Build a septic maintenance routine' }, { href: '/guides/how-septic-system-works', label: 'Learn what each part of the system does' }]
  }
};
