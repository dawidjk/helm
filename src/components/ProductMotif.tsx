export type MotifKind = 'core' | 'command' | 'mail' | 'aware' | 'ready' | 'watch' | 'lane-mfg' | 'lane-pro' | 'lane-con';

/** Static line-art motifs for product tiles: quiet, legible, and theme-aware. */
export default function ProductMotif({kind}: {kind: MotifKind}) {
  return (
    <div className="tile-motif" aria-hidden>
      {kind === 'core' && (
        <svg viewBox="0 0 200 96" fill="none">
          <circle cx="100" cy="48" r="30" stroke="var(--motif-line)" strokeWidth="1.6" />
          <circle cx="100" cy="48" r="18" stroke="var(--motif-muted-accent)" strokeWidth="1.4" />
          <circle cx="100" cy="48" r="6" fill="var(--motif-accent)" />
          <g fill="var(--motif-surface)" stroke="var(--motif-line)" strokeWidth="1.4">
            <circle cx="100" cy="13" r="5" />
            <circle cx="135" cy="48" r="5" />
            <circle cx="100" cy="83" r="5" />
            <circle cx="65" cy="48" r="5" />
          </g>
        </svg>
      )}
      {kind === 'command' && (
        <svg viewBox="0 0 200 96" fill="none">
          <circle cx="100" cy="48" r="31" stroke="var(--motif-line)" strokeWidth="1.6" />
          <circle cx="100" cy="48" r="7" fill="var(--motif-accent)" />
          <g stroke="var(--motif-line)" strokeWidth="1.6" strokeLinecap="round">
            <path d="M100 12 V30 M100 66 V84 M64 48 H82 M118 48 H136" />
            <path d="M75 23 L88 36 M112 60 L125 73 M125 23 L112 36 M88 60 L75 73" />
          </g>
          <path d="M100 48 L124 34" stroke="var(--motif-accent)" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="142" cy="48" r="5" fill="var(--motif-surface)" stroke="var(--motif-line)" strokeWidth="1.6" />
        </svg>
      )}
      {kind === 'mail' && (
        <svg viewBox="0 0 200 96" fill="none">
          <rect x="52" y="18" width="96" height="62" rx="8" stroke="var(--motif-line)" strokeWidth="1.6" />
          <path d="M56 24 L100 56 L144 24" stroke="var(--motif-line)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <line className="scan-line" x1="52" y1="30" x2="148" y2="30" stroke="var(--motif-accent)" strokeWidth="1.2" />
          <g>
            <circle cx="148" cy="70" r="15" fill="var(--motif-surface)" stroke="var(--motif-line)" strokeWidth="1.6" />
            <path d="M142 70 l4.5 4.5 L155 65" stroke="var(--motif-line)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      )}
      {kind === 'aware' && (
        <svg viewBox="0 0 200 96" fill="none">
          <circle className="sonar s1" cx="100" cy="48" r="14" stroke="var(--motif-line)" strokeWidth="1.6" />
          <circle className="sonar s2" cx="100" cy="48" r="26" stroke="var(--motif-line)" strokeWidth="1.2" />
          <circle className="sonar s3" cx="100" cy="48" r="38" stroke="var(--motif-line)" strokeWidth="0.9" />
          <circle cx="100" cy="48" r="4" fill="var(--motif-accent)" />
          <path className="wave" d="M20 48 h28 l6 -14 l8 28 l6 -14 h20" stroke="var(--motif-accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path className="wave w2" d="M132 48 h20 l6 -14 l8 28 l6 -14 h8" stroke="var(--motif-accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {kind === 'ready' && (
        <svg viewBox="0 0 200 96" fill="none">
          <circle cx="100" cy="48" r="34" stroke="var(--motif-muted)" strokeWidth="5" />
          <circle
            className="gauge"
            cx="100"
            cy="48"
            r="34"
            stroke="var(--motif-line)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="214"
            strokeDashoffset="32"
            transform="rotate(-90 100 48)"
          />
          <path d="M88 48 l8 8 L116 36" stroke="var(--motif-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <g stroke="var(--motif-muted-accent)" strokeWidth="1.4" strokeLinecap="round">
            <path d="M150 32 h28 M150 48 h28 M150 64 h20" />
          </g>
        </svg>
      )}
      {kind === 'watch' && (
        <svg viewBox="0 0 200 96" fill="none">
          <path
            d="M38 48 C64 18, 136 18, 162 48 C136 78, 64 78, 38 48 Z"
            stroke="var(--motif-line)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="100" cy="48" r="13" stroke="var(--motif-line)" strokeWidth="1.6" />
          <circle cx="100" cy="48" r="4" fill="var(--motif-accent)" />
          <circle className="sonar s1" cx="100" cy="48" r="13" stroke="var(--motif-line)" strokeWidth="1.2" />
          <circle className="sonar s2" cx="100" cy="48" r="13" stroke="var(--motif-line)" strokeWidth="0.9" />
          <g>
            <circle cx="148" cy="70" r="15" fill="var(--motif-surface)" stroke="var(--motif-line)" strokeWidth="1.6" />
            <line x1="148" y1="70" x2="148" y2="61" stroke="var(--motif-accent)" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="148" y1="70" x2="154" y2="70" stroke="var(--motif-accent)" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        </svg>
      )}
      {kind === 'lane-mfg' && (
        <svg viewBox="0 0 200 96" fill="none" stroke="var(--motif-line)" strokeWidth="1.4">
          <path d="M100 14 c-4 12 -5 28 -5 44 l0 18 c0 6 2 10 5 12 c3 -2 5 -6 5 -12 l0 -18 c0 -16 -1 -32 -5 -44 Z" />
          <path d="M95 42 L44 62 l0 7 L95 54" />
          <path d="M105 42 L156 62 l0 7 L105 54" />
          <path d="M96 74 l-18 9 l0 5 l18 -7 M104 74 l18 9 l0 5 l-18 -7" />
        </svg>
      )}
      {kind === 'lane-pro' && (
        <svg viewBox="0 0 200 96" fill="none" stroke="var(--motif-line)" strokeWidth="1.4">
          <path d="M40 82 l0 -34 l16 0 l0 34 M64 82 l0 -50 l18 0 l0 50 M90 82 l0 -26 l14 0 l0 26 M112 82 l0 -44 l18 0 l0 44 M138 82 l0 -60 l20 0 l0 60" />
          <line x1="30" y1="82" x2="170" y2="82" />
          <g fill="var(--motif-accent)" stroke="none">
            <rect x="68" y="38" width="3" height="4" />
            <rect x="143" y="30" width="3" height="4" />
            <rect x="118" y="46" width="3" height="4" />
          </g>
        </svg>
      )}
      {kind === 'lane-con' && (
        <svg viewBox="0 0 200 96" fill="none" stroke="var(--motif-line)" strokeWidth="1.4">
          <path d="M60 82 L60 40 L100 22 L140 40 L140 82 Z" />
          <path d="M60 40 L100 58 L140 40 M100 58 L100 82" />
          <path d="M148 82 L148 14 M148 14 L108 20 M148 14 L172 18" strokeWidth="1.2" />
          <path d="M72 66 h16 M72 72 h16 M112 66 h16 M112 72 h16" stroke="var(--motif-accent)" strokeWidth="1.2" />
        </svg>
      )}
    </div>
  );
}
