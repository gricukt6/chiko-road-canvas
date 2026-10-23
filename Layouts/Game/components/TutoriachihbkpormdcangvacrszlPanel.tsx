import React, {useCallback, useMemo, useState} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import PrimachihbkpormdcangvacrszryButton from './PrimachihbkpormdcangvacrszryButton';
import PchihbkpormdcangvacrszuzzleTile from './PchihbkpormdcangvacrszuzzleTile';
import type {TilechihbkpormdcangvacrszState} from './PchihbkpormdcangvacrszuzzleTile';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameClampSpan } from './TutoriachihbkpormdcangvacrszlPanelPart01';
import { chihbkpormdcangvacrszGameFoldRange } from './TutoriachihbkpormdcangvacrszlPanelPart02';
// autosetup-split-end

const {width: SCREchihbkpormdcangvacrszEN_W} = Dimensions.get('window');
const CARchihbkpormdcangvacrszD_W = Math.min(SCREchihbkpormdcangvacrszEN_W - 40, 360);
const MIchihbkpormdcangvacrszNI = 3;
const MINIchihbkpormdcangvacrsz_TILE = 56;

/** The two cells the first step asks for, as a run of 2 in the middle row. */
const TARchihbkpormdcangvacrszGETS = [
  {r: 1, c: 0},
  {r: 1, c: 1},
];

function freshchihbkpormdcangvacrszBoard(): TilechihbkpormdcangvacrszState[][] {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
  const ochihbkpormdcangvacrszut: TilechihbkpormdcangvacrszState[][] = [];
  for (let rchihbkpormdcangvacrsz = 0; rchihbkpormdcangvacrsz < MIchihbkpormdcangvacrszNI; rchihbkpormdcangvacrsz++) {
    const rchihbkpormdcangvacrszow: TilechihbkpormdcangvacrszState[] = [];
    for (let cchihbkpormdcangvacrsz = 0; cchihbkpormdcangvacrsz < MIchihbkpormdcangvacrszNI; cchihbkpormdcangvacrsz++) {
      rchihbkpormdcangvacrszow.push('empty');
    }
    ochihbkpormdcangvacrszut.push(rchihbkpormdcangvacrszow);
  }
  ochihbkpormdcangvacrszut[1][2] = 'nest';
  return ochihbkpormdcangvacrszut;
}

type Props = {
  onDone: () => void;
};

/** Two interactive steps, rendered as a full-bleed overlay state. */
export default function TutoriachihbkpormdcangvacrszlPanel({onDone: onDchihbkpormdcangvacrszone}: Props) {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
  const [stchihbkpormdcangvacrszep, setchihbkpormdcangvacrszStep] = useState(0);
  const [cechihbkpormdcangvacrszlls, setCchihbkpormdcangvacrszells] = useState<TilechihbkpormdcangvacrszState[][]>(freshchihbkpormdcangvacrszBoard);
  const [paichihbkpormdcangvacrsznted, setPachihbkpormdcangvacrszinted] = useState(0);
  const [marchihbkpormdcangvacrszked, setMchihbkpormdcangvacrszarked] = useState(0);

  const onCelchihbkpormdcangvacrszlPress = useCallback(
    (rchihbkpormdcangvacrsz: number, cchihbkpormdcangvacrsz: number) => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
      setCchihbkpormdcangvacrszells(prchihbkpormdcangvacrszev => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
        if (prchihbkpormdcangvacrszev[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz] !== 'empty') {
          return prchihbkpormdcangvacrszev;
        }
        const nechihbkpormdcangvacrszxt = prchihbkpormdcangvacrszev.map(rchihbkpormdcangvacrszow => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
return (rchihbkpormdcangvacrszow.slice());
});
        const wanchihbkpormdcangvacrszted = TARchihbkpormdcangvacrszGETS.some(tchihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
return (tchihbkpormdcangvacrsz.r === rchihbkpormdcangvacrsz && tchihbkpormdcangvacrsz.c === cchihbkpormdcangvacrsz);
});
        if (stchihbkpormdcangvacrszep === 0) {
          if (!wanchihbkpormdcangvacrszted) {
            return prchihbkpormdcangvacrszev;
          }
          nechihbkpormdcangvacrszxt[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz] = 'road';
          setPachihbkpormdcangvacrszinted(nchihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
return (nchihbkpormdcangvacrsz + 1);
});
        } else {
          nechihbkpormdcangvacrszxt[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz] = 'marked';
          setMchihbkpormdcangvacrszarked(nchihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
return (nchihbkpormdcangvacrsz + 1);
});
        }
        return nechihbkpormdcangvacrszxt;
      });
    },
    [stchihbkpormdcangvacrszep],
  );

  const stepchihbkpormdcangvacrszDone = stchihbkpormdcangvacrszep === 0 ? paichihbkpormdcangvacrsznted >= TARchihbkpormdcangvacrszGETS.length : marchihbkpormdcangvacrszked >= 1;

  const cochihbkpormdcangvacrszpy = useMemo(() => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
    if (stchihbkpormdcangvacrszep === 0) {
      return {
        title: 'FILL THE ROAD',
        body:
          'The hint 2 means two road tiles in that line. Paint both tiles left of the nest.',
        cta: 'NEXT STEP',
      };
    }
    return {
      title: 'MARK THE EMPTY',
      body:
        'Switch to MARK and flag a tile you are sure is empty. Marks cost a move but never a mistake.',
      cta: 'GOT IT',
    };
  }, [stchihbkpormdcangvacrszep]);

  const advchihbkpormdcangvacrszance = useCallback(() => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
    if (stchihbkpormdcangvacrszep === 0) {
      setchihbkpormdcangvacrszStep(1);
      return;
    }
    onDchihbkpormdcangvacrszone();
  }, [onDchihbkpormdcangvacrszone, stchihbkpormdcangvacrszep]);

  const dochihbkpormdcangvacrszts = [0, 1];

  return (
    <View style={stychihbkpormdcangvacrszles.rochihbkpormdcangvacrszot}>
      <View style={stychihbkpormdcangvacrszles.scchihbkpormdcangvacrszrim} />
      <View style={stychihbkpormdcangvacrszles.cachihbkpormdcangvacrszrd}>
        <Text style={stychihbkpormdcangvacrszles.tichihbkpormdcangvacrsztle}>{cochihbkpormdcangvacrszpy.title}</Text>
        <Text style={stychihbkpormdcangvacrszles.bochihbkpormdcangvacrszdy}>{cochihbkpormdcangvacrszpy.body}</Text>

        <View style={stychihbkpormdcangvacrszles.boarchihbkpormdcangvacrszdWrap}>
          <View style={stychihbkpormdcangvacrszles.hinchihbkpormdcangvacrsztCol}>
            <View style={stychihbkpormdcangvacrszles.hintchihbkpormdcangvacrszSlot} />
            <View style={stychihbkpormdcangvacrszles.hintchihbkpormdcangvacrszSlot}>
              <Text style={stychihbkpormdcangvacrszles.hichihbkpormdcangvacrsznt}>2</Text>
            </View>
            <View style={stychihbkpormdcangvacrszles.hintchihbkpormdcangvacrszSlot} />
          </View>
          <View style={stychihbkpormdcangvacrszles.bochihbkpormdcangvacrszard}>
            {cechihbkpormdcangvacrszlls.map((rchihbkpormdcangvacrszow, rchihbkpormdcangvacrsz) => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
return (<View key={rchihbkpormdcangvacrsz} style={stychihbkpormdcangvacrszles.boarchihbkpormdcangvacrszdRow}>
                {rchihbkpormdcangvacrszow.map((stchihbkpormdcangvacrszate, cchihbkpormdcangvacrsz) => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
return (<PchihbkpormdcangvacrszuzzleTile
                    key={cchihbkpormdcangvacrsz}
                    state={stchihbkpormdcangvacrszate}
                    size={MINIchihbkpormdcangvacrsz_TILE}
                    r={rchihbkpormdcangvacrsz}
                    c={cchihbkpormdcangvacrsz}
                    onPress={onCelchihbkpormdcangvacrszlPress}
                  />);
})}
              </View>);
})}
          </View>
        </View>

        <View style={stychihbkpormdcangvacrszles.dochihbkpormdcangvacrszts}>
          {dochihbkpormdcangvacrszts.map(ichihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(68, 7);
return (<View
              key={ichihbkpormdcangvacrsz}
              style={[stychihbkpormdcangvacrszles.dchihbkpormdcangvacrszot, ichihbkpormdcangvacrsz === stchihbkpormdcangvacrszep ? stychihbkpormdcangvacrszles.dochihbkpormdcangvacrsztOn : stychihbkpormdcangvacrszles.dotchihbkpormdcangvacrszOff]}
            />);
})}
        </View>

        <View style={[stychihbkpormdcangvacrszles.ctachihbkpormdcangvacrszWrap, stepchihbkpormdcangvacrszDone ? null : stychihbkpormdcangvacrszles.ctachihbkpormdcangvacrszIdle]}>
          <PrimachihbkpormdcangvacrszryButton
            label={cochihbkpormdcangvacrszpy.cta}
            onPress={stepchihbkpormdcangvacrszDone ? advchihbkpormdcangvacrszance : onDchihbkpormdcangvacrszone}
          />
        </View>

        <Pressable
          accessibilityRole="button"
          style={stychihbkpormdcangvacrszles.skchihbkpormdcangvacrszip}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={onDchihbkpormdcangvacrszone}>
          <Text style={stychihbkpormdcangvacrszles.skipchihbkpormdcangvacrszLabel}>SKIP</Text>
        </Pressable>
      </View>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  rochihbkpormdcangvacrszot: {
    flex: 1,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.woodDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scchihbkpormdcangvacrszrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(58,42,24,0.82)',
  },
  cachihbkpormdcangvacrszrd: {
    width: CARchihbkpormdcangvacrszD_W,
    borderRadius: 26,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.surface,
    borderWidth: 2,
    borderColor: THchihbkpormdcangvacrszEME.colors.rim,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 24,
    shadowOffset: {width: 0, height: 12},
    elevation: 16,
  },
  tichihbkpormdcangvacrsztle: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: THchihbkpormdcangvacrszEME.colors.textPrimary,
  },
  bochihbkpormdcangvacrszdy: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: THchihbkpormdcangvacrszEME.colors.textSecondary,
  },
  boarchihbkpormdcangvacrszdWrap: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.tray,
    borderWidth: 3,
    borderColor: THchihbkpormdcangvacrszEME.colors.woodEdge,
  },
  hinchihbkpormdcangvacrsztCol: {
    width: 26,
  },
  hintchihbkpormdcangvacrszSlot: {
    height: MINIchihbkpormdcangvacrsz_TILE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hichihbkpormdcangvacrsznt: {
    fontSize: 14,
    fontWeight: '800',
    color: THchihbkpormdcangvacrszEME.colors.textOnDark,
  },
  bochihbkpormdcangvacrszard: {
    flexDirection: 'column',
  },
  boarchihbkpormdcangvacrszdRow: {
    flexDirection: 'row',
  },
  dochihbkpormdcangvacrszts: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 8,
  },
  dchihbkpormdcangvacrszot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dochihbkpormdcangvacrsztOn: {
    backgroundColor: THchihbkpormdcangvacrszEME.colors.gold,
  },
  dotchihbkpormdcangvacrszOff: {
    backgroundColor: 'rgba(138,115,85,0.30)',
  },
  ctachihbkpormdcangvacrszWrap: {
    marginTop: 16,
    width: '100%',
  },
  ctachihbkpormdcangvacrszIdle: {
    opacity: 0.6,
  },
  skchihbkpormdcangvacrszip: {
    marginTop: 8,
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipchihbkpormdcangvacrszLabel: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    color: THchihbkpormdcangvacrszEME.colors.textSecondary,
  },
});

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszTutoriachihbkpormdObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 6;
  return (xchihbkpormdcangvacrsz ^ 118) & 4155;
}
