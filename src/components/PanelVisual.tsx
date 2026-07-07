import {HelmMark} from './Site';

/** Product visual: mock Helm scan report — the thing a lead actually receives. */
export default function PanelVisual({domain = 'acme-mfg.com'}: {domain?: string}) {
  return (
    <div className="panel-visual report observe d1">
      <div className="rv-head">
        <span className="rv-brand">
          <HelmMark size={18} /> Helm Scan Report
        </span>
        <span className="rv-domain">{domain}</span>
      </div>

      <div className="rv-score">
        <svg viewBox="0 0 96 96" aria-hidden>
          <circle cx="48" cy="48" r="40" stroke="rgba(76,141,255,0.18)" strokeWidth="8" fill="none" />
          <circle
            className="rv-ring"
            cx="48"
            cy="48"
            r="40"
            stroke="#4C8DFF"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="251"
            strokeDashoffset="251"
            transform="rotate(-90 48 48)"
          />
          <text x="48" y="44" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700">
            68
          </text>
          <text x="48" y="62" textAnchor="middle" fill="rgba(235,240,250,0.55)" fontSize="9">
            / 100
          </text>
        </svg>
        <div>
          <div className="rv-score-label">Email exposure score</div>
          <div className="rv-score-sub">3 findings need attention</div>
        </div>
      </div>

      <ul className="rv-rows">
        <li>
          <span className="rv-badge ok">✓</span> SPF record valid
        </li>
        <li>
          <span className="rv-badge ok">✓</span> MX records healthy
        </li>
        <li>
          <span className="rv-badge warn">!</span> DMARC not enforced — spoofing possible
        </li>
        <li>
          <span className="rv-badge warn">!</span> Lookalike domain registered last month
        </li>
        <li>
          <span className="rv-badge warn">!</span> 4 employee emails in breach data
        </li>
      </ul>

      <div className="rv-foot">Delivered in plain English, within 24 hours.</div>
    </div>
  );
}
