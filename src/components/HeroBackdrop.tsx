import {useEffect, useMemo, useRef} from 'react';

export type BackdropKind = 'cyber' | 'aero' | 'skyline' | 'construction' | 'rain';

/* ------------------------------------------------------------------ */
/* rain — raindrop ripples spreading across a perfectly still surface  */
/* ------------------------------------------------------------------ */

function RainCanvas() {
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

    // the "water" occupies the band below the horizon
    const HORIZON = 0.3;

    type Drop = {x: number; y: number; r: number; max: number; speed: number; born: number};
    const drops: Drop[] = [];
    let nextDrop = 0;

    const spawn = (now: number) => {
      const depth = Math.random(); // 0 = far (horizon), 1 = near (bottom)
      const y = h * (HORIZON + 0.06 + depth * (1 - HORIZON - 0.12));
      drops.push({
        x: w * (0.05 + Math.random() * 0.9),
        y,
        r: 0,
        // nearer drops read larger and spread further (perspective)
        max: 30 + depth * 160,
        speed: 0.55 + depth * 1.15,
        born: now,
      });
      if (drops.length > 26) drops.shift();
    };

    const drawRipple = (d: Drop) => {
      const depth = (d.y - h * HORIZON) / (h * (1 - HORIZON));
      const squash = 0.18 + depth * 0.2; // flatter far away, rounder up close
      const fade = 1 - d.r / d.max;
      if (fade <= 0) return;
      for (let k = 0; k < 3; k++) {
        const rr = d.r - k * (6 + depth * 10);
        if (rr <= 0) continue;
        ctx.strokeStyle = `rgba(96, 154, 255, ${(0.34 - k * 0.09) * fade})`;
        ctx.lineWidth = 1.5 - k * 0.4;
        ctx.beginPath();
        ctx.ellipse(d.x, d.y, rr, rr * squash, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      // glint at the point of impact while the ripple is young
      if (d.r < d.max * 0.25) {
        ctx.fillStyle = `rgba(200, 220, 255, ${0.7 * (1 - d.r / (d.max * 0.25))})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (reduced) {
      // static scene: a handful of frozen ripples
      const now = 0;
      for (let i = 0; i < 6; i++) {
        spawn(now);
        drops[drops.length - 1].r = drops[drops.length - 1].max * (0.2 + 0.1 * i);
      }
      drops.forEach(drawRipple);
    } else {
      const draw = (now: number) => {
        ctx.clearRect(0, 0, w, h);
        if (now > nextDrop) {
          nextDrop = now + 420 + Math.random() * 680;
          spawn(now);
        }
        for (let i = drops.length - 1; i >= 0; i--) {
          const d = drops[i];
          d.r += d.speed;
          if (d.r >= d.max) {
            drops.splice(i, 1);
            continue;
          }
          drawRipple(d);
        }
        raf = requestAnimationFrame(draw);
      };
      // pre-seed so the surface is already alive on load
      for (let i = 0; i < 8; i++) {
        spawn(0);
        drops[drops.length - 1].r = Math.random() * drops[drops.length - 1].max * 0.8;
      }
      draw(performance.now());
    }

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
/* cyber: flowing energy field: layered waves + expanding ripples      */
/* ------------------------------------------------------------------ */

function EnergyCanvas() {
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

    type Ripple = {x: number; y: number; r: number; max: number; speed: number};
    const ripples: Ripple[] = [];
    let nextRipple = 0;

    const WAVES = 28;
    // pre-seed the clock so waves + particles start mid-flow, not at t=0
    const T0 = 90_000 + Math.random() * 60_000;
    const waveY = (i: number, x: number, time: number) => {
      const base = h * (0.16 + (i / WAVES) * 0.72);
      return (
        base +
        Math.sin(x * 0.0038 + time * 0.00042 + i * 1.7) * 26 +
        Math.sin(x * 0.0016 - time * 0.00028 + i * 0.9) * 42 +
        Math.sin(x * 0.008 + time * 0.0007 + i * 2.3) * 9
      );
    };

    const draw = (rawNow: number) => {
      const now = rawNow + T0;
      ctx.clearRect(0, 0, w, h);

      // flowing wave ribbons
      for (let i = 0; i < WAVES; i++) {
        const alpha = 0.035 + 0.075 * Math.abs(Math.sin(i * 1.3 + now * 0.0002));
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        grad.addColorStop(0, `rgba(46, 111, 242, 0)`);
        grad.addColorStop(0.5, `rgba(96, 154, 255, ${alpha})`);
        grad.addColorStop(1, `rgba(122, 76, 255, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = i % 3 === 0 ? 2 : 1.2;
        ctx.beginPath();
        for (let x = -20; x <= w + 20; x += 7) {
          const y = waveY(i, x, now);
          x === -20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // energy particles riding the waves
      for (let i = 0; i < WAVES; i++) {
        // stagger particle starting positions across the full width per wave
        const px = ((now * (0.02 + i * 0.003) + i * 431.7) % (w + 240)) - 120;
        const py = waveY(i, px, now);
        const g = ctx.createRadialGradient(px, py, 0, px, py, 26);
        g.addColorStop(0, 'rgba(140, 182, 255, 0.5)');
        g.addColorStop(1, 'rgba(140, 182, 255, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, 26, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(200, 220, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // expanding ripples
      if (now > nextRipple) {
        nextRipple = now + 2200 + Math.random() * 1800;
        const i = Math.floor(Math.random() * WAVES);
        const x = w * (0.2 + Math.random() * 0.6);
        ripples.push({x, y: waveY(i, x, now), r: 0, max: 120 + Math.random() * 120, speed: 0.045});
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += rp.speed * 16;
        const fade = 1 - rp.r / rp.max;
        if (fade <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        for (let k = 0; k < 3; k++) {
          const rr = rp.r - k * 14;
          if (rr <= 0) continue;
          ctx.strokeStyle = `rgba(96, 154, 255, ${0.28 * fade * (1 - k * 0.3)})`;
          ctx.lineWidth = 1.4 - k * 0.35;
          ctx.beginPath();
          ctx.ellipse(rp.x, rp.y, rr, rr * 0.42, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw(performance.now());

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
/* aero: blueprint line-draw of an aircraft over a drafting grid       */
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
/* skyline: parallax city silhouettes with twinkling windows           */
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
/* construction: jobsite: steel frame, crane, forklift, welding robot  */
/* ------------------------------------------------------------------ */

function ConstructionSvg() {
  return (
    <svg className="backdrop-svg construction" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {/* ground line */}
      <line x1="0" y1="520" x2="1200" y2="520" stroke="rgba(76,141,255,0.35)" strokeWidth="1.5" />

      {/* steel building frame (rising floors) */}
      <g stroke="rgba(76,141,255,0.4)" strokeWidth="2" fill="none">
        <path d="M300 520 L300 200 M420 520 L420 200 M540 520 L540 200" />
        <g className="frame-floor f1"><path d="M290 440 L550 440" /></g>
        <g className="frame-floor f2"><path d="M290 360 L550 360" /></g>
        <g className="frame-floor f3"><path d="M290 280 L550 280" /></g>
        <g className="frame-floor f4"><path d="M290 200 L550 200" /></g>
        {/* cross bracing */}
        <path d="M300 520 L420 440 M420 520 L300 440" strokeWidth="1" opacity="0.6" />
        <path d="M420 440 L540 360 M540 440 L420 360" strokeWidth="1" opacity="0.6" />
      </g>

      {/* tower crane, lifting a beam toward the frame */}
      <g stroke="rgba(76,141,255,0.45)" strokeWidth="2" fill="none">
        <path d="M700 520 L700 100 M660 520 L740 520" />
        <path d="M700 100 L440 130 M700 100 L860 118" />
        <path d="M700 100 L664 150 M700 100 L736 150" strokeWidth="1.2" />
        <path d="M690 92 l20 0 l0 -14 l-20 0 Z" fill="rgba(76,141,255,0.15)" />
        <g className="crane-lift">
          <path className="crane-cable" d="M520 124 L520 320" strokeWidth="1.2" />
          <path d="M492 320 l56 0 l0 10 l-56 0 Z" fill="rgba(76,141,255,0.25)" stroke="rgba(76,141,255,0.5)" strokeWidth="1.2" />
        </g>
      </g>

      {/* forklift driving across with a pallet */}
      <g className="forklift" stroke="rgba(120,168,255,0.65)" strokeWidth="2" fill="none">
        {/* body */}
        <path d="M60 470 l64 0 l10 -26 l-40 0 l-8 -22 l-26 0 Z" fill="rgba(14,24,44,0.9)" />
        {/* overhead guard */}
        <path d="M70 422 l0 -20 l38 0 l6 20" strokeWidth="1.5" />
        {/* mast */}
        <path d="M132 470 L132 400 M140 470 L140 400" strokeWidth="1.5" />
        {/* forks + pallet */}
        <g className="fork-lift-arm">
          <path d="M140 452 l34 0" strokeWidth="2.5" />
          <path d="M146 452 l0 -10 l40 0 l0 10 Z M150 442 l6 -8 l28 0 l6 8" strokeWidth="1.3" fill="rgba(76,141,255,0.15)" />
        </g>
        {/* wheels */}
        <g className="wheel w1"><circle cx="82" cy="482" r="12" /><path d="M82 474 l0 16 M74 482 l16 0" strokeWidth="1" /></g>
        <g className="wheel w2"><circle cx="126" cy="482" r="9" /><path d="M126 476 l0 12 M120 482 l12 0" strokeWidth="1" /></g>
      </g>

      {/* welding robot arm on a pedestal, sparking */}
      <g stroke="rgba(120,168,255,0.6)" strokeWidth="2" fill="none">
        <path d="M950 520 l60 0 l-8 -18 l-44 0 Z" fill="rgba(14,24,44,0.9)" />
        <g className="robot-shoulder">
          <path d="M980 502 L950 430" />
          <g className="robot-elbow">
            <path d="M950 430 L1000 380" />
            <path d="M1000 380 l14 -6 l6 10" strokeWidth="1.5" />
            <g className="sparks" stroke="#9dc0ff" strokeWidth="1.4" strokeLinecap="round">
              <path className="spark s1" d="M1022 382 l10 -8" />
              <path className="spark s2" d="M1024 386 l12 2" />
              <path className="spark s3" d="M1022 390 l8 10" />
              <circle className="spark s2" cx="1021" cy="385" r="2.5" fill="#c8dcff" stroke="none" />
            </g>
          </g>
        </g>
        <circle cx="980" cy="502" r="5" fill="rgba(76,141,255,0.4)" stroke="none" />
        <circle cx="950" cy="430" r="4" fill="rgba(76,141,255,0.4)" stroke="none" />
      </g>

      {/* hard-hat safety cones for depth */}
      <g stroke="rgba(76,141,255,0.35)" strokeWidth="1.4" fill="none">
        <path d="M840 520 l8 -22 l8 22 Z M834 520 l28 0" />
        <path d="M890 520 l7 -18 l7 18 Z M885 520 l24 0" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export default function HeroBackdrop({kind}: {kind: BackdropKind}) {
  return (
    <div className={`hero-backdrop ${kind}`} aria-hidden>
      {kind === 'cyber' && <EnergyCanvas />}
      {kind === 'aero' && <AeroSvg />}
      {kind === 'skyline' && <SkylineSvg />}
      {kind === 'construction' && <ConstructionSvg />}
      {kind === 'rain' && <RainCanvas />}
    </div>
  );
}
