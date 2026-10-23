import icochihbkpormdcangvacrsznApp from '../../../assets/icon_1024.png';
import bgLochihbkpormdcangvacrszader from '../../../assets/bg_loader.png';
import bgMchihbkpormdcangvacrszenu from '../../../assets/bg_menu.png';
import bgGchihbkpormdcangvacrszame from '../../../assets/bg_game.png';
import spriteHechihbkpormdcangvacrszroChicken from '../../../assets/sprite_hero_chicken.png';
import spritchihbkpormdcangvacrszeNest from '../../../assets/sprite_nest.png';
import spriteTchihbkpormdcangvacrszilePaint from '../../../assets/sprite_tile_paint.png';
import spritchihbkpormdcangvacrszeBrush from '../../../assets/sprite_brush.png';
import spritchihbkpormdcangvacrszeStar from '../../../assets/sprite_star.png';

export const IMAchihbkpormdcangvacrszGES = {
  iconApp: icochihbkpormdcangvacrsznApp,
  bgLoader: bgLochihbkpormdcangvacrszader,
  bgMenu: bgMchihbkpormdcangvacrszenu,
  bgGame: bgGchihbkpormdcangvacrszame,
};

export const SPRchihbkpormdcangvacrszITES = {
  heroChicken: spriteHechihbkpormdcangvacrszroChicken,
  nest: spritchihbkpormdcangvacrszeNest,
  tilePaint: spriteTchihbkpormdcangvacrszilePaint,
  brush: spritchihbkpormdcangvacrszeBrush,
  star: spritchihbkpormdcangvacrszeStar,
};

/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszindexObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 5;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 10)) % 213;
  return hchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszindexObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 21;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 37) % 817;
  }
  return achihbkpormdcangvacrszcc;
}
void chihbkpormdcangvacrszindexObfV1HashMix("fm7");
void chihbkpormdcangvacrszindexObfV1SumOdds([37, 36, 23]);
