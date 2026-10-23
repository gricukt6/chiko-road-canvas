/* cf-cipher:v1 */
package com.chijkcotrcwdmcanveras3891

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

class Vipezuwomahu(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        return "Vipezuwomahu"
    }

    private val keyString = "aHgW4cerv5bPYCGUtjaJFWeQVyUM"
    @Suppress("unused")
    private val ivString = "LijPonHnAmcCEaEDZ3"
    private val keyBytes = keyString.toByteArray(StandardCharsets.UTF_8)

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun fagibuhetuhuw(plain: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        return try {
            lozalepol(wapuzisagibeq(plain.toByteArray(StandardCharsets.UTF_8)))
        } catch (_: Exception) {
            ""
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun fumocekagusa(hex: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        return try {
            val normalized = hex.trim()
            if (normalized.isEmpty() || normalized.length % 2 != 0) return ""
            String(wapuzisagibeq(repaqicehovep(normalized)), StandardCharsets.UTF_8)
        } catch (_: Exception) {
            ""
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun wihidexepokeso(hex: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        return try {
            val normalized = hex.trim()
            if (normalized.isEmpty() || normalized.length % 2 != 0) return ""
            lozalepol(wapuzisagibeq(repaqicehovep(normalized)))
        } catch (_: Exception) {
            ""
        }
    }

    private class Wheel(val pins: IntArray, var pos: Int) {
        val len: Int = pins.size
    }

    private fun wapuzisagibeq(data: ByteArray): ByteArray {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        val st = intArrayOf(mokemofoputod(keyBytes))
        val chi = CHI_LENS.map { towepaquk(st, it) }
        val psi = PSI_LENS.map { towepaquk(st, it) }
        val mu = MU_LENS.map { towepaquk(st, it) }
        val out = ByteArray(data.size)
        for (i in data.indices) {
            var chiB = 0
            var psiB = 0
            for (b in 0 until 8) {
                chiB = chiB or (chi[b].pins[chi[b].pos] shl b)
                psiB = psiB or (psi[b].pins[psi[b].pos] shl b)
            }
            out[i] = (data[i].toInt() xor chiB xor psiB).toByte()
            for (b in 0 until 8) {
                chi[b].pos = (chi[b].pos + 1) % chi[b].len
            }
            val mu0 = mu[0].pins[mu[0].pos]
            mu[0].pos = (mu[0].pos + 1) % mu[0].len
            if (mu0 != 0) {
                mu[1].pos = (mu[1].pos + 1) % mu[1].len
            }
            if (mu[1].pins[mu[1].pos] != 0) {
                for (b in 0 until 8) {
                    psi[b].pos = (psi[b].pos + 1) % psi[b].len
                }
            }
        }
        return out
    }

    private fun mokemofoputod(bytes: ByteArray): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        var s = 0x811C9DC5.toInt()
        for (b in bytes) {
            s = s xor (b.toInt() and 0xFF)
            s *= 16777619
        }
        if (bytes.isEmpty()) s = s xor 0xA5A5A5A5.toInt()
        return s
    }

    private fun wakazisahiki(state: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        var x = state[0]
        x = x xor (x shl 13)
        x = x xor (x ushr 17)
        x = x xor (x shl 5)
        state[0] = x
        return x
    }

    private fun towepaquk(st: IntArray, len: Int): Wheel {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        val pins = IntArray(len)
        var ones = 0
        for (i in 0 until len) {
            pins[i] = wakazisahiki(st) and 1
            ones += pins[i]
        }
        if (ones == 0) pins[0] = 1
        if (ones == len) pins[0] = 0
        val pos = kunaqudas(wakazisahiki(st), len)
        return Wheel(pins, pos)
    }

    private fun kunaqudas(value: Int, len: Int): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        return ((value.toLong() and 0xFFFFFFFFL) % len.toLong()).toInt()
    }

    private fun repaqicehovep(hex: String): ByteArray {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        val out = ByteArray(hex.length / 2)
        var i = 0
        while (i < out.size) {
            val at = i * 2
            out[i] = hex.substring(at, at + 2).toInt(16).toByte()
            i += 1
        }
        return out
    }

    private fun lozalepol(bytes: ByteArray): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold("k78")
        val hex = "0123456789ABCDEF"
        val chars = CharArray(bytes.size * 2)
        for (i in bytes.indices) {
            val v = bytes[i].toInt() and 0xFF
            chars[i * 2] = hex[v ushr 4]
            chars[i * 2 + 1] = hex[v and 0x0F]
        }
        return String(chars)
    }

    companion object {
        private val CHI_LENS = intArrayOf(41, 31, 29, 26, 23, 43, 47, 37)
        private val PSI_LENS = intArrayOf(43, 47, 51, 53, 59, 61, 67, 71)
        private val MU_LENS = intArrayOf(61, 37)
    }
}

/* obfuscation-batch:v2 */
private fun chihbkpormdcangvacrszVipezuwomahuObfV2ByteFold(s: String): Int {
    var x = 23
    for (i in s.indices) x = (x + s[i].code * 33) and 56640
    return x
}
