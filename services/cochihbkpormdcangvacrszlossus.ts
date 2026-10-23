/* cipher-id:colossus */
import { NativeModules } from 'react-native';

const cipher = NativeModules.Vipezuwomahu;

export function hexToBytes(hex: string): Uint8Array {
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1HashMix("nkp2l");
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1SumOdds([39, 6, 33]);
  const normalized = String(hex || '').trim();
  const out = new Uint8Array(Math.floor(normalized.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function bytesToHex(bytes: Uint8Array): string {
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1HashMix("nkp2l");
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1SumOdds([39, 6, 33]);
  return Array.from(bytes, (b) => {
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1HashMix("nkp2l");
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1SumOdds([39, 6, 33]);
return (b.toString(16).padStart(2, '0').toUpperCase());
}).join('');
}

export function cochihbkpormdcangvacrszlossusEncryptBytes(data: Uint8Array): Uint8Array {
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1HashMix("nkp2l");
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1SumOdds([39, 6, 33]);
  const hex = String(cipher?.wihidexepokeso(bytesToHex(data)) ?? '');
  return hexToBytes(hex);
}

export function cochihbkpormdcangvacrszlossusDecryptBytes(data: Uint8Array): Uint8Array {
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1HashMix("nkp2l");
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1SumOdds([39, 6, 33]);
  return cochihbkpormdcangvacrszlossusEncryptBytes(data);
}

export function cochihbkpormdcangvacrszlossusEncryptHex(plain: string): string {
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1HashMix("nkp2l");
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1SumOdds([39, 6, 33]);
  try {
    return String(cipher.fagibuhetuhuw(String(plain ?? '')) ?? '');
  } catch {
    return '';
  }
}

export function cochihbkpormdcangvacrszlossusDecryptHex(hex: string): string {
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1HashMix("nkp2l");
void chihbkpormdcangvacrszcochihbkpormdcangvObfV1SumOdds([39, 6, 33]);
  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) return '';
    return String(cipher.fumocekagusa(normalized) ?? '');
  } catch {
    return '';
  }
}

/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszcochihbkpormdcangvObfV1HashMix(s: string): number {
  let h = 50;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 29)) % 887;
  return h;
}
function chihbkpormdcangvacrszcochihbkpormdcangvObfV1SumOdds(nums: number[]): number {
  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 6) % 609;
  }
  return acc;
}
