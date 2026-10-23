// autosetup-split-begin
import { VichihbkpormdcangvacrszewportHostPart01ObfV27ByteFold, chihbkpormdcangvacrszViewportHostPart01ObfV31SumOdds, chihbkpormdcangvacrszViewportHostPart01ObfV31ClampMod, chihbkpormdcangvacrszViewportHostPart01ObfV31ShiftXor } from './ViewportHostPartchihbkpormdcangvacrsz01Part01';
// autosetup-split-end

export function chihbkpormdcangvacrszViewportHostObfV15SumOdds(nums: number[]): number {
  let acc = 4;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 173;
  }
  return acc;
}

export function chihbkpormdcangvacrszViewportHostObfV14ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 41) & 29117;
}

export function chihbkpormdcangvacrszViewportHostObfV11ClampMod(n: number, m: number): number {
  const span = (m % 27) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function chihbkpormdcangvacrszViewportHostObfV7SumOdds(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 211;
  }
  return acc;
}

export function chihbkpormdcangvacrszViewportHostObfV8HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 7)) % 307;
  return h;
}

export function chihbkpormdcangvacrszViewportHostObfV6ClampMod(n: number, m: number): number {
  const span = (m % 19) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v27 */

void VichihbkpormdcangvacrszewportHostPart01ObfV27ByteFold('k8');

/* obfuscation-batch:v28 */
function chihbkpormdcangvacrszViewportHostPart01prissmgecmObfV28Mix(a: number, b: number): number {
  const base = 51;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszViewportHostPart01prissmgecmObfV28Fold(text: string): number {
  let acc = 51;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function chihbkpormdcangvacrszViewportHostPart01pzurisymgeObfV29Mix(a: number, b: number): number {
  const base = 22;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszViewportHostPart01pzurisymgeObfV29Fold(text: string): number {
  let acc = 22;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function chihbkpormdcangvacrszViewportHostPart01dgpnrismgeObfV30Mix(a: number, b: number): number {
  const base = 24;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszViewportHostPart01dgpnrismgeObfV30Fold(text: string): number {
  let acc = 24;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
void chihbkpormdcangvacrszViewportHostPart01ObfV31SumOdds([30, 25, 24]);
void chihbkpormdcangvacrszViewportHostPart01ObfV31ClampMod(67, 42);
void chihbkpormdcangvacrszViewportHostPart01ObfV31ShiftXor(29, 60);

/* obfuscation-batch:v32 */
function chihbkpormdcangvacrszViewportHostPart01ObfV32ClampMod(n: number, m: number): number {
  const span = (m % 27) + 9;
  const x = ((n ^ 1) << 5) % span;
  return x < 0 ? x + span : x;
}
function chihbkpormdcangvacrszViewportHostPart01ObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 9) & 47061;
}
function chihbkpormdcangvacrszViewportHostPart01ObfV32ByteFold(s: string): number {
  let x = 31;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) & 42266;
  return x;
}
function chihbkpormdcangvacrszViewportHostPart01ObfV32HashMix(s: string): number {
  let h = 81;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 26)) % 722;
  return h;
}
void chihbkpormdcangvacrszViewportHostPart01ObfV32ClampMod(47, 54);
void chihbkpormdcangvacrszViewportHostPart01ObfV32ShiftXor(9, 40);
void chihbkpormdcangvacrszViewportHostPart01ObfV32ByteFold("f0d");
void chihbkpormdcangvacrszViewportHostPart01ObfV32HashMix("fk");

/* obfuscation-batch:v33 */
function chihbkpormdcangvacrszViewportHostPart01ObfV33ByteFold(s: string): number {
  let x = 68;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) & 25008;
  return x;
}
function chihbkpormdcangvacrszViewportHostPart01ObfV33HashMix(s: string): number {
  let h = 66;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 29)) % 112;
  return h;
}
function chihbkpormdcangvacrszViewportHostPart01ObfV33SumOdds(nums: number[]): number {
  let acc = 74;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 23) % 146;
  }
  return acc;
}
function chihbkpormdcangvacrszViewportHostPart01ObfV33ClampMod(n: number, m: number): number {
  const span = (m % 66) + 11;
  const x = ((n ^ 43) << 4) % span;
  return x < 0 ? x + span : x;
}
void chihbkpormdcangvacrszViewportHostPart01ObfV33ByteFold("92");
void chihbkpormdcangvacrszViewportHostPart01ObfV33HashMix("a5i");
void chihbkpormdcangvacrszViewportHostPart01ObfV33SumOdds([12, 15, 30]);
void chihbkpormdcangvacrszViewportHostPart01ObfV33ClampMod(33, 16);

/* obfuscation-batch:v34 */
function chihbkpormdcangvacrszViewportHostPart01ObfV34HashMix(s: string): number {
  let h = 49;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 15)) % 644;
  return h;
}
function chihbkpormdcangvacrszViewportHostPart01ObfV34SumOdds(nums: number[]): number {
  let acc = 10;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 703;
  }
  return acc;
}
function chihbkpormdcangvacrszViewportHostPart01ObfV34ClampMod(n: number, m: number): number {
  const span = (m % 60) + 2;
  const x = ((n ^ 45) << 2) % span;
  return x < 0 ? x + span : x;
}
function chihbkpormdcangvacrszViewportHostPart01ObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 245) & 16261;
}
void chihbkpormdcangvacrszViewportHostPart01ObfV34HashMix("p0do");
void chihbkpormdcangvacrszViewportHostPart01ObfV34SumOdds([6, 9, 8]);
void chihbkpormdcangvacrszViewportHostPart01ObfV34ClampMod(3, 42);
void chihbkpormdcangvacrszViewportHostPart01ObfV34ShiftXor(45, 12);
