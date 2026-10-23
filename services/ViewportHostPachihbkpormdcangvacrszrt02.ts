/* autosetup-split:v1 */

export function chihbkpormdcangvacrszVieObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function chihbkpormdcangvacrszViewportHosObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function chihbkpormdcangvacrszViewportHosObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function chihbkpormdcangvacrszViewportHostObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function chihbkpormdcangvacrszViewportHostObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function chihbkpormdcangvacrszViewportHostObfV15ByteFold(s: string): number {
let x = 29;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 170;
return x & 5709;
}
/* obfuscation-batch:v17 */
function ViewportHostPart02ObfV17ByteFolchihbkpormdcangvacrszd(s: string): number {
  let x = 80;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 106;
  return x & 6323;
}
void ViewportHostPart02ObfV17ByteFolchihbkpormdcangvacrszd('fkvg');
/* obfuscation-batch:v18 */
function ViewportHostPart02ObfV18ByteFochihbkpormdcangvacrszld(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 114;
  return x & 48365;
}
function ViewportHostPart02ObfV18HashchihbkpormdcangvacrszMix(s: string): number {
  let h = 56;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 796;
  return h;
}
void ViewportHostPart02ObfV18ByteFochihbkpormdcangvacrszld('92m');
void ViewportHostPart02ObfV18HashchihbkpormdcangvacrszMix('nf66');
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
  const x = (n ^ k) << 4;
  return (x ^ 146) & 28064;
}

/* obfuscation-batch:v21 */
function ViewportHchihbkpormdcangvacrszostPart02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 27) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ViewportHostPart02ObfV21ShichihbkpormdcangvacrszftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 123) & 46424;
}
void ViewportHchihbkpormdcangvacrszostPart02ObfV21ClampMod(23, 18);
void ViewportHostPart02ObfV21ShichihbkpormdcangvacrszftXor(60, 40);

/* obfuscation-batch:v22 */
function ViewportHostPart02ObfV22CchihbkpormdcangvacrszlampMod(n: number, m: number): number {

const span = (m % 34) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function VchihbkpormdcangvacrsziewportHostPart02ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 186) & 47522;
}
void ViewportHostPart02ObfV22CchihbkpormdcangvacrszlampMod(15, 71);
void VchihbkpormdcangvacrsziewportHostPart02ObfV22ShiftXor(65, 26);
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
void ViewportHochihbkpormdcangvacrszstPart02ObfV24ShiftXor(31, 6);
/* obfuscation-batch:v24 */
function ViewportHochihbkpormdcangvacrszstPart02ObfV24ShiftXor(n: number, k: number): number {
        const x = (n ^ k) << 4;
  return (x ^ 95) & 14170;
}


/* obfuscation-batch:v25 */
function VchihbkpormdcangvacrsziewportHostPart02ObfV25ClampMod(n: number, m: number): number {
  const span = (m % 47) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ViewportHostPart02chihbkpormdcangvacrszObfV25ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 159) & 54900;
}
void VchihbkpormdcangvacrsziewportHostPart02ObfV25ClampMod(56, 52);
void ViewportHostPart02chihbkpormdcangvacrszObfV25ShiftXor(14, 28);


/* obfuscation-batch:v26 */
function ViewportHostPart02ObfV26ByteFolchihbkpormdcangvacrszd(s: string): number {
  let x = 19;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 47) & 61698;
  return x;
}

function ViechihbkpormdcangvacrszwportHostPart02ObfV26HashMix(s: string): number {
  let h = 76;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 47) % 880;
  return h;
}

function ViewportHostPart02ObchihbkpormdcangvacrszfV26SumOdds(nums: number[]): number {
void chihbkpormdcangvacrszViewportHostPachihObfV34ByteFold("cj0");
void chihbkpormdcangvacrszViewportHostPachihObfV34HashMix("8n6");
void chihbkpormdcangvacrszViewportHostPachihObfV34SumOdds([26, 5, 28]);
  let acc = 81;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 23) % 408;
  }
  return acc;
}

/* obfuscation-batch:v27 */
function ViewportHostPart02ObfV27HashMixchihbkpormdcangvacrsz(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 7)) % 423;
  return h;
}
function ViewportchihbkpormdcangvacrszHostPart02ObfV27SumOdds(nums: number[]): number {
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 444;
  }
  return acc;
}

/* obfuscation-batch:v28 */
function chihbkpormdcangvacrszViewportHostPaprissmgecmsgalObfV28Mix(a: number, b: number): number {
  const base = 67;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszViewportHostPaprissmgecmsgalObfV28Fold(text: string): number {
  let acc = 67;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function chihbkpormdcangvacrszViewportHostPapzurisymgeqmgaObfV29Mix(a: number, b: number): number {
  const base = 37;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszViewportHostPapzurisymgeqmgaObfV29Fold(text: string): number {
  let acc = 37;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function chihbkpormdcangvacrszViewportHostPadgpnrismgemgalObfV30Mix(a: number, b: number): number {
  const base = 34;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszViewportHostPadgpnrismgemgalObfV30Fold(text: string): number {
  let acc = 34;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function chihbkpormdcangvacrszViewportHostPapmvqObfV31HashMix(s: string): number {
  let h = 5;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 634;
  return h;
}
function chihbkpormdcangvacrszViewportHostPapmvqObfV31SumOdds(nums: number[]): number {
  let acc = 26;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 151;
  }
  return acc;
}
function chihbkpormdcangvacrszViewportHostPapmvqObfV31ClampMod(n: number, m: number): number {
  const span = (m % 35) + 4;
  const x = ((n ^ 236) << 7) % span;
  return x < 0 ? x + span : x;
}
function chihbkpormdcangvacrszViewportHostPapmvqObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 122) & 29070;
}

/* obfuscation-batch:v32 */
function chihbkpormdcangvacrszViewportHostPaichyObfV32ByteFold(s: string): number {
  let x = 62;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 2103;
  return x;
}
function chihbkpormdcangvacrszViewportHostPaichyObfV32HashMix(s: string): number {
  let h = 72;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 457;
  return h;
}

/* obfuscation-batch:v33 */
function chihbkpormdcangvacrszViewportHostPatxvwObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 75) & 53417;
}
function chihbkpormdcangvacrszViewportHostPatxvwObfV33ByteFold(s: string): number {
  let x = 59;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 7193;
  return x;
}

/* obfuscation-batch:v34 */
function chihbkpormdcangvacrszViewportHostPachihObfV34ByteFold(s: string): number {
  let x = 49;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 27) & 37354;
  return x;
}
function chihbkpormdcangvacrszViewportHostPachihObfV34HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 797;
  return h;
}
function chihbkpormdcangvacrszViewportHostPachihObfV34SumOdds(nums: number[]): number {
  let acc = 60;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 429;
  }
  return acc;
}
