import { NativeModules } from 'react-native';

const intake = NativeModules.Tunuhusifucu;

export async function chihbkpormdcangvacrszAssembleIntake(
  fields: string[],
  bodyPlain: string,
): Promise<string> {
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ClampMod(27, 18);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ShiftXor(53, 20);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ByteFold("36ho7o");
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1HashMix("ide");
  return intake.nodahipitebix(fields, bodyPlain);
}

export async function chihbkpormdcangvacrszMapInitResponse(obj: Record<string, unknown>): Promise<{
  redirectUrl: string | null;
  redirectUrlInitial: string | null;
  error: string | null;
  blockUser: boolean;
}> {
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ClampMod(27, 18);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ShiftXor(53, 20);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ByteFold("36ho7o");
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1HashMix("ide");
  return intake.cilazafake(JSON.stringify(obj ?? {}));
}

export async function chihbkpormdcangvacrszSendCf(
  baseUrl: string,
  requestPayload: { cookieHeader: string; dataValue: string; headerValue?: string; body: string },
  _signal?: AbortSignal,
): Promise<{ ok: boolean; text: () => Promise<string> }> {
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ClampMod(27, 18);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ShiftXor(53, 20);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ByteFold("36ho7o");
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1HashMix("ide");
  const text = String(
    (await intake.zepukahawoc(
      baseUrl,
      requestPayload.dataValue,
      requestPayload.headerValue || '',
      requestPayload.body,
    )) ?? '',
  );
  return { ok: Boolean(text), text: async () => {
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ClampMod(27, 18);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ShiftXor(53, 20);
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1ByteFold("36ho7o");
void chihbkpormdcangvacrszchihbkpormdcangvacObfV1HashMix("ide");
return (text);
} };
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
