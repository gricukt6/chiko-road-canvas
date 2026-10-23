/* autosetup-split:v1 */

export function chihbkpormdcangvacrszViewportHopzurisymgeqmgallseObfV28Mix(a: number, b: number): number {
const base = 61;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function chihbkpormdcangvacrszViewportHopzurisymgeqmgallseObfV28Fold(text: string): number {
let acc = 61;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

/* obfuscation-batch:v29 */
function chihbkpormdcangvacrszViewportHostPpmvqkObfV29ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 90) & 50118;
}
void chihbkpormdcangvacrszViewportHostPpmvqkObfV29ShiftXor(80, 19);

/* obfuscation-batch:v30 */
function chihbkpormdcangvacrszViewportHoichyikowObfV30ByteFold(s: string): number {
  let x = 49;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 33676;
  return x;
}
function chihbkpormdcangvacrszViewportHoichyikowObfV30HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 25)) % 341;
  return h;
}
void chihbkpormdcangvacrszViewportHoichyikowObfV30ByteFold("beh");
void chihbkpormdcangvacrszViewportHoichyikowObfV30HashMix("he1");

/* obfuscation-batch:v31 */
function ViewpoObfV31ByteFoldchihbkpormdcangvacrsz(s: string): number {
  let x = 37;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 12916;
  return x;
}
function ViewpchihbkpormdcangvacrszoObfV31HashMix(s: string): number {
  let h = 35;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 18)) % 97;
  return h;
}
void ViewpoObfV31ByteFoldchihbkpormdcangvacrsz("j6l");
void ViewpchihbkpormdcangvacrszoObfV31HashMix("7oj6dc");

/* obfuscation-batch:v32 */
function chihbkpormdcangvacrszViewporchihbkpormdObfV32ClampMod(n: number, m: number): number {
  const span = (m % 50) + 12;
  const x = ((n ^ 182) << 3) % span;
  return x < 0 ? x + span : x;
}
void chihbkpormdcangvacrszViewporchihbkpormdObfV32ClampMod(16, 3);
