/**
 * Build-time topographic contour generator.
 *
 * A height field made of one or more peaks is contoured with marching squares,
 * so rings around neighbouring peaks merge naturally through the saddles
 * between them. Returns SVG path data per contour level; every fifth level is
 * flagged as a heavier index contour.
 */
export type Peak = {
  x: number;
  y: number;
  /** Summit height; 0 for the highest, more negative for lower peaks. */
  top: number;
  /** Horizontal stretch of the rings. */
  stretch: number;
  /** Shifts the wobble pattern so peaks don't look identical. */
  phase: number;
};

export type TopoOptions = {
  width: number;
  height: number;
  peaks: Peak[];
  /** Grid resolution in viewBox units. */
  step?: number;
  /** Contour interval. */
  spacing?: number;
  levels?: number;
  /** Height of the first contour below the top summit. */
  offset?: number;
  /** Distance over which ring wobble ramps up. */
  wobbleRange?: number;
};

type Pt = [number, number];

function peakHeight(p: Peak, x: number, y: number, range: number): number {
  const dx = (x - p.x) / p.stretch;
  const dy = y - p.y;
  const t = Math.atan2(dy, dx);
  const d = Math.hypot(dx, dy);
  // Wobble grows with distance so rings near the summit stay rounder.
  const k = Math.min(d / range, 1);
  const s = 200 / range; // keep the wobble frequency proportional to scale
  const wobble =
    1 +
    k * 0.09 * Math.sin(3 * t + d * 0.02 * s + p.phase) +
    k * 0.05 * Math.sin(5 * t - d * 0.012 * s + 1.3 + p.phase) +
    0.03 * Math.sin(2 * t + d * 0.03 * s + 0.4);
  return p.top - d / wobble;
}

// Smooth maximum so peaks blend through a rounded saddle.
function smax(a: number, b: number, k = 24): number {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.max(a, b) + h * h * k * 0.25;
}

const CASES: Record<number, [number, number][]> = {
  1: [[3, 0]], 2: [[0, 1]], 3: [[3, 1]], 4: [[1, 2]], 5: [[3, 0], [1, 2]],
  6: [[0, 2]], 7: [[3, 2]], 8: [[2, 3]], 9: [[0, 2]], 10: [[0, 1], [2, 3]],
  11: [[1, 2]], 12: [[1, 3]], 13: [[0, 1]], 14: [[0, 3]],
};

function contour(field: number[][], step: number, level: number): Pt[][] {
  const rows = field.length;
  const cols = field[0].length;
  // Each crossing point is keyed by the grid edge it lies on, so segments
  // from neighbouring cells share exact endpoints and can be chained.
  const pointOn = new Map<string, Pt>();
  const edgePoint = (key: string, a: Pt, va: number, b: Pt, vb: number): string => {
    if (!pointOn.has(key)) {
      const t = (level - va) / (vb - va);
      pointOn.set(key, [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    }
    return key;
  };
  const links = new Map<string, string[]>();
  const link = (a: string, b: string) => {
    links.set(a, [...(links.get(a) ?? []), b]);
    links.set(b, [...(links.get(b) ?? []), a]);
  };

  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const v = [field[j][i], field[j][i + 1], field[j + 1][i + 1], field[j + 1][i]];
      const c: Pt[] = [
        [i * step, j * step],
        [(i + 1) * step, j * step],
        [(i + 1) * step, (j + 1) * step],
        [i * step, (j + 1) * step],
      ];
      const code = v.reduce((acc, val, n) => acc | ((val > level ? 1 : 0) << n), 0);
      if (code === 0 || code === 15) continue;
      const e = [
        () => edgePoint(`h${i},${j}`, c[0], v[0], c[1], v[1]), // top
        () => edgePoint(`v${i + 1},${j}`, c[1], v[1], c[2], v[2]), // right
        () => edgePoint(`h${i},${j + 1}`, c[3], v[3], c[2], v[2]), // bottom
        () => edgePoint(`v${i},${j}`, c[0], v[0], c[3], v[3]), // left
      ];
      for (const [a, b] of CASES[code]) link(e[a](), e[b]());
    }
  }

  // Walk the links into polylines, starting from open ends first.
  const seen = new Set<string>();
  const lines: Pt[][] = [];
  const walk = (start: string) => {
    const line: Pt[] = [];
    let prev: string | null = null;
    let cur: string | undefined = start;
    while (cur && !seen.has(cur)) {
      seen.add(cur);
      line.push(pointOn.get(cur)!);
      const next: string | undefined = links.get(cur)!.find((n) => n !== prev && !seen.has(n));
      if (!next && prev !== null && links.get(cur)!.includes(start)) line.push(pointOn.get(start)!);
      prev = cur;
      cur = next;
    }
    if (line.length > 2) lines.push(line);
  };
  for (const [key, ns] of links) if (ns.length === 1 && !seen.has(key)) walk(key);
  for (const key of links.keys()) if (!seen.has(key)) walk(key);
  return lines;
}

// Thin points, then draw as Catmull-Rom curves for smooth lines.
function toPath(line: Pt[]): string {
  const pts = line.filter((_, n) => n % 3 === 0 || n === line.length - 1);
  const f = (p: Pt) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
  let d = `M${f(pts[0])}`;
  for (let k = 0; k < pts.length - 1; k++) {
    const p0 = pts[k - 1] ?? pts[k];
    const p1 = pts[k];
    const p2 = pts[k + 1];
    const p3 = pts[k + 2] ?? p2;
    const c1: Pt = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Pt = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1)} ${f(c2)} ${f(p2)}`;
  }
  return d;
}

export function contourPaths({
  width,
  height,
  peaks,
  step = 8,
  spacing = 19,
  levels = 30,
  offset = 18,
  wobbleRange = 200,
}: TopoOptions): { d: string; index: boolean }[] {
  const cols = Math.ceil(width / step) + 1;
  const rows = Math.ceil(height / step) + 1;
  const field: number[][] = [];
  for (let j = 0; j < rows; j++) {
    const row: number[] = [];
    for (let i = 0; i < cols; i++) {
      const x = i * step;
      const y = j * step;
      row.push(peaks.map((p) => peakHeight(p, x, y, wobbleRange)).reduce((a, b) => smax(a, b)));
    }
    field.push(row);
  }
  return Array.from({ length: levels }, (_, i) => ({
    d: contour(field, step, -(offset + i * spacing)).map(toPath).join(''),
    index: (i + 1) % 5 === 0,
  })).filter((p) => p.d);
}
