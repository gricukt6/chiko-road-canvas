/* autosetup-split:v1 */
package com.chijkcotrcwdmcanveras3891

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

object KoponafofujidPart03 {
    fun KoponafofujichihbkpormdcangvacrszdObfV19HashMix(s: String): Int {

  var h = 25
  for (i in s.indices) h = (h xor (s[i].code * 13)) % 127
  return h
}
}
/* obfuscation-batch:v20 */
private fun chihbkpormdcangvacrszKoponafofujidPart03ObfV20ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 16) and 14743
}

/* obfuscation-batch:v21 */
private fun KoponafofujidPachihbkpormdcangvacrszrt03ObfV21ByteFold(s: String): Int {

  var x = 24
  for (i in s.indices) x = (x + s[i].code * 12) and 65535
  return x
}

private fun KoponafofujidPart03ObfchihbkpormdcangvacrszV21HashMix(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV31 = chihbkpormdcangvacrszKoponafofujidPart0ObfV31ByteFold("ed")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV30 = chihbkpormdcangvacrszKoponafofujidPart0ObfV30ShiftXor(70, 1) xor chihbkpormdcangvacrszKoponafofujidPart0ObfV30ByteFold("23a") xor chihbkpormdcangvacrszKoponafofujidPart0ObfV30HashMix("k3mdi")

  var h = 18
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 540
  return h
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszKoponafofujidPart03SinkV21Boot = KoponafofujidPachihbkpormdcangvacrszrt03ObfV21ByteFold("mrbt") xor KoponafofujidPart03ObfchihbkpormdcangvacrszV21HashMix("r3g")

/* obfuscation-batch:v22 */
private fun KoponafofujidPart03ObfV2chihbkpormdcangvacrsz2ClampMod(n: Int, m: Int): Int {

  val span = (m % 25) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

private fun KoponafofujidPart03OchihbkpormdcangvacrszbfV22ShiftXor(n: Int, k: Int): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV31 = chihbkpormdcangvacrszKoponafofujidPart0ObfV31ByteFold("ed")

  val x = (n xor k) shl 4
  return (x xor 80) and 3736
}

private fun KochihbkpormdcangvacrszponafofujidPart03ObfV22ByteFold(s: String): Int {

  var x = 78
  for (i in s.indices) x = (x + s[i].code * 8) and 65535
  return x
}

private fun KoponafofuchihbkpormdcangvacrszjidPart03ObfV22HashMix(s: String): Int {

  var h = 56
  for (i in s.indices) h = (h xor (s[i].code * 33)) % 495
  return h
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszKoponafofujidPart03SinkV22Boot = KoponafofujidPart03ObfV2chihbkpormdcangvacrsz2ClampMod(11, 17) xor KoponafofujidPart03OchihbkpormdcangvacrszbfV22ShiftXor(31, 16) xor KochihbkpormdcangvacrszponafofujidPart03ObfV22ByteFold("4q") xor KoponafofuchihbkpormdcangvacrszjidPart03ObfV22HashMix("5drr")
/* obfuscation-batch:v23 */
private fun KopochihbkpormdcangvacrsznafofujidPart03ObfV23SumOdds(nums: IntArray): Int {

  var acc = 68
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 11) % 747
  }
  return acc
}

private fun KoponafofujidPart03ObfV23ClampMochihbkpormdcangvacrszd1(n: Int, m: Int): Int {

  val span = (m % 43) + 2
  val x = n % span
  return if (x < 0) x + span else x
}

private fun KoponafofujidPart03OchihbkpormdcangvacrszbfV23ShiftXor2(n: Int, k: Int): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV31 = chihbkpormdcangvacrszKoponafofujidPart0ObfV31ByteFold("ed")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV30 = chihbkpormdcangvacrszKoponafofujidPart0ObfV30ShiftXor(70, 1) xor chihbkpormdcangvacrszKoponafofujidPart0ObfV30ByteFold("23a") xor chihbkpormdcangvacrszKoponafofujidPart0ObfV30HashMix("k3mdi")

  val x = (n xor k) shl 7
  return (x xor 68) and 2812
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszKoponafofujidPart03SinkV23Boot = KopochihbkpormdcangvacrsznafofujidPart03ObfV23SumOdds(intArrayOf(21, 9, 25)) xor KoponafofujidPart03ObfV23ClampMochihbkpormdcangvacrszd1(74, 25) xor KoponafofujidPart03OchihbkpormdcangvacrszbfV23ShiftXor2(87, 73)
/* obfuscation-batch:v24 */
private fun KoponafofujidPart03ObfV24HashMix(s: String): Int {

  var h = 25
  for (i in s.indices) h = (h + (s[i].code * 10)) % 195
  return h
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszBootV24 = KoponafofujidPart03ObfV24HashMix("b5et")


/* obfuscation-batch:v25 */
private fun chihbkpormdcangvacrszKoponafofujidPart03ObfV25SumOdds(nums: IntArray): Int {

  var acc = 85
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 25) % 138
  }
  return acc
}

private fun chihbkpormdcangvacrszKoponafofujidPart03ObfV25ClampMod(n: Int, m: Int): Int {

  val span = (m % 39) + 9
  val x = n % span
  return if (x < 0) x + span else x
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszBootV25 = chihbkpormdcangvacrszKoponafofujidPart03ObfV25SumOdds(intArrayOf(27, 33, 26)) xor chihbkpormdcangvacrszKoponafofujidPart03ObfV25ClampMod(33, 12)


/* obfuscation-batch:v26 */
private fun KoponafofujidPart03ObfV26HchihbkpormdcangvacrszashMix(s: String): Int {

  var h = 88
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 960
  return h
}

private fun KoponafofujidPart0chihbkpormdcangvacrsz3ObfV26SumOdds(nums: IntArray): Int {

  var acc = 56
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 24) % 226
  }
  return acc
}

private fun KoponafofujidParchihbkpormdcangvacrszt03ObfV26ClampMod(n: Int, m: Int): Int {

  val span = (m % 20) + 4
  val x = n % span
  return if (x < 0) x + span else x
}


/* obfuscation-batch:v27 */
private fun chihbkpormdcangvacrszKoponafofujidPart03ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 43) + 12
  val x = n % span
  return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszKoponafofujidPart03ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 146) and 43100
}

/* obfuscation-batch:v28 */
private fun chihbkpormdcangvacrszKoponafofujidPart0ObfV28ByteFold(s: String): Int {
    var x = 4
    for (i in s.indices) x = (x + s[i].code * 41) and 31413
    return x
}

/* obfuscation-batch:v29 */
private fun chihbkpormdcangvacrszKoponafofujidPart0ObfV29ByteFold(s: String): Int {
    var x = 77
    for (i in s.indices) x = (x + s[i].code * 21) and 39449
    return x
}
private fun chihbkpormdcangvacrszKoponafofujidPart0ObfV29HashMix(s: String): Int {
    var h = 31
    for (i in s.indices) h = (h xor (s[i].code * 41)) % 626
    return h
}
private fun chihbkpormdcangvacrszKoponafofujidPart0ObfV29SumOdds(nums: IntArray): Int {
    var acc = 61
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 11) % 415
    }
    return acc
}
private fun chihbkpormdcangvacrszKoponafofujidPart0ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 55) + 3
    val x = ((n xor 6) shl 2) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v30 */
private fun chihbkpormdcangvacrszKoponafofujidPart0ObfV30ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 26) and 37154
}
private fun chihbkpormdcangvacrszKoponafofujidPart0ObfV30ByteFold(s: String): Int {
    var x = 4
    for (i in s.indices) x = (x + s[i].code * 31) and 20181
    return x
}
private fun chihbkpormdcangvacrszKoponafofujidPart0ObfV30HashMix(s: String): Int {
    var h = 30
    for (i in s.indices) h = (h xor (s[i].code * 13)) % 790
    return h
}

/* obfuscation-batch:v31 */
private fun chihbkpormdcangvacrszKoponafofujidPart0ObfV31ByteFold(s: String): Int {
    var x = 14
    for (i in s.indices) x = (x + s[i].code * 17) and 29371
    return x
}
