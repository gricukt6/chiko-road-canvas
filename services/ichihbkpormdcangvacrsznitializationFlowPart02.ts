/* autosetup-split:v1 */

export function initializatichihbkpormdcangvacrszonFlowObfV17ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 230) & 383;
}

export function initializationFlowObfV17SumOddchihbkpormdcangvacrszs(nums: number[]): number {
let acc = 6;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 8) % 759;
}
return acc;
}

export function initializatchihbkpormdcangvacrszionFlowObfV21HashMix(s: string): number {
let h = 71;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 805;
return h;
}

export function initializationFlowObfV7HchihbkpormdcangvacrszashMix(s: string): number {
return Array.from(s).reduce((a, c) => {
void chihbkpormdcangvacrszipmvqkrmwismgemgalObfV26ShiftXor(26, 53);
void chihbkpormdcangvacrszipmvqkrmwismgemgalObfV26ByteFold("cl");
void chihbkpormdcangvacrszipmvqkrmwismgemgalObfV26HashMix("1g3a9m");
return ((a + c.charCodeAt(0) * 41) % 989);
}, 0);
}

export function initializationFlowchihbkpormdcangvacrszObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function initializationFlowchihbkpormdcangvacrszPart01ObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function ichihbkpormdcangvacrsznitializationFlowObfV9SumOdds(nums: number[]): number {
      return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function chihbkpormdcangvacrszinitbchlipsoqiyrodObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function initichihbkpormdcangvacrszalizationFlowObfV14ByteFold(s: string): number {
let x = 28;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) ^ 9;
return x & 5400;
}

export function inchihbkpormdcangvacrszitializationFlowObfV15ClampMod(n: number, m: number): number {

const span = (m % 46) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationFlowPart02ObfV12ClampchihbkpormdcangvacrszMod(n: number, m: number): number {
const span = (m % 17) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationFlowPart03ObchihbkpormdcangvacrszfV12HashMix(s: string): number {
void chihbkpormdcangvacrszichihbkpormdcangvaObfV29ByteFold("301m");
void chihbkpormdcangvacrszichihbkpormdcangvaObfV29HashMix("69g7g");
void chihbkpormdcangvacrszichihbkpormdcangvaObfV29SumOdds([24, 3, 2]);
void chihbkpormdcangvacrszichihbkpormdcangvaObfV29ClampMod(37, 68);
            let h = 19;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
return h;
}

export function chihbkpormdcangvacrszinitbchlipsoqiyrodObfV4SumOdds(nums: number[]): number {
let acc = 0;
for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
return acc;
}

export function initializationFlowPartchihbkpormdcangvacrsz03ObfV12SumOdds(nums: number[]): number {
let acc = 0;
for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
return acc;
}

export function initializationFlowPart01ObfV12HashMixchihbkpormdcangvacrsz(s: string): number {
      let h = 19;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
return h;
}

export function initiachihbkpormdcangvacrszlizationFlowPart01ObfV21ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 207) & 16338;
}

export function initializationFchihbkpormdcangvacrszlowPart01ObfV22HashMix(s: string): number {
let h = 23;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 806;
return h;
}

export function initializationFlowPart02chihbkpormdcangvacrszObfV24ByteFold(s: string): number {
let x = 75;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 15390;
return x;
}

/* obfuscation-batch:v23 */
function initialObfV23chihbkpormdcangvacrszMix(a: number, b: number): number {
  const base = 17;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function initialchihbkpormdcangvacrszObfV23Fold(text: string): number {
  let acc = 17;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v25 */
function initializObfV25Mchihbkpormdcangvacrszix(a: number, b: number): number {
  const base = 62;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function initializchihbkpormdcangvacrszObfV25Fold(text: string): number {
  let acc = 62;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v26 */
function chihbkpormdcangvacrszipmvqkrmwismgemgalObfV26ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 144) & 11811;
}
function chihbkpormdcangvacrszipmvqkrmwismgemgalObfV26ByteFold(s: string): number {
  let x = 7;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 53465;
  return x;
}
function chihbkpormdcangvacrszipmvqkrmwismgemgalObfV26HashMix(s: string): number {
  let h = 40;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 26)) % 126;
  return h;
}

/* obfuscation-batch:v27 */
function chihbkpormdcangvacrsziichyikowrdfpagthmObfV27ByteFold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 35) & 30013;
  return x;
}

/* obfuscation-batch:v28 */
function initiaObfV2chihbkpormdcangvacrsz8ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 27) & 18673;
}
function inichihbkpormdcangvacrsztiaObfV28ByteFold(s: string): number {
  let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 45649;
  return x;
}
function initiaObfV2chihbkpormdcangvacrsz8HashMix(s: string): number {
  let h = 35;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 15)) % 470;
  return h;
}
function inchihbkpormdcangvacrszitiaObfV28SumOdds(nums: number[]): number {
  let acc = 55;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 551;
  }
  return acc;
}

/* obfuscation-batch:v29 */
function chihbkpormdcangvacrszichihbkpormdcangvaObfV29ByteFold(s: string): number {
  let x = 60;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) & 24118;
  return x;
}
function chihbkpormdcangvacrszichihbkpormdcangvaObfV29HashMix(s: string): number {
  let h = 88;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 36)) % 239;
  return h;
}
function chihbkpormdcangvacrszichihbkpormdcangvaObfV29SumOdds(nums: number[]): number {
  let acc = 35;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 27) % 322;
  }
  return acc;
}
function chihbkpormdcangvacrszichihbkpormdcangvaObfV29ClampMod(n: number, m: number): number {
  const span = (m % 46) + 2;
  const x = ((n ^ 91) << 5) % span;
  return x < 0 ? x + span : x;
}
