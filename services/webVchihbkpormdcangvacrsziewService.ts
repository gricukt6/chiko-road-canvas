import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  AppState,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LchihbkpormdcangvacrszAST_KEY,
  SchihbkpormdcangvacrszTORAGE_KEYS,
  chihbkpormdcangvacrszConstTouch,
} from './constants/constchihbkpormdcangvacrszntsVariable';
// autosetup-split-begin
import { webViewServchihbkpormdcangvacrsziceObfV5SumOdds, webViewServicchihbkpormdcangvacrszePart02ObfV11SumOdds, webViechihbkpormdcangvacrszwServiceObfV19HashMix, webchihbkpormdcangvacrszViewServiceObfV21HashMix, webViewchihbkpormdcangvacrszServiceObfV14HashMix, webViewServicchihbkpormdcangvacrszeObfV14ClampMod, webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz, webViewServicechihbkpormdcangvacrszObfV12ClampMod, webViewServiceObfVchihbkpormdcangvacrsz7ClampMod, webViewServicchihbkpormdcangvacrszeObfV9ClampMod, wchihbkpormdcangvacrszebViewServiceObfV6SumOdds, webObfV3HashMichihbkpormdcangvacrszx, webObfVchihbkpormdcangvacrsz3ClampMod, wechihbkpormdcangvacrszbObfV4SumOdds, webVchihbkpormdcangvacrsziewServObfV1ClampMod, swefgdetguhjhoioesMixSeed, swefgdetguhjhoioesClampSpan, webViewServicePart01ObfV1chihbkpormdcangvacrsz1SumOdds, webViewServiceParchihbkpormdcangvacrszt02ObfV27ByteFold, webViewServicePart02ObfV27HashMichihbkpormdcangvacrszx, webViewServicePartchihbkpormdcangvacrsz02ObfV27SumOdds, chihbkpormdcangvacrszwebViewServicePart0prissmgecObfV28Mix, chihbkpormdcangvacrszwebViewServicePart0prissmgecObfV28Fold, webViewObfVchihbkpormdcangvacrsz29Mix, webViewchihbkpormdcangvacrszObfV29Fold, chihbkpormdcangvacrszwebViewSerdgpnrismgemgalleryObfV30Mix, chihbkpormdcangvacrszwebViewSerdgpnrismgemgalleryObfV30Fold, webViewSechihbkpormdcangvacrszrviceObfV19ByteFold, webViewServiceOchihbkpormdcangvacrszbfV21ClampMod, webViewServiceObfV13chihbkpormdcangvacrszClampMod, webViewchihbkpormdcangvacrszServiceObfV7HashMix, webViewServiceObfV10chihbkpormdcangvacrszSumOdds, webViewSchihbkpormdcangvacrszervObfV1HashMix, webVchihbkpormdcangvacrsziewServicePart02ObfV11HashMix, webVchihbkpormdcangvacrsziewServicePart03ObfV13ClampMod, webViewServicePart01ObfV15SumchihbkpormdcangvacrszOdds, wchihbkpormdcangvacrszebViewServicePart02ObfV22ShiftXor } from './webViewServchihbkpormdcangvacrszicePart01';
import { webViewServiceObfV23HchihbkpormdcangvacrszashMix, webViechihbkpormdcangvacrszwServiceObfV24HashMix, wchihbkpormdcangvacrszebViewServiceObfV24SumOdds, webViewServicchihbkpormdcangvacrszeObfV25SumOdds, wchihbkpormdcangvacrszebViewServiceObfV25ClampMod, webViewServiceObfV26SumOchihbkpormdcangvacrszdds, webViewSechihbkpormdcangvacrszrviceObfV26ClampMod, webViewServiceObfV27ClachihbkpormdcangvacrszmpMod, webViewServiceObfchihbkpormdcangvacrszV27ShiftXor, chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix, chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold, chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix, chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold, webViewchihbkpormdcangvacrszSeObfV29Mix, wechihbkpormdcangvacrszbViewSeObfV29Fold, webViewServiceObfV22SchihbkpormdcangvacrszhiftXor, webViewServchihbkpormdcangvacrsziceObfV23SumOdds1, webViewServiceObfV23ClampMochihbkpormdcangvacrszd2, webViewServicechihbkpormdcangvacrszObfV24ByteFold, webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod, webViewServiceObfV25SchihbkpormdcangvacrszhiftXor, webViewServicePart02ObfV11ClamchihbkpormdcangvacrszpMod, webViewServiceObfV12SuchihbkpormdcangvacrszmOdds, webVichihbkpormdcangvacrszewServicePart02ObfV15ClampMod, wchihbkpormdcangvacrszebViewServiceObfV16SumOdds, webViewServchihbkpormdcangvacrsziceObfV17HashMix, webViechihbkpormdcangvacrszwServiceObfV18ShiftXor, webViewServiceObfVchihbkpormdcangvacrsz20SumOdds, webViewServiceObfVchihbkpormdcangvacrsz16ClampMod, webViewServiceObfV11SumOddschihbkpormdcangvacrsz, wchihbkpormdcangvacrszebViewServiceObfV8SumOdds, webViewServiceObfV5ClampMochihbkpormdcangvacrszd, webViewServObfV2SuchihbkpormdcangvacrszmOdds, webVchihbkpormdcangvacrsziewServicePart01ObfV13HashMix, webViewServicePart03ObfV13ByteFchihbkpormdcangvacrszold, webViewchihbkpormdcangvacrszServicePart01ObfV15ShiftXor, wchihbkpormdcangvacrszebViewServicePart02ObfV23SumOdds } from './webViewServicePart02chihbkpormdcangvacrsz';
// autosetup-split-end
import { swefgdetguhjhoioesFoldRange, webViewServiceObfV21ByteFolchihbkpormdcangvacrszd, webViechihbkpormdcangvacrszwServiceObfV21SumOdds, webViewServiceObfV2chihbkpormdcangvacrsz0HashMix, wechihbkpormdcangvacrszbViewServiceObfV19SumOdds, webViewServiceObfV18ClamchihbkpormdcangvacrszpMod, webViewchihbkpormdcangvacrszServiceObfV18ByteFold, webViewServiceObchihbkpormdcangvacrszfV17ByteFold, wchihbkpormdcangvacrszebViewServiceObfV16HashMix, webViewServiceObfVchihbkpormdcangvacrsz15SumOdds, wchihbkpormdcangvacrszebViewServiceObfV15ClampMod, webViewServiceObfV14SumchihbkpormdcangvacrszOdds, webViewServchihbkpormdcangvacrsziceObfV13SumOdds, webViewServiceObfV13ShiftXochihbkpormdcangvacrszr, wechihbkpormdcangvacrszbViewServiceObfV12HashMix, webViechihbkpormdcangvacrszwServiceObfV11HashMix, webchihbkpormdcangvacrszViewServiceObfV11ClampMod, webViewServiceObfVchihbkpormdcangvacrsz7SumOdds, webViewServchihbkpormdcangvacrsziceObfV8HashMix, webViewServichihbkpormdcangvacrszceObfV8ClampMod, webVichihbkpormdcangvacrszewServiceObfV9HashMix, webViewServicchihbkpormdcangvacrszeObfV9SumOdds, webViewServiceObfV10HaschihbkpormdcangvacrszhMix, webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod, webViewServiceObfV5HaschihbkpormdcangvacrszhMix, webViewServiceObfV6HashMixchihbkpormdcangvacrsz, webVchihbkpormdcangvacrsziewServiceObfV6ClampMod, wchihbkpormdcangvacrszebObfV3SumOdds, webObfchihbkpormdcangvacrszV4HashMix, webObfV4ClampModchihbkpormdcangvacrsz, webViewServObfV1SumOddschihbkpormdcangvacrsz, webViewServOchihbkpormdcangvacrszbfV2HashMix, wchihbkpormdcangvacrszebViewServObfV2ClampMod, webViewServicePart01ObfV11HashchihbkpormdcangvacrszMix, webViewServicePart01ObfV11ClampMchihbkpormdcangvacrszod, webViewServicePart0chihbkpormdcangvacrsz1ObfV13ByteFold, webViewServchihbkpormdcangvacrszicePart02ObfV13SumOdds, webVchihbkpormdcangvacrsziewServicePart03ObfV13ShiftXor, webViechihbkpormdcangvacrszwServicePart03ObfV13HashMix, webViewServicePart01ObfVchihbkpormdcangvacrsz15HashMix, webViechihbkpormdcangvacrszwServicePart01ObfV15ClampMod, webVchihbkpormdcangvacrsziewServicePart02ObfV15ShiftXor, webViechihbkpormdcangvacrszwServicePart02ObfV15ByteFold } from './webViewServichihbkpormdcangvacrszcePart01';

type ViechihbkpormdcangvacrszwportBannanaModule = {
  wojasomihipolo: (url: string) => Promise<boolean>;
  tizihonurir: () => Promise<boolean>;
};

function viewpchihbkpormdcangvacrszortBridge(): ViechihbkpormdcangvacrszwportBannanaModule | undefined {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

  void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
  void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');

  return NativeModules.Kudanihiv;
}
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  /** System permission sheet is on screen. Its own pause must not count as a new launch. */
  private swefgdetguhjhoioesPushUiInFlight = false;
  /** Ignore the resume that follows closing the system sheet. */
  private swefgdetguhjhoioesPushUiQuietUntil = 0;
  /** User left the app (Home / recents), not the permission dialog. */
  private swefgdetguhjhoioesLeftAppForReal = false;
  _dummypicklfo5409vb33 = 0;

  constructor() {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
    void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
    void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');

    void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
    void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
    this.swefgdetguhjhoioesBindPushLaunchWatcher();
  }

  chihbkpormdcangvacrszubscribe(listener: swefgdetguhjhoioesListener): () => void {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

      void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
      void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
        void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
        void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
        void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
    void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
    void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');    void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
    void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
    void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
    void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
    void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
    void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
    void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
    void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
    void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
    void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
    void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
    void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
    void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
    void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
    void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
    void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
    void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

      void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
      void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
      void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
      void webObfV3HashMichihbkpormdcangvacrszx('xy');
      void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
      void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
      void webObfchihbkpormdcangvacrszV4HashMix('xy');
      void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
      void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
      void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
      void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
      void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
      void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
      void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
      void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void chihbkpormdcangvacrszConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

      void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
      void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
        void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
        void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
        void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
    void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
    void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');    void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
    void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
    void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
    void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
    void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
    void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
    void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
    void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
    void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
    void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
    void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
    void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
    void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
    void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
    void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
    void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
    void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

      void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
      void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
      void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
      return (l(this.state));
    });
  }

  /**
   * A second app open is not always a new process. Home → icon keeps JS alive,
   * so the one-shot session flag would skip the repeat native ask. The system
   * sheet itself also backgrounds the activity; that pause is not a launch.
   */
  private swefgdetguhjhoioesBindPushLaunchWatcher(): void {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
    void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
    void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');

    void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
    void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);

    AppState.addEventListener('change', (next) => {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

      void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
      void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
        void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
        void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
        void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
    void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
    void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');    void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
    void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
    void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
      void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
      void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');

      void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
      void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);

      const quiet = Date.now() < this.swefgdetguhjhoioesPushUiQuietUntil;
      if (next === 'background') {
        if (!this.swefgdetguhjhoioesPushUiInFlight && !quiet) {
          this.swefgdetguhjhoioesLeftAppForReal = true;
        }
        return;
      }
      if (next !== 'active') {
        return;
      }
      if (this.swefgdetguhjhoioesPushUiInFlight || quiet) {
        this.swefgdetguhjhoioesLeftAppForReal = false;
        return;
      }
      if (!this.swefgdetguhjhoioesLeftAppForReal) {
        return;
      }
      this.swefgdetguhjhoioesLeftAppForReal = false;
      this.swefgdetguhjhoioesNativePushAskedThisSession = false;
      this.swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
      if (this.state.visible || this.openingInProgress) {
        void this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
    });
  }

  private swefgdetguhjhoioesBeginPushUi(): void {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
    void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
    void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');

    void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = true;
  }

  private swefgdetguhjhoioesEndPushUi(): void {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
    void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
    void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');

    void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = false;
    this.swefgdetguhjhoioesPushUiQuietUntil = Date.now() + 1200;
  }

  private async swefgdetguhjhoioesOpenPushSettings(): Promise<void> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
    void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
    void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');

    void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
    void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);

    try {
      if (Platform.OS === 'android') {
        const { Romizefaquvef } = NativeModules;
        const packageName =
          Romizefaquvef && typeof Romizefaquvef.lagamoneva === 'function'
            ? await Romizefaquvef.lagamoneva()
            : '';
        if (packageName) {
          await Linking.sendIntent('android.settings.APP_NOTIFICATION_SETTINGS', [
            {
              key: 'android.provider.extra.APP_PACKAGE',
              value: String(packageName),
            },
          ]);
          return;
        }
      }
    } catch {
      // Fall through to the app details screen.
    }
    try {
      await Linking.openSettings();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

  void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
  void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
  void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
  void webObfV3HashMichihbkpormdcangvacrszx('xy');
  void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
  void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
  void webObfchihbkpormdcangvacrszV4HashMix('xy');
  void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
  void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
                if (alreadyGranted) {
          return true;
        }
        this.swefgdetguhjhoioesBeginPushUi();
        try {
          const result = await PermissionsAndroid.request(permission);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        } finally {
          this.swefgdetguhjhoioesEndPushUi();
        }
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
                const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          this.swefgdetguhjhoioesBeginPushUi();
          try {
            const newStatus = await requestPermission(messaging);
            return (
              newStatus === AuthorizationStatus.AUTHORIZED ||
              newStatus === AuthorizationStatus.PROVISIONAL
            );
          } finally {
            this.swefgdetguhjhoioesEndPushUi();
          }
        }
        return false;
      }
    } catch (error) {
      void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
      void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
      void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
      void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
      void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
      void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
            void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

            void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
            void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
              void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
              void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
              void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
          void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
          void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');          void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
          void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
          void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
          void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
          void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
          void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
          void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
          void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
          void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
          void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
          void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
          void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
          void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
          void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
          void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
          void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
          void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

            void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
            void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
            void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
            void webObfV3HashMichihbkpormdcangvacrszx('xy');
            void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
            void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
            void webObfchihbkpormdcangvacrszV4HashMix('xy');
            void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
            void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
            void this.swefgdetguhjhoioesOpenPushSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        SchihbkpormdcangvacrszTORAGE_KEYS.PUSH_MAIN_ASKEchihbkpormdcangvacrszD,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native dialog per launch. The 2nd native ask waits until the user leaves and opens the app again.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: first launch. askCount === 1: second launch, ask again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        SchihbkpormdcangvacrszTORAGE_KEYS.PUSH_MAIN_ASKEchihbkpormdcangvacrszD,
        String(nextCount),
      );

      // Second denial → custom prompt (later launches hit askCount >= 2 above).
      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

  void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
  void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
  void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
  void webObfV3HashMichihbkpormdcangvacrszx('xy');
  void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
  void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
  void webObfchihbkpormdcangvacrszV4HashMix('xy');
  void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
  void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    const wojasomihipoloBridge = viewpchihbkpormdcangvacrszortBridge();
    if (Platform.OS !== 'android' || !wojasomihipoloBridge?.wojasomihipolo) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await wojasomihipoloBridge.wojasomihipolo(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    const tizihonurirBridge = viewpchihbkpormdcangvacrszortBridge();
    if (Platform.OS !== 'android' || !tizihonurirBridge?.tizihonurir) {
      return;
    }

    try {
      await tizihonurirBridge.tizihonurir();
    } catch {
      // silent
    }
  }

  async showchihbkpormdcangvacrsz(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

  void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
  void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
  void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
  void webObfV3HashMichihbkpormdcangvacrszx('xy');
  void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
  void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
  void webObfchihbkpormdcangvacrszV4HashMix('xy');
  void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
  void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.chihbkpormdcangvacrszaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async chihbkpormdcangvacrszaveLastUrl(url: string): Promise<boolean> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.chihbkpormdcangvacrszaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async chihbkpormdcangvacrszaveLastUrlToStorage(url: string): Promise<void> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LchihbkpormdcangvacrszAST_KEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
void webVieObfV33SumOdchihbkpormdcangvacrszds([33, 40, 35]);
void webVchihbkpormdcangvacrszieObfV33ClampMod(58, 37);
void chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix("ofanm7");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix("jc56");
void chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewchihbkpormdcangvacrszSeObfV29Mix(9, 16);
void wechihbkpormdcangvacrszbViewSeObfV29Fold("wedgpn");
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void chihbkpormdcangvacrszwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void chihbkpormdcangvacrszwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClachihbkpormdcangvacrszmpMod(4, 8);
void webViewServiceObfchihbkpormdcangvacrszV27ShiftXor(61, 62);

    void webViewServiceObfV26SumOchihbkpormdcangvacrszdds([37, 37, 25]);
    void webViewSechihbkpormdcangvacrszrviceObfV26ClampMod(50, 22);
  void webViewServicchihbkpormdcangvacrszeObfV25SumOdds([29, 25, 9]);
  void wchihbkpormdcangvacrszebViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25SchihbkpormdcangvacrszhiftXor(38, 58);
  void webViewServicechihbkpormdcangvacrszObfV24ByteFold('ntt');
  void webViechihbkpormdcangvacrszwServiceObfV24HashMix('u2c39');
  void wchihbkpormdcangvacrszebViewServiceObfV24SumOdds([83, 15, 11]);
  void webViewServiceObfV2chihbkpormdcangvacrsz4ClampMod(12, 33);
void webViewServiceObfV23HchihbkpormdcangvacrszashMix('zat');void webViewServchihbkpormdcangvacrsziceObfV23SumOdds1([31, 25, 32]);void webViewServiceObfV23ClampMochihbkpormdcangvacrszd2(15, 27);void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);
  void webViewServiceObfV2chihbkpormdcangvacrsz0HashMix('7v');
  void webViewServiceObfVchihbkpormdcangvacrsz20SumOdds([21, 27, 16]);
void webViechihbkpormdcangvacrszwServiceObfV19HashMix('pmqf');void wechihbkpormdcangvacrszbViewServiceObfV19SumOdds([24, 28, 16]);void webViewSechihbkpormdcangvacrszrviceObfV19ByteFold('xhp');  void webViewServiceObfV18ClamchihbkpormdcangvacrszpMod(39, 8);
  void webViechihbkpormdcangvacrszwServiceObfV18ShiftXor(76, 79);
  void webViewchihbkpormdcangvacrszServiceObfV18ByteFold('rrrh');
  void webViewServiceObchihbkpormdcangvacrszfV17ByteFold('fv9f');
  void webViewServchihbkpormdcangvacrsziceObfV17HashMix('fv2');
  void wchihbkpormdcangvacrszebViewServiceObfV16HashMix('h3tb');
  void wchihbkpormdcangvacrszebViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfVchihbkpormdcangvacrsz16ClampMod(54, 53);
  void webViewServiceObfVchihbkpormdcangvacrsz15SumOdds([19, 18, 23]);
  void wchihbkpormdcangvacrszebViewServiceObfV15ClampMod(42, 62);
  void webViewchihbkpormdcangvacrszServiceObfV14HashMix('hq9');
  void webViewServiceObfV14SumchihbkpormdcangvacrszOdds([18, 16, 22]);
  void webViewServicchihbkpormdcangvacrszeObfV14ClampMod(65, 12);
  void webViewServchihbkpormdcangvacrsziceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13chihbkpormdcangvacrszClampMod(64, 55);
  void webViewServiceObfV13ShiftXochihbkpormdcangvacrszr(6, 23);
  void webViewServiceObfV13ByteFoldchihbkpormdcangvacrsz('9k6');
  void wechihbkpormdcangvacrszbViewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
  void webViewServicechihbkpormdcangvacrszObfV12ClampMod(7, 5);

  void webViechihbkpormdcangvacrszwServiceObfV11HashMix('xy');
  void webViewServiceObfV11SumOddschihbkpormdcangvacrsz([1, 3, 5]);
  void webchihbkpormdcangvacrszViewServiceObfV11ClampMod(7, 5);

  void webViewchihbkpormdcangvacrszServiceObfV7HashMix('xy');
  void webViewServiceObfVchihbkpormdcangvacrsz7SumOdds([1, 3, 5]);
  void webViewServiceObfVchihbkpormdcangvacrsz7ClampMod(7, 5);
  void webViewServchihbkpormdcangvacrsziceObfV8HashMix('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServichihbkpormdcangvacrszceObfV8ClampMod(7, 5);
  void webVichihbkpormdcangvacrszewServiceObfV9HashMix('xy');
  void webViewServicchihbkpormdcangvacrszeObfV9SumOdds([1, 3, 5]);
  void webViewServicchihbkpormdcangvacrszeObfV9ClampMod(7, 5);
  void webViewServiceObfV10HaschihbkpormdcangvacrszhMix('xy');
  void webViewServiceObfV10chihbkpormdcangvacrszSumOdds([1, 3, 5]);
  void webViewServiceObfV1chihbkpormdcangvacrsz0ClampMod(7, 5);

    void webViewServiceObfV5HaschihbkpormdcangvacrszhMix('xy');
    void webViewServchihbkpormdcangvacrsziceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMochihbkpormdcangvacrszd(7, 5);
  void webViewServiceObfV6HashMixchihbkpormdcangvacrsz('xy');
  void wchihbkpormdcangvacrszebViewServiceObfV6SumOdds([1, 3, 5]);
  void webVchihbkpormdcangvacrsziewServiceObfV6ClampMod(7, 5);
    void webObfV3HashMichihbkpormdcangvacrszx('xy');
    void wchihbkpormdcangvacrszebObfV3SumOdds([1, 3, 5]);
    void webObfVchihbkpormdcangvacrsz3ClampMod(7, 5);
    void webObfchihbkpormdcangvacrszV4HashMix('xy');
    void wechihbkpormdcangvacrszbObfV4SumOdds([1, 3, 5]);
    void webObfV4ClampModchihbkpormdcangvacrsz(7, 5);
    void webViewSchihbkpormdcangvacrszervObfV1HashMix('xy');
    void webViewServObfV1SumOddschihbkpormdcangvacrsz([1, 3, 5]);
    void webVchihbkpormdcangvacrsziewServObfV1ClampMod(7, 5);
    void webViewServOchihbkpormdcangvacrszbfV2HashMix('xy');
    void webViewServObfV2SuchihbkpormdcangvacrszmOdds([1, 3, 5]);
    void wchihbkpormdcangvacrszebViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LchihbkpormdcangvacrszAST_KEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void webViewServicePart01ObfV11HashchihbkpormdcangvacrszMix('xy');
void webViewServicePart01ObfV1chihbkpormdcangvacrsz1SumOdds([1, 3, 5]);
void webViewServicePart01ObfV11ClampMchihbkpormdcangvacrszod(7, 5);
/* obfuscation-batch:v11 */

void webVchihbkpormdcangvacrsziewServicePart02ObfV11HashMix('xy');
void webViewServicchihbkpormdcangvacrszePart02ObfV11SumOdds([1, 3, 5]);
void webViewServicePart02ObfV11ClamchihbkpormdcangvacrszpMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
void webViewServicePart0chihbkpormdcangvacrsz1ObfV13ByteFold('dzzw');
void webVchihbkpormdcangvacrsziewServicePart01ObfV13HashMix('fs');

/* obfuscation-batch:v13 */
void webViewServchihbkpormdcangvacrszicePart02ObfV13SumOdds([18, 4, 4]);

/* obfuscation-batch:v13 */
void webVchihbkpormdcangvacrsziewServicePart03ObfV13ClampMod(9, 24);
void webVchihbkpormdcangvacrsziewServicePart03ObfV13ShiftXor(6, 10);
void webViewServicePart03ObfV13ByteFchihbkpormdcangvacrszold('rwq');
void webViechihbkpormdcangvacrszwServicePart03ObfV13HashMix('kbw');
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void webViewServicePart01ObfVchihbkpormdcangvacrsz15HashMix('96nm');
void webViewServicePart01ObfV15SumchihbkpormdcangvacrszOdds([24, 26, 30]);
void webViechihbkpormdcangvacrszwServicePart01ObfV15ClampMod(30, 11);
void webViewchihbkpormdcangvacrszServicePart01ObfV15ShiftXor(4, 31);

/* obfuscation-batch:v15 */
void webVichihbkpormdcangvacrszewServicePart02ObfV15ClampMod(14, 63);
void webVchihbkpormdcangvacrsziewServicePart02ObfV15ShiftXor(41, 49);
void webViechihbkpormdcangvacrszwServicePart02ObfV15ByteFold('8f');
/* obfuscation-batch:v16 */

/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void webViewServiceObfV21ByteFolchihbkpormdcangvacrszd('2m');
void webchihbkpormdcangvacrszViewServiceObfV21HashMix('7am4');
void webViechihbkpormdcangvacrszwServiceObfV21SumOdds([17, 15, 13]);
void webViewServiceOchihbkpormdcangvacrszbfV21ClampMod(81, 10);

/* obfuscation-batch:v22 */
void webViewServiceObfV22SchihbkpormdcangvacrszhiftXor(89, 68);
/* obfuscation-batch:v23 */
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v22 */
void wchihbkpormdcangvacrszebViewServicePart02ObfV22ShiftXor(83, 4);
/* obfuscation-batch:v23 */
void wchihbkpormdcangvacrszebViewServicePart02ObfV23SumOdds([23, 29, 8]);
/* obfuscation-batch:v24 */
function webViewSchihbkpormdcangvacrszervicePart02ObfV24ByteFold(s: string): number {
          let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 55769;
  return x;
}
function webViewServicePart02ObfV24HashMchihbkpormdcangvacrszix(s: string): number {

  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 3) % 92;
  return h;
}
function webViewchihbkpormdcangvacrszServicePart02ObfV24SumOdds(nums: number[]): number {
          let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 428;
  }
  return acc;
}

/* obfuscation-batch:v25 */
function webViewServicePchihbkpormdcangvacrszart02ObfV25ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 129) & 43284;
}

function webViewServicePart02ObfVchihbkpormdcangvacrsz25ByteFold(s: string): number {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 50908;
  return x;
}

function webViewServicePart02ObfV25HaschihbkpormdcangvacrszhMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 779;
  return h;
}

function webViewServicePart02ObfV25SumOdchihbkpormdcangvacrszds(nums: number[]): number {
  let acc = 35;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 681;
  }
  return acc;
}

/* obfuscation-batch:v26 */
function webViewServicePart02ObfchihbkpormdcangvacrszV26HashMix(s: string): number {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 37) % 610;
  return h;
}

function webViewServicePart02ObfV26SumOddschihbkpormdcangvacrsz(nums: number[]): number {
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 211;
  }
  return acc;
}

function webViewSerchihbkpormdcangvacrszvicePart02ObfV26ClampMod(n: number, m: number): number {
  const span = (m % 59) + 13;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServicePart02ObfVchihbkpormdcangvacrsz26ShiftXor(n: number, k: number): number {
void chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(80, 67);
  const x = (n ^ k) << 5;
  return (x ^ 115) & 34227;
}

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */
function chihbkpormdcangvacrszwebViewServpmvqkrmObfV31HashMix(s: string): number {
  let h = 89;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 749;
  return h;
}
function chihbkpormdcangvacrszwebViewServpmvqkrmObfV31SumOdds(nums: number[]): number {
  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 348;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function chihbkpormdcangvacrszwichyikowrdfpagthmObfV32HashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 37)) % 829;
  return h;
}

/* obfuscation-batch:v33 */
function webVieObfV33SumOdchihbkpormdcangvacrszds(nums: number[]): number {
  let acc = 13;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 816;
  }
  return acc;
}
function webVchihbkpormdcangvacrszieObfV33ClampMod(n: number, m: number): number {
  const span = (m % 53) + 5;
  const x = ((n ^ 154) << 7) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v34 */
function chihbkpormdcangvacrszwebVchihbkpormdcanObfV34ClampMod(n: number, m: number): number {
  const span = (m % 47) + 2;
  const x = ((n ^ 214) << 4) % span;
  return x < 0 ? x + span : x;
}
