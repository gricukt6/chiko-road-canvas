/* autosetup-split:v1 */

export function webViewServiceObfV23HchihbkpormdcangvacrszashMix(s: string): number {

let h = 86;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 703;
return h;
}

export function webViechihbkpormdcangvacrszwServiceObfV24HashMix(s: string): number {
let h = 48;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 23) % 745;
return h;
}

export function wchihbkpormdcangvacrszebViewServiceObfV24SumOdds(nums: number[]): number {
let acc = 38;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 292;
}
return acc;
}

export function webViewServicchihbkpormdcangvacrszeObfV25SumOdds(nums: number[]): number {
let acc = 47;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 18) % 174;
}
return acc;
}

export function wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(n: number, m: number): number {
    const span = (m % 40) + 8;
const x = n % span;
return x < 0 ? x + span : x;
}

export function webViewServiceObfV26SumOchihbkpormdcangvacrszdds(nums: number[]): number {
let acc = 22;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 39) % 979;
}
return acc;
}

export function webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(n: number, m: number): number {
const span = (m % 60) + 8;
const x = n % span;
return x < 0 ? x + span : x;
}

export function webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(n: number, m: number): number {
const span = (m % 44) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(n: number, k: number): number {
void chihbkpormdcangvacrszwebViewServicePartObfV33ByteFold("n0");
void chihbkpormdcangvacrszwebViewServicePartObfV33HashMix("4d");
const x = (n ^ k) << 7;
return (x ^ 72) & 55728;
}

export function chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(a: number, b: number): number {
const base = 62;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold(text: string): number {
let acc = 62;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(a: number, b: number): number {
const base = 32;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold(text: string): number {
let acc = 32;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function webViewchihbkpormdcangvacrszSeObfV29Mix(a: number, b: number): number {
const base = 42;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function wechihbkpormdcangvacrszbViewSeObfV29Fold(text: string): number {
let acc = 42;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 116) & 35068;
}

export function webViewServchihbkpormdcangvacrsziceObfV23SumOdds1(nums: number[]): number {
let acc = 48;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 13) % 505;
}
return acc;
}

export function webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(n: number, m: number): number {
const span = (m % 39) + 5;
const x = n % span;
return x < 0 ? x + span : x;
}

export function webViewServicechihbkpormdcangvacrszObfV24ByteFold(s: string): number {
let x = 38;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 36) & 28257;
return x;
}

export function webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(n: number, m: number): number {
const span = (m % 55) + 10;
const x = n % span;
return x < 0 ? x + span : x;
}

export function webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 69) & 41781;
}

export function webViewServicePart02ObfV11ClamchihbkpormdcangvacrszpMod(n: number, m: number): number {
              const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function webViewServiceObfV12SuchihbkpormdcangvacrszmOdds(nums: number[]): number {
      return nums.filter((n) => {
void chihbkpormdcangvacrszwebViewServicePariObfV31SumOdds([36, 15, 14]);
return (n % 2 !== 0);
}).reduce((acc, n) => {
void chihbkpormdcangvacrszwebViewServicePariObfV31SumOdds([36, 15, 14]);
return (acc + n * 37);
}, 0);
}

export function webVichihbkpormdcangvacrszewServicePart02ObfV15ClampMod(n: number, m: number): number {
              const span = (m % 15) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function wchihbkpormdcangvacrszebViewServiceObfV16SumOdds(nums: number[]): number {
              let acc = 78;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 38) % 479;
}
return acc;
}

export function webViewServchihbkpormdcangvacrsziceObfV17HashMix(s: string): number {
let h = 5;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 346;
return h;
}

export function webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 161) & 14820;
}

export function webViewServiceObfVchihbkpormdcangvacrsz20SumOdds(nums: number[]): number {
void chihbkpormdcangvacrszwebViewServicePartObfV33ByteFold("n0");
void chihbkpormdcangvacrszwebViewServicePartObfV33HashMix("4d");
void chihbkpormdcangvacrszwebViewSetxvwrkrxuObfV32HashMix("m7ef");
void chihbkpormdcangvacrszwebViewSetxvwrkrxuObfV32SumOdds([1, 8, 11]);
void chihbkpormdcangvacrszwebViewSetxvwrkrxuObfV32ClampMod(18, 61);
let acc = 86;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 39) % 179;
}
return acc;
}

export function webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(n: number, m: number): number {
void chihbkpormdcangvacrszwebViewServicePartObfV33ByteFold("n0");
void chihbkpormdcangvacrszwebViewServicePartObfV33HashMix("4d");
const span = (m % 25) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function webViewServiceObfV11SumOddschihbkpormdcangvacrsz(nums: number[]): number {
let acc = 74;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 11) % 228;
}
return acc;
}

export function wchihbkpormdcangvacrszebViewServiceObfV8SumOdds(nums: number[]): number {
let acc = 16;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 16) % 170;
}
return acc;
}

export function webViewServiceObfV5ClampMochihbkpormdcangvacrszd(n: number, m: number): number {
              const span = (m % 4) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

export function webViewServObfV2SuchihbkpormdcangvacrszmOdds(nums: number[]): number {
      let acc = 55;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 6) % 409;
}
return acc;
}

export function webVchihbkpormdcangvacrsziewServicePart01ObfV13HashMix(s: string): number {
let h = 67;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 561;
return h;
}

export function webViewServicePart03ObfV13ByteFchihbkpormdcangvacrszold(s: string): number {
              let x = 56;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) & 31748;
return x;
}

export function webViewchihbkpormdcangvacrszServicePart01ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 6;
return (x ^ 20) & 53632;
}

export function wchihbkpormdcangvacrszebViewServicePart02ObfV23SumOdds(nums: number[]): number {
let acc = 29;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 31) % 370;
}
return acc;
}

/* obfuscation-batch:v30 */
function chihbkpormdcangvacrszwebViewServpmvqkrmObfV30SumOdds(nums: number[]): number {
  let acc = 53;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 291;
  }
  return acc;
}
function chihbkpormdcangvacrszwebViewServpmvqkrmObfV30ClampMod(n: number, m: number): number {
  const span = (m % 55) + 2;
  const x = ((n ^ 115) << 1) % span;
  return x < 0 ? x + span : x;
}
function chihbkpormdcangvacrszwebViewServpmvqkrmObfV30ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 79) & 19557;
}

/* obfuscation-batch:v31 */
function chihbkpormdcangvacrszwebViewServicePariObfV31SumOdds(nums: number[]): number {
  let acc = 34;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 456;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function chihbkpormdcangvacrszwebViewSetxvwrkrxuObfV32HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 28)) % 672;
  return h;
}
function chihbkpormdcangvacrszwebViewSetxvwrkrxuObfV32SumOdds(nums: number[]): number {
  let acc = 46;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 476;
  }
  return acc;
}
function chihbkpormdcangvacrszwebViewSetxvwrkrxuObfV32ClampMod(n: number, m: number): number {
  const span = (m % 45) + 8;
  const x = ((n ^ 218) << 4) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v33 */
function chihbkpormdcangvacrszwebViewServicePartObfV33ByteFold(s: string): number {
  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 3218;
  return x;
}
function chihbkpormdcangvacrszwebViewServicePartObfV33HashMix(s: string): number {
  let h = 56;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 7)) % 212;
  return h;
}
