import {useEffect, useMemo, useRef} from 'react';
import japandiSecondaryHero from '../assets/brand/japandi-secondary-hero.webp';

export type BackdropKind =
  | 'brand-static'
  | 'cyber'
  | 'aero'
  | 'skyline'
  | 'legal'
  | 'ledger'
  | 'clinical'
  | 'construction'
  | 'rain';

function BrandStaticBackdrop() {
  return (
    <picture className="backdrop-picture japandi-backdrop-picture">
      <img
        src={japandiSecondaryHero}
        width="2048"
        height="1152"
        alt=""
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </picture>
  );
}

/* ------------------------------------------------------------------ */
/* rain: raindrop ripples spreading across a perfectly still surface */
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
        ctx.strokeStyle = `rgba(137, 214, 173, ${(0.34 - k * 0.09) * fade})`;
        ctx.lineWidth = 1.5 - k * 0.4;
        ctx.beginPath();
        ctx.ellipse(d.x, d.y, rr, rr * squash, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      // glint at the point of impact while the ripple is young
      if (d.r < d.max * 0.25) {
        ctx.fillStyle = `rgba(214, 241, 227, ${0.7 * (1 - d.r / (d.max * 0.25))})`;
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
        grad.addColorStop(0, `rgba(8, 76, 46, 0)`);
        grad.addColorStop(0.5, `rgba(137, 214, 173, ${alpha})`);
        grad.addColorStop(1, `rgba(90, 241, 227, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = i % 3 === 0 ? 2 : 1.2;
        ctx.beginPath();
        for (let x = -20; x <= w + 20; x += 7) {
          const y = waveY(i, x, now);
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // energy particles riding the waves
      for (let i = 0; i < WAVES; i++) {
        // stagger particle starting positions across the full width per wave
        const px = ((now * (0.02 + i * 0.003) + i * 431.7) % (w + 240)) - 120;
        const py = waveY(i, px, now);
        const g = ctx.createRadialGradient(px, py, 0, px, py, 26);
        g.addColorStop(0, 'rgba(170, 225, 196, 0.5)');
        g.addColorStop(1, 'rgba(170, 225, 196, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, 26, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(214, 241, 227, 0.9)';
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
          ctx.strokeStyle = `rgba(137, 214, 173, ${0.28 * fade * (1 - k * 0.3)})`;
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
    <svg className="backdrop-svg aero" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid meet" aria-hidden>
      <g className="bp-draw" stroke="#38A169" fill="none" strokeWidth="1.6">
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
      <g className="bp-labels" fill="#38A169" fontSize="11" fontFamily="ui-monospace, monospace" opacity="0.5">
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
    <svg className="backdrop-svg skyline" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid meet" aria-hidden>
      <g className="layer-far" fill="rgba(56, 161, 105, 0.10)">
        {far.map((b, i) => (
          <rect key={i} x={b.x} y={600 - b.h - 60} width={b.w} height={b.h + 60} />
        ))}
      </g>
      <g className="layer-near" fill="rgba(18,30,54,0.9)" stroke="rgba(56, 161, 105, 0.18)" strokeWidth="1">
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
            fill="#AAE2C4"
            stroke="none"
          />
        ))}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* legal: large balanced scales settle into an even resting state      */
/* ------------------------------------------------------------------ */

function LegalSvg() {
  return (
    <svg className="backdrop-svg legal" viewBox="260 0 900 600" preserveAspectRatio="xMaxYMid meet" aria-hidden>
      <g className="legal-architecture" stroke="rgba(56, 161, 105, 0.2)" strokeWidth="1" fill="none">
        <path d="M350 505 H1100" />
        <path d="M430 480 V165 M1040 480 V165" />
        <path d="M400 165 H1070 M420 145 H1050" />
        <path d="M470 480 V205 M1000 480 V205" strokeDasharray="5 10" />
      </g>

      <g className="legal-scales" stroke="rgba(155, 220, 185, 0.72)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="730" cy="145" r="11" fill="rgba(56, 161, 105, 0.16)" />
        <path d="M730 156 V438" />
        <path d="M680 470 H780 M700 438 H760 L780 470 H680 Z" fill="rgba(18, 30, 54, 0.64)" />
        <path d="M695 190 H765 L730 225 Z" fill="rgba(56, 161, 105, 0.12)" />
      </g>

      <g className="legal-beam" stroke="rgba(214, 241, 227, 0.9)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M440 230 Q730 190 1020 230" />
        <circle cx="730" cy="213" r="9" fill="rgba(56, 161, 105, 0.26)" />
        <g className="legal-pan-left">
          <path d="M485 224 L425 365 M485 224 L545 365" />
          <path d="M400 365 Q485 425 570 365 Z" fill="rgba(56, 161, 105, 0.1)" />
        </g>
        <g className="legal-pan-right">
          <path d="M975 224 L915 365 M975 224 L1035 365" />
          <path d="M890 365 Q975 425 1060 365 Z" fill="rgba(56, 161, 105, 0.1)" />
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* ledger: paired entries reconcile and settle into a balanced record  */
/* ------------------------------------------------------------------ */

function LedgerSvg() {
  const rows = [255, 296, 337, 378];
  return (
    <svg className="backdrop-svg ledger" viewBox="200 0 1000 600" preserveAspectRatio="xMaxYMid meet" aria-hidden>
      <g className="ledger-sheet" stroke="rgba(155, 220, 185, 0.52)" strokeWidth="1.6" fill="none">
        <rect x="370" y="75" width="735" height="450" rx="16" fill="rgba(18, 30, 54, 0.74)" />
        <path d="M370 145 H1105 M515 145 V525" />
        <circle cx="408" cy="110" r="5" fill="rgba(214, 241, 227, 0.6)" stroke="none" />
        <circle cx="430" cy="110" r="5" fill="rgba(155, 220, 185, 0.38)" stroke="none" />
        <path d="M465 110 H665" strokeWidth="8" strokeLinecap="round" opacity="0.34" />
      </g>

      <g className="ledger-sidebar" stroke="rgba(155, 220, 185, 0.46)" fill="none" strokeLinecap="round">
        <path d="M407 190 H477 M407 225 H465 M407 260 H483 M407 295 H452" strokeWidth="8" />
        <rect x="397" y="174" width="96" height="32" rx="7" fill="rgba(56, 161, 105, 0.1)" />
        <circle cx="445" cy="445" r="30" strokeWidth="9" strokeDasharray="138 52" transform="rotate(-70 445 445)" />
        <path d="M430 445 H460" strokeWidth="3" />
      </g>

      <g className="ledger-summary" stroke="rgba(155, 220, 185, 0.5)" fill="none">
        <rect x="550" y="170" width="158" height="60" rx="10" fill="rgba(56, 161, 105, 0.07)" />
        <rect x="730" y="170" width="158" height="60" rx="10" fill="rgba(56, 161, 105, 0.07)" />
        <rect x="910" y="170" width="158" height="60" rx="10" fill="rgba(56, 161, 105, 0.07)" />
        <path d="M570 192 H625 M570 210 H680 M750 192 H805 M750 210 H860 M930 192 H985 M930 210 H1040" strokeLinecap="round" />
      </g>

      <g className="ledger-grid" stroke="rgba(56, 161, 105, 0.2)" fill="none">
        <path d="M550 245 H1068 V410 H550 Z M550 286 H1068 M550 327 H1068 M550 368 H1068" />
        <path d="M820 245 V410" />
      </g>

      {rows.map((y, i) => (
        <g key={y} className={`ledger-row l${i + 1}`}>
          <rect x="570" y={y + 15} width={128 + i * 14} height="8" rx="4" fill="rgba(155, 220, 185, 0.38)" />
          <rect x={i % 2 ? 910 : 890} y={y + 15} width={118 - i * 7} height="8" rx="4" fill="rgba(214, 241, 227, 0.64)" />
          <path d={`M780 ${y + 19} H855`} stroke="rgba(56, 161, 105, 0.42)" strokeWidth="1.4" strokeDasharray="5 7" />
          <circle className="ledger-match" cx="820" cy={y + 19} r="5" fill="rgba(214, 241, 227, 0.84)" />
        </g>
      ))}

      <g className="ledger-total" stroke="rgba(214, 241, 227, 0.82)" fill="none" strokeLinecap="round">
        <rect x="550" y="435" width="518" height="58" rx="10" fill="rgba(56, 161, 105, 0.08)" stroke="rgba(155, 220, 185, 0.42)" />
        <path d="M580 464 H735 M900 464 H1035" strokeWidth="10" opacity="0.34" />
        <g className="ledger-equals" strokeWidth="3">
          <path d="M790 455 H840" />
          <path d="M790 473 H840" />
        </g>
      </g>

      <g className="ledger-scan" stroke="rgba(214, 241, 227, 0.72)" fill="none">
        <path d="M550 245 V410" strokeWidth="1.5" />
        <circle cx="550" cy="245" r="5" fill="rgba(214, 241, 227, 0.88)" stroke="none" />
      </g>

      <g className="ledger-chart" stroke="rgba(214, 241, 227, 0.7)" fill="rgba(56, 161, 105, 0.12)" strokeLinejoin="round">
        <path d="M575 390 L630 350 L680 366 L735 303 L785 322 V390 Z" />
        <circle cx="735" cy="303" r="5" fill="rgba(214, 241, 227, 0.9)" />
      </g>
      <g className="ledger-check" transform="translate(1040 110)" stroke="rgba(214, 241, 227, 0.88)" fill="rgba(56, 161, 105, 0.16)" strokeLinecap="round" strokeLinejoin="round">
        <circle r="24" />
        <path d="M-10 0 L-2 9 L12 -10" fill="none" strokeWidth="3" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* clinical: a portable bedside monitor synchronizes care and privacy */
/* ------------------------------------------------------------------ */

function ClinicalSvg() {
  return (
    <svg className="backdrop-svg clinical" viewBox="200 0 1000 600" preserveAspectRatio="xMaxYMid meet" aria-hidden>
      <g className="clinical-stand" stroke="rgba(155, 220, 185, 0.68)" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="717" y="405" width="26" height="265" rx="13" fill="rgba(18, 30, 54, 0.72)" />
        <path d="M730 420 V690" />
        <path d="M690 408 H770 M706 432 H754" />
        <path d="M730 650 L565 748 M730 650 L895 748 M730 650 V770" />
        <circle cx="552" cy="756" r="15" fill="rgba(18, 30, 54, 0.84)" />
        <circle cx="908" cy="756" r="15" fill="rgba(18, 30, 54, 0.84)" />
        <circle cx="730" cy="782" r="15" fill="rgba(18, 30, 54, 0.84)" />
        <path d="M655 86 V60 C655 48 665 40 677 40 H783 C795 40 805 48 805 60 V86" />
      </g>

      <g className="clinical-monitor" stroke="rgba(155, 220, 185, 0.62)" strokeWidth="1.8" fill="none">
        <rect x="385" y="75" width="690" height="345" rx="22" fill="rgba(18, 30, 54, 0.78)" />
        <rect x="410" y="100" width="640" height="275" rx="12" fill="rgba(10, 19, 35, 0.46)" />
        <path d="M410 175 H1050" opacity="0.48" />
        <path d="M515 100 V175 M945 100 V175" opacity="0.48" />
        <circle className="clinical-power" cx="1020" cy="398" r="6" fill="rgba(214, 241, 227, 0.8)" stroke="none" />
        <path d="M970 398 H993" strokeLinecap="round" />
      </g>

      <g className="clinical-care-node" transform="translate(885 137)" stroke="rgba(214, 241, 227, 0.84)" strokeWidth="2" fill="none">
        <circle r="30" fill="rgba(56, 161, 105, 0.12)" />
        <path d="M-12 0 H12 M0 -12 V12" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g className="clinical-tooth-node" transform="translate(1010 137)" stroke="rgba(214, 241, 227, 0.78)" strokeWidth="2" fill="rgba(56, 161, 105, 0.08)" strokeLinejoin="round">
        <circle r="30" fill="rgba(56, 161, 105, 0.12)" />
        <path d="M-12 -14 C-23 -11 -21 3 -15 10 C-10 17 -11 24 -5 24 C0 24 -2 11 3 11 C8 11 7 24 13 24 C19 24 18 15 22 8 C27 -1 22 -14 12 -14 C5 -14 1 -9 -1 -9 C-4 -9 -6 -14 -12 -14 Z" transform="scale(.72) translate(-1 -3)" />
      </g>

      <g stroke="rgba(56, 161, 105, 0.16)" strokeWidth="1">
        <path d="M430 215 H1030 M430 257 H1030 M430 299 H1030" />
        <path d="M505 195 V325 M580 195 V325 M655 195 V325 M730 195 V325 M805 195 V325 M880 195 V325 M955 195 V325" />
      </g>

      <path
        className="clinical-pulse"
        d="M430 259 H555 L580 227 L608 293 L640 207 L675 272 L705 259 H1030"
        stroke="rgba(214, 241, 227, 0.9)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g className="clinical-records" fill="rgba(155, 220, 185, 0.38)">
        <rect className="clinical-record c1" x="430" y="330" width="150" height="10" rx="5" />
        <rect className="clinical-record c2" x="430" y="352" width="205" height="10" rx="5" />
        <rect className="clinical-record c3" x="680" y="330" width="130" height="10" rx="5" />
        <rect className="clinical-record c4" x="680" y="352" width="165" height="10" rx="5" />
      </g>

      <g className="clinical-shield" transform="translate(970 338)" stroke="rgba(214, 241, 227, 0.88)" strokeWidth="2.3" fill="rgba(56, 161, 105, 0.12)" strokeLinejoin="round">
        <path d="M0 -30 C15 -24 25 -23 34 -23 V-2 C34 19 20 34 0 42 C-20 34 -34 19 -34 -2 V-23 C-25 -23 -15 -24 0 -30 Z" />
        <path d="M-12 3 L-3 12 L15 -8" fill="none" strokeWidth="3.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* construction: jobsite: steel frame, crane, forklift, welding robot  */
/* ------------------------------------------------------------------ */

function ConstructionSvg() {
  return (
    <svg className="backdrop-svg construction" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid meet" aria-hidden>
      {/* ground line */}
      <line x1="0" y1="520" x2="1200" y2="520" stroke="rgba(56, 161, 105, 0.35)" strokeWidth="1.5" />

      {/* steel building frame (rising floors) */}
      <g stroke="rgba(56, 161, 105, 0.4)" strokeWidth="2" fill="none">
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
      <g stroke="rgba(56, 161, 105, 0.45)" strokeWidth="2" fill="none">
        <path d="M700 520 L700 100 M660 520 L740 520" />
        <path d="M700 100 L440 130 M700 100 L860 118" />
        <path d="M700 100 L664 150 M700 100 L736 150" strokeWidth="1.2" />
        <path d="M690 92 l20 0 l0 -14 l-20 0 Z" fill="rgba(56, 161, 105, 0.15)" />
        <g className="crane-lift">
          <path className="crane-cable" d="M520 124 L520 320" strokeWidth="1.2" />
          <path d="M492 320 l56 0 l0 10 l-56 0 Z" fill="rgba(56, 161, 105, 0.25)" stroke="rgba(56, 161, 105, 0.5)" strokeWidth="1.2" />
        </g>
      </g>

      {/* forklift driving across with a pallet */}
      <g className="forklift" stroke="rgba(155, 220, 185, 0.65)" strokeWidth="2" fill="none">
        {/* body */}
        <path d="M60 470 l64 0 l10 -26 l-40 0 l-8 -22 l-26 0 Z" fill="rgba(14,24,44,0.9)" />
        {/* overhead guard */}
        <path d="M70 422 l0 -20 l38 0 l6 20" strokeWidth="1.5" />
        {/* mast */}
        <path d="M132 470 L132 400 M140 470 L140 400" strokeWidth="1.5" />
        {/* forks + pallet */}
        <g className="fork-lift-arm">
          <path d="M140 452 l34 0" strokeWidth="2.5" />
          <path d="M146 452 l0 -10 l40 0 l0 10 Z M150 442 l6 -8 l28 0 l6 8" strokeWidth="1.3" fill="rgba(56, 161, 105, 0.15)" />
        </g>
        {/* wheels */}
        <g className="wheel w1"><circle cx="82" cy="482" r="12" /><path d="M82 474 l0 16 M74 482 l16 0" strokeWidth="1" /></g>
        <g className="wheel w2"><circle cx="126" cy="482" r="9" /><path d="M126 476 l0 12 M120 482 l12 0" strokeWidth="1" /></g>
      </g>

      {/* welding robot arm on a pedestal, sparking */}
      <g stroke="rgba(155, 220, 185, 0.6)" strokeWidth="2" fill="none">
        <path d="M950 520 l60 0 l-8 -18 l-44 0 Z" fill="rgba(14,24,44,0.9)" />
        <g className="robot-shoulder">
          <path d="M980 502 L950 430" />
          <g className="robot-elbow">
            <path d="M950 430 L1000 380" />
            <path d="M1000 380 l14 -6 l6 10" strokeWidth="1.5" />
            <g className="sparks" stroke="#B6E6CC" strokeWidth="1.4" strokeLinecap="round">
              <path className="spark s1" d="M1022 382 l10 -8" />
              <path className="spark s2" d="M1024 386 l12 2" />
              <path className="spark s3" d="M1022 390 l8 10" />
              <circle className="spark s2" cx="1021" cy="385" r="2.5" fill="#D6F1E3" stroke="none" />
            </g>
          </g>
        </g>
        <circle cx="980" cy="502" r="5" fill="rgba(56, 161, 105, 0.4)" stroke="none" />
        <circle cx="950" cy="430" r="4" fill="rgba(56, 161, 105, 0.4)" stroke="none" />
      </g>

      {/* hard-hat safety cones for depth */}
      <g stroke="rgba(56, 161, 105, 0.35)" strokeWidth="1.4" fill="none">
        <path d="M840 520 l8 -22 l8 22 Z M834 520 l28 0" />
        <path d="M890 520 l7 -18 l7 18 Z M885 520 l24 0" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export default function HeroBackdrop({kind}: {kind: BackdropKind}) {
  const ref = useRef<HTMLDivElement>(null);
  const animated =
    kind === 'aero' ||
    kind === 'skyline' ||
    kind === 'legal' ||
    kind === 'ledger' ||
    kind === 'clinical' ||
    kind === 'construction';

  useEffect(() => {
    const element = ref.current;
    if (!element || !animated) return;

    let inView = false;
    const updatePlayback = () => {
      element.dataset.active = String(inView && document.visibilityState === 'visible');
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        updatePlayback();
      },
      {rootMargin: '80px'},
    );
    const handleVisibility = () => updatePlayback();

    observer.observe(element);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [animated]);

  return (
    <div ref={ref} className={`hero-backdrop ${kind}`} data-animated={animated || undefined} aria-hidden>
      {kind === 'brand-static' && <BrandStaticBackdrop />}
      {kind === 'cyber' && <EnergyCanvas />}
      {kind === 'aero' && <AeroSvg />}
      {kind === 'skyline' && <SkylineSvg />}
      {kind === 'legal' && <LegalSvg />}
      {kind === 'ledger' && <LedgerSvg />}
      {kind === 'clinical' && <ClinicalSvg />}
      {kind === 'construction' && <ConstructionSvg />}
      {kind === 'rain' && <RainCanvas />}
    </div>
  );
}
