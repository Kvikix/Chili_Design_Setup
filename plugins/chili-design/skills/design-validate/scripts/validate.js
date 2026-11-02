// Chili design-validate — READ-ONLY check. Run with use_figma.
// Replace ROOT_IDS with the node ids of the frames to check (e.g. ["123:456"]).
const ROOT_IDS = ["__ROOT_IDS__"];
const SCALE = [0, 2, 4, 8, 12, 16, 20, 24, 32, 40];      // project may override (validation.spacing_scale)
const ABOVE_STEP = 8;                                     // above the last value: multiples of this
const REQUIRE_SPACE_TOKENS = true;                        // validation.require_spacing_tokens
const LIMIT = 80;                                         // max items per category in the output

const last = SCALE[SCALE.length - 1];
const okSpace = v => SCALE.includes(v) || (v > last && v % ABOVE_STEP === 0);
const nearest = v => {
  const c = SCALE.concat(v > last ? [Math.floor(v / ABOVE_STEP) * ABOVE_STEP, Math.ceil(v / ABOVE_STEP) * ABOVE_STEP] : []);
  let best = c[0]; for (const x of c) if (Math.abs(x - v) < Math.abs(best - v)) best = x;
  const tie = c.filter(x => Math.abs(x - v) === Math.abs(best - v));
  return tie.length > 1 ? tie.join(' or ') : best;
};
const DEFAULT_NAME = /^(Frame|Group|Rectangle|Ellipse|Vector|Line|Polygon|Star|Text|Union|Subtract|Intersect|Exclude|Image|Slice|Section|Auto layout|Component|Instance)( \d+)?( copy( \d+)?)?$/i;
const SHAPES = ['VECTOR', 'BOOLEAN_OPERATION', 'STAR', 'LINE', 'ELLIPSE', 'POLYGON', 'RECTANGLE'];
// shapes inside an icon/logo (parent holds only shapes, or a boolean operation) are not name-checked
const iconPart = n => SHAPES.includes(n.type) && n.parent && (n.parent.type === 'BOOLEAN_OPERATION' || ('children' in n.parent && n.parent.children.every(c => SHAPES.includes(c.type))));
const PAD = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
const RAD = ['topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius'];

const out = { spacing: [], names: [], colors: [], textStyles: [], spaceTokens: [], effects: [] };
const counts = { spacing: 0, names: 0, colors: 0, textStyles: 0, spaceTokens: 0, effects: 0, nodes: 0 };
const add = (cat, node, path, detail) => { counts[cat]++; if (out[cat].length < LIMIT) out[cat].push({ id: node.id, path, detail }); };
const hex = c => '#' + [c.r, c.g, c.b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
const bound = (node, prop) => node.boundVariables && node.boundVariables[prop];

function checkPaints(node, path, prop, paints, styleId) {
  if (!Array.isArray(paints) || (styleId && styleId !== figma.mixed && styleId !== '')) return;
  for (const p of paints) {
    if (p.visible === false || p.type !== 'SOLID') continue;   // images/gradients are skipped
    if (!(p.boundVariables && p.boundVariables.color)) add('colors', node, path, `${prop} ${hex(p.color)}${p.opacity != null && p.opacity < 1 ? ' @' + Math.round(p.opacity * 100) + '%' : ''} — no token`);
  }
}

function walk(node, path) {
  counts.nodes++;
  const here = path ? path + ' / ' + node.name : node.name;
  if (DEFAULT_NAME.test(node.name.trim()) && !iconPart(node)) add('names', node, here, `default name «${node.name}» (${node.type})`);
  if (node.type === 'INSTANCE') return;                       // insides come from the library

  if ('fills' in node && node.type !== 'TEXT') checkPaints(node, here, 'fill', node.fills, node.fillStyleId);
  if ('strokes' in node && node.strokes.length) checkPaints(node, here, 'stroke', node.strokes, node.strokeStyleId);
  if ('effects' in node && node.effects.some(e => e.visible !== false) && !node.effectStyleId) add('effects', node, here, 'effect without style');

  if (node.type === 'TEXT') {
    if (node.textStyleId === figma.mixed) add('textStyles', node, here, 'text style applied only partly');
    else if (!node.textStyleId) add('textStyles', node, here, `no text style (${node.fontSize === figma.mixed ? 'mixed' : node.fontSize}px)`);
    if (node.fills === figma.mixed) {
      for (const s of node.getStyledTextSegments(['fills', 'fillStyleId'])) checkPaints(node, here, `text fill «${s.characters.slice(0, 20)}»`, s.fills, s.fillStyleId);
    } else checkPaints(node, here, 'text fill', node.fills, node.fillStyleId);
  }

  if ('layoutMode' in node && node.layoutMode !== 'NONE') {
    const props = [...PAD];
    const kids = 'children' in node ? node.children.filter(c => c.visible && c.layoutPositioning !== 'ABSOLUTE').length : 0;
    if (kids > 1 && node.primaryAxisAlignItems !== 'SPACE_BETWEEN') props.push('itemSpacing');
    if (node.layoutWrap === 'WRAP' && node.counterAxisSpacing != null) props.push('counterAxisSpacing');
    for (const pr of props) {
      const v = node[pr];
      if (typeof v !== 'number') continue;
      if (!okSpace(v)) add('spacing', node, here, `${pr} ${v} → ${nearest(v)}`);
      else if (REQUIRE_SPACE_TOKENS && v > 0 && !bound(node, pr)) add('spaceTokens', node, here, `${pr} ${v} — no Spacing token`);
    }
  }
  if (REQUIRE_SPACE_TOKENS && 'cornerRadius' in node && node.cornerRadius !== 0) {
    const unbound = RAD.filter(r => node[r] > 0 && !bound(node, r));
    if (unbound.length) add('spaceTokens', node, here, `radius ${node.cornerRadius === figma.mixed ? 'mixed' : node.cornerRadius} — no Radius token`);
  }
  if ('children' in node) for (const c of node.children) walk(c, here);
}

const roots = [];
for (const id of ROOT_IDS) {
  const n = await figma.getNodeByIdAsync(id);
  if (!n) { roots.push({ id, error: 'not found' }); continue; }
  let p = n; while (p && p.type !== 'PAGE') p = p.parent;
  roots.push({ id, name: n.name, page: p ? p.name : '?' });
  walk(n, '');
}
return { roots, counts, issues: out };
