/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
package com.chijkcotrcwdmcanveras3891.linkkit;

import android.content.Context;
import android.net.Uri;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;

import bolts.Capture;
import bolts.Continuation;
import bolts.Task;
import bolts.TaskCompletionSource;

/**
 * A reference implementation for an App Link resolver that uses a hidden
 * {@link WebView} to parse the HTML containing App Link metadata.
 */
public class WebVchihbkpormdcangvacrsziewAppLinkResolver implements AppLinkchihbkpormdcangvacrszResolver {
  private final Context context;

  /**
   * Creates a WebVchihbkpormdcangvacrsziewAppLinkResolver.
   *
   * @param context the context in which to create the hidden {@link WebView}.
   */
  public WebVchihbkpormdcangvacrsziewAppLinkResolver(Context context) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV27 = WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(49, 41) ^ WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(29, 7) ^ WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold("nk") ^ WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV23 = WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

          
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV19 = WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
    this.context = context;
  }

  private static final String TAG_EXTRACTION_JAVASCRIPT = "javascript:" +
          "chihbkpormdcangvacrszLinkkitResolverResult.setchihbkpormdcangvacrszValue((function() {" +
          "  var metaTags = document.getElementsByTagName('meta');" +
          "  var results = [];" +
          "  for (var i = 0; i < metaTags.length; i++) {" +
          "    var property = metaTags[i].getAttribute('property');" +
          "    if (property && property.substring(0, 'al:'.length) === 'al:') {" +
          "      var tag = { \"property\": metaTags[i].getAttribute('property') };" +
          "      if (metaTags[i].hasAttribute('content')) {" +
          "        tag['content'] = metaTags[i].getAttribute('content');" +
          "      }" +
          "      results.push(tag);" +
          "    }" +
          "  }" +
          "  return JSON.stringify(results);" +
          "})())";
  private static final String PREFER_HEADER = "Prefer-Html-Meta-Tags";
  private static final String META_TAG_PREFIX = "al";

  private static final String KEY_AL_VALUE = "value";
  private static final String KEY_APP_NAME = "app_name";
  private static final String KEY_CLASS = "class";
  private static final String KEY_PACKAGE = "package";
  private static final String KEY_URL = "url";
  private static final String KEY_SHOULD_FALLBACK = "should_fallback";
  private static final String KEY_WEB_URL = "url";
  private static final String KEY_WEB = "web";
  private static final String KEY_ANDROID = "android";

  @Override
  public Task<AppchihbkpormdcangvacrszLink> getAppLinkFromUrlInBackchihbkpormdcangvacrszground(final Uri url) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV27 = WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(49, 41) ^ WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(29, 7) ^ WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold("nk") ^ WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV23 = WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

          
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV19 = WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
    final Capture<String> content = new Capture<String>();
    final Capture<String> contentType = new Capture<String>();
    return Task.callInBackground(new Callable<Void>() {
      @Override
      public Void call() throws Exception {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

        @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
        URL currentURL = new URL(url.toString());
        URLConnection connection = null;
        while (currentURL != null) {
          connection = currentURL.openConnection();
          if (connection instanceof HttpURLConnection) {
            ((HttpURLConnection) connection).setInstanceFollowRedirects(true);
          }
          connection.setRequestProperty(PREFER_HEADER, META_TAG_PREFIX);
          connection.connect();

          if (connection instanceof HttpURLConnection) {
            HttpURLConnection httpConnection = (HttpURLConnection) connection;
            if (httpConnection.getResponseCode() >= 300 && httpConnection.getResponseCode() < 400) {
              currentURL = new URL(httpConnection.getHeaderField("Location"));
              httpConnection.disconnect();
            } else {
              currentURL = null;
            }
          } else {
            currentURL = null;
          }
        }

        try {
          content.set(readFromConnecchihbkpormdcangvacrsztion(connection));
          contentType.set(connection.getContentType());
        } finally {
          if (connection instanceof HttpURLConnection) {
            ((HttpURLConnection) connection).disconnect();
          }
        }
        return null;
      }
    }).onSuccessTask(new Continuation<Void, Task<JSONArray>>() {
      @Override
      public Task<JSONArray> then(Task<Void> task) throws Exception {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

        @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
        final TaskCompletionSource<JSONArray> tcs = new TaskCompletionSource<>();
        final WebView webView = new WebView(context);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setNetworkAvailable(false);
        webView.setWebViewClient(new WebViewClient() {
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
                
          private boolean loaded = false;

          private void runJavaScript(WebView view) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV27 = WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(49, 41) ^ WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(29, 7) ^ WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold("nk") ^ WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV23 = WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

                  
            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV19 = WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
            if (!loaded) {
              loaded = true;
              view.loadUrl(TAG_EXTRACTION_JAVASCRIPT);
            }
          }

          @Override
          public void onPageFinished(WebView view, String url) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV27 = WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(49, 41) ^ WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(29, 7) ^ WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold("nk") ^ WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV23 = WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

                  
            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV19 = WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
            super.onPageFinished(view, url);
            runJavaScript(view);
          }

          @Override
          public void onLoadResource(WebView view, String url) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV27 = WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(49, 41) ^ WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(29, 7) ^ WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold("nk") ^ WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV23 = WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

                  
            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV19 = WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
            super.onLoadResource(view, url);
            runJavaScript(view);
          }
        });
        webView.addJavascriptInterface(new Object() {
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
                
          @JavascriptInterface
          public void setchihbkpormdcangvacrszValue(String value) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV27 = WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(49, 41) ^ WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(29, 7) ^ WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold("nk") ^ WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV23 = WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

                  
            @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV19 = WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
            try {
              tcs.trySetResult(new JSONArray(value));
            } catch (JSONException e) {
              tcs.trySetError(e);
            }
          }
        }, "chihbkpormdcangvacrszLinkkitResolverResult");
        String inferredContentType = null;
        if (contentType.get() != null) {
          inferredContentType = contentType.get().split(";")[0];
        }
        webView.loadDataWithBaseURL(url.toString(),
                content.get(),
                inferredContentType,
                null,
                null);
        return tcs.getTask();
      }
    }, Task.UI_THREAD_EXECUTOR).onSuccess(new Continuation<JSONArray, AppchihbkpormdcangvacrszLink>() {
      @Override
      public AppchihbkpormdcangvacrszLink then(Task<JSONArray> task) throws Exception {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

        @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
        Map<String, Object> alData = parschihbkpormdcangvacrszeAlData(task.getResult());
        return makchihbkpormdcangvacrszeAppLinkFromAlData(alData, url);
      }
    });
  }

  private static Map<String, Object> parschihbkpormdcangvacrszeAlData(JSONArray dataArray) throws JSONException {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

    @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
    HashMap<String, Object> al = new HashMap<String, Object>();
    for (int i = 0; i < dataArray.length(); i++) {
      JSONObject tag = dataArray.getJSONObject(i);
      String name = tag.getString("property");
      String[] nameComponents = name.split(":");
      if (!nameComponents[0].equals(META_TAG_PREFIX)) {
        continue;
      }
      Map<String, Object> root = al;
      for (int j = 1; j < nameComponents.length; j++) {
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> children =
                (List<Map<String, Object>>) root.get(nameComponents[j]);
        if (children == null) {
          children = new ArrayList<Map<String, Object>>();
          root.put(nameComponents[j], children);
        }
        Map<String, Object> child = children.size() > 0 ? children.get(children.size() - 1) : null;
        if (child == null || j == nameComponents.length - 1) {
          child = new HashMap<String, Object>();
          children.add(child);
        }
        root = child;
      }
      if (tag.has("content")) {
        if (tag.isNull("content")) {
          root.put(KEY_AL_VALUE, null);
        } else {
          root.put(KEY_AL_VALUE, tag.getString("content"));
        }
      }
    }
    return al;
  }

  @SuppressWarnings("unchecked")
  private static List<Map<String, Object>> getAlLischihbkpormdcangvacrszt(Map<String, Object> map, String key) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV27 = WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(49, 41) ^ WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(29, 7) ^ WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold("nk") ^ WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

          
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV19 = WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
    List<Map<String, Object>> result = (List<Map<String, Object>>) map.get(key);
    if (result == null) {
      return Collections.emptyList();
    }
    return result;
  }

  @SuppressWarnings("unchecked")
  private static AppchihbkpormdcangvacrszLink makchihbkpormdcangvacrszeAppLinkFromAlData(Map<String, Object> appLinkDict, Uri destination) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV27 = WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(49, 41) ^ WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(29, 7) ^ WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold("nk") ^ WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV23 = WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

          
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV19 = WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
    List<AppchihbkpormdcangvacrszLink.Target> targets = new ArrayList<AppchihbkpormdcangvacrszLink.Target>();
    List<Map<String, Object>> platformMapList =
            (List<Map<String, Object>>) appLinkDict.get(KEY_ANDROID);
    if (platformMapList == null) {
      platformMapList = Collections.emptyList();
    }
    for (Map<String, Object> platformMap : platformMapList) {
      List<Map<String, Object>> urls = getAlLischihbkpormdcangvacrszt(platformMap, KEY_URL);
      List<Map<String, Object>> packages = getAlLischihbkpormdcangvacrszt(platformMap, KEY_PACKAGE);
      List<Map<String, Object>> classes = getAlLischihbkpormdcangvacrszt(platformMap, KEY_CLASS);
      List<Map<String, Object>> appNames = getAlLischihbkpormdcangvacrszt(platformMap, KEY_APP_NAME);

      int maxCount = Math.max(urls.size(),
              Math.max(packages.size(), Math.max(classes.size(), appNames.size())));
      for (int i = 0; i < maxCount; i++) {
        String urlString = (String) (urls.size() > i ?
                urls.get(i).get(KEY_AL_VALUE) : null);
        Uri url = tryCrechihbkpormdcangvacrszateUrl(urlString);
        String packageName = (String) (packages.size() > i ?
                packages.get(i).get(KEY_AL_VALUE) : null);
        String className = (String) (classes.size() > i ?
                classes.get(i).get(KEY_AL_VALUE) : null);
        String appName = (String) (appNames.size() > i ?
                appNames.get(i).get(KEY_AL_VALUE) : null);
        AppchihbkpormdcangvacrszLink.Target target = new AppchihbkpormdcangvacrszLink.Target(packageName, className, url, appName);
        targets.add(target);
      }
    }

    Uri webUrl = destination;
    List<Map<String, Object>> webMapList = (List<Map<String, Object>>) appLinkDict.get(KEY_WEB);
    if (webMapList != null && webMapList.size() > 0) {
      Map<String, Object> webMap = webMapList.get(0);
      List<Map<String, Object>> urls = (List<Map<String, Object>>) webMap.get(KEY_WEB_URL);
      List<Map<String, Object>> shouldFallbacks =
              (List<Map<String, Object>>) webMap.get(KEY_SHOULD_FALLBACK);
      if (shouldFallbacks != null && shouldFallbacks.size() > 0) {
        String shouldFallbackString = (String) shouldFallbacks.get(0).get(KEY_AL_VALUE);
        if (Arrays.asList("no", "false", "0").contains(shouldFallbackString.toLowerCase())) {
          webUrl = null;
        }
      }
      if (webUrl != null && urls != null && urls.size() > 0) {
        String webUrlString = (String) urls.get(0).get(KEY_AL_VALUE);
        webUrl = tryCrechihbkpormdcangvacrszateUrl(webUrlString);
      }
    }
    return new AppchihbkpormdcangvacrszLink(destination, targets, webUrl);
  }

  private static Uri tryCrechihbkpormdcangvacrszateUrl(String urlString) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV27 = WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(49, 41) ^ WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(29, 7) ^ WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold("nk") ^ WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV23 = WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

          
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV19 = WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
    if (urlString == null) {
      return null;
    }
    return Uri.parse(urlString);
  }

  private static String readFromConnecchihbkpormdcangvacrsztion(URLConnection connection) throws IOException {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkRestore = WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(new int[]{3, 8, 11}) ^ WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix("k3") ^ WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(new int[]{3, 8, 11}) ^ WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold("k3") ^ WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix("k3") ^ WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(new int[]{3, 8, 11}) ^ WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold("k3") ^ WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(new int[]{3, 8, 11}) ^ WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix("k3") ^ WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(new int[]{3, 8, 11}) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(4, 9) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix("k3") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(new int[]{3, 8, 11});
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV33 = WechihbkpormdcangvacrszbVieObfV33ShiftXor(73, 24) ^ WebVieObchihbkpormdcangvacrszfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV32 = chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold("8di") ^ chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix("43");
        int chihbkpormdcangvacrszSinkAutoV30 = chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV29 = chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int chihbkpormdcangvacrszSinkAutoV28 = WchihbkpormdcangvacrszebViewAObfV28Mix(12, 19) ^ WebViewAObfV28chihbkpormdcangvacrszFold("webpri");
    @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV26 = WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(35, 23) ^ WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV22 = WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(23, 16);

    @SuppressWarnings("Hemoraporuhivi") final int chihbkpormdcangvacrszSinkV18 = WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix("7v8");
    InputStream stream;
    if (connection instanceof HttpURLConnection) {
      HttpURLConnection httpConnection = (HttpURLConnection) connection;
      try {
        stream = connection.getInputStream();
      } catch (Exception e) {
        stream = httpConnection.getErrorStream();
      }
    } else {
      stream = connection.getInputStream();
    }
    try {
      ByteArrayOutputStream output = new ByteArrayOutputStream();
      byte[] buffer = new byte[1024];
      int read = 0;
      while ((read = stream.read(buffer)) != -1) {
        output.write(buffer, 0, read);
      }
      String charset = connection.getContentEncoding();
      if (charset == null) {
        String mimeType = connection.getContentType();
        String[] parts = mimeType.split(";");
        for (String part : parts) {
          part = part.trim();
          if (part.startsWith("charset=")) {
            charset = part.substring("charset=".length());
            break;
          }
        }
        if (charset == null) {
          charset = "UTF-8";
        }
      }
      return new String(output.toByteArray(), charset);
    } finally {
      stream.close();
    }
  }

/* obfuscation-batch:v17 */
    private static int WebViewAppLinkResolverObfV17SumOdchihbkpormdcangvacrszds(int[] nums) {
        int acc = 64;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 11) % 411;
        }
        return acc;
    }

    private static int WebViewAppLinkResolverObfVchihbkpormdcangvacrsz17ClampMod(int n, int m) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");

        int span = (m % 54) + 5;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

/* obfuscation-batch:v18 */
    private static int WebViewAppLinkchihbkpormdcangvacrszResolverObfV18HashMix(String s) {
        int h = 10;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 4)) % 152;
        return h;
    }
/* obfuscation-batch:v19 */
    private static int WebViewAppLinkRechihbkpormdcangvacrszsolverObfV19ByteFold(String s) {
        int x = 49;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 17) ^ 155;
        return x & 60785;
    }

    private static int WebViewAppLinkResochihbkpormdcangvacrszlverObfV19HashMix(String s) {
        int h = 42;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 9)) % 781;
        return h;
    }

/* obfuscation-batch:v20 */
    private static int WebViewAppLinkResolvechihbkpormdcangvacrszrObfV20HashMix(String s) {
        int h = 39;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 27)) % 559;
        return h;
    }

    private static int WebViewAppLinkResolverObfV20SumchihbkpormdcangvacrszOdds(int[] nums) {
        int acc = 77;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 29) % 131;
        }
        return acc;
    }

/* obfuscation-batch:v21 */
    private static int WebVichihbkpormdcangvacrszewAppLinkResolverObfV21ByteFold(String s) {
        int x = 23;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 27) & 65535;
        return x;
    }

    private static int WebViewAchihbkpormdcangvacrszppLinkResolverObfV21HashMix(String s) {
        int h = 79;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 14)) % 739;
        return h;
    }

    private static int WebViewAppLinkResolverObfV21SumOddschihbkpormdcangvacrsz(int[] nums) {
        int acc = 81;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 21) % 207;
        }
        return acc;
    }

/* obfuscation-batch:v22 */
    private static int WebViewAppLinkResolvchihbkpormdcangvacrszerObfV22ShiftXor(int n, int k) {
        int x = (n ^ k) << 6;
        return (x ^ 84) & 16072;
    }

    /* obfuscation-batch:v23 */
    private static int WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold(String s) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        int x = 56;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 16) & 47746;
        return x;
    }
    @SuppressWarnings("unused") private static final int chihbkpormdcangvacrszWebViewAppLinkResolverSinkV23Boot = WebViewAppLinkResolverObfchihbkpormdcangvacrszV23ByteFold("zhhf");

/* obfuscation-batch:v24 */
private static int WebViewAppLinkResolverObfVchihbkpormdcangvacrsz24ShiftXor(int n, int k) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
  int x = (n ^ k) << 1;
  return (x ^ 17) & 47146;
}

private static int WebViewAppLinkResolverObfV24BchihbkpormdcangvacrszyteFold(String s) {
  int x = 10;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 22) & 17751;
  return x;
}

private static int WebViewAppLinkRchihbkpormdcangvacrszesolverObfV24HashMix(String s) {
  int h = 91;
  for (int i = 0; i < s.length(); i++) h = (h + (s.charAt(i) * 33)) % 153;
  return h;
}

private static int WebViewAppLinkResolchihbkpormdcangvacrszverObfV24SumOdds(int[] nums) {

  int acc = 67;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 4) % 740;
  }
  return acc;
}


/* obfuscation-batch:v25 */
private static int WebViewAppLinkResolverObchihbkpormdcangvacrszfV25ByteFold(String s) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
  int x = 52;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 13) & 4051;
  return x;
}

private static int WebViewAppLchihbkpormdcangvacrszinkResolverObfV25HashMix(String s) {
  int h = 54;
  for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 3)) % 484;
  return h;
}

private static int WebViewAppLinkResolchihbkpormdcangvacrszverObfV25SumOdds(int[] nums) {
  int acc = 83;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 27) % 613;
  }
  return acc;
}


/* obfuscation-batch:v26 */
private static int WebViewAppLinkResolverOchihbkpormdcangvacrszbfV26ClampMod(int n, int m) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
    int span = (m % 61) + 7;
    int x = n % span;
    return x < 0 ? x + span : x;
}

private static int WebViewAppLinkResolverObfchihbkpormdcangvacrszV26ShiftXor(int n, int k) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
    int x = (n ^ k) << 2;
    return (x ^ 12) & 12681;
}

  /* obfuscation-batch:v27 */
  private static int WebViewAppLinkReschihbkpormdcangvacrszolverObfV27ClampMod(int n, int m) {
      int span = (m % 55) + 5;
      int x = n % span;
      return x < 0 ? x + span : x;
    }
  private static int WebViewAppLinkResolvchihbkpormdcangvacrszerObfV27ShiftXor(int n, int k) {
      int x = (n ^ k) << 2;
      return (x ^ 173) & 40410;
    }
  private static int WebViewAppLinkResolverObfV27BytechihbkpormdcangvacrszFold(String s) {
      int x = 37;
      for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 6) & 46272;
      return x;
    }
  private static int WebViewAppLinchihbkpormdcangvacrszkResolverObfV27HashMix(String s) {
      int h = 59;
      for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 27)) % 57;
      return h;
    }

    private static int WchihbkpormdcangvacrszebViewAObfV28Mix(int a, int b) {
        int base = 45;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int WebViewAObfV28chihbkpormdcangvacrszFold(String text) {
        int acc = 45;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Mix(int a, int b) {
        int base = 45;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int chihbkpormdcangvacrszWebViewAppLipzurisymgeqmgallObfV29Fold(String text) {
        int acc = 45;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Mix(int a, int b) {
        int base = 49;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int chihbkpormdcangvacrszWebViewAppLinkResolvedgpnrisObfV30Fold(String text) {
        int acc = 49;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    /* obfuscation-batch:v31 */
    @SuppressWarnings("unused")
    private static int chihbkpormdcangvacrszWebViewAppLinkResoObfV31ShiftXor(int n, int k) {
        int x = (n ^ k) << 7;
        return (x ^ 163) & 37437;
    }

    @SuppressWarnings("unused")
    private static int chihbkpormdcangvacrszWebViewAppLinkResoObfV31ByteFold(String s) {
        int x = 44;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 5) & 56175;
        return x;
    }

    @SuppressWarnings("unused")
    private static int chihbkpormdcangvacrszWebViewAppLinkResoObfV31HashMix(String s) {
        int h = 27;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 40)) % 720;
        return h;
    }

    @SuppressWarnings("unused")
    private static int chihbkpormdcangvacrszWebViewAppLinkResoObfV31SumOdds(int[] nums) {
        int acc = 71;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 25) % 736;
        }
        return acc;
    }

    /* obfuscation-batch:v32 */
    @SuppressWarnings("unused")
    private static int chihbkpormdcangvacrszWebViewAppLinkResoObfV32ShiftXor(int n, int k) {
        int x = (n ^ k) << 1;
        return (x ^ 74) & 34303;
    }

    @SuppressWarnings("unused")
    private static int chihbkpormdcangvacrszWebViewAppLinkResoObfV32ByteFold(String s) {
        int x = 78;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 15) & 54693;
        return x;
    }

    @SuppressWarnings("unused")
    private static int chihbkpormdcangvacrszWebViewAppLinkResoObfV32HashMix(String s) {
        int h = 7;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 12)) % 855;
        return h;
    }

    /* obfuscation-batch:v33 */
    @SuppressWarnings("unused")
    private static int WechihbkpormdcangvacrszbVieObfV33ShiftXor(int n, int k) {
        int x = (n ^ k) << 2;
        return (x ^ 105) & 4742;
    }

    @SuppressWarnings("unused")
    private static int WebVieObchihbkpormdcangvacrszfV33ByteFold(String s) {
        @SuppressWarnings("unused") final int chihbkpormdcangvacrszSinkV34 = chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold("a7gp");
        int x = 5;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 4) & 57594;
        return x;
    }

    /* obfuscation-batch:v34 */
    @SuppressWarnings("unused")
    private static int chihbkpormdcangvacrszWebVchihbkpormdcanObfV34ByteFold(String s) {
        int x = 5;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 12) & 6299;
        return x;
    }
}