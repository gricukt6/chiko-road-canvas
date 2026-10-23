/* autosetup-decoy:v1 */

export function chihbkpormdcangvacrsztalus01Touch(seed: number): number {
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ClampMod(27, 18);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ShiftXor(53, 20);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ByteFold("36ho7o");
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1HashMix("ide");
  let x = (seed ^ 45245) | 0;
  x = (x >>> 6) ^ 2461;
  x = Math.imul(x, 59) & 0xffff;
  return x;
}

/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszchihbkpormdcangvacObfV1ClampMod(n: number, m: number): number {
  const span = (m % 51) + 4;
  const x = ((n ^ 111) << 4) % span;
  return x < 0 ? x + span : x;
}
function chihbkpormdcangvacrszchihbkpormdcangvacObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 91) & 6991;
}
function chihbkpormdcangvacrszchihbkpormdcangvacObfV1ByteFold(s: string): number {
  let x = 84;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 10892;
  return x;
}
function chihbkpormdcangvacrszchihbkpormdcangvacObfV1HashMix(s: string): number {
  let h = 5;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 579;
  return h;
}
