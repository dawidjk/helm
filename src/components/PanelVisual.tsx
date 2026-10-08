import './ScanPreview.css';

/** Illustrative public-scan fields, matching the portal's score and finding model. */
export default function PanelVisual() {
  return (
    <figure className="scan-preview">
      <figcaption>
        <h3>Scan report preview</h3>
        <p>Illustrative example for example.org. No customer data or actual scan result.</p>
      </figcaption>
      <dl className="scan-preview-summary">
        <div><dt>Domain</dt><dd>example.org</dd></div>
        <div><dt>Email security score</dt><dd>Calculated from recorded checks, out of 100</dd></div>
      </dl>
      <div className="scan-preview-finding">
        <span className="scan-preview-severity">High · example finding</span>
        <h4>DMARC policy set to monitor only</h4>
        <p>A published <code>p=none</code> policy does not request quarantine or rejection for messages that fail DMARC.</p>
        <p><strong>Impact:</strong> Other receiver controls may still block suspicious mail. DNS records alone do not show what reaches an inbox.</p>
        <p><strong>Next step:</strong> Ask your mail administrator to review legitimate senders before changing the policy.</p>
      </div>
      <p className="scan-preview-limit">Public configuration only. The scan does not assess your internal controls or determine compliance.</p>
    </figure>
  );
}
