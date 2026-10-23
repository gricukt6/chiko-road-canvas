/* autosetup-split:v1 */

export function chihbkpormdcangvacrszGameMixSeed(xchihbkpormdcangvacrsz: number, ychihbkpormdcangvacrsz: number): number {
return ((xchihbkpormdcangvacrsz % (ychihbkpormdcangvacrsz || 1)) + ychihbkpormdcangvacrsz) % (ychihbkpormdcangvacrsz || 1);
}

export function chihbkpormdcangvacrszGameFoldRange(nuchihbkpormdcangvacrszms: number[]): number {
return nuchihbkpormdcangvacrszms.reduce((achihbkpormdcangvacrszcc, nchihbkpormdcangvacrsz) => achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz, 0);
}

export function chihbkpormdcangvacrszGameClampSpan(nchihbkpormdcangvacrsz: number, lchihbkpormdcangvacrszo: number, hchihbkpormdcangvacrszi: number): number {
return nchihbkpormdcangvacrsz < lchihbkpormdcangvacrszo ? lchihbkpormdcangvacrszo : nchihbkpormdcangvacrsz > hchihbkpormdcangvacrszi ? hchihbkpormdcangvacrszi : nchihbkpormdcangvacrsz;
}

/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszLoadichihbkpormdcaObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 21;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 27)) % 90;
  return hchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszLoadichihbkpormdcaObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 57;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 30) % 273;
  }
  return achihbkpormdcangvacrszcc;
}
function chihbkpormdcangvacrszLoadichihbkpormdcaObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 58) + 2;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 44) << 7) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszLoadichihbkpormdcaObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 5;
  return (xchihbkpormdcangvacrsz ^ 40) & 54773;
}
void chihbkpormdcangvacrszLoadichihbkpormdcaObfV1HashMix("h8bkl");
void chihbkpormdcangvacrszLoadichihbkpormdcaObfV1SumOdds([21, 28, 23]);
void chihbkpormdcangvacrszLoadichihbkpormdcaObfV1ClampMod(70, 65);
void chihbkpormdcangvacrszLoadichihbkpormdcaObfV1ShiftXor(8, 11);
