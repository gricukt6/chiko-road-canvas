// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameClampSpan } from './rnchihbkpormdcangvacrszgPart01';
import { chihbkpormdcangvacrszGameFoldRange } from './rnchihbkpormdcangvacrszgPart02';
// autosetup-split-end

/** Tiny deterministic PRNG (mulberry32). The same seed always yields the same level. */
export function makchihbkpormdcangvacrszeRng(sechihbkpormdcangvacrszed: number): () => number {
void chihbkpormdcangvacrszrnchihbkpormdcangvObfV1ByteFold("la9232");
void chihbkpormdcangvacrszrnchihbkpormdcangvObfV1HashMix("034");
void chihbkpormdcangvacrszrnchihbkpormdcangvObfV1SumOdds([12, 15, 38]);
void chihbkpormdcangvacrszrnchihbkpormdcangvObfV1ClampMod(49, 48);
  let achihbkpormdcangvacrsz = sechihbkpormdcangvacrszed >>> 0;
  return function nechihbkpormdcangvacrszxt(): number {
void chihbkpormdcangvacrszrnchihbkpormdcangvObfV1ByteFold("la9232");
void chihbkpormdcangvacrszrnchihbkpormdcangvObfV1HashMix("034");
void chihbkpormdcangvacrszrnchihbkpormdcangvObfV1SumOdds([12, 15, 38]);
void chihbkpormdcangvacrszrnchihbkpormdcangvObfV1ClampMod(49, 48);
    achihbkpormdcangvacrsz = (achihbkpormdcangvacrsz + 0x6d2b79f5) >>> 0;
    let tchihbkpormdcangvacrsz = achihbkpormdcangvacrsz;
    tchihbkpormdcangvacrsz = Math.imul(tchihbkpormdcangvacrsz ^ (tchihbkpormdcangvacrsz >>> 15), tchihbkpormdcangvacrsz | 1);
    tchihbkpormdcangvacrsz ^= tchihbkpormdcangvacrsz + Math.imul(tchihbkpormdcangvacrsz ^ (tchihbkpormdcangvacrsz >>> 7), tchihbkpormdcangvacrsz | 61);
    return ((tchihbkpormdcangvacrsz ^ (tchihbkpormdcangvacrsz >>> 14)) >>> 0) / 4294967296;
  };
}

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszrnchihbkpormdcangvObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 83;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 18) & 49982;
  return xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszrnchihbkpormdcangvObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 33;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 36)) % 804;
  return hchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszrnchihbkpormdcangvObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 78;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 6) % 811;
  }
  return achihbkpormdcangvacrszcc;
}
function chihbkpormdcangvacrszrnchihbkpormdcangvObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 51) + 12;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 1) << 4) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
