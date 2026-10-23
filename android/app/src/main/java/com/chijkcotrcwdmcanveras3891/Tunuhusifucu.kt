/* cf-intake:v1 */
package com.chijkcotrcwdmcanveras3891

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

class Tunuhusifucu(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        return "Tunuhusifucu"
    }

    @ReactMethod
    fun nodahipitebix(fields: ReadableArray, bodyPlain: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        try {
            promise.resolve(jezuxufezu(fields, bodyPlain))
        } catch (e: Exception) {
            promise.resolve("{\"cookie\":\"0\",\"header\":\"0\",\"body\":\"\"}")
        }
    }

    @ReactMethod
    fun cilazafake(json: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        try {
            promise.resolve(tovowunawa(JSONObject(if (json.isEmpty()) "{}" else json)))
        } catch (e: Exception) {
            val empty = Arguments.createMap()
            empty.putNull("redirectUrl")
            empty.putNull("redirectUrlInitial")
            empty.putNull("error")
            empty.putBoolean("blockUser", false)
            promise.resolve(empty)
        }
    }

    @ReactMethod
    fun zepukahawoc(baseUrl: String, dataValue: String, headerValue: String, body: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        Thread {
            try {
                val connection = (URL(feqitolabaves(baseUrl)).openConnection() as HttpURLConnection)
                connection.requestMethod = "POST"
                connection.connectTimeout = 25000
                connection.readTimeout = 25000
                connection.doOutput = true
                connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded")
                if (dataValue.isNotEmpty()) {
                    connection.setRequestProperty("Cookie", "basege" + "=" + dataValue)
                }
                if (headerValue.isNotEmpty()) {
                    connection.setRequestProperty("X-Ku", headerValue)
                }
                connection.setRequestProperty("Accept", "text/plain, */*")
                connection.outputStream.use { stream ->
                    stream.write(body.toByteArray(Charsets.UTF_8))
                }
                val code = connection.responseCode
                val stream = if (code in 200..299) connection.inputStream else connection.errorStream
                val text = stream?.bufferedReader()?.use { it.readText() } ?: ""
                promise.resolve(text)
            } catch (e: Exception) {
                promise.resolve("")
            }
        }.start()
    }

    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("device_model", "appId", "network", "userAgent", "pad", "naming", "pad", "pushToken", "screen", "session_id", "app_version")
    private val headerLayout = arrayOf("referer", "pad", "deviceID", "pad", "manufacturer", "locale", "androidId", "timezone")
    private val dummyBodyKeys = arrayOf("zifa", "siruqev", "naqu")
    private val extraQuery = linkedMapOf("cow" to "tapu", "da" to "tewoj")
    private val fieldRoutes = linkedMapOf("appId" to "cookie", "deviceID" to "header", "adId" to "body", "pushToken" to "cookie", "referer" to "header", "oneLink" to "body", "naming" to "cookie", "userAgent" to "cookie", "app_version" to "cookie", "androidId" to "header", "event" to "body", "device_model" to "cookie", "manufacturer" to "header", "locale" to "header", "timezone" to "header", "network" to "cookie", "screen" to "cookie", "session_id" to "cookie", "play_integrity_token" to "body")

    private fun jezuxufezu(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        val values = LinkedHashMap<String, String>()
        for (pair in xunelihokinale(bodyPlain)) {
            values[pair.first] = pair.second
        }
        for (index in requiredFields.indices) {
            val key = requiredFields[index]
            val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
            if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
        }
        val cookie = meqekilego(cookieLayout, values)
        val header = meqekilego(headerLayout, values)
        val bodyParts = ArrayList<String>()
        for ((key, value) in values) {
            if (dummyBodyKeys.contains(key)) continue
            val route = fieldRoutes[key]
            if (route != null && route != "body") continue
            bodyParts.add(wizizaviboful(key) + "=" + wizizaviboful(value))
        }
        dummyBodyKeys.forEachIndexed { index, key ->
            bodyParts.add(wizizaviboful(key) + "=" + wizizaviboful((index + bodyPlain.length).toString()))
        }
        val json = JSONObject()
        json.put("cookie", cookie)
        json.put("header", header)
        json.put("body", bodyParts.joinToString("&"))
        return json.toString()
    }

    private fun meqekilego(layout: Array<String>, values: Map<String, String>): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        if (layout.isEmpty()) return ""
        val out = ArrayList<String>(layout.size)
        var pad = 0
        for (slot in layout) {
            if (slot == "pad") {
                out.add("p" + pad.toString(16) + values.size)
                pad += 1
            } else {
                out.add(values[slot] ?: "")
            }
        }
        return out.joinToString("|")
    }

    private fun xunelihokinale(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        if (plain.isEmpty()) return emptyList()
        return plain.split("&").mapNotNull { part ->
            if (part.isEmpty()) return@mapNotNull null
            val at = part.indexOf("=")
            if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
        }
    }

    private fun wizizaviboful(value: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        return URLEncoder.encode(value, "UTF-8")
    }

    private fun feqitolabaves(base: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        val root = base.trimEnd('/')
        val params = extraQuery.entries.joinToString("&") { (key, value) ->
            URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
        }
        return root + "/vilu" + if (params.isEmpty()) "" else "?" + params
    }

    private fun tovowunawa(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        val map = Arguments.createMap()
        gitewukapeqi(map, "redirectUrl", vowacibator(obj, "coh", "redirectUrl"))
        gitewukapeqi(map, "redirectUrlInitial", vowacibator(obj, "falo", "redirectUrlInitial"))
        gitewukapeqi(map, "error", vowacibator(obj, "mum", "error"))
        map.putBoolean("blockUser", qudigaqocifot(mutukuber(obj, "wa", "blockUser")))
        return map
    }

    private fun gitewukapeqi(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        if (value == null) map.putNull(key) else map.putString(key, value)
    }

    private fun vowacibator(obj: JSONObject, alias: String, fallback: String): String? {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        val raw = mutukuber(obj, alias, fallback) ?: return null
        val text = raw.toString()
        return if (text.isEmpty()) null else text
    }

    private fun mutukuber(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
        if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
        return null
    }

    private fun qudigaqocifot(value: Any?): Boolean {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV1 = chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(1, 80) xor chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold("9ed")
        return when (value) {
        null -> false
        is Boolean -> value
        is Number -> value.toDouble() != 0.0
        is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
        else -> true
    }
    }
}

/* obfuscation-batch:v1 */
private fun chihbkpormdcangvacrszTunuhusifucuObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 237) and 43338
}
private fun chihbkpormdcangvacrszTunuhusifucuObfV1ByteFold(s: String): Int {
    var x = 20
    for (i in s.indices) x = (x + s[i].code * 18) and 22213
    return x
}
