'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AtithiMotorsMap.module.css';

const CITIES = [
  { x: 176, y: 440, name: 'Prayagraj', hq: false, tag: 'Expanding soon' },
  { x: 430, y: 376, name: 'Jaunpur',   hq: false, tag: 'Serving now'    },
  { x: 680, y: 356, name: 'Ghazipur',  hq: true,  tag: 'Headquarters'   },
  { x: 924, y: 384, name: 'Varanasi',  hq: false, tag: 'Serving now'    },
  { x: 1184,y: 250, name: 'Gorakhpur', hq: false, tag: 'Expanding soon' },
];

const SEGS = [
  { p0: CITIES[0], c1: { x: 270, y: 416 }, c2: { x: 356, y: 386 }, p1: CITIES[1] },
  { p0: CITIES[1], c1: { x: 516, y: 368 }, c2: { x: 596, y: 360 }, p1: CITIES[2] },
  { p0: CITIES[2], c1: { x: 776, y: 352 }, c2: { x: 844, y: 376 }, p1: CITIES[3] },
  { p0: CITIES[3], c1: { x: 1028,y: 392 }, c2: { x: 1096, y: 316}, p1: CITIES[4] },
];

type Point = { x: number; y: number };
type Seg   = { p0: Point; c1: Point; c2: Point; p1: Point };
type State = 'idle' | 'draw' | 'travel' | 'pause' | 'end';

function bz(t: number, s: Seg): Point {
  const m = 1 - t;
  return {
    x: m*m*m*s.p0.x + 3*m*m*t*s.c1.x + 3*m*t*t*s.c2.x + t*t*t*s.p1.x,
    y: m*m*m*s.p0.y + 3*m*m*t*s.c1.y + 3*m*t*t*s.c2.y + t*t*t*s.p1.y,
  };
}

function rrPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawBackground(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0,    '#bdd98a');
  bg.addColorStop(0.35, '#cce49a');
  bg.addColorStop(0.7,  '#c4dc90');
  bg.addColorStop(1,    '#b8d484');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const patches: [number,number,number,number][] = [
    [0,0,300,180],[500,0,280,150],[900,0,320,160],
    [1100,0,260,200],[0,420,240,220],[1180,380,200,260],
    [300,480,420,160],[600,520,300,120],
  ];
  ctx.fillStyle = '#aacf78';
  patches.forEach(([x,y,w,h]) => {
    ctx.beginPath(); ctx.ellipse(x+w/2, y+h/2, w/2, h/2, 0, 0, Math.PI*2); ctx.fill();
  });

  ctx.fillStyle = '#98c068';
  [[60,40,130,80],[760,40,160,70],[1050,80,140,90],[180,520,200,100],[520,540,180,80],[900,480,160,90]].forEach(([x,y,w,h]) => {
    ctx.beginPath(); ctx.ellipse(x+w/2, y+h/2, w/2, h/2, 0, 0, Math.PI*2); ctx.fill();
  });

  ctx.fillStyle = '#d4eca4';
  [[200,100,100,50],[650,20,120,55],[1200,150,110,60],[80,350,90,50],[400,560,140,50],[1000,550,130,55]].forEach(([x,y,w,h]) => {
    ctx.beginPath(); ctx.ellipse(x+w/2, y+h/2, w/2, h/2, 0, 0, Math.PI*2); ctx.fill();
  });

  ctx.strokeStyle = 'rgba(144,180,110,0.25)'; ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 136) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y <= H; y += 128) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
  ctx.strokeStyle = 'rgba(200,220,160,0.2)'; ctx.lineWidth = 0.5;
  for (let x = 68; x <= W; x += 136) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 64; y <= H; y += 128) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  drawRivers(ctx);
  drawHighways(ctx);
}

function drawRivers(ctx: CanvasRenderingContext2D) {
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';

  ctx.strokeStyle = '#4a8fb8'; ctx.lineWidth = 16;
  ctx.beginPath();
  ctx.moveTo(40,296); ctx.bezierCurveTo(150,324,230,476,360,500);
  ctx.bezierCurveTo(456,516,576,496,680,480);
  ctx.bezierCurveTo(784,464,856,444,956,476);
  ctx.bezierCurveTo(1056,508,1160,540,1360,530);
  ctx.stroke();

  ctx.strokeStyle = '#6ab4d8'; ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(40,290); ctx.bezierCurveTo(150,318,230,470,360,494);
  ctx.bezierCurveTo(456,510,576,490,680,474);
  ctx.bezierCurveTo(784,458,856,438,956,470);
  ctx.bezierCurveTo(1056,502,1160,534,1360,524);
  ctx.stroke();

  ctx.strokeStyle = '#9ad0e8'; ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(40,284); ctx.bezierCurveTo(150,312,230,464,360,488);
  ctx.bezierCurveTo(456,504,576,484,680,468);
  ctx.bezierCurveTo(784,452,856,432,956,464);
  ctx.bezierCurveTo(1056,496,1160,528,1360,518);
  ctx.stroke();

  ctx.strokeStyle = '#4080a8'; ctx.lineWidth = 10; ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(396,120); ctx.bezierCurveTo(476,180,516,260,556,310);
  ctx.bezierCurveTo(596,360,624,410,680,480);
  ctx.stroke();
  ctx.strokeStyle = '#6aaac8'; ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(396,120); ctx.bezierCurveTo(476,180,516,260,556,310);
  ctx.bezierCurveTo(596,360,624,410,680,480);
  ctx.stroke();

  ctx.strokeStyle = '#5090b8'; ctx.lineWidth = 6;
  ctx.beginPath(); ctx.moveTo(1360,120); ctx.bezierCurveTo(1280,160,1240,200,1184,250); ctx.stroke();
  ctx.strokeStyle = '#80b8d0'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(1360,120); ctx.bezierCurveTo(1280,160,1240,200,1184,250); ctx.stroke();

  ctx.fillStyle = '#2a6888'; ctx.font = 'italic 22px serif'; ctx.textAlign = 'left';
  ctx.fillText('Ganga', 720, 468);
  ctx.fillText('Yamuna', 52, 278);
  ctx.font = 'italic 17px serif';
  ctx.fillText('Ghaghra', 1240, 136);
}

function drawHighways(ctx: CanvasRenderingContext2D) {
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';

  ctx.strokeStyle = '#d4b84a'; ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(CITIES[0].x, CITIES[0].y);
  ctx.bezierCurveTo(270,416,356,386,CITIES[1].x,CITIES[1].y);
  ctx.bezierCurveTo(516,368,596,360,CITIES[2].x,CITIES[2].y);
  ctx.bezierCurveTo(776,352,844,376,CITIES[3].x,CITIES[3].y);
  ctx.bezierCurveTo(1028,392,1096,316,CITIES[4].x,CITIES[4].y);
  ctx.stroke();

  ctx.strokeStyle = '#e8d070'; ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(CITIES[0].x, CITIES[0].y);
  ctx.bezierCurveTo(270,416,356,386,CITIES[1].x,CITIES[1].y);
  ctx.bezierCurveTo(516,368,596,360,CITIES[2].x,CITIES[2].y);
  ctx.bezierCurveTo(776,352,844,376,CITIES[3].x,CITIES[3].y);
  ctx.bezierCurveTo(1028,392,1096,316,CITIES[4].x,CITIES[4].y);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255,245,180,0.5)'; ctx.lineWidth = 2; ctx.setLineDash([12,10]);
  ctx.beginPath();
  ctx.moveTo(CITIES[0].x, CITIES[0].y);
  ctx.bezierCurveTo(270,416,356,386,CITIES[1].x,CITIES[1].y);
  ctx.bezierCurveTo(516,368,596,360,CITIES[2].x,CITIES[2].y);
  ctx.bezierCurveTo(776,352,844,376,CITIES[3].x,CITIES[3].y);
  ctx.bezierCurveTo(1028,392,1096,316,CITIES[4].x,CITIES[4].y);
  ctx.stroke(); ctx.setLineDash([]);

  ctx.fillStyle = '#7a5a14'; ctx.font = 'bold 18px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('NH 29', 530, 342);
  ctx.fillText('NH 31', 1060, 300);
  ctx.textAlign = 'left';

  CITIES.forEach(c => {
    ctx.beginPath(); ctx.arc(c.x, c.y, 7, 0, Math.PI*2);
    ctx.fillStyle = '#fff'; ctx.fill();
    ctx.strokeStyle = c.hq ? '#FF6B00' : '#1A4FA0'; ctx.lineWidth = 3; ctx.stroke();
  });
}

function drawGlowRoute(ctx: CanvasRenderingContext2D, upToSeg: number, upToT: number) {
  for (let s = 0; s < upToSeg; s++) drawSegGlow(ctx, SEGS[s], 1);
  if (upToSeg < SEGS.length) drawSegGlow(ctx, SEGS[upToSeg], upToT);
}

function drawSegGlow(ctx: CanvasRenderingContext2D, seg: Seg, t: number) {
  const steps = Math.max(2, Math.floor(t * 100));
  ctx.lineCap = 'round';

  const buildPath = (t2: number) => {
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const p = bz(i / 100, seg);
      i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
    }
  };

  ctx.strokeStyle = 'rgba(180,220,255,0.18)'; ctx.lineWidth = 28; buildPath(t); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,0.45)';  ctx.lineWidth = 14; buildPath(t); ctx.stroke();
  ctx.strokeStyle = '#1A4FA0';                  ctx.lineWidth = 7;  buildPath(t); ctx.stroke();
  ctx.strokeStyle = 'rgba(140,190,255,0.7)';   ctx.lineWidth = 2.5; buildPath(t); ctx.stroke();
}

function drawPin(
  ctx: CanvasRenderingContext2D,
  city: typeof CITIES[0],
  visited: boolean,
  active: boolean,
  pulse: number
) {
  if (!visited) return;
  const { x, y, hq, name } = city;
  const col = hq ? '#FF6B00' : '#1A4FA0';
  const sz  = hq ? 42 : 30;

  if (active && pulse < 1) {
    [0, 0.3].forEach(offset => {
      const r = pulse + offset;
      if (r > 1) return;
      ctx.beginPath(); ctx.arc(x, y, 20 + r * 60, 0, Math.PI*2);
      ctx.strokeStyle = col; ctx.globalAlpha = 0.3 * (1 - r); ctx.lineWidth = 3; ctx.stroke();
      ctx.globalAlpha = 1;
    });
  }

  ctx.beginPath();
  ctx.arc(x, y - sz - 4, sz/2 + 2, Math.PI, 0);
  ctx.lineTo(x + sz/2 + 2, y - sz - 4);
  ctx.quadraticCurveTo(x + sz/2 + 2, y + 4, x, y + 6);
  ctx.quadraticCurveTo(x - sz/2 - 2, y + 4, x - sz/2 - 2, y - sz - 4);
  ctx.arc(x, y - sz - 4, sz/2 + 2, Math.PI, 0);
  ctx.fillStyle = col; ctx.fill();

  ctx.beginPath(); ctx.arc(x, y - sz - 4, sz/3.2, 0, Math.PI*2);
  const ig = ctx.createRadialGradient(x - sz/12, y - sz - 4 - sz/12, 1, x, y - sz - 4, sz/3.2);
  ig.addColorStop(0, 'rgba(255,255,255,0.95)');
  ig.addColorStop(1, 'rgba(255,255,255,0.6)');
  ctx.fillStyle = ig; ctx.fill();

  const label = hq ? name + ' — HQ' : name;
  ctx.font = `${hq ? '700' : '600'} ${hq ? 24 : 20}px sans-serif`;
  const tw  = ctx.measureText(label).width + 24;
  const bh  = hq ? 36 : 30;
  const bx  = x - tw/2;
  const by  = y - sz*2 - bh - 12;
  ctx.fillStyle = col; ctx.globalAlpha = active ? 1 : 0.65;
  rrPath(ctx, bx, by, tw, bh, 6); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(label, x, by + bh/2);
  ctx.globalAlpha = 1; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
}

function drawCar(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(angle);
  const s = 2.2;

  ctx.fillStyle = '#0d3a8a';
  rrPath(ctx, -13*s, -7*s, 26*s, 14*s, 4*s); ctx.fill();

  const wg = ctx.createLinearGradient(-8*s, -10*s, 8*s, -3*s);
  wg.addColorStop(0, '#6a9fe0'); wg.addColorStop(1, '#3a6db8');
  ctx.fillStyle = wg;
  rrPath(ctx, -8*s, -11*s, 16*s, 9*s, 3*s); ctx.fill();

  ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(-6*s, -10*s); ctx.lineTo(6*s, -10*s); ctx.stroke();

  ctx.fillStyle = '#0a1e4a';
  [[-8*s, 7*s], [7*s, 7*s]].forEach(([bx, by]) => {
    ctx.beginPath(); ctx.arc(bx, by, 4*s, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(bx, by, 2*s, 0, Math.PI*2);
    ctx.fillStyle = '#333'; ctx.fill(); ctx.fillStyle = '#0a1e4a';
  });

  ctx.fillStyle = '#ffe033';
  rrPath(ctx, 12*s, -3.5*s, 6*s, 4*s, s); ctx.fill();
  ctx.fillStyle = 'rgba(255,224,51,0.25)';
  rrPath(ctx, 18*s, -6*s, 8*s, 8*s, 2*s); ctx.fill();
  ctx.fillStyle = '#cc2222';
  rrPath(ctx, -18*s, -2*s, 4*s, 3*s, 1); ctx.fill();

  ctx.restore();
}

export default function AtithiMotorsMap() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const rafRef      = useRef<number>(0);
  const stateRef    = useRef<State>('idle');
  const drawPRef    = useRef(0);
  const curSegRef   = useRef(0);
  const segPRef     = useRef(0);
  const pauseRef    = useRef(0);
  const visitedRef  = useRef(-1);
  const activeRef   = useRef(-1);
  const pulseRef    = useRef(1);

  const [activeCard, setActiveCard] = useState(-1);

  const W = 1360, H = 640;

  function getCarPos(): Point {
    const state = stateRef.current;
    if (state === 'draw') {
      const si = Math.min(Math.floor(drawPRef.current * 4), 3);
      const st = Math.max(0, Math.min(1, drawPRef.current * 4 - si));
      return bz(st, SEGS[si]);
    }
    if (state === 'travel') return bz(segPRef.current, SEGS[curSegRef.current]);
    if (state === 'pause')  return CITIES[curSegRef.current + 1];
    if (state === 'end')    return CITIES[4];
    return CITIES[0];
  }

  function getCarAngle(): number {
    if (stateRef.current !== 'travel') return 0;
    const a = getCarPos();
    const b = bz(Math.min(segPRef.current + 0.015, 1), SEGS[curSegRef.current]);
    return Math.atan2(b.y - a.y, b.x - a.x);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      drawBackground(ctx, W, H);

      let gs = 0, gt = 0;
      const state = stateRef.current;

      if (state === 'draw') {
        drawPRef.current = Math.min(drawPRef.current + 0.007, 1);
        gs = Math.min(Math.floor(drawPRef.current * 4), 3);
        gt = Math.max(0, Math.min(1, drawPRef.current * 4 - gs));
        if (drawPRef.current >= 1) {
          stateRef.current = 'travel'; curSegRef.current = 0; segPRef.current = 0;
          visitedRef.current = 0; activeRef.current = 0; setActiveCard(0); pulseRef.current = 0;
        }
      } else { gs = 3; gt = 1; }

      drawGlowRoute(ctx, gs, gt);
      CITIES.forEach((c, i) => drawPin(ctx, c, i <= visitedRef.current, i === activeRef.current, pulseRef.current));

      if (state === 'travel') {
        segPRef.current = Math.min(segPRef.current + 0.013, 1);
        if (segPRef.current >= 1) {
          stateRef.current = 'pause'; pauseRef.current = 0;
          activeRef.current = curSegRef.current + 1;
          visitedRef.current = curSegRef.current + 1;
          setActiveCard(curSegRef.current + 1);
          pulseRef.current = 0;
        }
      } else if (state === 'pause') {
        pulseRef.current = Math.min(pulseRef.current + 0.02, 1);
        pauseRef.current++;
        const hold = CITIES[curSegRef.current + 1].hq ? 150 : 100;
        if (pauseRef.current > hold) {
          if (curSegRef.current >= SEGS.length - 1) { stateRef.current = 'end'; pauseRef.current = 0; }
          else { curSegRef.current++; segPRef.current = 0; stateRef.current = 'travel'; }
        }
      } else if (state === 'end') {
        pulseRef.current = Math.min(pulseRef.current + 0.015, 1);
        pauseRef.current++;
        if (pauseRef.current > 180) {
          stateRef.current = 'draw'; drawPRef.current = 0;
          curSegRef.current = 0; segPRef.current = 0;
          visitedRef.current = -1; activeRef.current = -1;
          pulseRef.current = 1; setActiveCard(-1);
        }
      }

      const pos = getCarPos();
      drawCar(ctx, pos.x, pos.y, getCarAngle());
      rafRef.current = requestAnimationFrame(frame);
    }

    drawBackground(ctx, W, H);
    const timer = setTimeout(() => {
      stateRef.current = 'draw';
      rafRef.current = requestAnimationFrame(frame);
    }, 600);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className={`${styles.mapSection} reveal`}>
      <div className="container">
        <div className={styles.mapHeader}>
          <div className="section-label">Our Reach</div>
          <h2 className="section-title">
            Wherever You Are in Eastern UP — <span>We Are Near</span>
          </h2>
          <p className={styles.mapDesc}>
            From Prayagraj to Gorakhpur, Atithi Motors covers every major route.
          </p>
        </div>

        <div className={styles.canvasContainer}>
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        <div className={styles.citiesGrid}>
          {CITIES.map((city, i) => (
            <div
              key={city.name}
              className={`${styles.cityCard} ${
                activeCard === i
                  ? city.hq ? styles.activeHq : styles.activeNormal
                  : ''
              }`}
            >
              <div className={`${styles.cityDot} ${
                activeCard === i
                  ? city.hq ? styles.activeHq : styles.activeNormal
                  : ''
              }`} />
              <p className={styles.cityName}>{city.name}</p>
              <p className={`${styles.cityTag} ${
                activeCard === i
                  ? city.hq ? styles.activeHq : styles.activeNormal
                  : ''
              }`}>{city.tag}</p>
            </div>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {[
            { num: '5',       label: 'Cities Covered'   },
            { num: '500+ km', label: 'Route Coverage'   },
            { num: '7+ Yrs',  label: 'Trusted Service'  },
          ].map(({ num, label }) => (
            <div key={label} className={styles.statCard}>
              <p className={styles.statNum}>{num}</p>
              <p className={styles.statLabel}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
