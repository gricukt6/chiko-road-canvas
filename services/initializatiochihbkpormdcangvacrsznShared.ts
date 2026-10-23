import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { chihbkpormdcangvacrszDecrypt } from './CryptoSchihbkpormdcangvacrszervice';
import { fichihbkpormdcangvacrsznKey } from './constants/constchihbkpormdcangvacrszntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  chihbkpormdcangvacrszViewportGetState,
  chihbkpormdcangvacrszViewportShow,
} from './ViewpchihbkpormdcangvacrszortHost';
import { Uchihbkpormdcangvacrsztils } from './UtilSechihbkpormdcangvacrszrvice';

let chihbkpormdcangvacrszLastOpenedPushExternalUrl = '';
let chihbkpormdcangvacrszLastOpenedPushExternalAt = 0;

export const chihbkpormdcangvacrszInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTargchihbkpormdcangvacrszet = (typeof chihbkpormdcangvacrszInitTarget)[keyof typeof chihbkpormdcangvacrszInitTarget];

export interface InchihbkpormdcangvacrszitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTargchihbkpormdcangvacrszet;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface chihbkpormdcangvacrszInitializationRuntime {
  pushTchihbkpormdcangvacrszoken: string;
  installRchihbkpormdcangvacrszef: string;
  DechihbkpormdcangvacrszviceId: string;
  FinlOneLchihbkpormdcangvacrszink: string;
  FichihbkpormdcangvacrsznlNaming: string;
  adIdchihbkpormdcangvacrsz: string;
  firstParameterRechihbkpormdcangvacrszceived: boolean;
  oranicWchihbkpormdcangvacrszaiting: boolean;
  orgnicWaitResolvchihbkpormdcangvacrsze: (() => void) | null;
  pendingSendIchihbkpormdcangvacrszd: string;
}

export const chihbkpormdcangvacrszInitializationRuntime: chihbkpormdcangvacrszInitializationRuntime = {
  pushTchihbkpormdcangvacrszoken: '',
  installRchihbkpormdcangvacrszef: '',
  DechihbkpormdcangvacrszviceId: '',
  FinlOneLchihbkpormdcangvacrszink: '',
  FichihbkpormdcangvacrsznlNaming: '',
  adIdchihbkpormdcangvacrsz: '',
  firstParameterRechihbkpormdcangvacrszceived: false,
  oranicWchihbkpormdcangvacrszaiting: false,
  orgnicWaitResolvchihbkpormdcangvacrsze: null,
  pendingSendIchihbkpormdcangvacrszd: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function chihbkpormdcangvacrszResetInitializationRuntime(): void {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  chihbkpormdcangvacrszInitializationRuntime.pushTchihbkpormdcangvacrszoken = '';
  chihbkpormdcangvacrszInitializationRuntime.installRchihbkpormdcangvacrszef = '';
  chihbkpormdcangvacrszInitializationRuntime.DechihbkpormdcangvacrszviceId = '';
  chihbkpormdcangvacrszInitializationRuntime.FinlOneLchihbkpormdcangvacrszink = '';
  chihbkpormdcangvacrszInitializationRuntime.FichihbkpormdcangvacrsznlNaming = '';
  chihbkpormdcangvacrszInitializationRuntime.adIdchihbkpormdcangvacrsz = '';
  chihbkpormdcangvacrszInitializationRuntime.firstParameterRechihbkpormdcangvacrszceived = false;
  chihbkpormdcangvacrszInitializationRuntime.oranicWchihbkpormdcangvacrszaiting = false;
  chihbkpormdcangvacrszInitializationRuntime.orgnicWaitResolvchihbkpormdcangvacrsze = null;
}

export function chihbkpormdcangvacrszAppenndSendId(url: string, sendId: string): string {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function chihbkpormdcangvacrszSynncPendingSendIdFromNative(): Promise<void> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Romizefaquvef } = NativeModules;
    if (!Romizefaquvef || typeof Romizefaquvef.tisotawito !== 'function') {
      return;
    }
    const sendId = await Romizefaquvef.tisotawito();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      chihbkpormdcangvacrszInitializationRuntime.pendingSendIchihbkpormdcangvacrszd = sendId.trim();
    }
  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function chihbkpormdcangvacrszTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);

  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === chihbkpormdcangvacrszLastOpenedPushExternalUrl &&
    now - chihbkpormdcangvacrszLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    chihbkpormdcangvacrszLastOpenedPushExternalUrl = url;
    chihbkpormdcangvacrszLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    chihbkpormdcangvacrszLastOpenedPushExternalUrl = '';
    chihbkpormdcangvacrszLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function chihbkpormdcangvacrszSynncPendingPushUrlFromNative(): Promise<void> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);

  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Romizefaquvef } = NativeModules;
    if (
      !Romizefaquvef ||
      typeof Romizefaquvef.rimemosatajox !== 'function'
    ) {
      return;
    }
    const pushUrl = await Romizefaquvef.rimemosatajox();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await chihbkpormdcangvacrszTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function chihbkpormdcangvacrszGetAppIdenier(): Promise<string> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { Romizefaquvef } = NativeModules;

    if (!Romizefaquvef) {
            return '';
    }

    const packageName = await Romizefaquvef.lagamoneva();
        return packageName || '';
  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

export async function chihbkpormdcangvacrszGetAppVersion(): Promise<string> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function chihbkpormdcangvacrszGetAndroidId(): Promise<string> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function chihbkpormdcangvacrszGetAndroidUserAAgent(): Promise<string> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { Jutodezegik } = NativeModules;

    if (!Jutodezegik) {
            return '';
    }

    const userAgent: string = await Jutodezegik.fatewaqehavas();
    return userAgent || '';
  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const chihbkpormdcangvacrszINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let chihbkpormdcangvacrszInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function chihbkpormdcangvacrszWaitForInitPush(timeoutMs: number): Promise<string | null> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

    void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
    void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
    void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
  void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);  void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
  void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
  void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
  void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
  void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
  void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
  void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
  void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
  void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
  void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
  void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
  void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
  void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

    void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
    void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
    void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void chihbkpormdcangvacrszMixSeed(3, 7);
    void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
    void chihbkpormdcangvacrszClampSpan(5, 0, 10);

    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

      void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
      void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
      void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
        void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
        void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
        void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
    void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);    void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
    void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
    void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
    void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
    void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
    void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
    void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
    void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
    void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
    void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
    void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
    void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
    void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

      void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
      void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
      void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (chihbkpormdcangvacrszInitPushResolver === deliver) {
        chihbkpormdcangvacrszInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

      void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
      void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
      void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
        void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
        void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
        void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
    void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);    void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
    void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
    void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
    void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
    void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
    void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
    void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
    void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
    void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
    void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
    void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
    void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
    void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

      void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
      void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
      void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(encryptedBody);
    };

    const timer = setTimeout(() => {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

      void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
      void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
      void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
        void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
        void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
        void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
    void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);    void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
    void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
    void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
    void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
    void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
    void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
    void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
    void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
    void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
    void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
    void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
    void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
    void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

      void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
      void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
      void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(null);
    }, timeoutMs);

        chihbkpormdcangvacrszInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function chihbkpormdcangvacrszDeliverInitPush(encryptedBody: string): boolean {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!chihbkpormdcangvacrszInitPushResolver) {
        return false;
  }
  const resolver = chihbkpormdcangvacrszInitPushResolver;
  chihbkpormdcangvacrszInitPushResolver = null;
    resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function chihbkpormdcangvacrszHandleInitPushBackground(encryptedBody: string): Promise<void> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    try {
    const decrypted = chihbkpormdcangvacrszDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
            return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    
    if (redirectUrlInitial) {
      const finalUrl = chihbkpormdcangvacrszAppenndSendId(
        redirectUrlInitial,
        chihbkpormdcangvacrszInitializationRuntime.pendingSendIchihbkpormdcangvacrszd,
      );
      await AsyncStorage.setItem(fichihbkpormdcangvacrsznKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = chihbkpormdcangvacrszViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await chihbkpormdcangvacrszViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
            return;
    }

    if (redirectUrl) {
      await Uchihbkpormdcangvacrsztils.chihbkpormdcangvacrszSetUserBlocke(1);
          }
  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function chihbkpormdcangvacrszExtractInitPushBody(data: Record<string, any>): string {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of chihbkpormdcangvacrszINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function chihbkpormdcangvacrszWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

    void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
    void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
    void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
  void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);  void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
  void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
  void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
  void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
  void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
  void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
  void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
  void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
  void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
  void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
  void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
  void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
  void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

    void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
    void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
    void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

      void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
      void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
      void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
        void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
        void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
        void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
    void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);    void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
    void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
    void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
    void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
    void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
    void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
    void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
    void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
    void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
    void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
    void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
    void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
    void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

      void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
      void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
      void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
                await chihbkpormdcangvacrszOnTokenReceived(token);
        resolve(token);
        return;
      }
          } catch (error) {
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
          }
  });
}

async function chihbkpormdcangvacrszOnTokenReceived(token: string): Promise<void> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
        chihbkpormdcangvacrszInitializationRuntime.pushTchihbkpormdcangvacrszoken = token;
  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

export async function chihbkpormdcangvacrszOnMessageRecieved(remoteMessage: any): Promise<void> {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMixchihbkpormdcangvacrsz('nz');

  void initializationSharchihbkpormdcangvacrszedObfV26ByteFold('90');
  void initializationSharedObfV26HashMchihbkpormdcangvacrszix('uj');
  void initialichihbkpormdcangvacrszzationSharedObfV26SumOdds([1, 27, 27]);
  void initializationSchihbkpormdcangvacrszharedObfV25ByteFold('b5a');
  void initializationSharedObfV25HchihbkpormdcangvacrszashMix('fza');
  void initchihbkpormdcangvacrszializationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSchihbkpormdcangvacrszharedObfV24ByteFold('3c3fu');
void initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1('1n9');void initializationchihbkpormdcangvacrszSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);
void initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(47, 36);
void initializationSharedObfV19chihbkpormdcangvacrszSumOdds([5, 18, 11]);void initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(74, 25);void initializatchihbkpormdcangvacrszionSharedObfV18SumOdds([19, 29, 28]);
void inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(50, 10);
void initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(10, 45);
void initializchihbkpormdcangvacrszationSharedObfV18ByteFold('2r');
void initializationSharedObfVchihbkpormdcangvacrsz17HashMix('kpg7');
void initializationSharedObfV16HachihbkpormdcangvacrszshMix('vq');
void initializationSharedOchihbkpormdcangvacrszbfV16SumOdds([19, 26, 24]);
void initializationSharedObfchihbkpormdcangvacrszV15SumOdds([27, 4, 14]);
void initializationSharedObfchihbkpormdcangvacrszV15ClampMod(53, 73);
void initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(52, 20);
void initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(69, 51);
void initializationSchihbkpormdcangvacrszharedObfV14ByteFold('6hmp');
void initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(77, 7);
  void initializationSharchihbkpormdcangvacrszedObfV12HashMix('xy');
  void initializationSharechihbkpormdcangvacrszdObfV12SumOdds([1, 3, 5]);
  void initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(7, 5);

  void initializationSharedchihbkpormdcangvacrszObfV11HashMix('xy');
  void ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObchihbkpormdcangvacrszfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMichihbkpormdcangvacrszx('xy');
  void initializationSharedObfV7SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(7, 5);
  void initializationSharedObfV8chihbkpormdcangvacrszHashMix('xy');
  void initializationShachihbkpormdcangvacrszredObfV8SumOdds([1, 3, 5]);
  void initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(7, 5);
  void initialchihbkpormdcangvacrszizationSharedObfV9HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds([1, 3, 5]);
  void initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(7, 5);
  void initializationchihbkpormdcangvacrszSharedObfV10HashMix('xy');
  void initializationSharedObfV10SumOchihbkpormdcangvacrszdds([1, 3, 5]);
  void initializationSharchihbkpormdcangvacrszedObfV10ClampMod(7, 5);

  void initiachihbkpormdcangvacrszlizationSharedObfV5HashMix('xy');
  void initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds([1, 3, 5]);
  void ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(7, 5);
  void initializationSharedOchihbkpormdcangvacrszbfV6HashMix('xy');
  void initializationSharedObfV6SumOddchihbkpormdcangvacrszs([1, 3, 5]);
  void initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV3HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharObfV4HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);


  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    
    if (!remoteMessage || !remoteMessage.data) {
      return;
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = chihbkpormdcangvacrszExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
            const delivered = chihbkpormdcangvacrszDeliverInitPush(initPushBody);
      if (!delivered) {
                await chihbkpormdcangvacrszHandleInitPushBackground(initPushBody);
      }
      return;
    }

    
    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
            chihbkpormdcangvacrszInitializationRuntime.pendingSendIchihbkpormdcangvacrszd = sendId;
      const finalUrl = await AsyncStorage.getItem(fichihbkpormdcangvacrsznKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = chihbkpormdcangvacrszAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = chihbkpormdcangvacrszViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await chihbkpormdcangvacrszViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix('xy');
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function chihbkpormdcangvacrszMixSeed(a: number, b: number): number {
      
  return ((a % (b || 1)) + b) % (b || 1);
}

function chihbkpormdcangvacrszFoldRange(nums: number[]): number {
      return nums.filter((n) => {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
return (n % 2 !== 0);
}).reduce((a, n) => {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void chihbkpormdcangvacrszinitializationShapObfV31HashMix("6d8jen");
void chihbkpormdcangvacrszinitializationShapObfV31SumOdds([31, 22, 17]);
void chihbkpormdcangvacrszinitializationShapObfV31ClampMod(16, 3);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(17, 7);
void chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold("initia");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(16, 6);
void chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold("initia");
return (a + n * 13);
}, 0);
}

function initichihbkpormdcangvacrszalizationSharedObfV6ClampMod(n: number, m: number): number {

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initiachihbkpormdcangvacrszlizationSharedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => {
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
return ((a + c.charCodeAt(0) * 31) % 971);
}, 0);
}

function initializatiochihbkpormdcangvacrsznSharedObfV5SumOdds(nums: number[]): number {
      return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function initializationSharchihbkpormdcangvacrszedObfV10ClampMod(n: number, m: number): number {
        const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v11 */
function initializationSharedchihbkpormdcangvacrszObfV11HashMix(s: string): number {
        return Array.from(s).reduce((acc, ch) => {
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
return ((acc + ch.charCodeAt(0) * 59) % 983);
}, 0);
}
function ichihbkpormdcangvacrsznitializationSharedObfV11SumOdds(nums: number[]): number {
            return nums.filter((n) => {
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
return (n % 2 !== 0);
}).reduce((acc, n) => {
void chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(57, 40);
void chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold("5cj4");
void initialchihbkpormdcangvacrszObfV29Mix(1, 20);
void inichihbkpormdcangvacrsztialObfV29Fold("ipzuri");
return (acc + n * 37);
}, 0);
}
function initializationSharedOchihbkpormdcangvacrszbfV12ClampMod(n: number, m: number): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function initializatchihbkpormdcangvacrszionSharedObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 179) & 24622;
}
/* obfuscation-batch:v14 */
function initializationShchihbkpormdcangvacrszaredObfV14ShiftXor(n: number, k: number): number {
            
  const x = (n ^ k) << 7;
  return (x ^ 53) & 52513;
}
function initializationSchihbkpormdcangvacrszharedObfV14ByteFold(s: string): number {
            
  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 29;
  return x & 17866;
}
/* obfuscation-batch:v15 */
function initializationSharedObfchihbkpormdcangvacrszV15SumOdds(nums: number[]): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);


  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 43) % 723;
  }
  return acc;
}
function initializationSharedObfchihbkpormdcangvacrszV15ClampMod(n: number, m: number): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
  const span = (m % 6) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializationSharedObchihbkpormdcangvacrszfV15ShiftXor(n: number, k: number): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
void initiaObfV33HaschihbkpormdcangvacrszhMix("f618");
void initiaOchihbkpormdcangvacrszbfV33SumOdds([38, 25, 24]);
void inichihbkpormdcangvacrsztiaObfV33ClampMod(27, 2);
void initiachihbkpormdcangvacrszObfV33ShiftXor(69, 52);
                  const x = (n ^ k) << 2;
  return (x ^ 109) & 34306;
}
/* obfuscation-batch:v16 */
function initializationSharedObfV16HachihbkpormdcangvacrszshMix(s: string): number {

  let h = 73;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 288;
  return h;
}
function initializationSharedOchihbkpormdcangvacrszbfV16SumOdds(nums: number[]): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);


  let acc = 59;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 708;
  }
  return acc;
}
/* obfuscation-batch:v17 */
function initializationSharedObfVchihbkpormdcangvacrsz17HashMix(s: string): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
  let h = 57;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 536;
  return h;
}
/* obfuscation-batch:v18 */
function initializatchihbkpormdcangvacrszionSharedObfV18SumOdds(nums: number[]): number {
let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 428;
  }
  return acc;
}
function inichihbkpormdcangvacrsztializationSharedObfV18ClampMod(n: number, m: number): number {

        const span = (m % 64) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializationSharedObfchihbkpormdcangvacrszV18ShiftXor(n: number, k: number): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
  const x = (n ^ k) << 6;
  return (x ^ 81) & 18545;
}
function initializchihbkpormdcangvacrszationSharedObfV18ByteFold(s: string): number {
        let x = 9;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 221;
  return x & 39631;
}
/* obfuscation-batch:v19 */
function initializationSharedObfV19chihbkpormdcangvacrszSumOdds(nums: number[]): number {
  let acc = 44;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 297;
  }
  return acc;
}
function initializationSharedObfV19SchihbkpormdcangvacrszhiftXor(n: number, k: number): number {
        const x = (n ^ k) << 6;
  return (x ^ 113) & 28674;
}
/* obfuscation-batch:v20 */
function initializationSharedObfV20ShifchihbkpormdcangvacrsztXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 12) & 24125;
}



/* obfuscation-batch:v21 */
function initializatichihbkpormdcangvacrszonSharedObfV21SumOdds(nums: number[]): number {

  let acc = 52;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 480;
  }
  return acc;
}

function initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(n: number, m: number): number {
  const span = (m % 53) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(n: number, k: number): number {

  const x = (n ^ k) << 7;
  return (x ^ 218) & 40236;
}
void initializatichihbkpormdcangvacrszonSharedObfV21SumOdds([23, 6, 16]);
void initialchihbkpormdcangvacrszizationSharedObfV21ClampMod(56, 8);
void initializationSharedObfV21ShiftXorchihbkpormdcangvacrsz(48, 15);

function initializationSharchihbkpormdcangvacrszedObfV12HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 567;
  return h;
}

function initializationSharechihbkpormdcangvacrszdObfV12SumOdds(nums: number[]): number {
  let acc = 32;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 706;
  }
  return acc;
}

function initializationSharedObchihbkpormdcangvacrszfV11ClampMod(n: number, m: number): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
        const span = (m % 10) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV7HashMichihbkpormdcangvacrszx(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 367;
  return h;
}

function initializationSharedObfV7SumOddschihbkpormdcangvacrsz(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 458;
  }
  return acc;
}

function initializationSharedObfV7ClamchihbkpormdcangvacrszpMod(n: number, m: number): number {
  const span = (m % 20) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV8chihbkpormdcangvacrszHashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 150;
  return h;
}

function initializationShachihbkpormdcangvacrszredObfV8SumOdds(nums: number[]): number {
  let acc = 57;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 751;
  }
  return acc;
}

function initialichihbkpormdcangvacrszzationSharedObfV8ClampMod(n: number, m: number): number {
  const span = (m % 4) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initialchihbkpormdcangvacrszizationSharedObfV9HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 161;
  return h;
}

function initializatiochihbkpormdcangvacrsznSharedObfV9SumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 728;
  }
  return acc;
}

function initializatchihbkpormdcangvacrszionSharedObfV9ClampMod(n: number, m: number): number {
      const span = (m % 7) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationchihbkpormdcangvacrszSharedObfV10HashMix(s: string): number {

  let h = 67;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 681;
  return h;
}

function initializationSharedObfV10SumOchihbkpormdcangvacrszdds(nums: number[]): number {
  let acc = 38;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 432;
  }
  return acc;
}

function ichihbkpormdcangvacrsznitializationSharedObfV5ClampMod(n: number, m: number): number {
  const span = (m % 9) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedOchihbkpormdcangvacrszbfV6HashMix(s: string): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 156;
  return h;
}

function initializationSharedObfV6SumOddchihbkpormdcangvacrszs(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 265;
  }
  return acc;
}

function chihbkpormdcangvacrszinitializationSharObfV3HashMix(s: string): number {
  let h = 34;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 188;
  return h;
}

function chihbkpormdcangvacrszinitializationSharObfV3SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 585;
  }
  return acc;
}

function chihbkpormdcangvacrszinitializationSharObfV3ClampMod(n: number, m: number): number {
  const span = (m % 8) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function chihbkpormdcangvacrszinitializationSharObfV4HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 349;
  return h;
}

function chihbkpormdcangvacrszinitializationSharObfV4SumOdds(nums: number[]): number {
  let acc = 22;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 796;
  }
  return acc;
}

function chihbkpormdcangvacrszinitializationSharObfV4ClampMod(n: number, m: number): number {
  const span = (m % 12) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 205;
  return h;
}

function chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 496;
  }
  return acc;
}

function chihbkpormdcangvacrszinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const span = (m % 18) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 436;
  return h;
}

function chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  let acc = 15;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 629;
  }
  return acc;
}

function chihbkpormdcangvacrszinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const span = (m % 24) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function chihbkpormdcangvacrszClampSpan(n: number, lo: number, hi: number): number {
        const span = hi > lo ? hi - lo : 17;
  const x = ((n - lo) % span + span) % span;
  return lo + x;
}

/* obfuscation-batch:v22 */
function initializationSharedObfV22SumOddchihbkpormdcangvacrszs(nums: number[]): number {
        let acc = 37;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 752;
  }
  return acc;
}
function initializationSchihbkpormdcangvacrszharedObfV22ClampMod(n: number, m: number): number {

  const span = (m % 41) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 44) & 51204;
}
void initializationSharedObfV22SumOddchihbkpormdcangvacrszs([19, 26, 18]);
void initializationSchihbkpormdcangvacrszharedObfV22ClampMod(41, 47);
void inchihbkpormdcangvacrszitializationSharedObfV22ShiftXor(27, 60);
/* obfuscation-batch:v23 */
function initializationSharedchihbkpormdcangvacrszObfV23ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 24) & 58516;
}
function initializationSharedObfV23ByteFolchihbkpormdcangvacrszd1(s: string): number {

  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 46638;
  return x;
}
function initializationchihbkpormdcangvacrszSharedObfV23HashMix2(s: string): number {
              let h = 45;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 333;
  return h;
}
/* obfuscation-batch:v24 */
function initializationSchihbkpormdcangvacrszharedObfV24ByteFold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 6402;
  return x;
}


/* obfuscation-batch:v25 */
function initializationSchihbkpormdcangvacrszharedObfV25ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 59383;
  return x;
}

function initializationSharedObfV25HchihbkpormdcangvacrszashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 489;
  return h;
}

function initchihbkpormdcangvacrszializationSharedObfV25SumOdds(nums: number[]): number {
  let acc = 80;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 400;
  }
  return acc;
}


/* obfuscation-batch:v26 */
function initializationSharchihbkpormdcangvacrszedObfV26ByteFold(s: string): number {
  let x = 39;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 42) & 46291;
  return x;
}

function initializationSharedObfV26HashMchihbkpormdcangvacrszix(s: string): number {
  let h = 70;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 978;
  return h;
}

function initialichihbkpormdcangvacrszzationSharedObfV26SumOdds(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 283;
  }
  return acc;
}

/* obfuscation-batch:v27 */
function initializationSharedObfV27HashMixchihbkpormdcangvacrsz(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 201;
  return h;
}

/* obfuscation-batch:v28 */
function chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Mix(a: number, b: number): number {
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszinitializatprissmgecmsgallieObfV28Fold(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function initialchihbkpormdcangvacrszObfV29Mix(a: number, b: number): number {
  const base = 17;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function inichihbkpormdcangvacrsztialObfV29Fold(text: string): number {
  let acc = 17;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Mix(a: number, b: number): number {
  const base = 33;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function chihbkpormdcangvacrszinitializationShdgpnrismgemgObfV30Fold(text: string): number {
  let acc = 33;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function chihbkpormdcangvacrszinitializationShapObfV31HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 529;
  return h;
}
function chihbkpormdcangvacrszinitializationShapObfV31SumOdds(nums: number[]): number {
  let acc = 70;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 832;
  }
  return acc;
}
function chihbkpormdcangvacrszinitializationShapObfV31ClampMod(n: number, m: number): number {
  const span = (m % 30) + 4;
  const x = ((n ^ 2) << 2) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v32 */
function chihbkpormdcangvacrszinitializichyikowrObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 189) & 10449;
}
function chihbkpormdcangvacrszinitializichyikowrObfV32ByteFold(s: string): number {
  let x = 77;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 4270;
  return x;
}

/* obfuscation-batch:v33 */
function initiaObfV33HaschihbkpormdcangvacrszhMix(s: string): number {
  let h = 68;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 35)) % 180;
  return h;
}
function initiaOchihbkpormdcangvacrszbfV33SumOdds(nums: number[]): number {
void chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold("dm30");
void chihbkpormdcangvacrszinitializatiochihbObfV34HashMix("ina3");
void chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds([21, 28, 7]);
void chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(62, 25);
  let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 541;
  }
  return acc;
}
function inichihbkpormdcangvacrsztiaObfV33ClampMod(n: number, m: number): number {
  const span = (m % 60) + 7;
  const x = ((n ^ 155) << 4) % span;
  return x < 0 ? x + span : x;
}
function initiachihbkpormdcangvacrszObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 71) & 27729;
}

/* obfuscation-batch:v34 */
function chihbkpormdcangvacrszinitializatiochihbObfV34ByteFold(s: string): number {
  let x = 22;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 7131;
  return x;
}
function chihbkpormdcangvacrszinitializatiochihbObfV34HashMix(s: string): number {
  let h = 8;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 897;
  return h;
}
function chihbkpormdcangvacrszinitializatiochihbObfV34SumOdds(nums: number[]): number {
  let acc = 69;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 133;
  }
  return acc;
}
function chihbkpormdcangvacrszinitializatiochihbObfV34ClampMod(n: number, m: number): number {
  const span = (m % 41) + 12;
  const x = ((n ^ 102) << 7) % span;
  return x < 0 ? x + span : x;
}
