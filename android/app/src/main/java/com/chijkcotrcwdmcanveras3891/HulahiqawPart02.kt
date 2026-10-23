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

object HulahiqawPart02 {
    fun HulahiqawObfV24HashMix(s: String): Int {

  var h = 26
  for (i in s.indices) h = (h xor (s[i].code * 4)) % 666
  return h
}

    fun HulahiqawObfV24ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 2
  return (x xor 26) and 16219
}
}


/* obfuscation-batch:v25 */
private fun chihbkpormdcangvacrszHulahiqawPart02ObfV25HashMix(s: String): Int {

  var h = 25
  for (i in s.indices) h = (h xor (s[i].code * 8)) % 761
  return h
}

private fun chihbkpormdcangvacrszHulahiqawPart02ObfV25SumOdds(nums: IntArray): Int {

  var acc = 59
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 30) % 88
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val chihbkpormdcangvacrszBootV25 = chihbkpormdcangvacrszHulahiqawPart02ObfV25HashMix("d4") xor chihbkpormdcangvacrszHulahiqawPart02ObfV25SumOdds(intArrayOf(25, 30, 16))


/* obfuscation-batch:v26 */
private fun HulahiqchihbkpormdcangvacrszawPart02ObfV26HashMix(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val chihbkpormdcangvacrszSinkV29 = chihbkpormdcangvacrszHulahiqawPart02ObfV29SumOdds(intArrayOf(3, 34, 29)) xor chihbkpormdcangvacrszHulahiqawPart02ObfV29ClampMod(44, 79) xor chihbkpormdcangvacrszHulahiqawPart02ObfV29ShiftXor(30, 25) xor chihbkpormdcangvacrszHulahiqawPart02ObfV29ByteFold("2dmn65")

  var h = 100
  for (i in s.indices) h = (h xor (s[i].code * 42)) % 861
  return h
}

private fun HulahiqchihbkpormdcangvacrszawPart02ObfV26SumOdds(nums: IntArray): Int {

  var acc = 31
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 35) % 481
  }
  return acc
}
@Suppress("UNUSED_VARIABLE")
private val chihbkpormdcangvacrszBootV26 = HulahiqchihbkpormdcangvacrszawPart02ObfV26HashMix("fk") xor HulahiqchihbkpormdcangvacrszawPart02ObfV26SumOdds(intArrayOf(35, 38, 7))


/* obfuscation-batch:v27 */
private fun chihbkpormdcangvacrszHulahiqawPart02ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 117) and 10547
}

/* obfuscation-batch:v28 */
private fun chihbkpormdcangvacrszHulahiqawPart02ObfV28SumOdds(nums: IntArray): Int {
    var acc = 71
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 38) % 894
    }
    return acc
}
private fun chihbkpormdcangvacrszHulahiqawPart02ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 65) + 5
    val x = ((n xor 206) shl 2) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v29 */
private fun chihbkpormdcangvacrszHulahiqawPart02ObfV29SumOdds(nums: IntArray): Int {
    var acc = 33
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 3) % 322
    }
    return acc
}
private fun chihbkpormdcangvacrszHulahiqawPart02ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 63) + 10
    val x = ((n xor 34) shl 6) % span
    return if (x < 0) x + span else x
}
private fun chihbkpormdcangvacrszHulahiqawPart02ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 110) and 57364
}
private fun chihbkpormdcangvacrszHulahiqawPart02ObfV29ByteFold(s: String): Int {
    var x = 88
    for (i in s.indices) x = (x + s[i].code * 15) and 34988
    return x
}
