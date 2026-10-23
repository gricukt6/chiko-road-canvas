/* autosetup-split:v1 */
package com.chijkcotrcwdmcanveras3891

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object DomanexiqudPart01 {
    fun dirimazacavef(body: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV31 = chihbkpormdcangvacrszDomanexiqudPart01ObfV31SumOdds(intArrayOf(3, 2, 5)) xor chihbkpormdcangvacrszDomanexiqudPart01ObfV31ClampMod(60, 79) xor chihbkpormdcangvacrszDomanexiqudPart01ObfV31ShiftXor(78, 9) xor chihbkpormdcangvacrszDomanexiqudPart01ObfV31ByteFold("al")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV30 = chihbkpormdcangvacrszDomanexiqudPart01ObfV30SumOdds(intArrayOf(3, 10, 5)) xor chihbkpormdcangvacrszDomanexiqudPart01ObfV30ClampMod(12, 31) xor chihbkpormdcangvacrszDomanexiqudPart01ObfV30ShiftXor(62, 73) xor chihbkpormdcangvacrszDomanexiqudPart01ObfV30ByteFold("g1058")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV29 = chihbkpormdcangvacrszDomanexiqudPart01ObfV29ClampMod(36, 71)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV28 = chihbkpormdcangvacrszDomanexiqudPart01ObfV28ClampMod(3, 26) xor chihbkpormdcangvacrszDomanexiqudPart01ObfV28ShiftXor(77, 76) xor chihbkpormdcangvacrszDomanexiqudPart01ObfV28ByteFold("helm") xor chihbkpormdcangvacrszDomanexiqudPart01ObfV28HashMix("cf2")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV27 = chihbkpormdcangvacrszDomanexiqudPart01ObfV27ByteFold("2xw7") xor chihbkpormdcangvacrszDomanexiqudPart01ObfV27HashMix("c9v")

  @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV26 = DomanexiqudObfV26ClchihbkpormdcangvacrszampMod(33, 57) xor DomanexiqudObfV26ShichihbkpormdcangvacrszftXor(7, 66) xor DomanexchihbkpormdcangvacrsziqudObfV26ByteFold("y1mn") xor DomanexiqudObfV26HashchihbkpormdcangvacrszMix("hm95e")
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun DomanexiqudObfV26ClchihbkpormdcangvacrszampMod(n: Int, m: Int): Int {

  val span = (m % 53) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

    fun DomanexiqudObfV26ShichihbkpormdcangvacrszftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 221) and 3154
}

    fun DomanexchihbkpormdcangvacrsziqudObfV26ByteFold(s: String): Int {

  var x = 14
  for (i in s.indices) x = (x + s[i].code * 20) and 34409
  return x
}

    fun DomanexiqudObfV26HashchihbkpormdcangvacrszMix(s: String): Int {

  var h = 41
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 635
  return h
}
}


/* obfuscation-batch:v27 */
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV27ByteFold(s: String): Int {
  var x = 31
  for (i in s.indices) x = (x + s[i].code * 28) and 35023
  return x
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV27HashMix(s: String): Int {
  var h = 61
  for (i in s.indices) h = (h xor (s[i].code * 16)) % 372
  return h
}

/* obfuscation-batch:v28 */
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 42) + 7
    val x = ((n xor 235) shl 4) % span
    return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 201) and 5889
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV28ByteFold(s: String): Int {
    var x = 23
    for (i in s.indices) x = (x + s[i].code * 17) and 31116
    return x
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV28HashMix(s: String): Int {
    var h = 71
    for (i in s.indices) h = (h xor (s[i].code * 5)) % 208
    return h
}

/* obfuscation-batch:v29 */
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 66) + 9
    val x = ((n xor 210) shl 5) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v30 */
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV30SumOdds(nums: IntArray): Int {
    var acc = 62
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 5) % 309
    }
    return acc
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV30ClampMod(n: Int, m: Int): Int {
    val span = (m % 62) + 8
    val x = ((n xor 212) shl 7) % span
    return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV30ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 4) and 33938
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV30ByteFold(s: String): Int {
    var x = 23
    for (i in s.indices) x = (x + s[i].code * 9) and 56451
    return x
}

/* obfuscation-batch:v31 */
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV31SumOdds(nums: IntArray): Int {
    var acc = 66
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 29) % 107
    }
    return acc
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV31ClampMod(n: Int, m: Int): Int {
    val span = (m % 49) + 4
    val x = ((n xor 184) shl 5) % span
    return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV31ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 82) and 31477
}
private fun chihbkpormdcangvacrszDomanexiqudPart01ObfV31ByteFold(s: String): Int {
    var x = 79
    for (i in s.indices) x = (x + s[i].code * 4) and 53573
    return x
}
