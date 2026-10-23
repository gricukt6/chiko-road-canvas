/* autosetup-decoy:v1 */
package com.chijkcotrcwdmcanveras3891

object DchihbkpormdcangvacrszCrest05 {
  fun tap(seed: Int): Int {
    val tag = "DchihbkpormdcangvacrszCrest05"
    var x = seed xor 28111
    for (ch in tag) {
      x = (x + ch.code * 19) and 0xffff
    }
    return x xor 1421
  }
}
