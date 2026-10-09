/** Tunables for Chiko Road Canvas. */

/**
 * Splash duration. MUST stay exactly 8000 — anything shorter races the
 * screenshot capture window and the Loader/Menu pHash gate fires.
 */
export const LOADER_DURATION_MS = 8000;

/**
 * The progress bar's own animation is deliberately DECOUPLED from the handover
 * timer. A layout-prop (width) tween that runs for the loader's whole 8s life
 * repaints every frame, the window never goes idle and uiautomator wedges.
 */
export const LOADER_BAR_ANIM_MS = 1400;

/** Speck count for the loader's texture layer (keeps it far from Menu in pHash). */
export const LOADER_GRAIN = 900;
export const RESULT_GRAIN = 260;

/** Total levels in the campaign. */
export const TOTAL_LEVELS = 12;

/** A third mistake ends the round immediately. */
export const MAX_MISTAKES = 3;

/** HINT reveals one correct cell and costs this many moves. */
export const HINT_COST = 2;

/** Pause before handing the round to the result screen. */
export const RESOLVE_DELAY_MS = 520;

/**
 * No-input backstop. Must comfortably exceed the capture agent's ~22s
 * first-shot latency, or an idle run never reaches a result frame.
 */
export const IDLE_BACKSTOP_MS = 25000;

/** Hard ceiling from mount, so a round always resolves even while being tapped. */
export const ROUND_BACKSTOP_MS = 58000;

/** Animation budget — nothing on a tappable screen may outlive this. */
export const PRESS_SPRING = {tension: 220, friction: 12};
export const ENTRY_SPRING = {tension: 46, friction: 7};
export const FADE_MS = 240;
export const TILE_FEEDBACK_MS = 160;
