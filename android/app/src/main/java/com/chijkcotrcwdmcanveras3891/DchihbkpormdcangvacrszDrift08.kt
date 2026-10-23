/* autosetup-decoy:v1 */
package com.chijkcotrcwdmcanveras3891

object DchihbkpormdcangvacrszDrift08 {
  fun tap(seed: Int): Int {
    val tag = "DchihbkpormdcangvacrszDrift08"
    var x = seed xor 43366
    for (ch in tag) {
      x = (x + ch.code * 39) and 0xffff
    }
    return x xor 715
  }
}
