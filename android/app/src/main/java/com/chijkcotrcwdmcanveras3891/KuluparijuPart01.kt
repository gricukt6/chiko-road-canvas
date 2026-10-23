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

object KuluparijuPart01 {
    fun jixinamajej(body: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV3 = chihbkpormdcangvacrszKuluparijuPart01ObfV3ShiftXor(57, 24) xor chihbkpormdcangvacrszKuluparijuPart01ObfV3ByteFold("nkng")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszKuluparijuPart01ObfV2ByteFold("94") xor chihbkpormdcangvacrszKuluparijuPart01ObfV2HashMix("op2")
    @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszKuluparijuObfV1ClampMod(51, 42) xor chihbkpormdcangvacrszKuluparijuObfV1ShiftXor(13, 76) xor chihbkpormdcangvacrszKuluparijuObfV1ByteFold("h0poh8") xor chihbkpormdcangvacrszKuluparijuObfV1HashMix("mbgdip")
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun chihbkpormdcangvacrszKuluparijuObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 23) + 7
    val x = ((n xor 247) shl 2) % span
    return if (x < 0) x + span else x
}

    fun chihbkpormdcangvacrszKuluparijuObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 183) and 20155
}

    fun chihbkpormdcangvacrszKuluparijuObfV1ByteFold(s: String): Int {
    var x = 51
    for (i in s.indices) x = (x + s[i].code * 28) and 17379
    return x
}

    fun chihbkpormdcangvacrszKuluparijuObfV1HashMix(s: String): Int {
    var h = 90
    for (i in s.indices) h = (h xor (s[i].code * 6)) % 256
    return h
}
}

/* obfuscation-batch:v2 */
private fun chihbkpormdcangvacrszKuluparijuPart01ObfV2ByteFold(s: String): Int {
    var x = 36
    for (i in s.indices) x = (x + s[i].code * 28) and 50594
    return x
}
private fun chihbkpormdcangvacrszKuluparijuPart01ObfV2HashMix(s: String): Int {
    var h = 75
    for (i in s.indices) h = (h xor (s[i].code * 24)) % 382
    return h
}

/* obfuscation-batch:v3 */
private fun chihbkpormdcangvacrszKuluparijuPart01ObfV3ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 193) and 28393
}
private fun chihbkpormdcangvacrszKuluparijuPart01ObfV3ByteFold(s: String): Int {
    var x = 22
    for (i in s.indices) x = (x + s[i].code * 27) and 8793
    return x
}
