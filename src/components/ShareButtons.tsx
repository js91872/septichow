'use client';
import { useEffect, useState } from 'react';

export default function ShareButtons({ title, url }: { title: string; url: string }) {
  const [native, setNative] = useState(false);
  const [message, setMessage] = useState('');
  const [manual, setManual] = useState(false);
  useEffect(() => { setNative(typeof navigator.share === 'function'); }, []);
  async function copy() {
    try { await navigator.clipboard.writeText(url); setMessage('Link copied.'); setManual(false); }
    catch { setManual(true); setMessage('Select and copy the link below.'); }
  }
  async function share() {
    try { await navigator.share({ title, url }); }
    catch (error) { if (!(error instanceof Error) || error.name !== 'AbortError') await copy(); }
  }
  const encoded = encodeURIComponent(url);
  return <div className="share-panel" aria-label="Share this page">
    <span className="share-label">Share this page</span>
    <div className="share-actions">
      {native && <button type="button" onClick={share}>Share ↗</button>}
      <a href={'https://www.facebook.com/sharer/sharer.php?u=' + encoded} target="_blank" rel="noopener noreferrer" aria-label="Share this page on Facebook">Facebook</a>
      <a href={'https://twitter.com/intent/tweet?url=' + encoded + '&text=' + encodeURIComponent(title)} target="_blank" rel="noopener noreferrer" aria-label="Share this page on X">X</a>
      <a href={'https://wa.me/?text=' + encodeURIComponent(title + ' ' + url)} target="_blank" rel="noopener noreferrer" aria-label="Share this page on WhatsApp">WhatsApp</a>
      <a href={'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(title + '\n\n' + url)} aria-label="Share this page by email">Email</a>
      <button type="button" onClick={copy}>Copy link</button>
    </div>
    <span className="share-status" role="status" aria-live="polite">{message}</span>
    {manual && <input aria-label="Page link to copy" readOnly value={url} onFocus={event => event.currentTarget.select()} />}
  </div>;
}
