/* autosetup-split:v1 */
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

object CIntakePart0chihbkpormdcangvacrsz1 {
    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("appId", "naming", "pad", "androidId", "pad", "app_version", "timezone", "oneLink", "manufacturer", "referer", "deviceID", "pad", "screen", "pad", "event")
    private val headerLayout = arrayOf("pad", "pushToken", "session_id", "device_model", "network")
    private val dummyBodyKeys = arrayOf("zojobu", "cakoguh", "digi")
    internal val extraQuery = linkedMapOf<String, String>()
    private val fieldRoutes = linkedMapOf("appId" to "cookie", "deviceID" to "cookie", "adId" to "body", "pushToken" to "header", "referer" to "cookie", "oneLink" to "cookie", "naming" to "cookie", "userAgent" to "body", "app_version" to "cookie", "androidId" to "cookie", "event" to "cookie", "device_model" to "header", "manufacturer" to "cookie", "locale" to "body", "timezone" to "cookie", "network" to "header", "screen" to "cookie", "session_id" to "header", "play_integrity_token" to "body")

    fun piqinixizohuci(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszCIntakePart0chihbkObfV34HashMix("g1") xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34SumOdds(intArrayOf(19, 18, 21)) xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34ClampMod(60, 63)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV33 = chihbkpormdcangvacrszCIntakePart0txvwrkObfV33HashMix("1a38") xor chihbkpormdcangvacrszCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV31 = chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV28 = CIchihbkpormdcangvacrszntakePObfV28Mix(1, 8) xor CIntakePObfV28Fchihbkpormdcangvacrszold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV27 = CInchihbkpormdcangvacrsztakePart01ObfV27ByteFold("2fu") xor CIntakePart01ObfV27HchihbkpormdcangvacrszashMix("xrvqn") xor CIntakePart01OchihbkpormdcangvacrszbfV27SumOdds(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClachihbkpormdcangvacrszmpMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV26 = CInchihbkpormdcangvacrsztakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfchihbkpormdcangvacrszV26ByteFold("vcu") xor CIntakePart01ObfV26chihbkpormdcangvacrszHashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV25 = CIntakePart01ObfVchihbkpormdcangvacrsz25ClampMod(60, 62) xor CIntakePartchihbkpormdcangvacrsz01ObfV25ShiftXor(46, 5)
    val values = LinkedHashMap<String, String>()
    for (pair in fidegoqeh(bodyPlain)) {
        values[pair.first] = pair.second
    }
    for (index in requiredFields.indices) {
        val key = requiredFields[index]
        val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
        if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
    }
    val cookie = CIntachihbkpormdcangvacrszkePart02.kepenituqavaru(cookieLayout, values)
    val header = CIntachihbkpormdcangvacrszkePart02.kepenituqavaru(headerLayout, values)
    val bodyParts = ArrayList<String>()
    for ((key, value) in values) {
        if (dummyBodyKeys.contains(key)) continue
        val route = fieldRoutes[key]
        if (route != null && route != "body") continue
        bodyParts.add(CIntachihbkpormdcangvacrszkePart02.enc(key) + "=" + CIntachihbkpormdcangvacrszkePart02.enc(value))
    }
    dummyBodyKeys.forEachIndexed { index, key ->
        bodyParts.add(CIntachihbkpormdcangvacrszkePart02.enc(key) + "=" + CIntachihbkpormdcangvacrszkePart02.enc((index + bodyPlain.length).toString()))
    }
    val json = JSONObject()
    json.put("cookie", cookie)
    json.put("header", header)
    json.put("body", bodyParts.joinToString("&"))
    return json.toString()
}

    fun fidegoqeh(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszCIntakePart0chihbkObfV34HashMix("g1") xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34SumOdds(intArrayOf(19, 18, 21)) xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34ClampMod(60, 63)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV33 = chihbkpormdcangvacrszCIntakePart0txvwrkObfV33HashMix("1a38") xor chihbkpormdcangvacrszCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV31 = chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV28 = CIchihbkpormdcangvacrszntakePObfV28Mix(1, 8) xor CIntakePObfV28Fchihbkpormdcangvacrszold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV27 = CInchihbkpormdcangvacrsztakePart01ObfV27ByteFold("2fu") xor CIntakePart01ObfV27HchihbkpormdcangvacrszashMix("xrvqn") xor CIntakePart01OchihbkpormdcangvacrszbfV27SumOdds(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClachihbkpormdcangvacrszmpMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV26 = CInchihbkpormdcangvacrsztakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfchihbkpormdcangvacrszV26ByteFold("vcu") xor CIntakePart01ObfV26chihbkpormdcangvacrszHashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV25 = CIntakePart01ObfVchihbkpormdcangvacrsz25ClampMod(60, 62) xor CIntakePartchihbkpormdcangvacrsz01ObfV25ShiftXor(46, 5)
    if (plain.isEmpty()) return emptyList()
    return plain.split("&").mapNotNull { part ->
        if (part.isEmpty()) return@mapNotNull null
        val at = part.indexOf("=")
        if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
    }
}

    fun hiqugobicemeru(base: String): String {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszCIntakePart0chihbkObfV34HashMix("g1") xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34SumOdds(intArrayOf(19, 18, 21)) xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34ClampMod(60, 63)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV33 = chihbkpormdcangvacrszCIntakePart0txvwrkObfV33HashMix("1a38") xor chihbkpormdcangvacrszCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV31 = chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV28 = CIchihbkpormdcangvacrszntakePObfV28Mix(1, 8) xor CIntakePObfV28Fchihbkpormdcangvacrszold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV27 = CInchihbkpormdcangvacrsztakePart01ObfV27ByteFold("2fu") xor CIntakePart01ObfV27HchihbkpormdcangvacrszashMix("xrvqn") xor CIntakePart01OchihbkpormdcangvacrszbfV27SumOdds(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClachihbkpormdcangvacrszmpMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV26 = CInchihbkpormdcangvacrsztakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfchihbkpormdcangvacrszV26ByteFold("vcu") xor CIntakePart01ObfV26chihbkpormdcangvacrszHashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV25 = CIntakePart01ObfVchihbkpormdcangvacrsz25ClampMod(60, 62) xor CIntakePartchihbkpormdcangvacrsz01ObfV25ShiftXor(46, 5)
    val root = base.trimEnd('/')
    val params = extraQuery.entries.joinToString("&") { (key, value) ->
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/xo" + if (params.isEmpty()) "" else "?" + params
}

    fun negejesexa(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszCIntakePart0chihbkObfV34HashMix("g1") xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34SumOdds(intArrayOf(19, 18, 21)) xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34ClampMod(60, 63)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV33 = chihbkpormdcangvacrszCIntakePart0txvwrkObfV33HashMix("1a38") xor chihbkpormdcangvacrszCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV31 = chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV28 = CIchihbkpormdcangvacrszntakePObfV28Mix(1, 8) xor CIntakePObfV28Fchihbkpormdcangvacrszold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV27 = CInchihbkpormdcangvacrsztakePart01ObfV27ByteFold("2fu") xor CIntakePart01ObfV27HchihbkpormdcangvacrszashMix("xrvqn") xor CIntakePart01OchihbkpormdcangvacrszbfV27SumOdds(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClachihbkpormdcangvacrszmpMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV26 = CInchihbkpormdcangvacrsztakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfchihbkpormdcangvacrszV26ByteFold("vcu") xor CIntakePart01ObfV26chihbkpormdcangvacrszHashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV25 = CIntakePart01ObfVchihbkpormdcangvacrsz25ClampMod(60, 62) xor CIntakePartchihbkpormdcangvacrsz01ObfV25ShiftXor(46, 5)
    if (value == null) map.putNull(key) else map.putString(key, value)
}

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszCIntakePart0chihbkObfV34HashMix("g1") xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34SumOdds(intArrayOf(19, 18, 21)) xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34ClampMod(60, 63)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV33 = chihbkpormdcangvacrszCIntakePart0txvwrkObfV33HashMix("1a38") xor chihbkpormdcangvacrszCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV31 = chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkAutoV28 = CIchihbkpormdcangvacrszntakePObfV28Mix(1, 8) xor CIntakePObfV28Fchihbkpormdcangvacrszold("cintak")
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV27 = CInchihbkpormdcangvacrsztakePart01ObfV27ByteFold("2fu") xor CIntakePart01ObfV27HchihbkpormdcangvacrszashMix("xrvqn") xor CIntakePart01OchihbkpormdcangvacrszbfV27SumOdds(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClachihbkpormdcangvacrszmpMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV26 = CInchihbkpormdcangvacrsztakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfchihbkpormdcangvacrszV26ByteFold("vcu") xor CIntakePart01ObfV26chihbkpormdcangvacrszHashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV25 = CIntakePart01ObfVchihbkpormdcangvacrsz25ClampMod(60, 62) xor CIntakePartchihbkpormdcangvacrsz01ObfV25ShiftXor(46, 5)
    if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
    if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
    return null
}
}


/* obfuscation-batch:v25 */
private fun CIntakePart01ObfVchihbkpormdcangvacrsz25ClampMod(n: Int, m: Int): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszCIntakePart0chihbkObfV34HashMix("g1") xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34SumOdds(intArrayOf(19, 18, 21)) xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34ClampMod(60, 63)

  val span = (m % 10) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIntakePartchihbkpormdcangvacrsz01ObfV25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 125) and 16302
}


/* obfuscation-batch:v26 */
private fun CInchihbkpormdcangvacrsztakePart01ObfV26ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 214) and 56254
}

private fun CIntakePart01ObfchihbkpormdcangvacrszV26ByteFold(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszCIntakePart0chihbkObfV34HashMix("g1") xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34SumOdds(intArrayOf(19, 18, 21)) xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34ClampMod(60, 63)

  var x = 24
  for (i in s.indices) x = (x + s[i].code * 11) and 9283
  return x
}

private fun CIntakePart01ObfV26chihbkpormdcangvacrszHashMix(s: String): Int {

  var h = 90
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 211
  return h
}


/* obfuscation-batch:v27 */
private fun CInchihbkpormdcangvacrsztakePart01ObfV27ByteFold(s: String): Int {
  var x = 78
  for (i in s.indices) x = (x + s[i].code * 27) and 41952
  return x
}
private fun CIntakePart01ObfV27HchihbkpormdcangvacrszashMix(s: String): Int {
  var h = 57
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 398
  return h
}
private fun CIntakePart01OchihbkpormdcangvacrszbfV27SumOdds(nums: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszCIntakePart0chihbkObfV34HashMix("g1") xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34SumOdds(intArrayOf(19, 18, 21)) xor chihbkpormdcangvacrszCIntakePart0chihbkObfV34ClampMod(60, 63)
  var acc = 38
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 13) % 74
  }
  return acc
}
private fun CIntakePart01ObfV27ClachihbkpormdcangvacrszmpMod(n: Int, m: Int): Int {
  val span = (m % 59) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIchihbkpormdcangvacrszntakePObfV28Mix(a: Int, b: Int): Int {
    val base = 34
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun CIntakePObfV28Fchihbkpormdcangvacrszold(text: String): Int {
    var acc = 34
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

private fun chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Mix(a: Int, b: Int): Int {
    val base = 44
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun chihbkpormdcangvacrszCIntakePapzurisymgeqmgallsefObfV29Fold(text: String): Int {
    var acc = 44
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

private fun chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Mix(a: Int, b: Int): Int {
    val base = 74
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun chihbkpormdcangvacrszCIntakePart0dgpnrismgemgalleObfV30Fold(text: String): Int {
    var acc = 74
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

/* obfuscation-batch:v31 */
private fun chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31SumOdds(nums: IntArray): Int {
    var acc = 63
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 27) % 326
    }
    return acc
}
private fun chihbkpormdcangvacrszCIntakePart0pmvqkrObfV31ClampMod(n: Int, m: Int): Int {
    val span = (m % 21) + 6
    val x = ((n xor 76) shl 2) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v32 */
private fun chihbkpormdcangvacrszCIntakePart0ichyikObfV32ClampMod(n: Int, m: Int): Int {
    val span = (m % 39) + 3
    val x = ((n xor 100) shl 4) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v33 */
private fun chihbkpormdcangvacrszCIntakePart0txvwrkObfV33HashMix(s: String): Int {
    var h = 88
    for (i in s.indices) h = (h xor (s[i].code * 23)) % 552
    return h
}
private fun chihbkpormdcangvacrszCIntakePart0txvwrkObfV33SumOdds(nums: IntArray): Int {
    var acc = 66
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 13) % 278
    }
    return acc
}

/* obfuscation-batch:v34 */
private fun chihbkpormdcangvacrszCIntakePart0chihbkObfV34HashMix(s: String): Int {
    var h = 2
    for (i in s.indices) h = (h xor (s[i].code * 26)) % 429
    return h
}
private fun chihbkpormdcangvacrszCIntakePart0chihbkObfV34SumOdds(nums: IntArray): Int {
    var acc = 57
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 9) % 541
    }
    return acc
}
private fun chihbkpormdcangvacrszCIntakePart0chihbkObfV34ClampMod(n: Int, m: Int): Int {
    val span = (m % 54) + 3
    val x = ((n xor 2) shl 6) % span
    return if (x < 0) x + span else x
}
