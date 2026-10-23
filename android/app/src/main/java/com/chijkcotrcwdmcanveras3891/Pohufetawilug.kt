package com.chijkcotrcwdmcanveras3891

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Pohufetawilug(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszPohufetawilugObfV1ShiftXor(9, 8) xor chihbkpormdcangvacrszPohufetawilugObfV1ByteFold("palmp")
        return "Jutodezegik"
    }

    @ReactMethod
    fun fatewaqehavas(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszPohufetawilugObfV1ShiftXor(9, 8) xor chihbkpormdcangvacrszPohufetawilugObfV1ByteFold("palmp")
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane + 31705
        dexLane = dexLane xor 24966
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 374
            1 -> dexLane + 3658
            else -> dexLane + 463
        }
        dexLane = dexLane and 22157
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching { kilogoxucizar(reactApplicationContext) }.getOrDefault("")
        promise.resolve(dexValue)
    }

    private fun kilogoxucizar(context: Context): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszPohufetawilugObfV1ShiftXor(9, 8) xor chihbkpormdcangvacrszPohufetawilugObfV1ByteFold("palmp")
        val loaded = WebSettings.getDefaultUserAgent(context)
        return if (loaded.isNullOrEmpty()) "" else loaded
    }
}

/* obfuscation-batch:v1 */
private fun chihbkpormdcangvacrszPohufetawilugObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 189) and 58063
}
private fun chihbkpormdcangvacrszPohufetawilugObfV1ByteFold(s: String): Int {
    var x = 13
    for (i in s.indices) x = (x + s[i].code * 26) and 36648
    return x
}
