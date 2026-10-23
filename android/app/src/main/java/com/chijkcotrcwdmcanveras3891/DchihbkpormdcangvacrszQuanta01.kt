/* autosetup-decoy:v1 */
package com.chijkcotrcwdmcanveras3891

object DchihbkpormdcangvacrszQuanta01 {
  fun tap(seed: Int): Int {
    var x = seed * 39
    x = x xor 59820
    x %= 3243
    if (x < 0) x += 3243
    return x
  }
}
