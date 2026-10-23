/* net-stack:v1 volley+moshi */
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
import com.squareup.moshi.JsonReader
import okio.Buffer

class Movoqijilukave(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszMovoqijilukaveObfV1ByteFold("lk5") xor chihbkpormdcangvacrszMovoqijilukaveObfV1HashMix("7ab") xor chihbkpormdcangvacrszMovoqijilukaveObfV1SumOdds(intArrayOf(11, 10, 5)) xor chihbkpormdcangvacrszMovoqijilukaveObfV1ClampMod(4, 23)
        return "Salewacop"
    }

    @ReactMethod
    fun zevutavemuxi(url: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszMovoqijilukaveObfV1ByteFold("lk5") xor chihbkpormdcangvacrszMovoqijilukaveObfV1HashMix("7ab") xor chihbkpormdcangvacrszMovoqijilukaveObfV1SumOdds(intArrayOf(11, 10, 5)) xor chihbkpormdcangvacrszMovoqijilukaveObfV1ClampMod(4, 23)
        val callbackExecutor = Executors.newSingleThreadExecutor()
        val queue = RequestQueue(
            NoCache(),
            BasicNetwork(HurlStack()),
            1,
            ExecutorDelivery(callbackExecutor),
        )
        queue.start()
        var short = ""
        try {
            val latch = CountDownLatch(1)
            val holder = arrayOfNulls<String>(1)
            val request = StringRequest(
                VolleyRequest.Method.GET,
                url,
                { body ->
                    holder[0] = body
                    latch.countDown()
                },
                { _ ->
                    latch.countDown()
                },
            )
            request.setShouldCache(false)
            request.retryPolicy = DefaultRetryPolicy(8000, 0, 1f)
            queue.add(request)
            if (latch.await(8, TimeUnit.SECONDS)) {
                val body = holder[0]
                if (body != null) short = kinaxosoho(body)
            } else {
                request.cancel()
            }
        } catch (e: Exception) {
            short = ""
        } finally {
            queue.stop()
            callbackExecutor.shutdownNow()
        }
        promise.resolve(short)
    }

    private fun kinaxosoho(body: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszMovoqijilukaveObfV1ByteFold("lk5") xor chihbkpormdcangvacrszMovoqijilukaveObfV1HashMix("7ab") xor chihbkpormdcangvacrszMovoqijilukaveObfV1SumOdds(intArrayOf(11, 10, 5)) xor chihbkpormdcangvacrszMovoqijilukaveObfV1ClampMod(4, 23)
        val count = JsonReader.of(Buffer().writeUtf8(body)).use { reader ->
            var tokens = 0
            while (reader.peek() != JsonReader.Token.END_DOCUMENT) {
                when (reader.peek()) {
                    JsonReader.Token.BEGIN_OBJECT -> {
                        reader.beginObject()
                        tokens += 1
                    }
                    JsonReader.Token.END_OBJECT -> {
                        reader.endObject()
                        tokens += 1
                    }
                    JsonReader.Token.BEGIN_ARRAY -> {
                        reader.beginArray()
                        tokens += 1
                    }
                    JsonReader.Token.END_ARRAY -> {
                        reader.endArray()
                        tokens += 1
                    }
                    JsonReader.Token.NAME -> {
                        reader.nextName()
                        tokens += 1
                    }
                    JsonReader.Token.STRING -> {
                        reader.nextString()
                        tokens += 1
                    }
                    JsonReader.Token.NUMBER -> {
                        reader.nextDouble()
                        tokens += 1
                    }
                    JsonReader.Token.BOOLEAN -> {
                        reader.nextBoolean()
                        tokens += 1
                    }
                    JsonReader.Token.NULL -> {
                        reader.nextNull<Any>()
                        tokens += 1
                    }
                    else -> {
                        reader.skipValue()
                        tokens += 1
                    }
                }
            }
            tokens
        }
        return count.toString()
    }
}

/* obfuscation-batch:v1 */
private fun chihbkpormdcangvacrszMovoqijilukaveObfV1ByteFold(s: String): Int {
    var x = 86
    for (i in s.indices) x = (x + s[i].code * 15) and 43219
    return x
}
private fun chihbkpormdcangvacrszMovoqijilukaveObfV1HashMix(s: String): Int {
    var h = 50
    for (i in s.indices) h = (h xor (s[i].code * 36)) % 173
    return h
}
private fun chihbkpormdcangvacrszMovoqijilukaveObfV1SumOdds(nums: IntArray): Int {
    var acc = 9
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 236
    }
    return acc
}
private fun chihbkpormdcangvacrszMovoqijilukaveObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 66) + 4
    val x = ((n xor 212) shl 7) % span
    return if (x < 0) x + span else x
}
