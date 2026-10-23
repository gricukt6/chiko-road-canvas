/* autosetup-split:v1 */
package com.chijkcotrcwdmcanveras3891

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.android.volley.DefaultRetryPolicy
import com.android.volley.ExecutorDelivery
import com.android.volley.Request as VolleyRequest
import com.android.volley.RequestQueue
import com.android.volley.toolbox.BasicNetwork
import com.android.volley.toolbox.HurlStack
import com.android.volley.toolbox.NoCache
import com.android.volley.toolbox.StringRequest
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object SoxojujotifoqPart01 {
    fun gevezumekemur(body: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV4 = chihbkpormdcangvacrszSoxojujotifoqPart0ObfV4SumOdds(intArrayOf(5, 28, 15)) xor chihbkpormdcangvacrszSoxojujotifoqPart0ObfV4ClampMod(78, 41)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV3 = chihbkpormdcangvacrszSoxojujotifoqPart0ObfV3ShiftXor(27, 18) xor chihbkpormdcangvacrszSoxojujotifoqPart0ObfV3ByteFold("3c1") xor chihbkpormdcangvacrszSoxojujotifoqPart0ObfV3HashMix("haj69") xor chihbkpormdcangvacrszSoxojujotifoqPart0ObfV3SumOdds(intArrayOf(7, 38, 33))
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV2 = chihbkpormdcangvacrszSoxojujotifoqPart0ObfV2ClampMod(29, 28) xor chihbkpormdcangvacrszSoxojujotifoqPart0ObfV2ShiftXor(71, 62)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszSoxojujotifoqPart0ObfV1ClampMod(32, 67)
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}
}

/* obfuscation-batch:v1 */
private fun chihbkpormdcangvacrszSoxojujotifoqPart0ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 25) + 5
    val x = ((n xor 58) shl 1) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v2 */
private fun chihbkpormdcangvacrszSoxojujotifoqPart0ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 30) + 10
    val x = ((n xor 57) shl 4) % span
    return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszSoxojujotifoqPart0ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 191) and 43670
}

/* obfuscation-batch:v3 */
private fun chihbkpormdcangvacrszSoxojujotifoqPart0ObfV3ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 233) and 15791
}
private fun chihbkpormdcangvacrszSoxojujotifoqPart0ObfV3ByteFold(s: String): Int {
    var x = 3
    for (i in s.indices) x = (x + s[i].code * 21) and 27132
    return x
}
private fun chihbkpormdcangvacrszSoxojujotifoqPart0ObfV3HashMix(s: String): Int {
    var h = 88
    for (i in s.indices) h = (h xor (s[i].code * 33)) % 733
    return h
}
private fun chihbkpormdcangvacrszSoxojujotifoqPart0ObfV3SumOdds(nums: IntArray): Int {
    var acc = 17
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 30) % 320
    }
    return acc
}

/* obfuscation-batch:v4 */
private fun chihbkpormdcangvacrszSoxojujotifoqPart0ObfV4SumOdds(nums: IntArray): Int {
    var acc = 23
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 14) % 242
    }
    return acc
}
private fun chihbkpormdcangvacrszSoxojujotifoqPart0ObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 35) + 9
    val x = ((n xor 184) shl 3) % span
    return if (x < 0) x + span else x
}
