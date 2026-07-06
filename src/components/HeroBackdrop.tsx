import {useEffect, useMemo, useRef} from 'react';

export type BackdropKind = 'cyber' | 'aero' | 'skyline' | 'construction';

/* ------------------------------------------------------------------ */
/* cyber — drifting network of nodes + linking lines (canvas)          */
/* ------------------------------------------------------------------ */

function CyberCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const N = Math.min(90, Math.floor((w * h) / 16000));
    const nodes = Array.from({length: N}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 1 + Math.random() * 1.6,
    }));

    const LINK = 150;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20) n.x = w + 20;
          if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          if (n.y > h + 20) n.y = -20;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(76, 141, 255, ${0.16 * (1 - d / LINK)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(120, 168, 255, 0.55)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();

    const obs = new ResizeObserver(resize);
    obs.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="backdrop-canvas" aria-hidden />;
}

/* ------------------------------------------------------------------ */
/* aero — blueprint line-draw of an aircraft over a drafting grid      */
/* ------------------------------------------------------------------ */

function AeroSvg() {
  return (
    <svg className="backdrop-svg aero" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g className="bp-draw" stroke="#4C8DFF" fill="none" strokeWidth="1.6">
        {/* fuselage (top view) */}
        <path d="M600 90 C 588 130 584 190 584 260 L 584 430 C 584 470 590 505 600 525 C 610 505 616 470 616 430 L 616 260 C 616 190 612 130 600 90 Z" />
        {/* main wings */}
        <path d="M584 265 L 240 400 L 240 428 L 584 340" />
        <path d="M616 265 L 960 400 L 960 428 L 616 340" />
        {/* tailplane */}
        <path d="M588 470 L 470 528 L 470 546 L 590 506" />
        <path d="M612 470 L 730 528 L 730 546 L 610 506" />
        {/* engines */}
        <path d="M418 348 l 0 46 m 26 -56 l 0 46" />
        <path d="M782 348 l 0 46 m -26 -56 l 0 46" />
        {/* centerline + dimension marks */}
        <path strokeDasharray="6 8" strokeWidth="1" d="M600 40 L 600 570" />
        <path strokeWidth="1" d="M200 470 L 1000 470 M200 462 l 0 16 M1000 462 l 0 16" />
      </g>
      <g className="bp-labels" fill="#4C8DFF" fontSize="11" fontFamily="ui-monospace, monospace" opacity="0.5">
        <text x="590" y="586">42.6m</text>
        <text x="964" y="416">HLM-01</text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* skyline — parallax city silhouettes with twinkling windows          */
/* ------------------------------------------------------------------ */

function mulberry(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function SkylineSvg() {
  const {far, near, windows} = useMemo(() => {
    const rnd = mulberry(7);
    const far: {x: number; w: number; h: number}[] = [];
    const near: {x: number; w: number; h: number}[] = [];
    let x = -40;
    while (x < 1400) {
      const w = 34 + rnd() * 52;
      far.push({x, w, h: 90 + rnd() * 200});
      x += w + 6;
    }
    x = -60;
    while (x < 1450) {
      const w = 52 + rnd() * 90;
      near.push({x, w, h: 150 + rnd() * 260});
      x += w + 12;
    }
    const windows: {x: number; y: number; d: number}[] = [];
    for (const b of near) {
      const cols = Math.floor(b.w / 16);
      const rows = Math.floor(b.h / 26);
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          if (rnd() < 0.16) {
            windows.push({x: b.x + 8 + c * 16, y: 600 - b.h + 14 + r * 26, d: rnd() * 8});
          }
        }
      }
    }
    return {far, near, windows};
  }, []);

  return (
    <svg className="backdrop-svg skyline" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g className="layer-far" fill="rgba(76,141,255,0.10)">
        {far.map((b, i) => (
          <rect key={i} x={b.x} y={600 - b.h - 60} width={b.w} height={b.h + 60} />
        ))}
      </g>
      <g className="layer-near" fill="rgba(18,30,54,0.9)" stroke="rgba(76,141,255,0.18)" strokeWidth="1">
        {near.map((b, i) => (
          <rect key={i} x={b.x} y={600 - b.h} width={b.w} height={b.h} />
        ))}
        {windows.map((wd, i) => (
          <rect
            key={`w${i}`}
            className="twinkle"
            style={{animationDelay: `${wd.d}s`}}
            x={wd.x}
            y={wd.y}
            width="5"
            height="7"
            fill="#8db4ff"
            stroke="none"
          />
        ))}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* construction — datacenter hall assembling in isometric modules      */
/* ------------------------------------------------------------------ */

function IsoBlock({x, y, i}: {x: number; y: number; i: number}) {
  // simple isometric cube: top, left, right faces
  return (
    <g className="iso-block" style={{animationDelay: `${(i % 12) * 0.55}s`}} transform={`translate(${x} ${y})`}>
      <path d="M0 20 L40 0 L80 20 L40 40 Z" fill="rgba(76,141,255,0.16)" stroke="rgba(76,141,255,0.45)" strokeWidth="1" />
      <path d="M0 20 L40 40 L40 86 L0 66 Z" fill="rgba(14,24,44,0.9)" stroke="rgba(76,141,255,0.3)" strokeWidth="1" />
      <path d="M80 20 L40 40 L40 86 L80 66 Z" fill="rgba(24,40,72,0.9)" stroke="rgba(76,141,255,0.3)" strokeWidth="1" />
      <path d="M46 48 l26 -13 M46 58 l26 -13 M46 68 l26 -13" stroke="rgba(120,168,255,0.5)" strokeWidth="1.4" fill="none" />
    </g>
  );
}

function ConstructionSvg() {
  const blocks: {x: number; y: number}[] = [];
  const originX = 380;
  const originY = 210;
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) {
      blocks.push({
        x: originX + col * 44 - row * 44,
        y: originY + col * 22 + row * 22,
      });
    }
  }
  return (
    <svg className="backdrop-svg construction" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {/* crane */}
      <g stroke="rgba(76,141,255,0.4)" strokeWidth="2" fill="none">
        <path d="M950 560 L950 120 M950 120 L690 150 M950 120 L1100 140 M905 560 L995 560" />
        <path d="M950 120 L905 180 M950 120 L995 180" strokeWidth="1.2" />
        <path className="crane-cable" d="M760 143 L760 300" strokeWidth="1.2" />
        <path d="M748 300 l24 0 l0 14 l-24 0 Z" fill="rgba(76,141,255,0.2)" />
      </g>
      <g>
        {blocks.map((b, i) => (
          <IsoBlock key={i} x={b.x} y={b.y} i={i} />
        ))}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export default function HeroBackdrop({kind}: {kind: BackdropKind}) {
  return (
    <div className={`hero-backdrop ${kind}`} aria-hidden>
      {kind === 'cyber' && <CyberCanvas />}
      {kind === 'aero' && <AeroSvg />}
      {kind === 'skyline' && <SkylineSvg />}
      {kind === 'construction' && <ConstructionSvg />}
    </div>
  );
}
