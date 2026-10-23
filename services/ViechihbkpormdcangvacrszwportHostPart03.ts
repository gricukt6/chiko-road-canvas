// autosetup-split-begin
import { ViewportHostPart03ObfV27ShchihbkpormdcangvacrsziftXor, ViewchihbkpormdcangvacrszportObfV15Mix, ViewporchihbkpormdcangvacrsztObfV15Fold, chihbkpormdcangvacrszViewportHostPartdgpnrismgemgObfV29Mix, chihbkpormdcangvacrszViewportHostPartdgpnrismgemgObfV29Fold } from './ViewportchihbkpormdcangvacrszHostPart03Part01';
import { chihbkpormdcangvacrszViewportHopzurisymgeqmgallseObfV28Mix, chihbkpormdcangvacrszViewportHopzurisymgeqmgallseObfV28Fold } from './ViewporchihbkpormdcangvacrsztHostPart03Part02';
// autosetup-split-end

export function chihbkpormdcangvacrszFoldRange(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function chihbkpormdcangvacrszViewportHostObfV10ClampMod(n: number, m: number): number {
  const span = (m % 23) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function chihbkpormdcangvacrszVieObfV3HashMix(s: string): number {
  let h = 9;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 251;
  return h;
}

export function chihbkpormdcangvacrszViewportHosObfV2HashMix(s: string): number {
  let h = 21;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 3) % 389;
  return h;
}

export function chihbkpormdcangvacrszViewportHostPart01ObfV14HashMix(s: string): number {
  let h = 6;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 19)) % 443;
  return h;
}

/* obfuscation-batch:v27 */

void ViewportHostPart03ObfV27ShchihbkpormdcangvacrsziftXor(14, 9);

/* obfuscation-batch:v15 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */
function chihbkpormdcangvacrszViewportHostPpmvqkObfV30ByteFold(s: string): number {
  let x = 83;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 41021;
  return x;
}
function chihbkpormdcangvacrszViewportHostPpmvqkObfV30HashMix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 33)) % 898;
  return h;
}
function chihbkpormdcangvacrszViewportHostPpmvqkObfV30SumOdds(nums: number[]): number {
  let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 215;
  }
  return acc;
}

/* obfuscation-batch:v31 */
function chihbkpormdcangvacrszViichyikowrdfpagthObfV31SumOdds(nums: number[]): number {
  let acc = 50;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 648;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function chihbkpormdcangvacrszViewportHostPart0tObfV32ClampMod(n: number, m: number): number {
  const span = (m % 31) + 6;
  const x = ((n ^ 67) << 4) % span;
  return x < 0 ? x + span : x;
}
function chihbkpormdcangvacrszViewportHostPart0tObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 199) & 28623;
}

/* obfuscation-batch:v33 */
function chihbkpormdcangvacrszViechihbkpormdcangObfV33ClampMod(n: number, m: number): number {
  const span = (m % 43) + 8;
  const x = ((n ^ 68) << 6) % span;
  return x < 0 ? x + span : x;
}
