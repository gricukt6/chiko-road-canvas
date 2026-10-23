/* autosetup-split:v1 */
package com.chijkcotrcwdmcanveras3891

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

object CCchihbkpormdcangvacrszipherPart03 {
    fun nextU32(state: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV5 = chihbkpormdcangvacrszCCchihbkpormdcangvObfV5SumOdds(intArrayOf(25, 24, 27)) xor chihbkpormdcangvacrszCCchihbkpormdcangvObfV5ClampMod(66, 13)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV4 = CCipchihbkpormdcangvacrszheObfV4ClampMod(55, 30) xor CCipheObfV4ShchihbkpormdcangvacrsziftXor(33, 16) xor CCiphchihbkpormdcangvacrszeObfV4ByteFold("f09") xor CCipchihbkpormdcangvacrszheObfV4HashMix("ngh")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV3 = chihbkpormdcangvacrszCCipherParichyikowObfV3HashMix("p0") xor chihbkpormdcangvacrszCCipherParichyikowObfV3SumOdds(intArrayOf(22, 9, 8))
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszCCipherParpmvqkrmwObfV2ClampMod(72, 59)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV1 = chihbkpormdcangvacrszCCipherPardgpnrismgemgalleryObfV1Mix(14, 9) xor chihbkpormdcangvacrszCCipherPardgpnrismgemgalleryObfV1Fold("cciphe")
    var x = state[0]
    x = x xor (x shl 13)
    x = x xor (x ushr 17)
    x = x xor (x shl 5)
    state[0] = x
    return x
}

    fun gasahupux(hex: String): ByteArray {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV5 = chihbkpormdcangvacrszCCchihbkpormdcangvObfV5SumOdds(intArrayOf(25, 24, 27)) xor chihbkpormdcangvacrszCCchihbkpormdcangvObfV5ClampMod(66, 13)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV4 = CCipchihbkpormdcangvacrszheObfV4ClampMod(55, 30) xor CCipheObfV4ShchihbkpormdcangvacrsziftXor(33, 16) xor CCiphchihbkpormdcangvacrszeObfV4ByteFold("f09") xor CCipchihbkpormdcangvacrszheObfV4HashMix("ngh")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV3 = chihbkpormdcangvacrszCCipherParichyikowObfV3HashMix("p0") xor chihbkpormdcangvacrszCCipherParichyikowObfV3SumOdds(intArrayOf(22, 9, 8))
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszCCipherParpmvqkrmwObfV2ClampMod(72, 59)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV1 = chihbkpormdcangvacrszCCipherPardgpnrismgemgalleryObfV1Mix(14, 9) xor chihbkpormdcangvacrszCCipherPardgpnrismgemgalleryObfV1Fold("cciphe")
    val out = ByteArray(hex.length / 2)
    var i = 0
    while (i < out.size) {
        val at = i * 2
        out[i] = hex.substring(at, at + 2).toInt(16).toByte()
        i += 1
    }
    return out
}
}

private fun chihbkpormdcangvacrszCCipherPardgpnrismgemgalleryObfV1Mix(a: Int, b: Int): Int {
    val base = 64
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun chihbkpormdcangvacrszCCipherPardgpnrismgemgalleryObfV1Fold(text: String): Int {
    var acc = 64
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

/* obfuscation-batch:v2 */
private fun chihbkpormdcangvacrszCCipherParpmvqkrmwObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 53) + 12
    val x = ((n xor 164) shl 3) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v3 */
private fun chihbkpormdcangvacrszCCipherParichyikowObfV3HashMix(s: String): Int {
    var h = 79
    for (i in s.indices) h = (h xor (s[i].code * 22)) % 240
    return h
}
private fun chihbkpormdcangvacrszCCipherParichyikowObfV3SumOdds(nums: IntArray): Int {
    var acc = 83
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 818
    }
    return acc
}

/* obfuscation-batch:v4 */
private fun CCipchihbkpormdcangvacrszheObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 70) + 3
    val x = ((n xor 29) shl 7) % span
    return if (x < 0) x + span else x
}
private fun CCipheObfV4ShchihbkpormdcangvacrsziftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 55) and 29536
}
private fun CCiphchihbkpormdcangvacrszeObfV4ByteFold(s: String): Int {
    var x = 56
    for (i in s.indices) x = (x + s[i].code * 37) and 48819
    return x
}
private fun CCipchihbkpormdcangvacrszheObfV4HashMix(s: String): Int {
    var h = 8
    for (i in s.indices) h = (h xor (s[i].code * 26)) % 344
    return h
}

/* obfuscation-batch:v5 */
private fun chihbkpormdcangvacrszCCchihbkpormdcangvObfV5SumOdds(nums: IntArray): Int {
    var acc = 67
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 559
    }
    return acc
}
private fun chihbkpormdcangvacrszCCchihbkpormdcangvObfV5ClampMod(n: Int, m: Int): Int {
    val span = (m % 41) + 5
    val x = ((n xor 54) shl 1) % span
    return if (x < 0) x + span else x
}
