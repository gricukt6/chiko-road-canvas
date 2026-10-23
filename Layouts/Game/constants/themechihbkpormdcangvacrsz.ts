/**
 * WARM_EARTHY preset. Only the accent hexes are overridden with the brief's
 * palette; the `name` field stays the canonical preset slug (CLAUDE.md #11b).
 *
 * Deliberately NOT declared `as const` — readonly gradient tuples fail the
 * tsc gate against LinearGradient's mutable `colors` prop.
 */
export const HEADER_chihbkpormdcangvacrszTOP_PAD = 44;

export const THchihbkpormdcangvacrszEME = {
  name: 'warm-earthy',
  colors: {
    canvas: '#FFF1D8',
    canvasDeep: '#EFE2C8',
    surface: '#F7F2E9',
    surfaceSunken: '#E9DCBE',
    woodDark: '#3B2B18',
    woodMid: '#6B4A24',
    woodEdge: '#8A5A22',
    tray: '#C8A06A',
    rim: '#E3D2AE',
    gold: '#F4C64B',
    terracotta: '#EC8147',
    meadow: '#63B96C',
    meadowDeep: '#4E9C57',
    sky: '#4B9CD2',
    skyDeep: '#2F7BA8',
    textPrimary: '#4A3A24',
    textSecondary: '#8A7355',
    textMuted: '#B3A188',
    textOnDark: '#FFF1D8',
    glass: 'rgba(255,255,255,0.62)',
    glassStrong: 'rgba(255,255,255,0.78)',
    hairline: 'rgba(185,119,43,0.22)',
    hairlineStrong: 'rgba(185,119,43,0.38)',
    headerBg: 'rgba(255,255,255,0.55)',
  },
  gradients: {
    loader: ['#2E2112', '#4A3418', '#6B4A24'] as string[],
    cta: ['#F4C64B', '#EC8147'] as string[],
    bar: ['#F4C64B', '#EC8147'] as string[],
    road: ['#7BC983', '#63B96C'] as string[],
    cream: ['#FFF1D8', '#F7F2E9', '#EFE2C8'] as string[],
    menuScrim: [
      'rgba(255,241,216,0.00)',
      'rgba(255,241,216,0.55)',
      '#FFF1D8',
    ] as string[],
    gameScrim: ['rgba(255,241,216,0.74)', 'rgba(247,242,233,0.90)'] as string[],
    win: ['#FFF1D8', '#EFE8D2', '#DBE9CD'] as string[],
    lose: ['#FFF1D8', '#F3E3D3', '#EFD5C2'] as string[],
    verdictWin: ['#7BC983', '#63B96C'] as string[],
    verdictLose: ['#F09A6B', '#EC8147'] as string[],
  },
  shadow: {
    warm: {
      shadowColor: '#8A5A22',
      shadowOpacity: 0.22,
      shadowRadius: 18,
      shadowOffset: {width: 0, height: 8},
      elevation: 8,
    },
    tile: {
      shadowColor: '#8A5A22',
      shadowOpacity: 0.18,
      shadowRadius: 8,
      shadowOffset: {width: 0, height: 4},
      elevation: 4,
    },
  },
};

/** Translucent tint helper — accent + alpha suffix, used by the stat pills. */
export function tichihbkpormdcangvacrsznt(hchihbkpormdcangvacrszex: string, alchihbkpormdcangvacrszpha: string): string {
void chihbkpormdcangvacrszthemechihbkpormdcaObfV1ShiftXor(13, 60);
void chihbkpormdcangvacrszthemechihbkpormdcaObfV1ByteFold("hk");
  return hchihbkpormdcangvacrszex + alchihbkpormdcangvacrszpha;
}

/* autosetup-game-stamp:v1 */
function chihbkpormdcangvacrszGameMixSeed(xchihbkpormdcangvacrsz: number, ychihbkpormdcangvacrsz: number): number {
  return ((xchihbkpormdcangvacrsz % (ychihbkpormdcangvacrsz || 1)) + ychihbkpormdcangvacrsz) % (ychihbkpormdcangvacrsz || 1);
}
function chihbkpormdcangvacrszGameFoldRange(nuchihbkpormdcangvacrszms: number[]): number {
  return nuchihbkpormdcangvacrszms.reduce((achihbkpormdcangvacrszcc, nchihbkpormdcangvacrsz) => achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz, 0);
}
function chihbkpormdcangvacrszGameClampSpan(nchihbkpormdcangvacrsz: number, lchihbkpormdcangvacrszo: number, hchihbkpormdcangvacrszi: number): number {
  return nchihbkpormdcangvacrsz < lchihbkpormdcangvacrszo ? lchihbkpormdcangvacrszo : nchihbkpormdcangvacrsz > hchihbkpormdcangvacrszi ? hchihbkpormdcangvacrszi : nchihbkpormdcangvacrsz;
}
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszthemechihbkpormdcaObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 6;
  return (xchihbkpormdcangvacrsz ^ 45) & 50290;
}
function chihbkpormdcangvacrszthemechihbkpormdcaObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 57;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 30) & 15070;
  return xchihbkpormdcangvacrsz;
}
