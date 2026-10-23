import { Uchihbkpormdcangvacrsztils, chihbkpormdcangvacrszSendInitPayload, chihbkpormdcangvacrszNormalizeWorkerBaseUrl } from './UtilSechihbkpormdcangvacrszrvice';
import { chihbkpormdcangvacrszEncrypt as cryptoEncrypt, chihbkpormdcangvacrszDecrypt as cryptoDecrypt } from './CryptoSchihbkpormdcangvacrszervice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fichihbkpormdcangvacrsznKey } from './constants/constchihbkpormdcangvacrszntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { InchihbkpormdcangvacrszitializationState, chihbkpormdcangvacrszInitTarget, chihbkpormdcangvacrszAppenndSendId, chihbkpormdcangvacrszGetAndroidId, chihbkpormdcangvacrszGetAndroidUserAAgent, chihbkpormdcangvacrszGetAppIdenier, chihbkpormdcangvacrszGetAppVersion, chihbkpormdcangvacrszInitializationRuntime } from './initializatiochihbkpormdcangvacrsznShared';
import { chihbkpormdcangvacrszViewportShow } from './ViewpchihbkpormdcangvacrszortHost';
import { chihbkpormdcangvacrszAssembleIntake, chihbkpormdcangvacrszMapInitResponse } from './chihbkpormdcangvacrszCfProtocol';
import { chihbkpormdcangvacrszOfferResolveObfV16SumOdds, chihbkpormdcangvacrszOfferResolveObfV16ShiftXor, chihbkpormdcangvacrszOfferResolveObfV15HashMix, chihbkpormdcangvacrszOfferResolveObfV14ByteFold, chihbkpormdcangvacrszOfferResolveObfV14SumOdds, chihbkpormdcangvacrszOfferResolveObfV13HashMix, chihbkpormdcangvacrszOfferResolveObfV13ClampMod, chihbkpormdcangvacrszOfferResolveObfV12SumOdds, chihbkpormdcangvacrszOfferResolveObfV11HashMix, chihbkpormdcangvacrszOfferResolveObfV11ClampMod, chihbkpormdcangvacrszOfferResolveObfV7HashMix, chihbkpormdcangvacrszOfferResolveObfV7SumOdds, chihbkpormdcangvacrszOfferResolveObfV7ClampMod, chihbkpormdcangvacrszOfferResolveObfV9HashMix, chihbkpormdcangvacrszOfferResolveObfV9SumOdds, chihbkpormdcangvacrszOfferResolveObfV9ClampMod, chihbkpormdcangvacrszOfferResolveObfV5HashMix, chihbkpormdcangvacrszOfferResolveObfV5SumOdds, chihbkpormdcangvacrszOfferResolveObfV5ClampMod, chihbkpormdcangvacrszOffObfV3HashMix, chihbkpormdcangvacrszOffObfV4SumOdds, chihbkpormdcangvacrszOfferResolvObfV1ClampMod, chihbkpormdcangvacrszOfferResolvObfV2HashMix, chihbkpormdcangvacrszOfferResolvObfV2SumOdds, chihbkpormdcangvacrszOfferResolvObfV2ClampMod, chihbkpormdcangvacrszOfferResolvePart01ObfV11HashMix, chihbkpormdcangvacrszOfferResolvePart01ObfV11ClampMod, chihbkpormdcangvacrszOfferResolvePart02ObfV11HashMix, chihbkpormdcangvacrszOfferResolvePart02ObfV11ClampMod, chihbkpormdcangvacrszOfferResolvePart03ObfV11HashMix, chihbkpormdcangvacrszOfferResolvePart03ObfV11ClampMod, chihbkpormdcangvacrszOfferResolvePart01ObfV15ByteFold, chihbkpormdcangvacrszOfferResolvePart01ObfV15SumOdds, chihbkpormdcangvacrszOfferResolvePart02ObfV15ClampMod, chihbkpormdcangvacrszOfferResolvePart03ObfV15ClampMod } from './OfferResolchihbkpormdcangvacrszvePart01';
// autosetup-split-begin
import { OfferResolveObfchihbkpormdcangvacrszV27ClampMod, OfferResolveObfV27chihbkpormdcangvacrszShiftXor, OfferResolvePart02chihbkpormdcangvacrszObfV20ShiftXor, OfferResoObfV30Mchihbkpormdcangvacrszix, OfferResoObfV3chihbkpormdcangvacrsz0Fold, chihbkpormdcangvacrszOpmvqkrmwismgemgalObfV31HashMix, chihbkpormdcangvacrszOfferResoichyikowrObfV32ShiftXor, chihbkpormdcangvacrszOfferResoichyikowrObfV32ByteFold, chihbkpormdcangvacrszOfferResoichyikowrObfV32HashMix, chihbkpormdcangvacrszOfferResoichyikowrObfV32SumOdds, OfferResolvchihbkpormdcangvacrszeObfV24HashMix, OfferResolveObfV25chihbkpormdcangvacrszByteFold, OfferchihbkpormdcangvacrszResolveObfV26SumOdds, OchihbkpormdcangvacrszfferResolveObfV20ClampMod, chihbkpormdcangvacrszOffepmvqkrmwismgemObfV31ByteFold, chihbkpormdcangvacrszOffepmvqkrmwismgemObfV31HashMix, chihbkpormdcangvacrszOffepmvqkrmwismgemObfV31SumOdds, chihbkpormdcangvacrszOffepmvqkrmwismgemObfV31ClampMod, chihbkpormdcangvacrszOffeichyikowrdfpagObfV32ByteFold, chihbkpormdcangvacrszOffeichyikowrdfpagObfV32HashMix, chihbkpormdcangvacrszOffeichyikowrdfpagObfV32SumOdds, chihbkpormdcangvacrszOfferResolveObfV13ShiftXor, chihbkpormdcangvacrszOfferResolveObfV6ClampMod, chihbkpormdcangvacrszOfferResolvePart02ObfV11SumOdds, OfferResolvePart02ObfV20BytchihbkpormdcangvacrszeFold, OfferResolvePartchihbkpormdcangvacrsz01ObfV25ClampMod } from './OffechihbkpormdcangvacrszrResolvePart01';
import { OfferchihbkpormdcangvacrszResolveObfV27ByteFold, OfferResolveObfVchihbkpormdcangvacrsz22ByteFold, OfchihbkpormdcangvacrszferResolveObfV21ByteFold, OfferResochihbkpormdcangvacrszlveObfV20SumOdds, OfferResolveObfV18HaschihbkpormdcangvacrszhMix, chihbkpormdcangvacrszOfferResolveObfV14HashMix, chihbkpormdcangvacrszOfferResolveObfV12HashMix, chihbkpormdcangvacrszOfferResolveObfV8ClampMod, chihbkpormdcangvacrszOfferResolveObfV10SumOdds, chihbkpormdcangvacrszOfferResolveObfV6HashMix, chihbkpormdcangvacrszOffObfV3SumOdds, chihbkpormdcangvacrszOfferResolvObfV1HashMix, chihbkpormdcangvacrszOfferResolvePart03ObfV11SumOdds, chihbkpormdcangvacrszOfferResolvePart01ObfV15HashMix, chihbkpormdcangvacrszOfferResolvePart03ObfV15ShiftXor, OfferRechihbkpormdcangvacrszsolvePart02ObfV21ShiftXor, chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Mix, chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Mix, OfferResolveObfchihbkpormdcangvacrszV17ShiftXor, OfferResolveObfchihbkpormdcangvacrszV25ClampMod, OfferResolveObfV26chihbkpormdcangvacrszClampMod, OfferResolveObfV20ByteFchihbkpormdcangvacrszold, chihbkpormdcangvacrszOfferResolvePart01ObfV11SumOdds, chihbkpormdcangvacrszOfferResolveObfV11SumOdds, chihbkpormdcangvacrszOfferResolvePart02ObfV15SumOdds, chihbkpormdcangvacrszOfferResolveObfV12ClampMod, OfferResolvePart0chihbkpormdcangvacrsz2ObfV21HashMix, OfferRechihbkpormdcangvacrszsolvePart01ObfV25ShiftXor } from './OffechihbkpormdcangvacrszrResolvePart02';
import { OfferResolveOchihbkpormdcangvacrszbfV24SumOdds, OfferResochihbkpormdcangvacrszlveObfV22SumOdds, OfferResolveObfV20HaschihbkpormdcangvacrszhMix, OfferResolveObfchihbkpormdcangvacrszV18ShiftXor, OfferResolveObfV17BytechihbkpormdcangvacrszFold, chihbkpormdcangvacrszOfferResolveObfV13SumOdds, chihbkpormdcangvacrszOfferResolveObfV8SumOdds, chihbkpormdcangvacrszOfferResolveObfV10HashMix, chihbkpormdcangvacrszOfferResolveObfV10ClampMod, chihbkpormdcangvacrszOfferResolveObfV6SumOdds, chihbkpormdcangvacrszOffObfV4HashMix, chihbkpormdcangvacrszOfferResolvObfV1SumOdds, chihbkpormdcangvacrszOfferResolvePart01ObfV15ShiftXor, chihbkpormdcangvacrszOfferResolvePart02ObfV15ShiftXor, OfferResolvePart02ObfV20chihbkpormdcangvacrszClampMod, OfferResolvePart02ObfV21SumOddschihbkpormdcangvacrsz, chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Fold, chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Fold, OfferResolveObfV23SumOddchihbkpormdcangvacrszs1, OfferResolveObfchihbkpormdcangvacrszV25ShiftXor, OfferResolveObfV18ByteFolchihbkpormdcangvacrszd, chihbkpormdcangvacrszOfferResolveObfV15SumOdds, chihbkpormdcangvacrszOffObfV4ClampMod, chihbkpormdcangvacrszOffObfV3ClampMod, chihbkpormdcangvacrszOfferResolveObfV8HashMix, chihbkpormdcangvacrszOfferResolveObfV16ClampMod, OfferResolvchihbkpormdcangvacrszeObfV22HashMix } from './OffechihbkpormdcangvacrszrResolvePart03';
import { chihbkpormdcangvacrszMixSeed, chihbkpormdcangvacrszClampSpan, OfferResolvechihbkpormdcangvacrszObfV23ClampMod2 } from './OfferchihbkpormdcangvacrszResolvePart02';
import { OfferResolveObfV19ByteFochihbkpormdcangvacrszld, OffchihbkpormdcangvacrszerResolveObfV21HashMix, chihbkpormdcangvacrszFoldRange, OfferResolvePachihbkpormdcangvacrszrt02ObfV21ByteFold, OfferResolveObchihbkpormdcangvacrszfV23HashMix, OfferResochihbkpormdcangvacrszlveObfV24ByteFold, OfferResolvechihbkpormdcangvacrszObfV24ClampMod } from './OfferResolveParchihbkpormdcangvacrszt03';
// autosetup-split-end

async function chihbkpormdcangvacrszRequestPlayIntegrityToken(): Promise<string> {
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(55, 30);
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold("la");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix("il25");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds([9, 24, 27]);
void OfferRObfV33ShifchihbkpormdcangvacrsztXor(39, 14);
void OfferchihbkpormdcangvacrszRObfV33ByteFold("ja");
void OfferRObfV33HashMixchihbkpormdcangvacrsz("c9");
void OfferRObfV33SumOdchihbkpormdcangvacrszds([15, 38, 25]);
void chihbkpormdcangvacrszOfferResoichyikowrObfV32ShiftXor(75, 2);
void chihbkpormdcangvacrszOfferResoichyikowrObfV32ByteFold("fkp61m");
void chihbkpormdcangvacrszOfferResoichyikowrObfV32HashMix("85k56p");
void chihbkpormdcangvacrszOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void chihbkpormdcangvacrszOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObfV30Mchihbkpormdcangvacrszix(3, 10);
void OfferResoObfV3chihbkpormdcangvacrsz0Fold("offerr");
void chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfchihbkpormdcangvacrszV27ClampMod(54, 46);
void OfferResolveObfV27chihbkpormdcangvacrszShiftXor(11, 81);
void OfferchihbkpormdcangvacrszResolveObfV27ByteFold('rb');

  void OfferchihbkpormdcangvacrszResolveObfV26SumOdds([39, 16, 11]);
  void OfferResolveObfV26chihbkpormdcangvacrszClampMod(10, 47);
  void OfferResolveObfchihbkpormdcangvacrszV25ClampMod(36, 9);
  void OfferResolveObfchihbkpormdcangvacrszV25ShiftXor(82, 60);
  void OfferResolveObfV25chihbkpormdcangvacrszByteFold('deheg');
  void OfferResochihbkpormdcangvacrszlveObfV24ByteFold('36');
  void OfferResolvchihbkpormdcangvacrszeObfV24HashMix('468');
  void OfferResolveOchihbkpormdcangvacrszbfV24SumOdds([6, 3, 10]);
  void OfferResolvechihbkpormdcangvacrszObfV24ClampMod(64, 12);
void OfferResolveObchihbkpormdcangvacrszfV23HashMix('we2');void OfferResolveObfV23SumOddchihbkpormdcangvacrszs1([14, 25, 30]);void OfferResolvechihbkpormdcangvacrszObfV23ClampMod2(16, 33);void OfferResolveObfVchihbkpormdcangvacrsz22ByteFold('bhp');
void OfferResolvchihbkpormdcangvacrszeObfV22HashMix('xpmz');
void OfferResochihbkpormdcangvacrszlveObfV22SumOdds([19, 11, 27]);void OfchihbkpormdcangvacrszferResolveObfV21ByteFold('n9r');
void OffchihbkpormdcangvacrszerResolveObfV21HashMix('az');
void OfferResolveObfV20ByteFchihbkpormdcangvacrszold('4p');
void OfferResolveObfV20HaschihbkpormdcangvacrszhMix('drft');
void OfferResochihbkpormdcangvacrszlveObfV20SumOdds([30, 25, 8]);
void OchihbkpormdcangvacrszfferResolveObfV20ClampMod(63, 75);
void OfferResolveObfV19ByteFochihbkpormdcangvacrszld('5wd');void OfferResolveObfchihbkpormdcangvacrszV18ShiftXor(73, 34);
void OfferResolveObfV18ByteFolchihbkpormdcangvacrszd('qhkk');
void OfferResolveObfV18HaschihbkpormdcangvacrszhMix('b7zg');
void OfferResolveObfchihbkpormdcangvacrszV17ShiftXor(43, 15);
void OfferResolveObfV17BytechihbkpormdcangvacrszFold('69vj');
void chihbkpormdcangvacrszOfferResolveObfV16SumOdds([24, 20, 12]);
void chihbkpormdcangvacrszOfferResolveObfV16ClampMod(28, 22);
void chihbkpormdcangvacrszOfferResolveObfV16ShiftXor(54, 30);
void chihbkpormdcangvacrszOfferResolveObfV15HashMix('7jhh');
void chihbkpormdcangvacrszOfferResolveObfV15SumOdds([11, 2, 30]);
void chihbkpormdcangvacrszOfferResolveObfV14ByteFold('gt7');
void chihbkpormdcangvacrszOfferResolveObfV14HashMix('d459');
void chihbkpormdcangvacrszOfferResolveObfV14SumOdds([12, 4, 3]);
  void chihbkpormdcangvacrszOfferResolveObfV13HashMix('95q6');
  void chihbkpormdcangvacrszOfferResolveObfV13SumOdds([22, 29, 26]);
  void chihbkpormdcangvacrszOfferResolveObfV13ClampMod(68, 59);
  void chihbkpormdcangvacrszOfferResolveObfV13ShiftXor(50, 55);

  if (Platform.OS !== 'android') {
    return '';
  }
  try {
    const qofahegeci = NativeModules.Rekuwinosozik?.qofahegeci;
    if (typeof qofahegeci !== 'function') {
      return '';
    }
    const token = await qofahegeci();
    return typeof token === 'string' ? token : '';
  } catch {
    return '';
  }
}

export async function chihbkpormdcangvacrszInitStep(): Promise<InchihbkpormdcangvacrszitializationState | null> {
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(55, 30);
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold("la");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix("il25");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds([9, 24, 27]);
void OfferRObfV33ShifchihbkpormdcangvacrsztXor(39, 14);
void OfferchihbkpormdcangvacrszRObfV33ByteFold("ja");
void OfferRObfV33HashMixchihbkpormdcangvacrsz("c9");
void OfferRObfV33SumOdchihbkpormdcangvacrszds([15, 38, 25]);
void chihbkpormdcangvacrszOfferResoichyikowrObfV32ShiftXor(75, 2);
void chihbkpormdcangvacrszOfferResoichyikowrObfV32ByteFold("fkp61m");
void chihbkpormdcangvacrszOfferResoichyikowrObfV32HashMix("85k56p");
void chihbkpormdcangvacrszOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void chihbkpormdcangvacrszOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObfV30Mchihbkpormdcangvacrszix(3, 10);
void OfferResoObfV3chihbkpormdcangvacrsz0Fold("offerr");
void chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfchihbkpormdcangvacrszV27ClampMod(54, 46);
void OfferResolveObfV27chihbkpormdcangvacrszShiftXor(11, 81);
void OfferchihbkpormdcangvacrszResolveObfV27ByteFold('rb');

  void OfferchihbkpormdcangvacrszResolveObfV26SumOdds([39, 16, 11]);
  void OfferResolveObfV26chihbkpormdcangvacrszClampMod(10, 47);
  void OfferResolveObfchihbkpormdcangvacrszV25ClampMod(36, 9);
  void OfferResolveObfchihbkpormdcangvacrszV25ShiftXor(82, 60);
  void OfferResolveObfV25chihbkpormdcangvacrszByteFold('deheg');
  void OfferResochihbkpormdcangvacrszlveObfV24ByteFold('36');
  void OfferResolvchihbkpormdcangvacrszeObfV24HashMix('468');
  void OfferResolveOchihbkpormdcangvacrszbfV24SumOdds([6, 3, 10]);
  void OfferResolvechihbkpormdcangvacrszObfV24ClampMod(64, 12);
void OfferResolveObchihbkpormdcangvacrszfV23HashMix('we2');void OfferResolveObfV23SumOddchihbkpormdcangvacrszs1([14, 25, 30]);void OfferResolvechihbkpormdcangvacrszObfV23ClampMod2(16, 33);void OfferResolveObfVchihbkpormdcangvacrsz22ByteFold('bhp');
void OfferResolvchihbkpormdcangvacrszeObfV22HashMix('xpmz');
void OfferResochihbkpormdcangvacrszlveObfV22SumOdds([19, 11, 27]);void OfchihbkpormdcangvacrszferResolveObfV21ByteFold('n9r');
void OffchihbkpormdcangvacrszerResolveObfV21HashMix('az');
void OfferResolveObfV20ByteFchihbkpormdcangvacrszold('4p');
void OfferResolveObfV20HaschihbkpormdcangvacrszhMix('drft');
void OfferResochihbkpormdcangvacrszlveObfV20SumOdds([30, 25, 8]);
void OchihbkpormdcangvacrszfferResolveObfV20ClampMod(63, 75);
void OfferResolveObfV19ByteFochihbkpormdcangvacrszld('5wd');void OfferResolveObfchihbkpormdcangvacrszV18ShiftXor(73, 34);
void OfferResolveObfV18ByteFolchihbkpormdcangvacrszd('qhkk');
void OfferResolveObfV18HaschihbkpormdcangvacrszhMix('b7zg');
void OfferResolveObfchihbkpormdcangvacrszV17ShiftXor(43, 15);
void OfferResolveObfV17BytechihbkpormdcangvacrszFold('69vj');
void chihbkpormdcangvacrszOfferResolveObfV16SumOdds([24, 20, 12]);
void chihbkpormdcangvacrszOfferResolveObfV16ClampMod(28, 22);
void chihbkpormdcangvacrszOfferResolveObfV16ShiftXor(54, 30);
void chihbkpormdcangvacrszOfferResolveObfV15HashMix('7jhh');
void chihbkpormdcangvacrszOfferResolveObfV15SumOdds([11, 2, 30]);
void chihbkpormdcangvacrszOfferResolveObfV14ByteFold('gt7');
void chihbkpormdcangvacrszOfferResolveObfV14HashMix('d459');
void chihbkpormdcangvacrszOfferResolveObfV14SumOdds([12, 4, 3]);
void chihbkpormdcangvacrszOfferResolveObfV13HashMix('95q6');
void chihbkpormdcangvacrszOfferResolveObfV13SumOdds([22, 29, 26]);
void chihbkpormdcangvacrszOfferResolveObfV13ClampMod(68, 59);
void chihbkpormdcangvacrszOfferResolveObfV13ShiftXor(50, 55);
  void chihbkpormdcangvacrszOfferResolveObfV12HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV12SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV12ClampMod(7, 5);

  void chihbkpormdcangvacrszOfferResolveObfV11HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV11SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV11ClampMod(7, 5);

  void chihbkpormdcangvacrszOfferResolveObfV7HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV7SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV7ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV8HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV8SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV8ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV9HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV9SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV9ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV10HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV10SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV10ClampMod(7, 5);

  void chihbkpormdcangvacrszOfferResolveObfV5HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV5SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV5ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV6HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV6SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszOffObfV3HashMix('xy');
  void chihbkpormdcangvacrszOffObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOffObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszOffObfV4HashMix('xy');
  void chihbkpormdcangvacrszOffObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOffObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);

  void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Uchihbkpormdcangvacrsztils.chihbkpormdcangvacrszGetLink();
        if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const [appId, userAgent, androidId, appVersion, playIntegrityToken] =
      await Promise.all([
        chihbkpormdcangvacrszGetAppIdenier(),
        chihbkpormdcangvacrszGetAndroidUserAAgent(),
        chihbkpormdcangvacrszGetAndroidId(),
        chihbkpormdcangvacrszGetAppVersion(),
        chihbkpormdcangvacrszRequestPlayIntegrityToken(),
      ]);
    const workerBaseUrl = chihbkpormdcangvacrszNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = chihbkpormdcangvacrszInitializationRuntime.DechihbkpormdcangvacrszviceId;

    const namingValue = chihbkpormdcangvacrszInitializationRuntime.FichihbkpormdcangvacrsznlNaming;

    const chihbkpormdcangvacrszCookieFields = ([
      appId ?? '',
      payloadDeviceId ?? '',
      chihbkpormdcangvacrszInitializationRuntime.adIdchihbkpormdcangvacrsz ?? '',
      chihbkpormdcangvacrszInitializationRuntime.pushTchihbkpormdcangvacrszoken ?? '',
      chihbkpormdcangvacrszInitializationRuntime.installRchihbkpormdcangvacrszef ?? '',
      chihbkpormdcangvacrszInitializationRuntime.FinlOneLchihbkpormdcangvacrszink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ]);

    

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}` +
      `&play_integrity_token=${encodeURIComponent(playIntegrityToken)}`;

    const packed = JSON.parse(await chihbkpormdcangvacrszAssembleIntake(chihbkpormdcangvacrszCookieFields, bodyPlain)) as { cookie?: string; header?: string; body?: string };
        const encryptedCookie = cryptoEncrypt(packed.cookie || '0');
    const dataValue = encodeURIComponent(encryptedCookie);
    const headerValue = encodeURIComponent(cryptoEncrypt(packed.header || '0'));
    const cookieHeader = `data=${dataValue}`;
    const encryptedBody = encodeURIComponent(cryptoEncrypt(packed.body || ''));

    try {
      const responseText = await chihbkpormdcangvacrszSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        headerValue,
        body: encryptedBody,
      });
      
      if (!responseText) {
        await Uchihbkpormdcangvacrsztils.chihbkpormdcangvacrszSetUserBlocke(1);
        await chihbkpormdcangvacrszUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await chihbkpormdcangvacrszOnInitResponse(responseText);
    } catch (rpcError) {
      void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
      void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
      void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
      void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
      await chihbkpormdcangvacrszUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
    void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
    void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
    await chihbkpormdcangvacrszUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function chihbkpormdcangvacrszOnInitResponse(responseText: string): Promise<InchihbkpormdcangvacrszitializationState> {
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(55, 30);
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold("la");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix("il25");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds([9, 24, 27]);
void OfferRObfV33ShifchihbkpormdcangvacrsztXor(39, 14);
void OfferchihbkpormdcangvacrszRObfV33ByteFold("ja");
void OfferRObfV33HashMixchihbkpormdcangvacrsz("c9");
void OfferRObfV33SumOdchihbkpormdcangvacrszds([15, 38, 25]);
void chihbkpormdcangvacrszOfferResoichyikowrObfV32ShiftXor(75, 2);
void chihbkpormdcangvacrszOfferResoichyikowrObfV32ByteFold("fkp61m");
void chihbkpormdcangvacrszOfferResoichyikowrObfV32HashMix("85k56p");
void chihbkpormdcangvacrszOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void chihbkpormdcangvacrszOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObfV30Mchihbkpormdcangvacrszix(3, 10);
void OfferResoObfV3chihbkpormdcangvacrsz0Fold("offerr");
void chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfchihbkpormdcangvacrszV27ClampMod(54, 46);
void OfferResolveObfV27chihbkpormdcangvacrszShiftXor(11, 81);
void OfferchihbkpormdcangvacrszResolveObfV27ByteFold('rb');

  void OfferchihbkpormdcangvacrszResolveObfV26SumOdds([39, 16, 11]);
  void OfferResolveObfV26chihbkpormdcangvacrszClampMod(10, 47);
  void OfferResolveObfchihbkpormdcangvacrszV25ClampMod(36, 9);
  void OfferResolveObfchihbkpormdcangvacrszV25ShiftXor(82, 60);
  void OfferResolveObfV25chihbkpormdcangvacrszByteFold('deheg');
  void OfferResochihbkpormdcangvacrszlveObfV24ByteFold('36');
  void OfferResolvchihbkpormdcangvacrszeObfV24HashMix('468');
  void OfferResolveOchihbkpormdcangvacrszbfV24SumOdds([6, 3, 10]);
  void OfferResolvechihbkpormdcangvacrszObfV24ClampMod(64, 12);
void OfferResolveObchihbkpormdcangvacrszfV23HashMix('we2');void OfferResolveObfV23SumOddchihbkpormdcangvacrszs1([14, 25, 30]);void OfferResolvechihbkpormdcangvacrszObfV23ClampMod2(16, 33);void OfferResolveObfVchihbkpormdcangvacrsz22ByteFold('bhp');
void OfferResolvchihbkpormdcangvacrszeObfV22HashMix('xpmz');
void OfferResochihbkpormdcangvacrszlveObfV22SumOdds([19, 11, 27]);void OfchihbkpormdcangvacrszferResolveObfV21ByteFold('n9r');
void OffchihbkpormdcangvacrszerResolveObfV21HashMix('az');
void OfferResolveObfV20ByteFchihbkpormdcangvacrszold('4p');
void OfferResolveObfV20HaschihbkpormdcangvacrszhMix('drft');
void OfferResochihbkpormdcangvacrszlveObfV20SumOdds([30, 25, 8]);
void OchihbkpormdcangvacrszfferResolveObfV20ClampMod(63, 75);
void OfferResolveObfV19ByteFochihbkpormdcangvacrszld('5wd');void OfferResolveObfchihbkpormdcangvacrszV18ShiftXor(73, 34);
void OfferResolveObfV18ByteFolchihbkpormdcangvacrszd('qhkk');
void OfferResolveObfV18HaschihbkpormdcangvacrszhMix('b7zg');
void OfferResolveObfchihbkpormdcangvacrszV17ShiftXor(43, 15);
void OfferResolveObfV17BytechihbkpormdcangvacrszFold('69vj');
void chihbkpormdcangvacrszOfferResolveObfV16SumOdds([24, 20, 12]);
void chihbkpormdcangvacrszOfferResolveObfV16ClampMod(28, 22);
void chihbkpormdcangvacrszOfferResolveObfV16ShiftXor(54, 30);
void chihbkpormdcangvacrszOfferResolveObfV15HashMix('7jhh');
void chihbkpormdcangvacrszOfferResolveObfV15SumOdds([11, 2, 30]);
void chihbkpormdcangvacrszOfferResolveObfV14ByteFold('gt7');
void chihbkpormdcangvacrszOfferResolveObfV14HashMix('d459');
void chihbkpormdcangvacrszOfferResolveObfV14SumOdds([12, 4, 3]);
void chihbkpormdcangvacrszOfferResolveObfV13HashMix('95q6');
void chihbkpormdcangvacrszOfferResolveObfV13SumOdds([22, 29, 26]);
void chihbkpormdcangvacrszOfferResolveObfV13ClampMod(68, 59);
void chihbkpormdcangvacrszOfferResolveObfV13ShiftXor(50, 55);
  void chihbkpormdcangvacrszOfferResolveObfV12HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV12SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV12ClampMod(7, 5);

  void chihbkpormdcangvacrszOfferResolveObfV11HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV11SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV11ClampMod(7, 5);

  void chihbkpormdcangvacrszOfferResolveObfV7HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV7SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV7ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV8HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV8SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV8ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV9HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV9SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV9ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV10HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV10SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV10ClampMod(7, 5);

  void chihbkpormdcangvacrszOfferResolveObfV5HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV5SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV5ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV6HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV6SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszOffObfV3HashMix('xy');
  void chihbkpormdcangvacrszOffObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOffObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszOffObfV4HashMix('xy');
  void chihbkpormdcangvacrszOffObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOffObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);

  void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
        if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = await chihbkpormdcangvacrszMapInitResponse(JSON.parse(decrytedResponse) as Record<string, unknown>);
      redirectUrl = obj.redirectUrl;
      redirectUrlInitial = obj.redirectUrlInitial;
      errorField = obj.error;
      blockUser = !!obj.blockUser;
          } catch (parseError) {
      void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
      void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
      void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
      void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
      void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Uchihbkpormdcangvacrsztils.chihbkpormdcangvacrszSetUserBlocke(1);
      await chihbkpormdcangvacrszUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Uchihbkpormdcangvacrsztils.chihbkpormdcangvacrszSetUserBlocke(1);
      await chihbkpormdcangvacrszUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(fichihbkpormdcangvacrsznKey, redirectUrlInitial);

      const finalUrl = chihbkpormdcangvacrszAppenndSendId(
        redirectUrlInitial,
        chihbkpormdcangvacrszInitializationRuntime.pendingSendIchihbkpormdcangvacrszd,
      );

      const success = await chihbkpormdcangvacrszViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: chihbkpormdcangvacrszInitTarget.webview,
      };
    }

    await chihbkpormdcangvacrszUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: chihbkpormdcangvacrszInitTarget.game,
    };
  } catch (error) {
    void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
    void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
    void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
    await chihbkpormdcangvacrszUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function chihbkpormdcangvacrszUnsubscribeFirebase(reason?: string): Promise<void> {
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(55, 30);
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold("la");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix("il25");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds([9, 24, 27]);
void OfferRObfV33ShifchihbkpormdcangvacrsztXor(39, 14);
void OfferchihbkpormdcangvacrszRObfV33ByteFold("ja");
void OfferRObfV33HashMixchihbkpormdcangvacrsz("c9");
void OfferRObfV33SumOdchihbkpormdcangvacrszds([15, 38, 25]);
void chihbkpormdcangvacrszOfferResoichyikowrObfV32ShiftXor(75, 2);
void chihbkpormdcangvacrszOfferResoichyikowrObfV32ByteFold("fkp61m");
void chihbkpormdcangvacrszOfferResoichyikowrObfV32HashMix("85k56p");
void chihbkpormdcangvacrszOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void chihbkpormdcangvacrszOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObfV30Mchihbkpormdcangvacrszix(3, 10);
void OfferResoObfV3chihbkpormdcangvacrsz0Fold("offerr");
void chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void chihbkpormdcangvacrszOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void chihbkpormdcangvacrszOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfchihbkpormdcangvacrszV27ClampMod(54, 46);
void OfferResolveObfV27chihbkpormdcangvacrszShiftXor(11, 81);
void OfferchihbkpormdcangvacrszResolveObfV27ByteFold('rb');

  void OfferchihbkpormdcangvacrszResolveObfV26SumOdds([39, 16, 11]);
  void OfferResolveObfV26chihbkpormdcangvacrszClampMod(10, 47);
  void OfferResolveObfchihbkpormdcangvacrszV25ClampMod(36, 9);
  void OfferResolveObfchihbkpormdcangvacrszV25ShiftXor(82, 60);
  void OfferResolveObfV25chihbkpormdcangvacrszByteFold('deheg');
  void OfferResochihbkpormdcangvacrszlveObfV24ByteFold('36');
  void OfferResolvchihbkpormdcangvacrszeObfV24HashMix('468');
  void OfferResolveOchihbkpormdcangvacrszbfV24SumOdds([6, 3, 10]);
  void OfferResolvechihbkpormdcangvacrszObfV24ClampMod(64, 12);
void OfferResolveObchihbkpormdcangvacrszfV23HashMix('we2');void OfferResolveObfV23SumOddchihbkpormdcangvacrszs1([14, 25, 30]);void OfferResolvechihbkpormdcangvacrszObfV23ClampMod2(16, 33);void OfferResolveObfVchihbkpormdcangvacrsz22ByteFold('bhp');
void OfferResolvchihbkpormdcangvacrszeObfV22HashMix('xpmz');
void OfferResochihbkpormdcangvacrszlveObfV22SumOdds([19, 11, 27]);void OfchihbkpormdcangvacrszferResolveObfV21ByteFold('n9r');
void OffchihbkpormdcangvacrszerResolveObfV21HashMix('az');
void OfferResolveObfV20ByteFchihbkpormdcangvacrszold('4p');
void OfferResolveObfV20HaschihbkpormdcangvacrszhMix('drft');
void OfferResochihbkpormdcangvacrszlveObfV20SumOdds([30, 25, 8]);
void OchihbkpormdcangvacrszfferResolveObfV20ClampMod(63, 75);
void OfferResolveObfV19ByteFochihbkpormdcangvacrszld('5wd');void OfferResolveObfchihbkpormdcangvacrszV18ShiftXor(73, 34);
void OfferResolveObfV18ByteFolchihbkpormdcangvacrszd('qhkk');
void OfferResolveObfV18HaschihbkpormdcangvacrszhMix('b7zg');
void OfferResolveObfchihbkpormdcangvacrszV17ShiftXor(43, 15);
void OfferResolveObfV17BytechihbkpormdcangvacrszFold('69vj');
void chihbkpormdcangvacrszOfferResolveObfV16SumOdds([24, 20, 12]);
void chihbkpormdcangvacrszOfferResolveObfV16ClampMod(28, 22);
void chihbkpormdcangvacrszOfferResolveObfV16ShiftXor(54, 30);
void chihbkpormdcangvacrszOfferResolveObfV15HashMix('7jhh');
void chihbkpormdcangvacrszOfferResolveObfV15SumOdds([11, 2, 30]);
void chihbkpormdcangvacrszOfferResolveObfV14ByteFold('gt7');
void chihbkpormdcangvacrszOfferResolveObfV14HashMix('d459');
void chihbkpormdcangvacrszOfferResolveObfV14SumOdds([12, 4, 3]);
void chihbkpormdcangvacrszOfferResolveObfV13HashMix('95q6');
void chihbkpormdcangvacrszOfferResolveObfV13SumOdds([22, 29, 26]);
void chihbkpormdcangvacrszOfferResolveObfV13ClampMod(68, 59);
void chihbkpormdcangvacrszOfferResolveObfV13ShiftXor(50, 55);
  void chihbkpormdcangvacrszOfferResolveObfV12HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV12SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV12ClampMod(7, 5);

  void chihbkpormdcangvacrszOfferResolveObfV11HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV11SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV11ClampMod(7, 5);

  void chihbkpormdcangvacrszOfferResolveObfV7HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV7SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV7ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV8HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV8SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV8ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV9HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV9SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV9ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV10HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV10SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV10ClampMod(7, 5);

  void chihbkpormdcangvacrszOfferResolveObfV5HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV5SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV5ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolveObfV6HashMix('xy');
  void chihbkpormdcangvacrszOfferResolveObfV6SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolveObfV6ClampMod(7, 5);
  void chihbkpormdcangvacrszOffObfV3HashMix('xy');
  void chihbkpormdcangvacrszOffObfV3SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOffObfV3ClampMod(7, 5);
  void chihbkpormdcangvacrszOffObfV4HashMix('xy');
  void chihbkpormdcangvacrszOffObfV4SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOffObfV4ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
  void chihbkpormdcangvacrszMixSeed(3, 7);
  void chihbkpormdcangvacrszFoldRange([1, 2, 3]);
  void chihbkpormdcangvacrszClampSpan(5, 0, 10);

  void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
  void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
  void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
  void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    chihbkpormdcangvacrszInitializationRuntime.pushTchihbkpormdcangvacrszoken = '';
  } catch (error) {
    void chihbkpormdcangvacrszOfferResolvObfV1HashMix('xy');
    void chihbkpormdcangvacrszOfferResolvObfV1SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszOfferResolvObfV1ClampMod(7, 5);
    void chihbkpormdcangvacrszOfferResolvObfV2HashMix('xy');
    void chihbkpormdcangvacrszOfferResolvObfV2SumOdds([1, 3, 5]);
    void chihbkpormdcangvacrszOfferResolvObfV2ClampMod(7, 5);
    chihbkpormdcangvacrszInitializationRuntime.pushTchihbkpormdcangvacrszoken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void chihbkpormdcangvacrszOfferResolvePart01ObfV11HashMix('xy');
void chihbkpormdcangvacrszOfferResolvePart01ObfV11SumOdds([1, 3, 5]);
void chihbkpormdcangvacrszOfferResolvePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void chihbkpormdcangvacrszOfferResolvePart02ObfV11HashMix('xy');
void chihbkpormdcangvacrszOfferResolvePart02ObfV11SumOdds([1, 3, 5]);
void chihbkpormdcangvacrszOfferResolvePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void chihbkpormdcangvacrszOfferResolvePart03ObfV11HashMix('xy');
void chihbkpormdcangvacrszOfferResolvePart03ObfV11SumOdds([1, 3, 5]);
void chihbkpormdcangvacrszOfferResolvePart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void chihbkpormdcangvacrszOfferResolvePart01ObfV15ShiftXor(72, 14);
void chihbkpormdcangvacrszOfferResolvePart01ObfV15ByteFold('frw');
void chihbkpormdcangvacrszOfferResolvePart01ObfV15HashMix('vff');
void chihbkpormdcangvacrszOfferResolvePart01ObfV15SumOdds([29, 20, 16]);

/* obfuscation-batch:v15 */
void chihbkpormdcangvacrszOfferResolvePart02ObfV15SumOdds([5, 29, 25]);
void chihbkpormdcangvacrszOfferResolvePart02ObfV15ClampMod(55, 66);
void chihbkpormdcangvacrszOfferResolvePart02ObfV15ShiftXor(41, 25);

/* obfuscation-batch:v15 */
void chihbkpormdcangvacrszOfferResolvePart03ObfV15ClampMod(7, 74);
void chihbkpormdcangvacrszOfferResolvePart03ObfV15ShiftXor(80, 52);
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void OfchihbkpormdcangvacrszferResolveObfV21ByteFold('n9r');
void OffchihbkpormdcangvacrszerResolveObfV21HashMix('az');

/* obfuscation-batch:v17 */
function OfferchihbkpormdcangvacrszResolvePart02ObfV17ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
  return (x ^ 195) & 13932;
}
/* obfuscation-batch:v18 */
function OfferResolvechihbkpormdcangvacrszPart02ObfV18HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 570;
  return h;
}
function OfferResolvePart02ObfV18SumOddschihbkpormdcangvacrsz(nums: number[]): number {
        let acc = 51;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 464;
  }
  return acc;
}
/* obfuscation-batch:v19 */
function OfferResochihbkpormdcangvacrszlvePart02ObfV19HashMix(s: string): number {
    let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 25) % 828;
  return h;
}
function OfferResolvePart02ObchihbkpormdcangvacrszfV19SumOdds(nums: number[]): number {
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(55, 30);
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold("la");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix("il25");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds([9, 24, 27]);
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 847;
  }
  return acc;
}
function OfchihbkpormdcangvacrszferResolvePart02ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 148) & 3411;
}
/* obfuscation-batch:v20 */
void OfferResolvePart02ObfV20chihbkpormdcangvacrszClampMod(59, 23);
void OfferResolvePart02chihbkpormdcangvacrszObfV20ShiftXor(37, 15);
void OfferResolvePart02ObfV20BytchihbkpormdcangvacrszeFold('kb34');

/* obfuscation-batch:v21 */

void OfferRechihbkpormdcangvacrszsolvePart02ObfV21ShiftXor(33, 47);
void OfferResolvePachihbkpormdcangvacrszrt02ObfV21ByteFold('b65w');
void OfferResolvePart0chihbkpormdcangvacrsz2ObfV21HashMix('gfk');
void OfferResolvePart02ObfV21SumOddschihbkpormdcangvacrsz([5, 7, 11]);

/* obfuscation-batch:v22 */
void OfferResolveObfVchihbkpormdcangvacrsz22ByteFold('bhp');
void OfferResolvchihbkpormdcangvacrszeObfV22HashMix('xpmz');
void OfferResochihbkpormdcangvacrszlveObfV22SumOdds([19, 11, 27]);
/* obfuscation-batch:v23 */
void OfferResolveObchihbkpormdcangvacrszfV23HashMix('we2');
void OfferResolveObfV23SumOddchihbkpormdcangvacrszs1([14, 25, 30]);
void OfferResolvechihbkpormdcangvacrszObfV23ClampMod2(16, 33);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v25 */

void OfferResolvePartchihbkpormdcangvacrsz01ObfV25ClampMod(28, 8);
void OfferRechihbkpormdcangvacrszsolvePart01ObfV25ShiftXor(24, 13);

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

function OfferResolveParchihbkpormdcangvacrszt01ObfV26ClampMod(n: number, m: number): number {
const span = (m % 39) + 11;
const x = n % span;
return x < 0 ? x + span : x;
}

function OfferResolvePart01ObfVchihbkpormdcangvacrsz26ShiftXor(n: number, k: number): number {
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(55, 30);
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold("la");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix("il25");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds([9, 24, 27]);
const x = (n ^ k) << 7;
return (x ^ 65) & 18100;
}

function OfferResolvePart01OchihbkpormdcangvacrszbfV26ByteFold(s: string): number {
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(55, 30);
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold("la");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix("il25");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds([9, 24, 27]);
let x = 83;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 49) & 36690;
return x;
}

function OfferResolvePart01ObfV26chihbkpormdcangvacrszHashMix(s: string): number {
let h = 90;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 220;
return h;
}

/* obfuscation-batch:v27 */
function OfferResolvchihbkpormdcangvacrszePart01ObfV27HashMix(s: string): number {
  let h = 61;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 18)) % 278;
  return h;
}
function OfferResolvePart01ObfchihbkpormdcangvacrszV27SumOdds(nums: number[]): number {
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(55, 30);
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold("la");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix("il25");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds([9, 24, 27]);
void OfferRObfV33ShifchihbkpormdcangvacrsztXor(39, 14);
void OfferchihbkpormdcangvacrszRObfV33ByteFold("ja");
void OfferRObfV33HashMixchihbkpormdcangvacrsz("c9");
void OfferRObfV33SumOdchihbkpormdcangvacrszds([15, 38, 25]);
  let acc = 23;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 169;
  }
  return acc;
}
function OfferResolvePart01ObfV27ClampMochihbkpormdcangvacrszd(n: number, m: number): number {
  const span = (m % 37) + 11;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvePchihbkpormdcangvacrszart01ObfV27ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 100) & 34341;
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
function OfferReObfVchihbkpormdcangvacrsz29Mix(a: number, b: number): number {
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(55, 30);
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold("la");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix("il25");
void chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds([9, 24, 27]);
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function OfferRchihbkpormdcangvacrszeObfV29Fold(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */
function OfferRObfV33ShifchihbkpormdcangvacrsztXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 31) & 43640;
}
function OfferchihbkpormdcangvacrszRObfV33ByteFold(s: string): number {
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 17955;
  return x;
}
function OfferRObfV33HashMixchihbkpormdcangvacrsz(s: string): number {
  let h = 12;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 233;
  return h;
}
function OfferRObfV33SumOdchihbkpormdcangvacrszds(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 885;
  }
  return acc;
}

/* obfuscation-batch:v34 */
function chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 23) & 57514;
}
function chihbkpormdcangvacrszOchihbkpormdcangvaObfV34ByteFold(s: string): number {
  let x = 52;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) & 34135;
  return x;
}
function chihbkpormdcangvacrszOchihbkpormdcangvaObfV34HashMix(s: string): number {
  let h = 63;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 32)) % 98;
  return h;
}
function chihbkpormdcangvacrszOchihbkpormdcangvaObfV34SumOdds(nums: number[]): number {
  let acc = 20;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 442;
  }
  return acc;
}
