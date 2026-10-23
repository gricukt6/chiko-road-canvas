/* autosetup-split:v1 */
package com.chijkcotrcwdmcanveras3891

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

object HefokorosenePart01 {
    fun chihbkpormdcangvacrszHefokoroseneObfV17HashMix(s: String): Int {

  var h = 83
  for (i in s.indices) h = (h xor (s[i].code * 32)) % 636
  return h
}

    fun chihbkpormdcangvacrszHefokoroseneObfV17ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 172) and 24159
}
}
/* obfuscation-batch:v18 */
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV18HashMix(s: String): Int {

  var h = 75
  for (i in s.indices) h = (h xor (s[i].code * 19)) % 303
  return h
}

private fun chihbkpormdcangvacrszHefokorosenePart01ObfV18SumOdds(nums: IntArray): Int {

  var acc = 7
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 19) % 233
  }
  return acc
}

private fun chihbkpormdcangvacrszHefokorosenePart01ObfV18ClampMod(n: Int, m: Int): Int {

  val span = (m % 7) + 2
  val x = n % span
  return if (x < 0) x + span else x
}
/* obfuscation-batch:v19 */
private fun HefokorosenePart01ObfV19BychihbkpormdcangvacrszteFold(s: String): Int {

  var x = 48
  for (i in s.indices) x = (x + s[i].code * 9) xor 171
  return x and 55823
}
/* obfuscation-batch:v20 */
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV20ByteFold(s: String): Int {

  var x = 68
  for (i in s.indices) x = (x + s[i].code * 25) xor 209
  return x and 47798
}

private fun chihbkpormdcangvacrszHefokorosenePart01ObfV20HashMix(s: String): Int {

  var h = 56
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 333
  return h
}

private fun chihbkpormdcangvacrszHefokorosenePart01ObfV20SumOdds(nums: IntArray): Int {

  var acc = 31
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 15) % 786
  }
  return acc
}

private fun chihbkpormdcangvacrszHefokorosenePart01ObfV20ClampMod(n: Int, m: Int): Int {

  val span = (m % 33) + 1
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun HefokorochihbkpormdcangvacrszsenePart01ObfV21ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 6
  return (x xor 157) and 18262
}

private fun HechihbkpormdcangvacrszfokorosenePart01ObfV21ByteFold(s: String): Int {

  var x = 55
  for (i in s.indices) x = (x + s[i].code * 13) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszHefokorosenePart01SinkV21Boot = HefokorochihbkpormdcangvacrszsenePart01ObfV21ShiftXor(41, 60) xor HechihbkpormdcangvacrszfokorosenePart01ObfV21ByteFold("wh2")

/* obfuscation-batch:v22 */
private fun HefokorosenePart01ObfV22ShiftXchihbkpormdcangvacrszor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 212) and 43072
}

private fun HefokorosenePart01ObfV22BytchihbkpormdcangvacrszeFold(s: String): Int {

  var x = 87
  for (i in s.indices) x = (x + s[i].code * 37) and 65535
  return x
}

private fun HefokorosenePachihbkpormdcangvacrszrt01ObfV22HashMix(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV30 = chihbkpormdcangvacrszHefokorosenePart01ObfV30ClampMod(74, 37) xor chihbkpormdcangvacrszHefokorosenePart01ObfV30ShiftXor(12, 15) xor chihbkpormdcangvacrszHefokorosenePart01ObfV30ByteFold("clm")

  var h = 89
  for (i in s.indices) h = (h xor (s[i].code * 41)) % 552
  return h
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszHefokorosenePart01SinkV22Boot = HefokorosenePart01ObfV22ShiftXchihbkpormdcangvacrszor(11, 8) xor HefokorosenePart01ObfV22BytchihbkpormdcangvacrszeFold("se") xor HefokorosenePachihbkpormdcangvacrszrt01ObfV22HashMix("ffh")
/* obfuscation-batch:v23 */
private fun HefochihbkpormdcangvacrszkorosenePart01ObfV23ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 54) and 16922
}

private fun HefokorosenePart01ObfV23ByteFold1chihbkpormdcangvacrsz(s: String): Int {

  var x = 62
  for (i in s.indices) x = (x + s[i].code * 17) and 2046
  return x
}

private fun HefokorosenePachihbkpormdcangvacrszrt01ObfV23HashMix2(s: String): Int {

  var h = 71
  for (i in s.indices) h = (h xor (s[i].code * 30)) % 516
  return h
}

private fun HefokorosenePart01ObfV23SumOddchihbkpormdcangvacrszs3(nums: IntArray): Int {

  var acc = 28
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 19) % 400
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszHefokorosenePart01SinkV23Boot = HefochihbkpormdcangvacrszkorosenePart01ObfV23ShiftXor(50, 50) xor HefokorosenePart01ObfV23ByteFold1chihbkpormdcangvacrsz("2n3") xor HefokorosenePachihbkpormdcangvacrszrt01ObfV23HashMix2("9s") xor HefokorosenePart01ObfV23SumOddchihbkpormdcangvacrszs3(intArrayOf(4, 21, 9))
/* obfuscation-batch:v24 */
private fun HefokorosenePart01ObfV24SumOdds(nums: IntArray): Int {

  var acc = 32
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 5) % 758
  }
  return acc
}

private fun HefokorosenePart01ObfV24ClampMod(n: Int, m: Int): Int {

  val span = (m % 46) + 7
  val x = n % span
  return if (x < 0) x + span else x
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszBootV24 = HefokorosenePart01ObfV24SumOdds(intArrayOf(44, 35, 11)) xor HefokorosenePart01ObfV24ClampMod(15, 64)


/* obfuscation-batch:v25 */
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 40) and 8962
}

private fun chihbkpormdcangvacrszHefokorosenePart01ObfV25ByteFold(s: String): Int {

  var x = 71
  for (i in s.indices) x = (x + s[i].code * 38) and 29172
  return x
}

private fun chihbkpormdcangvacrszHefokorosenePart01ObfV25HashMix(s: String): Int {

  var h = 64
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 812
  return h
}

private fun chihbkpormdcangvacrszHefokorosenePart01ObfV25SumOdds(nums: IntArray): Int {

  var acc = 23
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 26) % 455
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszBootV25 = chihbkpormdcangvacrszHefokorosenePart01ObfV25ShiftXor(42, 3) xor chihbkpormdcangvacrszHefokorosenePart01ObfV25ByteFold("v7") xor chihbkpormdcangvacrszHefokorosenePart01ObfV25HashMix("w8") xor chihbkpormdcangvacrszHefokorosenePart01ObfV25SumOdds(intArrayOf(22, 29, 9))


/* obfuscation-batch:v26 */
private fun HefokorosenePchihbkpormdcangvacrszart01ObfV26ClampMod(n: Int, m: Int): Int {

  val span = (m % 43) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

private fun HefokorosenePart0chihbkpormdcangvacrsz1ObfV26ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 6
  return (x xor 167) and 53176
}

private fun HefokorosenechihbkpormdcangvacrszPart01ObfV26ByteFold(s: String): Int {

  var x = 64
  for (i in s.indices) x = (x + s[i].code * 47) and 3113
  return x
}


/* obfuscation-batch:v27 */
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 37) + 6
  val x = n % span
  return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 137) and 56255
}

/* obfuscation-batch:v28 */
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV28ByteFold(s: String): Int {
    var x = 30
    for (i in s.indices) x = (x + s[i].code * 17) and 28977
    return x
}

/* obfuscation-batch:v29 */
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 199) and 31773
}
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV29ByteFold(s: String): Int {
    var x = 13
    for (i in s.indices) x = (x + s[i].code * 3) and 23788
    return x
}
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV29HashMix(s: String): Int {
    var h = 75
    for (i in s.indices) h = (h xor (s[i].code * 10)) % 384
    return h
}
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 21
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 11) % 640
    }
    return acc
}

/* obfuscation-batch:v30 */
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV30ClampMod(n: Int, m: Int): Int {
    val span = (m % 56) + 2
    val x = ((n xor 232) shl 1) % span
    return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV30ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 54) and 42623
}
private fun chihbkpormdcangvacrszHefokorosenePart01ObfV30ByteFold(s: String): Int {
    var x = 4
    for (i in s.indices) x = (x + s[i].code * 10) and 50388
    return x
}
