/* dex-lanes:v1 */
package com.chijkcotrcwdmcanveras3891

object DchihbkpormdcangvacrszDexLanes {
    fun lane00(seed: Int): Int {
        var dexLane = seed
        val laneWord = "iion"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 8) == 0) {
            dexLane = dexLane + 2096
        }
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(122, 11, 78)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 65
        return dexLane
    }

    fun lane01(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(51, 186, 113)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 4182
        dexLane = dexLane + 9215
        dexLane = dexLane ushr 9
        dexLane = dexLane or 36301
        return dexLane
    }

    fun lane02(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 48383
        dexLane = dexLane % 26
        val laneWord = "goei"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(157, 115, 144)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 11
        return dexLane
    }

    fun lane03(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(75, 26, 15)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 13509
        dexLane = dexLane ushr 3
        val laneWord = "dfjm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane04(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 3882
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 3920
        }
        dexLane = dexLane ushr 5
        dexLane = dexLane and 22408
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane05(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(60, 151, 101)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 6
        dexLane = dexLane * 34
        dexLane = dexLane + 46736
        return dexLane
    }

    fun lane06(seed: Int): Int {
        var dexLane = seed
        val laneWord = "ioai"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 7
        dexLane = dexLane % 52
        dexLane = dexLane * 11
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1066
            1 -> dexLane + 769
            else -> dexLane + 3328
        }
        return dexLane
    }

    fun lane07(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(149, 200, 24)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 51168
        dexLane = dexLane or 19292
        dexLane = dexLane * 14
        return dexLane
    }

    fun lane08(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 5
        val laneNums = intArrayOf(39, 114, 45)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2296
            1 -> dexLane + 3883
            else -> dexLane + 564
        }
        dexLane = dexLane % 26
        dexLane = dexLane or 30639
        return dexLane
    }

    fun lane09(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 46850
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2617
            1 -> dexLane + 158
            else -> dexLane + 177
        }
        val laneWord = "elko"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 97
        }
        return dexLane
    }

    fun lane10(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 53935
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3588
            1 -> dexLane + 1211
            else -> dexLane + 3744
        }
        dexLane = dexLane or 33613
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 1
        return dexLane
    }

    fun lane11(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 46715
        val laneWord = "chld"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 79
        dexLane = dexLane * 36
        dexLane = dexLane + 44740
        return dexLane
    }

    fun lane12(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 7
        dexLane = dexLane.inv()
        dexLane = dexLane and 28062
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 518
            1 -> dexLane + 505
            else -> dexLane + 2665
        }
        dexLane = dexLane % 64
        return dexLane
    }

    fun lane13(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 4
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3682
            1 -> dexLane + 1816
            else -> dexLane + 848
        }
        dexLane = dexLane + 4741
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(108, 129, 61)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane14(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 9
        dexLane = dexLane xor 22724
        dexLane = dexLane or 56065
        dexLane = dexLane % 24
        val laneNums = intArrayOf(101, 64, 144)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane15(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 39299
        val laneWord = "mgla"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 14
        val laneNums = intArrayOf(185, 46, 193)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 2916
        return dexLane
    }

    fun lane16(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 37
        dexLane = dexLane ushr 9
        dexLane = dexLane.inv()
        dexLane = dexLane shl 2
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2494
            1 -> dexLane + 3135
            else -> dexLane + 2381
        }
        return dexLane
    }

    fun lane17(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 25295
        val laneNums = intArrayOf(186, 16, 192)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane ushr 5
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "jmkk"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane18(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 5
        dexLane = dexLane xor 29079
        dexLane = dexLane and 24096
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 18) == 0) {
            dexLane = dexLane + 2675
        }
        return dexLane
    }

    fun lane19(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 984
        }
        dexLane = dexLane xor 47669
        val laneWord = "ocpc"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 22
        dexLane = dexLane or 24677
        return dexLane
    }

    fun lane20(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 5
        dexLane = dexLane xor 19121
        dexLane = dexLane and 28114
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 2990
        }
        dexLane = dexLane * 8
        return dexLane
    }

    fun lane21(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 12
        dexLane = dexLane ushr 2
        dexLane = dexLane xor 17908
        dexLane = dexLane % 18
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane22(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 1679
        }
        dexLane = dexLane ushr 4
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 101
            1 -> dexLane + 2372
            else -> dexLane + 2789
        }
        dexLane = dexLane shl 3
        dexLane = dexLane xor 36763
        return dexLane
    }

    fun lane23(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 9056
        dexLane = dexLane shl 2
        dexLane = dexLane ushr 1
        dexLane = dexLane or 35130
        val laneWord = "aekc"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane24(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 1
        dexLane = dexLane shl 11
        val laneWord = "nmbk"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 55
        return dexLane
    }

    fun lane25(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 61
        val laneNums = intArrayOf(170, 103, 183)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1369
            1 -> dexLane + 588
            else -> dexLane + 3344
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 34898
        return dexLane
    }

    fun lane26(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(65, 181, 121)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 28
        val laneWord = "hdjj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 1
        return dexLane
    }

    fun lane27(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 29297
        dexLane = dexLane * 39
        val laneWord = "poeb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 3) == 0) {
            dexLane = dexLane + 125
        }
        dexLane = dexLane ushr 9
        return dexLane
    }

    fun lane28(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 7658
        if ((dexLane and 11) == 0) {
            dexLane = dexLane + 1516
        }
        dexLane = dexLane shl 12
        dexLane = dexLane and 31076
        dexLane = dexLane ushr 1
        return dexLane
    }

    fun lane29(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 4
        val laneWord = "apld"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 17
        dexLane = dexLane or 7073
        dexLane = dexLane + 19345
        return dexLane
    }

    fun lane30(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1504
            1 -> dexLane + 2079
            else -> dexLane + 1888
        }
        dexLane = dexLane shl 12
        dexLane = dexLane * 4
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 8
        return dexLane
    }

    fun lane31(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2463
            1 -> dexLane + 2215
            else -> dexLane + 347
        }
        dexLane = dexLane and 13991
        dexLane = dexLane ushr 12
        dexLane = dexLane or 10569
        return dexLane
    }

    fun lane32(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 6737
        dexLane = dexLane and 16501
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 3
        val laneNums = intArrayOf(15, 13, 195)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane33(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 45
        val laneNums = intArrayOf(27, 11, 136)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane ushr 8
        dexLane = dexLane shl 7
        return dexLane
    }

    fun lane34(seed: Int): Int {
        var dexLane = seed
        val laneWord = "ihpo"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 42212
        dexLane = dexLane + 48780
        if ((dexLane and 20) == 0) {
            dexLane = dexLane + 125
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane35(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 3142
        }
        dexLane = dexLane % 23
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 426
            1 -> dexLane + 406
            else -> dexLane + 3933
        }
        dexLane = dexLane shl 11
        return dexLane
    }

    fun lane36(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 32901
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 747
            1 -> dexLane + 3122
            else -> dexLane + 2380
        }
        dexLane = dexLane.inv()
        dexLane = dexLane or 3971
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 1571
        }
        return dexLane
    }

    fun lane37(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 9
        val laneNums = intArrayOf(133, 134, 37)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 835
            1 -> dexLane + 3641
            else -> dexLane + 1156
        }
        if ((dexLane and 14) == 0) {
            dexLane = dexLane + 1309
        }
        dexLane = dexLane ushr 2
        return dexLane
    }

    fun lane38(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 28451
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 3
        dexLane = dexLane * 29
        if ((dexLane and 16) == 0) {
            dexLane = dexLane + 1807
        }
        return dexLane
    }

    fun lane39(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 42472
        val laneWord = "olfn"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 20161
        dexLane = dexLane or 9314
        return dexLane
    }

    fun lane40(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 55
        dexLane = dexLane shl 9
        dexLane = dexLane or 6348
        dexLane = dexLane and 8741
        val laneWord = "pakd"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane41(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 9
        dexLane = dexLane + 32412
        dexLane = dexLane % 5
        dexLane = dexLane * 16
        return dexLane
    }

    fun lane42(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 3575
        }
        dexLane = dexLane.inv()
        dexLane = dexLane or 28636
        val laneWord = "ehpm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane43(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 6
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 3554
        }
        dexLane = dexLane xor 10214
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 9
        return dexLane
    }

    fun lane44(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 773
        dexLane = dexLane * 27
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 35754
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2524
            1 -> dexLane + 3767
            else -> dexLane + 1096
        }
        return dexLane
    }

    fun lane45(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 3
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 1026
        }
        val laneNums = intArrayOf(53, 112, 42)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 29022
        dexLane = dexLane shl 2
        return dexLane
    }

    fun lane46(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 52116
        dexLane = dexLane * 11
        if ((dexLane and 28) == 0) {
            dexLane = dexLane + 2275
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2951
            1 -> dexLane + 623
            else -> dexLane + 3404
        }
        dexLane = dexLane xor 40912
        return dexLane
    }

    fun lane47(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 25148
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3125
            1 -> dexLane + 1927
            else -> dexLane + 3472
        }
        dexLane = dexLane % 19
        dexLane = dexLane ushr 9
        return dexLane
    }

    fun lane48(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane shl 2
        dexLane = dexLane xor 13421
        dexLane = dexLane ushr 8
        dexLane = dexLane or 48629
        return dexLane
    }

    fun lane49(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 7
        dexLane = dexLane ushr 6
        dexLane = dexLane or 50697
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1106
            1 -> dexLane + 2662
            else -> dexLane + 1871
        }
        dexLane = dexLane + 12028
        return dexLane
    }

    fun lane50(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3468
            1 -> dexLane + 1255
            else -> dexLane + 2889
        }
        val laneNums = intArrayOf(53, 94, 33)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 3) == 0) {
            dexLane = dexLane + 3252
        }
        dexLane = dexLane * 23
        dexLane = dexLane xor 11902
        return dexLane
    }

    fun lane51(seed: Int): Int {
        var dexLane = seed
        val laneWord = "npmf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 20484
        dexLane = dexLane shl 6
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3076
            1 -> dexLane + 1756
            else -> dexLane + 363
        }
        dexLane = dexLane ushr 11
        return dexLane
    }

    fun lane52(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 29495
        dexLane = dexLane or 26094
        dexLane = dexLane ushr 10
        val laneNums = intArrayOf(66, 172, 148)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 58
        return dexLane
    }

    fun lane53(seed: Int): Int {
        var dexLane = seed
        val laneWord = "libb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane + 49400
        dexLane = dexLane or 54182
        dexLane = dexLane shl 8
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 1411
        }
        return dexLane
    }

    fun lane54(seed: Int): Int {
        var dexLane = seed
        val laneWord = "ohid"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 6989
        dexLane = dexLane or 38732
        dexLane = dexLane * 15
        dexLane = dexLane shl 7
        return dexLane
    }

    fun lane55(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane and 2083
        dexLane = dexLane + 20141
        if ((dexLane and 16) == 0) {
            dexLane = dexLane + 2538
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane56(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(18, 80, 84)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 14) == 0) {
            dexLane = dexLane + 2810
        }
        dexLane = dexLane shl 5
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1229
            1 -> dexLane + 1783
            else -> dexLane + 1438
        }
        return dexLane
    }

    fun lane57(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 19
        dexLane = dexLane % 73
        dexLane = dexLane and 30595
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2071
            1 -> dexLane + 101
            else -> dexLane + 951
        }
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 1077
        }
        return dexLane
    }

    fun lane58(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 2122
        }
        dexLane = dexLane * 38
        dexLane = dexLane and 27461
        dexLane = dexLane % 13
        dexLane = dexLane shl 1
        return dexLane
    }

    fun lane59(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 30892
        dexLane = dexLane or 55985
        dexLane = dexLane * 28
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 2842
        }
        val laneNums = intArrayOf(199, 126, 50)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane60(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3173
            1 -> dexLane + 801
            else -> dexLane + 2334
        }
        dexLane = dexLane ushr 6
        val laneNums = intArrayOf(60, 141, 3)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 9) == 0) {
            dexLane = dexLane + 3702
        }
        dexLane = dexLane shl 4
        return dexLane
    }

    fun lane61(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(198, 100, 39)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "lbaa"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 2
        dexLane = dexLane xor 37766
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 3091
        }
        return dexLane
    }

    fun lane62(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 76
        dexLane = dexLane + 20062
        val laneWord = "khkb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(166, 191, 33)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane63(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1420
            1 -> dexLane + 2050
            else -> dexLane + 599
        }
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 599
        }
        dexLane = dexLane shl 2
        dexLane = dexLane % 82
        val laneNums = intArrayOf(132, 65, 139)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane64(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane * 5
        if ((dexLane and 7) == 0) {
            dexLane = dexLane + 1532
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 167
            1 -> dexLane + 1169
            else -> dexLane + 498
        }
        dexLane = dexLane % 44
        return dexLane
    }

    fun lane65(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "eoji"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 12) == 0) {
            dexLane = dexLane + 815
        }
        dexLane = dexLane or 36026
        return dexLane
    }

    fun lane66(seed: Int): Int {
        var dexLane = seed
        val laneWord = "kjpm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(73, 127, 25)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 155
            1 -> dexLane + 2840
            else -> dexLane + 2879
        }
        dexLane = dexLane ushr 11
        dexLane = dexLane shl 7
        return dexLane
    }

    fun lane67(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 54
        dexLane = dexLane ushr 2
        val laneWord = "pece"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 35
        val laneNums = intArrayOf(55, 161, 30)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane68(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 36820
        dexLane = dexLane + 44639
        dexLane = dexLane * 38
        dexLane = dexLane ushr 1
        val laneNums = intArrayOf(126, 185, 191)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane69(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 21439
        dexLane = dexLane + 14142
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1451
            1 -> dexLane + 2655
            else -> dexLane + 2878
        }
        val laneNums = intArrayOf(200, 103, 176)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane70(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 652
            1 -> dexLane + 1425
            else -> dexLane + 162
        }
        dexLane = dexLane shl 10
        dexLane = dexLane + 59637
        if ((dexLane and 29) == 0) {
            dexLane = dexLane + 1191
        }
        return dexLane
    }

    fun lane71(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane and 15673
        dexLane = dexLane % 67
        dexLane = dexLane.inv()
        dexLane = dexLane xor 36597
        return dexLane
    }

    fun lane72(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 7
        dexLane = dexLane % 53
        dexLane = dexLane ushr 8
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2328
            1 -> dexLane + 1022
            else -> dexLane + 3440
        }
        val laneNums = intArrayOf(50, 98, 186)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane73(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 22671
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 133
            1 -> dexLane + 588
            else -> dexLane + 2906
        }
        dexLane = dexLane ushr 10
        val laneWord = "kimm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 34969
        return dexLane
    }

    fun lane74(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane * 16
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 3727
        }
        dexLane = dexLane or 32901
        val laneNums = intArrayOf(84, 54, 16)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane75(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 41115
        dexLane = dexLane.inv()
        dexLane = dexLane + 48018
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 1911
        }
        dexLane = dexLane xor 30961
        return dexLane
    }

    fun lane76(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 15) == 0) {
            dexLane = dexLane + 2025
        }
        dexLane = dexLane shl 3
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 917
            1 -> dexLane + 1768
            else -> dexLane + 2712
        }
        dexLane = dexLane + 3277
        return dexLane
    }

    fun lane77(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(10, 12, 118)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 19910
        dexLane = dexLane * 24
        dexLane = dexLane or 55318
        return dexLane
    }

    fun lane78(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 28510
        dexLane = dexLane + 7228
        dexLane = dexLane % 37
        dexLane = dexLane * 10
        dexLane = dexLane or 27627
        return dexLane
    }

    fun lane79(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 27239
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2051
            1 -> dexLane + 390
            else -> dexLane + 1813
        }
        dexLane = dexLane.inv()
        dexLane = dexLane + 51668
        if ((dexLane and 16) == 0) {
            dexLane = dexLane + 726
        }
        return dexLane
    }

    fun lane80(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 39550
        dexLane = dexLane ushr 2
        dexLane = dexLane.inv()
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 3816
        }
        dexLane = dexLane or 45731
        return dexLane
    }

    fun lane81(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 2817
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2604
            1 -> dexLane + 531
            else -> dexLane + 734
        }
        dexLane = dexLane ushr 9
        val laneNums = intArrayOf(153, 182, 171)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane82(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 1147
        }
        dexLane = dexLane ushr 4
        dexLane = dexLane or 48171
        dexLane = dexLane + 22581
        return dexLane
    }

    fun lane83(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 2479
        }
        dexLane = dexLane.inv()
        dexLane = dexLane * 8
        dexLane = dexLane + 4296
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2930
            1 -> dexLane + 1713
            else -> dexLane + 2263
        }
        return dexLane
    }

    fun lane84(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(79, 127, 99)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 6
        dexLane = dexLane % 46
        dexLane = dexLane or 31087
        if ((dexLane and 18) == 0) {
            dexLane = dexLane + 1688
        }
        return dexLane
    }

    fun lane85(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 15473
        dexLane = dexLane + 48571
        dexLane = dexLane or 39534
        dexLane = dexLane shl 2
        dexLane = dexLane % 10
        return dexLane
    }

    fun lane86(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 4
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1789
            1 -> dexLane + 3231
            else -> dexLane + 2858
        }
        dexLane = dexLane and 14257
        dexLane = dexLane % 38
        return dexLane
    }

    fun lane87(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane + 34212
        if ((dexLane and 22) == 0) {
            dexLane = dexLane + 3707
        }
        dexLane = dexLane and 19997
        dexLane = dexLane % 23
        return dexLane
    }

    fun lane88(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 18) == 0) {
            dexLane = dexLane + 2249
        }
        dexLane = dexLane and 2843
        dexLane = dexLane or 41405
        dexLane = dexLane.inv()
        dexLane = dexLane * 24
        return dexLane
    }

    fun lane89(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 35
        if ((dexLane and 11) == 0) {
            dexLane = dexLane + 144
        }
        dexLane = dexLane xor 28015
        dexLane = dexLane % 3
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3261
            1 -> dexLane + 3979
            else -> dexLane + 1923
        }
        return dexLane
    }

    fun lane90(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 22
        val laneNums = intArrayOf(168, 83, 43)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3519
            1 -> dexLane + 812
            else -> dexLane + 1841
        }
        dexLane = dexLane + 24867
        dexLane = dexLane and 10185
        return dexLane
    }

    fun lane91(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 25522
        dexLane = dexLane shl 2
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3063
            1 -> dexLane + 1331
            else -> dexLane + 946
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(5, 150, 23)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane92(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 44504
        dexLane = dexLane xor 15237
        dexLane = dexLane.inv()
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 2749
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2091
            1 -> dexLane + 2087
            else -> dexLane + 1773
        }
        return dexLane
    }

    fun lane93(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 8
        dexLane = dexLane or 39998
        dexLane = dexLane xor 36019
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 947
            1 -> dexLane + 2920
            else -> dexLane + 3259
        }
        dexLane = dexLane * 41
        return dexLane
    }

    fun lane94(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 1
        dexLane = dexLane or 36812
        dexLane = dexLane and 6980
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 36
        return dexLane
    }

    fun lane95(seed: Int): Int {
        var dexLane = seed
        val laneWord = "mjjn"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane and 7625
        dexLane = dexLane shl 2
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun touch(seed: Int) {
        var acc = seed
        acc = lane00(acc)
        acc = lane01(acc)
        acc = lane02(acc)
        acc = lane03(acc)
        acc = lane04(acc)
        acc = lane05(acc)
        acc = lane06(acc)
        acc = lane07(acc)
        acc = lane08(acc)
        acc = lane09(acc)
        acc = lane10(acc)
        acc = lane11(acc)
        acc = lane12(acc)
        acc = lane13(acc)
        acc = lane14(acc)
        acc = lane15(acc)
        acc = lane16(acc)
        acc = lane17(acc)
        acc = lane18(acc)
        acc = lane19(acc)
        acc = lane20(acc)
        acc = lane21(acc)
        acc = lane22(acc)
        acc = lane23(acc)
        acc = lane24(acc)
        acc = lane25(acc)
        acc = lane26(acc)
        acc = lane27(acc)
        acc = lane28(acc)
        acc = lane29(acc)
        acc = lane30(acc)
        acc = lane31(acc)
        acc = lane32(acc)
        acc = lane33(acc)
        acc = lane34(acc)
        acc = lane35(acc)
        acc = lane36(acc)
        acc = lane37(acc)
        acc = lane38(acc)
        acc = lane39(acc)
        acc = lane40(acc)
        acc = lane41(acc)
        acc = lane42(acc)
        acc = lane43(acc)
        acc = lane44(acc)
        acc = lane45(acc)
        acc = lane46(acc)
        acc = lane47(acc)
        acc = lane48(acc)
        acc = lane49(acc)
        acc = lane50(acc)
        acc = lane51(acc)
        acc = lane52(acc)
        acc = lane53(acc)
        acc = lane54(acc)
        acc = lane55(acc)
        acc = lane56(acc)
        acc = lane57(acc)
        acc = lane58(acc)
        acc = lane59(acc)
        acc = lane60(acc)
        acc = lane61(acc)
        acc = lane62(acc)
        acc = lane63(acc)
        acc = lane64(acc)
        acc = lane65(acc)
        acc = lane66(acc)
        acc = lane67(acc)
        acc = lane68(acc)
        acc = lane69(acc)
        acc = lane70(acc)
        acc = lane71(acc)
        acc = lane72(acc)
        acc = lane73(acc)
        acc = lane74(acc)
        acc = lane75(acc)
        acc = lane76(acc)
        acc = lane77(acc)
        acc = lane78(acc)
        acc = lane79(acc)
        acc = lane80(acc)
        acc = lane81(acc)
        acc = lane82(acc)
        acc = lane83(acc)
        acc = lane84(acc)
        acc = lane85(acc)
        acc = lane86(acc)
        acc = lane87(acc)
        acc = lane88(acc)
        acc = lane89(acc)
        acc = lane90(acc)
        acc = lane91(acc)
        acc = lane92(acc)
        acc = lane93(acc)
        acc = lane94(acc)
        acc = lane95(acc)
        if (acc == Int.MIN_VALUE) {
            android.util.Log.v("DchihbkpormdcangvacrszDexLanes", "lane")
        }
    }
}
