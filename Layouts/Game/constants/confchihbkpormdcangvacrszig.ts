// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameFoldRange, chihbkpormdcangvacrszGameClampSpan } from './confchihbkpormdcangvacrszigPart01';
// autosetup-split-end

/** Tunables for Chiko Road Canvas. */

/**
 * Splash duration. MUST stay exactly 8000 — anything shorter races the
 * screenshot capture window and the Loader/Menu pHash gate fires.
 */
export const LOADER_DUchihbkpormdcangvacrszRATION_MS = 8000;

/**
 * The progress bar's own animation is deliberately DECOUPLED from the handover
 * timer. A layout-prop (width) tween that runs for the loader's whole 8s life
 * repaints every frame, the window never goes idle and uiautomator wedges.
 */
export const LOADER_BAchihbkpormdcangvacrszR_ANIM_MS = 1400;

/** Speck count for the loader's texture layer (keeps it far from Menu in pHash). */
export const LOADERchihbkpormdcangvacrsz_GRAIN = 900;
export const RESULTchihbkpormdcangvacrsz_GRAIN = 260;

/** Total levechihbkpormdcangvacrszls in the campaign. */
export const TOTAL_chihbkpormdcangvacrszLEVELS = 12;

/** A third mistake ends the round immediately. */
export const MAX_MIchihbkpormdcangvacrszSTAKES = 3;

/** HINT reveals one correct cell and costs this many moves. */
export const HINTchihbkpormdcangvacrsz_COST = 2;

/** Pause before handing the round to the result screen. */
export const RESOLVE_chihbkpormdcangvacrszDELAY_MS = 520;

/**
 * No-input backstop. Must comfortably exceed the capture agent's ~22s
 * first-shot latency, or an idle run never reaches a result frame.
 */
export const IDLE_BACchihbkpormdcangvacrszKSTOP_MS = 25000;

/** Hard ceiling from mount, so a round always resolves even while being tapped. */
export const ROUND_BAchihbkpormdcangvacrszCKSTOP_MS = 58000;

/** Animation budget — nothing on a tappable screen may outlive this. */
export const PRESS_chihbkpormdcangvacrszSPRING = {tension: 220, friction: 12};
export const ENTRY_chihbkpormdcangvacrszSPRING = {tension: 46, friction: 7};
export const FADchihbkpormdcangvacrszE_MS = 240;
export const TILE_FEEchihbkpormdcangvacrszDBACK_MS = 160;

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszconfchihbkpormdcanObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 55;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 17)) % 273;
  return hchihbkpormdcangvacrsz;
}
void chihbkpormdcangvacrszconfchihbkpormdcanObfV1HashMix("4ne1ib");
