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

object VidofecuqucuPart01 {
    fun quvilituzuhufe(): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV4 = chihbkpormdcangvacrszVidofecuqucuPart01ObfV4ByteFold("3ilg") xor chihbkpormdcangvacrszVidofecuqucuPart01ObfV4HashMix("kj6f47") xor chihbkpormdcangvacrszVidofecuqucuPart01ObfV4SumOdds(intArrayOf(7, 6, 9)) xor chihbkpormdcangvacrszVidofecuqucuPart01ObfV4ClampMod(16, 19)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV3 = chihbkpormdcangvacrszVidofecuqucuPart01ObfV3ClampMod(49, 48) xor chihbkpormdcangvacrszVidofecuqucuPart01ObfV3ShiftXor(75, 2)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVidofecuqucuPart01ObfV2ClampMod(51, 74) xor chihbkpormdcangvacrszVidofecuqucuPart01ObfV2ShiftXor(77, 44) xor chihbkpormdcangvacrszVidofecuqucuPart01ObfV2ByteFold("b47") xor chihbkpormdcangvacrszVidofecuqucuPart01ObfV2HashMix("905o1")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszVidofecuqucuPart01ObfV1HashMix("a7i") xor chihbkpormdcangvacrszVidofecuqucuPart01ObfV1SumOdds(intArrayOf(14, 25, 40)) xor chihbkpormdcangvacrszVidofecuqucuPart01ObfV1ClampMod(19, 26)
    val bytes = ByteArray(16)
    java.security.SecureRandom().nextBytes(bytes)
    val alphabet = "0123456789abcdef"
    val out = StringBuilder(bytes.size * 2)
    for (byte in bytes) {
        val v = byte.toInt() and 0xff
        out.append(alphabet[v ushr 4])
        out.append(alphabet[v and 0x0f])
    }
    return out.toString()
}
}

/* obfuscation-batch:v1 */
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV1HashMix(s: String): Int {
    var h = 79
    for (i in s.indices) h = (h xor (s[i].code * 8)) % 235
    return h
}
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV1SumOdds(nums: IntArray): Int {
    var acc = 3
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 30) % 458
    }
    return acc
}
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 46) + 5
    val x = ((n xor 35) shl 6) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v2 */
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 56) + 7
    val x = ((n xor 93) shl 3) % span
    return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 81) and 46901
}
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV2ByteFold(s: String): Int {
    var x = 46
    for (i in s.indices) x = (x + s[i].code * 28) and 6954
    return x
}
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV2HashMix(s: String): Int {
    var h = 28
    for (i in s.indices) h = (h xor (s[i].code * 4)) % 467
    return h
}

/* obfuscation-batch:v3 */
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV3ClampMod(n: Int, m: Int): Int {
    val span = (m % 46) + 8
    val x = ((n xor 103) shl 4) % span
    return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV3ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 5
    return (x xor 45) and 29778
}

/* obfuscation-batch:v4 */
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV4ByteFold(s: String): Int {
    var x = 50
    for (i in s.indices) x = (x + s[i].code * 11) and 17237
    return x
}
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV4HashMix(s: String): Int {
    var h = 26
    for (i in s.indices) h = (h xor (s[i].code * 5)) % 866
    return h
}
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV4SumOdds(nums: IntArray): Int {
    var acc = 52
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 28) % 267
    }
    return acc
}
private fun chihbkpormdcangvacrszVidofecuqucuPart01ObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 45) + 7
    val x = ((n xor 34) shl 5) % span
    return if (x < 0) x + span else x
}
