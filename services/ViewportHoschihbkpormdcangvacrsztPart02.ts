/* autosetup-split:v1 */

export function chihbkpormdcangvacrszMixSeed(a: number, b: number): number {
    
return ((a % (b || 1)) + b) % (b || 1);
}

export function chihbkpormdcangvacrszViewportHostObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function chihbkpormdcangvacrszViewportHostObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function chihbkpormdcangvacrszViewportHostObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function chihbkpormdcangvacrszVieObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function chihbkpormdcangvacrszVieObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function chihbkpormdcangvacrszViewportHostObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function chihbkpormdcangvacrszViewportHosObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function chihbkpormdcangvacrszViewportHosObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function chihbkpormdcangvacrszViewportHostObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function chihbkpormdcangvacrszViewportHostObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function chihbkpormdcangvacrszViewportHostObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function chihbkpormdcangvacrszViewportHostObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function chihbkpormdcangvacrszViewportHostObfV13HashMix(s: string): number {
let h = 83;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 6) % 724;
return h;
}

export function chihbkpormdcangvacrszViewportHostPart01ObfV14SumOdds(nums: number[]): number {
let acc = 59;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 13) % 534;
}
return acc;
}

export function chihbkpormdcangvacrszViewportHostObfV15ClampMod(n: number, m: number): number {
const span = (m % 52) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function chihbkpormdcangvacrszViewportHostObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 70) & 6927;
}
/* obfuscation-batch:v17 */
function ViewportHostPchihbkpormdcangvacrszart02ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 14) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function ViewpochihbkpormdcangvacrszrtHostPart02ObfV17ShiftXor(n: number, k: number): number {
          const x = (n ^ k) << 4;
  return (x ^ 178) & 37716;
}
function ViewportHostPart02ObfV17ByteFolchihbkpormdcangvacrszd(s: string): number {
  let x = 10;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) ^ 33;
  return x & 44888;
}
/* obfuscation-batch:v18 */
function ViewportHostPart02ObfV18ClachihbkpormdcangvacrszmpMod(n: number, m: number): number {
  const span = (m % 64) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function ViewportHostPart0chihbkpormdcangvacrsz2ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 6) & 61872;
}
/* obfuscation-batch:v19 */
function ViewportHostPart02ObfV1chihbkpormdcangvacrsz9ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 19) & 37937;
}
function ViewportHostPart02ObfV19BchihbkpormdcangvacrszyteFold(s: string): number {
      let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 23) ^ 29;
  return x & 37942;
}
function ViewporchihbkpormdcangvacrsztHostPart02ObfV19HashMix(s: string): number {

  let h = 23;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 609;
  return h;
}
function ViewportHostPachihbkpormdcangvacrszrt02ObfV19SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 628;
  }
  return acc;
}
/* obfuscation-batch:v20 */
function ViewportHostParchihbkpormdcangvacrszt02ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 8) & 5028;
}

/* obfuscation-batch:v21 */
function ViewportHchihbkpormdcangvacrszostPart02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 34) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ViewportHostPart02ObfV21ShichihbkpormdcangvacrszftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 81) & 58679;
}

function ViewportHostPart02ObfchihbkpormdcangvacrszV21ByteFold(s: string): number {
void chihbkpormdcangvacrszViewportHoschihbkpObfV34ClampMod(8, 75);
void chihbkpormdcangvacrszViewportHostxvwrkrObfV33HashMix("741cn0");
void chihbkpormdcangvacrszViewportHostxvwrkrObfV33SumOdds([8, 35, 18]);
void chihbkpormdcangvacrszViewportHostxvwrkrObfV33ClampMod(45, 76);
void chihbkpormdcangvacrszViewportHostxvwrkrObfV33ShiftXor(39, 30);
let x = 69;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 65535;
  return x;
}
void ViewportHchihbkpormdcangvacrszostPart02ObfV21ClampMod(72, 43);
void ViewportHostPart02ObfV21ShichihbkpormdcangvacrszftXor(32, 34);
void ViewportHostPart02ObfchihbkpormdcangvacrszV21ByteFold('65w7');

/* obfuscation-batch:v22 */
function ViewportHochihbkpormdcangvacrszstPart02ObfV22HashMix(s: string): number {
  let h = 89;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 800;
  return h;
}
function ViewportchihbkpormdcangvacrszHostPart02ObfV22SumOdds(nums: number[]): number {
  let acc = 43;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 350;
  }
  return acc;
}
function ViewportHostPart02ObfV22CchihbkpormdcangvacrszlampMod(n: number, m: number): number {

const span = (m % 16) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function VchihbkpormdcangvacrsziewportHostPart02ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 83) & 51655;
}
void ViewportHochihbkpormdcangvacrszstPart02ObfV22HashMix('rx');
void ViewportchihbkpormdcangvacrszHostPart02ObfV22SumOdds([29, 20, 20]);
void ViewportHostPart02ObfV22CchihbkpormdcangvacrszlampMod(72, 16);
void VchihbkpormdcangvacrsziewportHostPart02ObfV22ShiftXor(78, 31);
/* obfuscation-batch:v23 */
function ViewportHostchihbkpormdcangvacrszPart02ObfV23ByteFold(s: string): number {
  let x = 41;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 32766;
  return x;
}
function ViewportHostPart02ObfV23HashchihbkpormdcangvacrszMix1(s: string): number {
  let h = 83;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 424;
  return h;
}
void ViewportHostchihbkpormdcangvacrszPart02ObfV23ByteFold('p0ga');
void ViewportHostPart02ObfV23HashchihbkpormdcangvacrszMix1('9jr0');
void ViewportHostPachihbkpormdcangvacrszrt02ObfV24HashMix('dcbh');
void ViewportHostPart02ObfV24SumOdchihbkpormdcangvacrszds([88, 38, 59]);
void ViewportchihbkpormdcangvacrszHostPart02ObfV24ClampMod(41, 48);
/* obfuscation-batch:v24 */
function ViewportHostPachihbkpormdcangvacrszrt02ObfV24HashMix(s: string): number {
  let h = 56;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 23) % 728;
  return h;
}
function ViewportHostPart02ObfV24SumOdchihbkpormdcangvacrszds(nums: number[]): number {
      let acc = 40;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 514;
  }
  return acc;
}
function ViewportchihbkpormdcangvacrszHostPart02ObfV24ClampMod(n: number, m: number): number {
  const span = (m % 32) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}


/* obfuscation-batch:v25 */
function ViewportHostPart02ObfV25SumOchihbkpormdcangvacrszdds(nums: number[]): number {
  let acc = 46;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 43) % 789;
  }
  return acc;
}

function VchihbkpormdcangvacrsziewportHostPart02ObfV25ClampMod(n: number, m: number): number {
  const span = (m % 17) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ViewportHostPart02chihbkpormdcangvacrszObfV25ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 88) & 53871;
}

function ViewportHostPart02ObfV25chihbkpormdcangvacrszByteFold(s: string): number {
  let x = 62;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) & 28180;
  return x;
}
void ViewportHostPart02ObfV25SumOchihbkpormdcangvacrszdds([13, 5, 6]);
void VchihbkpormdcangvacrsziewportHostPart02ObfV25ClampMod(11, 16);
void ViewportHostPart02chihbkpormdcangvacrszObfV25ShiftXor(15, 3);
void ViewportHostPart02ObfV25chihbkpormdcangvacrszByteFold('i3');


/* obfuscation-batch:v26 */
function ViewportHostPart02ObchihbkpormdcangvacrszfV26SumOdds(nums: number[]): number {
void chihbkpormdcangvacrszViewportHoschihbkpObfV34ClampMod(8, 75);
  let acc = 27;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 109;
  }
  return acc;
}

function ViewportHoschihbkpormdcangvacrsztPart02ObfV26ClampMod(n: number, m: number): number {
  const span = (m % 25) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v27 */
function ViewportchihbkpormdcangvacrszHostPart02ObfV27SumOdds(nums: number[]): number {
  let acc = 28;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 23) % 79;
  }
  return acc;
}
function ViewportHostPart02ObfV27CchihbkpormdcangvacrszlampMod(n: number, m: number): number {
  const span = (m % 43) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v28 */
function chihbkpormdcangvacrszViewportHosprissmgecmsgallieObfV28Mix(a: number, b: number): number {
  const base = 88;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszViewportHosprissmgecmsgallieObfV28Fold(text: string): number {
  let acc = 88;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function chihbkpormdcangvacrszViewportHospzurisymgeqmgallsObfV29Mix(a: number, b: number): number {
  const base = 75;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszViewportHospzurisymgeqmgallsObfV29Fold(text: string): number {
  let acc = 75;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function chihbkpormdcangvacrszViewportHosdgpnrismgemgallerObfV30Mix(a: number, b: number): number {
  const base = 24;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszViewportHosdgpnrismgemgallerObfV30Fold(text: string): number {
  let acc = 24;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function chihbkpormdcangvacrszViewportHospmvqkrmObfV31ByteFold(s: string): number {
  let x = 77;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) & 6429;
  return x;
}
function chihbkpormdcangvacrszViewportHospmvqkrmObfV31HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 38)) % 403;
  return h;
}
function chihbkpormdcangvacrszViewportHospmvqkrmObfV31SumOdds(nums: number[]): number {
  let acc = 67;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 123;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function chihbkpormdcangvacrszViewportHosichyikoObfV32HashMix(s: string): number {
  let h = 27;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 37)) % 807;
  return h;
}
function chihbkpormdcangvacrszViewportHosichyikoObfV32SumOdds(nums: number[]): number {
  let acc = 52;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 864;
  }
  return acc;
}

/* obfuscation-batch:v33 */
function chihbkpormdcangvacrszViewportHostxvwrkrObfV33HashMix(s: string): number {
  let h = 79;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 37)) % 346;
  return h;
}
function chihbkpormdcangvacrszViewportHostxvwrkrObfV33SumOdds(nums: number[]): number {
  let acc = 39;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 397;
  }
  return acc;
}
function chihbkpormdcangvacrszViewportHostxvwrkrObfV33ClampMod(n: number, m: number): number {
  const span = (m % 57) + 5;
  const x = ((n ^ 59) << 3) % span;
  return x < 0 ? x + span : x;
}
function chihbkpormdcangvacrszViewportHostxvwrkrObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 183) & 52443;
}

/* obfuscation-batch:v34 */
function chihbkpormdcangvacrszViewportHoschihbkpObfV34ClampMod(n: number, m: number): number {
  const span = (m % 46) + 9;
  const x = ((n ^ 196) << 7) % span;
  return x < 0 ? x + span : x;
}
