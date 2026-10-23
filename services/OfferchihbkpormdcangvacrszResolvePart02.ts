/* autosetup-split:v1 */

export function OfferResolveObfV17BytechihbkpormdcangvacrszFold(s: string): number {
      let x = 68;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 200;
return x & 35035;
}

export function OfferResolveObfV18HaschihbkpormdcangvacrszhMix(s: string): number {
let h = 52;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 254;
return h;
}

export function OfferResolveObfV20HaschihbkpormdcangvacrszhMix(s: string): number {
let h = 90;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 675;
return h;
}

export function OfchihbkpormdcangvacrszferResolveObfV21ByteFold(s: string): number {
            let x = 13;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 65535;
return x;
}

export function chihbkpormdcangvacrszOfferResolvObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function chihbkpormdcangvacrszOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function chihbkpormdcangvacrszOfferResolveObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function chihbkpormdcangvacrszOfferResolvePart01ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 117) & 58189;
}

export function chihbkpormdcangvacrszOffObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function chihbkpormdcangvacrszOfferResolveObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function chihbkpormdcangvacrszOfferResolvePart03ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function chihbkpormdcangvacrszOfferResolvePart02ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 205) & 53104;
}

export function chihbkpormdcangvacrszMixSeed(a: number, b: number): number {
      
return ((a % (b || 1)) + b) % (b || 1);
}

export function chihbkpormdcangvacrszClampSpan(n: number, lo: number, hi: number): number {
      
return n < lo ? lo : n > hi ? hi : n;
}

export function chihbkpormdcangvacrszOfferResolveObfV14HashMix(s: string): number {
let h = 6;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 682;
return h;
}

export function OfferResolvePart02ObfV20chihbkpormdcangvacrszClampMod(n: number, m: number): number {
const span = (m % 61) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

export function OfferRechihbkpormdcangvacrszsolvePart02ObfV21ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 226) & 41844;
}

export function OfferResolvePart02ObfV21SumOddschihbkpormdcangvacrsz(nums: number[]): number {
let acc = 47;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 35) % 500;
}
return acc;
}

export function OfferResochihbkpormdcangvacrszlveObfV22SumOdds(nums: number[]): number {
let acc = 46;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 37) % 181;
}
return acc;
}

export function OfferResolvechihbkpormdcangvacrszObfV23ClampMod2(n: number, m: number): number {

const span = (m % 15) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

export function OfferResolveOchihbkpormdcangvacrszbfV24SumOdds(nums: number[]): number {
void chihbkpormdcangvacrszOfferchihbkpormdcaObfV34ShiftXor(6, 65);
void chihbkpormdcangvacrszOfferchihbkpormdcaObfV34ByteFold("mf65k");
void chihbkpormdcangvacrszOfferchihbkpormdcaObfV34HashMix("4f6");
            let acc = 21;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 14) % 716;
}
return acc;
}


/* obfuscation-batch:v25 */
function OfferResolvePachihbkpormdcangvacrszrt02ObfV25ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 129) & 18363;
}

function OfferResolvePartchihbkpormdcangvacrsz02ObfV25ByteFold(s: string): number {
  let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) & 33788;
  return x;
}

function OfferchihbkpormdcangvacrszResolvePart02ObfV25HashMix(s: string): number {
        let h = 41;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 807;
  return h;
}
void OfferResolvePachihbkpormdcangvacrszrt02ObfV25ShiftXor(3, 27);
void OfferResolvePartchihbkpormdcangvacrsz02ObfV25ByteFold('u4');
void OfferchihbkpormdcangvacrszResolvePart02ObfV25HashMix('r2');


/* obfuscation-batch:v26 */
function OfferResochihbkpormdcangvacrszlvePart02ObfV26ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 29) & 30538;
}

function OfferResolvePart02ObfV2chihbkpormdcangvacrsz6ByteFold(s: string): number {
  let x = 74;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 32919;
  return x;
}

function OfferResolvePart0chihbkpormdcangvacrsz2ObfV26HashMix(s: string): number {
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 10) % 562;
  return h;
}

/* obfuscation-batch:v27 */
function OfferchihbkpormdcangvacrszResolvePart02ObfV27SumOdds(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 121;
  }
  return acc;
}
function OfchihbkpormdcangvacrszferResolvePart02ObfV27ClampMod(n: number, m: number): number {
  const span = (m % 39) + 13;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvePart02ObfV27chihbkpormdcangvacrszShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 197) & 18497;
}

/* obfuscation-batch:v28 */
function OchihbkpormdcangvacrszfferResObfV28Mix(a: number, b: number): number {
  const base = 79;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function OfferchihbkpormdcangvacrszResObfV28Fold(text: string): number {
  let acc = 79;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function chihbkpormdcangvacrszOfferResolvepzurisymgeqmgallObfV29Mix(a: number, b: number): number {
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszOfferResolvepzurisymgeqmgallObfV29Fold(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function OfferResoObfV30Mchihbkpormdcangvacrszix(a: number, b: number): number {
  const base = 36;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function OfferResoObfV3chihbkpormdcangvacrsz0Fold(text: string): number {
  let acc = 36;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function chihbkpormdcangvacrszOfferResolpmvqkrmwObfV31HashMix(s: string): number {
  let h = 43;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 38)) % 133;
  return h;
}

/* obfuscation-batch:v32 */
function chihbkpormdcangvacrszOichyikowrdfpagthmObfV32ByteFold(s: string): number {
  let x = 52;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) & 52177;
  return x;
}

/* obfuscation-batch:v33 */
function OfferRObfV33ShifchihbkpormdcangvacrsztXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 101) & 50268;
}
function OfferchihbkpormdcangvacrszRObfV33ByteFold(s: string): number {
  let x = 69;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 48301;
  return x;
}
function OfferRObfV33HashMixchihbkpormdcangvacrsz(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 12)) % 635;
  return h;
}
function OfferRObfV33SumOdchihbkpormdcangvacrszds(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 23) % 362;
  }
  return acc;
}

/* obfuscation-batch:v34 */
function chihbkpormdcangvacrszOfferchihbkpormdcaObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 122) & 26106;
}
function chihbkpormdcangvacrszOfferchihbkpormdcaObfV34ByteFold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 37901;
  return x;
}
function chihbkpormdcangvacrszOfferchihbkpormdcaObfV34HashMix(s: string): number {
  let h = 34;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 18)) % 460;
  return h;
}
