/* autosetup-split:v1 */
package com.chijkcotrcwdmcanveras3891

import android.opengl.GLES20
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

object GogovamapasutoPart01 {
    fun GogovamapasutoObfVchihbkpormdcangvacrsz26SumOdds(nums: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV29 = chihbkpormdcangvacrszGogovamapasutoPartObfV29ShiftXor(51, 42) xor chihbkpormdcangvacrszGogovamapasutoPartObfV29ByteFold("fad4") xor chihbkpormdcangvacrszGogovamapasutoPartObfV29HashMix("c18ni") xor chihbkpormdcangvacrszGogovamapasutoPartObfV29SumOdds(intArrayOf(22, 25, 16))

  var acc = 53
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 6) % 391
  }
  return acc
}
}


/* obfuscation-batch:v27 */
private fun chihbkpormdcangvacrszGogovamapasutoPart01ObfV27SumOdds(nums: IntArray): Int {
  var acc = 46
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 239
  }
  return acc
}
private fun chihbkpormdcangvacrszGogovamapasutoPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 36) + 14
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v28 */
private fun chihbkpormdcangvacrszGogovamapasutoPartObfV28SumOdds(nums: IntArray): Int {
    var acc = 90
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 38) % 657
    }
    return acc
}
private fun chihbkpormdcangvacrszGogovamapasutoPartObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 27) + 11
    val x = ((n xor 37) shl 1) % span
    return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszGogovamapasutoPartObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 25) and 936
}

/* obfuscation-batch:v29 */
private fun chihbkpormdcangvacrszGogovamapasutoPartObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 105) and 1307
}
private fun chihbkpormdcangvacrszGogovamapasutoPartObfV29ByteFold(s: String): Int {
    var x = 5
    for (i in s.indices) x = (x + s[i].code * 9) and 41932
    return x
}
private fun chihbkpormdcangvacrszGogovamapasutoPartObfV29HashMix(s: String): Int {
    var h = 76
    for (i in s.indices) h = (h xor (s[i].code * 5)) % 629
    return h
}
private fun chihbkpormdcangvacrszGogovamapasutoPartObfV29SumOdds(nums: IntArray): Int {
    var acc = 41
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 12) % 160
    }
    return acc
}
