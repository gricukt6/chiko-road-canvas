/* autosetup-split:v1 */

export function VichihbkpormdcangvacrszewportHostPart01ObfV27ByteFold(s: string): number {
let x = 17;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) & 24013;
return x;
}

export function chihbkpormdcangvacrszViewportHostPart01ObfV31SumOdds(nums: number[]): number {
let acc = 17;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 33) % 457;
}
return acc;
}

export function chihbkpormdcangvacrszViewportHostPart01ObfV31ClampMod(n: number, m: number): number {
const span = (m % 52) + 9;
const x = ((n ^ 229) << 3) % span;
return x < 0 ? x + span : x;
}

export function chihbkpormdcangvacrszViewportHostPart01ObfV31ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 189) & 7111;
}

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
function chihbkpormdcangvacrszViewportHostPartchObfV34ClampMod(n: number, m: number): number {
  const span = (m % 28) + 12;
  const x = ((n ^ 209) << 7) % span;
  return x < 0 ? x + span : x;
}
function chihbkpormdcangvacrszViewportHostPartchObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 151) & 8808;
}
function chihbkpormdcangvacrszViewportHostPartchObfV34ByteFold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 27) & 42262;
  return x;
}
function chihbkpormdcangvacrszViewportHostPartchObfV34HashMix(s: string): number {
  let h = 58;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 34)) % 721;
  return h;
}
void chihbkpormdcangvacrszViewportHostPartchObfV34ClampMod(43, 50);
void chihbkpormdcangvacrszViewportHostPartchObfV34ShiftXor(5, 52);
void chihbkpormdcangvacrszViewportHostPartchObfV34ByteFold("1m");
void chihbkpormdcangvacrszViewportHostPartchObfV34HashMix("6p");
