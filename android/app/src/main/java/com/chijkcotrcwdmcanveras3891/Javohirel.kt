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

class Javohirel(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszJavohirelObfV1HashMix("la96") xor chihbkpormdcangvacrszJavohirelObfV1SumOdds(intArrayOf(32, 19, 2))
        return "Rekuwinosozik"
    }

    @ReactMethod
    fun qofahegeci(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszJavohirelObfV1HashMix("la96") xor chihbkpormdcangvacrszJavohirelObfV1SumOdds(intArrayOf(32, 19, 2))
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane ushr 8
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 3045
        }
        dexLane = dexLane + 25080
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val timeoutExecutor = Executors.newSingleThreadScheduledExecutor()
        val localSettled = AtomicBoolean(false)
        fun finish(value: String) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszJavohirelObfV1HashMix("la96") xor chihbkpormdcangvacrszJavohirelObfV1SumOdds(intArrayOf(32, 19, 2))
            if (!localSettled.compareAndSet(false, true)) return
            timeoutExecutor.shutdownNow()
            promise.resolve(value)
        }
        timeoutExecutor.schedule({ finish("") }, 12, TimeUnit.SECONDS)
        val started = runCatching { turajamiha { value -> finish(value) } }
        if (started.isFailure) finish("")
    }

    private fun turajamiha(finish: (String) -> Unit) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszJavohirelObfV1HashMix("la96") xor chihbkpormdcangvacrszJavohirelObfV1SumOdds(intArrayOf(32, 19, 2))
        val manager = IntegrityManagerFactory.createStandard(reactApplicationContext.applicationContext)
        val prepareRequest = StandardIntegrityManager.PrepareIntegrityTokenRequest.builder()
            .setCloudProjectNumber(CLOUD_PROJECT_NUMBER)
            .build()
        manager.prepareIntegrityToken(prepareRequest)
            .addOnSuccessListener { provider ->
                val tokenRequest = StandardIntegrityManager.StandardIntegrityTokenRequest.builder()
                    .setRequestHash(nemuwefez())
                    .build()
                provider.request(tokenRequest)
                    .addOnSuccessListener { response -> finish(response.token() ?: "") }
                    .addOnFailureListener { finish("") }
            }
            .addOnFailureListener { finish("") }
    }

    private fun nemuwefez(): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszJavohirelObfV1HashMix("la96") xor chihbkpormdcangvacrszJavohirelObfV1SumOdds(intArrayOf(32, 19, 2))
        val alphabet = "0123456789abcdef"
        val rng = java.security.SecureRandom()
        val chars = CharArray(32)
        for (i in chars.indices) {
            chars[i] = alphabet[rng.nextInt(alphabet.length)]
        }
        return String(chars)
    }

    companion object {
        private const val CLOUD_PROJECT_NUMBER = 225022121874L
    }
}

/* obfuscation-batch:v1 */
private fun chihbkpormdcangvacrszJavohirelObfV1HashMix(s: String): Int {
    var h = 5
    for (i in s.indices) h = (h xor (s[i].code * 32)) % 370
    return h
}
private fun chihbkpormdcangvacrszJavohirelObfV1SumOdds(nums: IntArray): Int {
    var acc = 61
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 40) % 819
    }
    return acc
}
