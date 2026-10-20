#!/usr/bin/env python3
import os
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = '/home/jaspal/septichow-git/public/images'
os.makedirs(OUT_DIR, exist_ok=True)

FONT_BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
FONT_REG = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'

font_eyebrow = ImageFont.truetype(FONT_BOLD, 15)
font_title = ImageFont.truetype(FONT_BOLD, 42)
font_sub = ImageFont.truetype(FONT_REG, 22)
font_card_head = ImageFont.truetype(FONT_BOLD, 20)
font_card_text = ImageFont.truetype(FONT_REG, 17)
font_brand = ImageFont.truetype(FONT_BOLD, 20)
font_tag = ImageFont.truetype(FONT_BOLD, 14)

def draw_base_card(eyebrow, title, subtitle):
    im = Image.new('RGB', (1200, 630), color='#faf9f5')
    draw = ImageDraw.Draw(im)
    
    # Background decorative circles & panels
    draw.ellipse([980, -50, 1280, 250], fill='#edf3e6')
    draw.rounded_rectangle([48, 200, 1152, 582], radius=24, fill='#edf3e6')
    draw.rectangle([48, 430, 1152, 582], fill='#e6dbc6')
    draw.line([48, 430, 1152, 430], fill='#86a277', width=4)
    
    # Header copy
    draw.text((60, 50), eyebrow.upper(), font=font_eyebrow, fill='#315d48')
    draw.text((60, 85), title, font=font_title, fill='#315d48')
    draw.text((60, 145), subtitle, font=font_sub, fill='#65756c')
    
    # Brand watermark
    draw.text((1000, 595), "SepticHow.", font=font_brand, fill='#315d48')
    return im, draw

# 1. Pumping Cost
def make_pumping_cost_image():
    im, draw = draw_base_card(
        "Price & Quote Guide",
        "Septic Tank Pumping Cost",
        "Compare base pumping fees, lid digging charges, dumping fees and quotes"
    )
    # Diagram: Left panel (Quote breakdown), Right panel (Pumper truck & Tank)
    # Left itemized card
    draw.rounded_rectangle([70, 230, 560, 550], radius=16, fill='#ffffff', outline='#779578', width=2)
    draw.rounded_rectangle([70, 230, 560, 290], radius=16, fill='#315d48')
    draw.rectangle([70, 260, 560, 290], fill='#315d48')
    draw.text((95, 248), "ITEMIZED PUMPING QUOTE", font=font_card_head, fill='#ffffff')
    
    items = [
        ("Base Tank Pumping (1,000 gal)", "$350 – $550"),
        ("Lid Locating / Digging Fee", "$50 – $175"),
        ("Municipal Waste Disposal Fee", "$40 – $120"),
        ("Extended Hose Run (>75 ft)", "$50 – $100"),
        ("Effluent Filter Rinsing", "Included / $35"),
        ("Estimated Routine Total", "$400 – $650")
    ]
    y = 310
    for label, price in items:
        is_total = "Total" in label
        f = font_card_head if is_total else font_card_text
        c = '#1a3d2c' if is_total else '#33443b'
        if is_total:
            draw.line([90, y - 5, 540, y - 5], fill='#315d48', width=2)
        draw.text((95, y), label, font=f, fill=c)
        draw.text((420, y), price, font=f, fill=c)
        y += 38

    # Right visual: Tank + Pumper connection
    draw.rounded_rectangle([610, 230, 1110, 550], radius=16, fill='#ffffff', outline='#779578', width=2)
    draw.rounded_rectangle([610, 230, 1110, 290], radius=16, fill='#477b52')
    draw.rectangle([610, 260, 1110, 290], fill='#477b52')
    draw.text((635, 248), "WHAT CHANGES THE FINAL BILL?", font=font_card_head, fill='#ffffff')
    
    factors = [
        ("✓ Tank Capacity", "1,000 vs 1,500 gallon tanks"),
        ("✓ Lid Accessibility", "Surface risers vs deep buried lids"),
        ("✓ Truck Parking Distance", "Hose length from driveway to tank"),
        ("✓ Disposal Rates", "Local municipal treatment dump fees"),
        ("✓ Emergency Dispatch", "Same-day weekend/holiday surcharge")
    ]
    y = 310
    for title, desc in factors:
        draw.text((635, y), title, font=font_card_head, fill='#315d48')
        draw.text((635, y + 22), desc, font=font_card_text, fill='#55665d')
        y += 46

    im.save(os.path.join(OUT_DIR, 'septic-tank-pumping-cost.webp'), 'WEBP', quality=92)
    print("Generated septic-tank-pumping-cost.webp")

# 2. Installation Cost
def make_installation_cost_image():
    im, draw = draw_base_card(
        "Cost & System Planning Guide",
        "New Septic System Installation Cost",
        "Soil perc testing, engineering, permits, tank types and drain fields"
    )
    # Left panel: System Type Comparison
    draw.rounded_rectangle([70, 230, 570, 550], radius=16, fill='#ffffff', outline='#779578', width=2)
    draw.rounded_rectangle([70, 230, 570, 290], radius=16, fill='#315d48')
    draw.rectangle([70, 260, 570, 290], fill='#315d48')
    draw.text((95, 248), "SYSTEM COST COMPARISON", font=font_card_head, fill='#ffffff')
    
    systems = [
        ("Conventional Gravity System", "Standard soil & slope"),
        ("Plastic Chamber Field System", "Faster install & compact"),
        ("Engineered Mound System", "High water table / clay soil"),
        ("Aerobic Treatment Unit (ATU)", "Advanced biological treatment"),
        ("Tank-Only Replacement", "When existing field is sound")
    ]
    y = 310
    for name, note in systems:
        draw.text((95, y), "• " + name, font=font_card_head, fill='#1a3d2c')
        draw.text((115, y + 22), note, font=font_card_text, fill='#55665d')
        y += 46

    # Right panel: Project Scope Breakdown
    draw.rounded_rectangle([610, 230, 1110, 550], radius=16, fill='#ffffff', outline='#779578', width=2)
    draw.rounded_rectangle([610, 230, 1110, 290], radius=16, fill='#477b52')
    draw.rectangle([610, 260, 1110, 290], fill='#477b52')
    draw.text((635, 248), "TYPICAL ESTIMATE LINE ITEMS", font=font_card_head, fill='#ffffff')
    
    stages = [
        ("1. Soil Perc Test & Engineering", "Determines approved system type"),
        ("2. County Health Dept Permits", "Site evaluation and inspections"),
        ("3. Tank, Delivery & Excavation", "Concrete or polyethylene tank"),
        ("4. Leach Field Lines / Chambers", "Gravel bed or chamber modules"),
        ("5. Backfill, Compaction & Grading", "Final inspection sign-off")
    ]
    y = 310
    for stage, note in stages:
        draw.text((635, y), stage, font=font_card_head, fill='#315d48')
        draw.text((635, y + 22), note, font=font_card_text, fill='#55665d')
        y += 46

    im.save(os.path.join(OUT_DIR, 'septic-system-installation-cost.webp'), 'WEBP', quality=92)
    print("Generated septic-system-installation-cost.webp")

# 3. Filter Cleaning
def make_filter_cleaning_image():
    im, draw = draw_base_card(
        "Preventive Maintenance Guide",
        "How to Clean a Septic Tank Filter",
        "Step-by-step DIY effluent filter rinsing, cleaning schedule & safety rules"
    )
    # Left panel: Cleaning Steps
    draw.rounded_rectangle([70, 230, 580, 550], radius=16, fill='#ffffff', outline='#779578', width=2)
    draw.rounded_rectangle([70, 230, 580, 290], radius=16, fill='#315d48')
    draw.rectangle([70, 260, 580, 290], fill='#315d48')
    draw.text((95, 248), "STEP-BY-STEP FILTER CLEANING", font=font_card_head, fill='#ffffff')
    
    steps = [
        ("1. Remove Outlet Riser Lid", "Located over the tank outlet baffle"),
        ("2. Check Liquid Operating Level", "High liquid indicates filter clog"),
        ("3. Pull Filter Straight Up", "Keep directly over open tank opening"),
        ("4. Spray Clean with Garden Hose", "Wash all solids back into the tank"),
        ("5. Inspect Mesh & Reseat Firmly", "Ensure correct alignment & secure lid")
    ]
    y = 310
    for s_title, s_desc in steps:
        draw.text((95, y), s_title, font=font_card_head, fill='#1a3d2c')
        draw.text((95, y + 22), s_desc, font=font_card_text, fill='#55665d')
        y += 46

    # Right panel: Vital Safety & Schedule
    draw.rounded_rectangle([620, 230, 1110, 550], radius=16, fill='#ffffff', outline='#779578', width=2)
    draw.rounded_rectangle([620, 230, 1110, 290], radius=16, fill='#477b52')
    draw.rectangle([620, 260, 1110, 290], fill='#477b52')
    draw.text((645, 248), "SAFETY RULES & FREQUENCY", font=font_card_head, fill='#ffffff')
    
    rules = [
        ("Clean Every 6 to 12 Months", "Protects drain field from solids"),
        ("Wear Heavy Rubber Gloves & Eye PPE", "Biohazard wastewater protection"),
        ("Never Lean Into or Enter Tank", "Confined space toxic gas hazard"),
        ("Keep Filter Over Tank While Rinsing", "Never rinse sewage onto the lawn"),
        ("Signs of Clogged Filter", "Slow drains or high-water alarm")
    ]
    y = 310
    for r_title, r_desc in rules:
        draw.text((645, y), "• " + r_title, font=font_card_head, fill='#315d48')
        draw.text((665, y + 22), r_desc, font=font_card_text, fill='#55665d')
        y += 46

    im.save(os.path.join(OUT_DIR, 'septic-tank-filter-cleaning.webp'), 'WEBP', quality=92)
    print("Generated septic-tank-filter-cleaning.webp")

# 4. Backing Up After Rain
def make_backing_up_after_rain_image():
    im, draw = draw_base_card(
        "Emergency Troubleshooting",
        "Septic Tank Backing Up After Heavy Rain",
        "Immediate steps, saturated drain fields, and why you must NOT pump a flooded tank"
    )
    # Left panel: Immediate Actions
    draw.rounded_rectangle([70, 230, 580, 550], radius=16, fill='#ffffff', outline='#779578', width=2)
    draw.rounded_rectangle([70, 230, 580, 290], radius=16, fill='#b23b2a')
    draw.rectangle([70, 260, 580, 290], fill='#b23b2a')
    draw.text((95, 248), "IMMEDIATE EMERGENCY ACTIONS", font=font_card_head, fill='#ffffff')
    
    actions = [
        ("1. Cut Indoor Water Use by 90%", "Pause laundry, dishwashers & long showers"),
        ("2. Avoid Contact with Backup Water", "Pathogen hazard; wear protective boots/gloves"),
        ("3. Silence Alarm if Sounding", "Use exterior acknowledge button; note lights"),
        ("4. Keep People & Pets Off Yard", "Saturated ground may hold surfacing effluent"),
        ("5. Check Lowest House Fixtures", "Basement drains & ground-floor showers")
    ]
    y = 310
    for a_title, a_desc in actions:
        draw.text((95, y), a_title, font=font_card_head, fill='#1a3d2c')
        draw.text((95, y + 22), a_desc, font=font_card_text, fill='#55665d')
        y += 46

    # Right panel: Critical Warning & Root Causes
    draw.rounded_rectangle([620, 230, 1110, 550], radius=16, fill='#ffffff', outline='#779578', width=2)
    draw.rounded_rectangle([620, 230, 1110, 290], radius=16, fill='#315d48')
    draw.rectangle([620, 260, 1110, 290], fill='#315d48')
    draw.text((645, 248), "CRITICAL WARNING & CAUSES", font=font_card_head, fill='#ffffff')
    
    warnings = [
        ("DO NOT PUMP A FLOODED TANK!", "Empty tanks can float & snap buried pipes"),
        ("Saturated Soil Cannot Absorb", "Effluent has nowhere to go until ground dries"),
        ("Surface Runoff Infiltration", "Rain entering unsealed lids or inspection ports"),
        ("Wait Until Ground Water Recedes", "Test drainage after soil dries before repairs"),
        ("Long-Term Fix: Divert Drainage", "Reroute downspouts & install curtain drains")
    ]
    y = 310
    for w_title, w_desc in warnings:
        c = '#b23b2a' if "DO NOT" in w_title else '#315d48'
        draw.text((645, y), "⚠ " + w_title, font=font_card_head, fill=c)
        draw.text((665, y + 22), w_desc, font=font_card_text, fill='#55665d')
        y += 46

    im.save(os.path.join(OUT_DIR, 'septic-tank-backing-up-after-rain.webp'), 'WEBP', quality=92)
    print("Generated septic-tank-backing-up-after-rain.webp")

if __name__ == '__main__':
    make_pumping_cost_image()
    make_installation_cost_image()
    make_filter_cleaning_image()
    make_backing_up_after_rain_image()
