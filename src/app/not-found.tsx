import Link from 'next/link';

export default function Missing() {
  return (
    <div className="container page-body" style={{ maxWidth: 760, padding: '48px 20px', textAlign: 'center' }}>
      <div className="eyebrow" style={{ color: '#c88a60', fontWeight: 'bold' }}>404 · PAGE NOT FOUND</div>
      <h1 style={{ fontSize: '2.5rem', margin: '16px 0', color: '#315d48' }}>That page isn’t here.</h1>
      <p style={{ fontSize: '1.2rem', color: '#55665d', marginBottom: '32px' }}>
        The link you followed may have changed, or the page address might be typed incorrectly. Let’s get you back to a helpful starting point.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
        <Link className="button" href="/tools">Explore free calculators <span>→</span></Link>
        <Link className="button secondary" href="/tools/septic-troubleshooter">Diagnose a problem</Link>
        <Link className="button secondary" href="/maintenance">Maintenance plan</Link>
      </div>
      <div className="article tool-reading" style={{ textAlign: 'left', marginTop: '32px' }}>
        <h2>Popular homeowner resources:</h2>
        <ul>
          <li><Link href="/tools/septic-tank-size-calculator">Septic Tank Size Calculator</Link> — What size tank do you need?</li>
          <li><Link href="/tools/septic-pumping-frequency-calculator">Pumping Frequency Calculator</Link> — When to pump next</li>
          <li><Link href="/tools/septic-pumping-cost-calculator">Pumping Cost Calculator</Link> — Estimate your service quote</li>
          <li><Link href="/guides">All Septic Homeowner Guides</Link> — How it works, repair options, inspection costs</li>
          <li><Link href="/">Back to SepticHow Homepage</Link></li>
        </ul>
      </div>
    </div>
  );
}
