/* autosetup-split:v1 */

export function chihbkpormdcangvacrszGameFoldRange(nuchihbkpormdcangvacrszms: number[]): number {
return nuchihbkpormdcangvacrszms.reduce((achihbkpormdcangvacrszcc, nchihbkpormdcangvacrsz) => achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz, 0);
}

/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 29) + 9;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 35) << 7) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 7;
  return (xchihbkpormdcangvacrsz ^ 61) & 53479;
}
function chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 52;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 22) & 26586;
  return xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszPuzzleBochihbkpormObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 69;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 34)) % 380;
  return hchihbkpormdcangvacrsz;
}
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ClampMod(59, 50);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ShiftXor(53, 68);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ByteFold("1ed");
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1HashMix("589e");
