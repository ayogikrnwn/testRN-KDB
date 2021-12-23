/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useState} from 'react';
import {StyleSheet, LogBox} from 'react-native';
import {Home} from './pages';
import Router from './Router';
import AppLovinMAX from 'react-native-applovin-max';

import {NavigationContainer} from '@react-navigation/native';
import {INTERSTITIAL_AD_UNIT_ID, SDK_KEY} from './constanta';
LogBox.ignoreAllLogs();
const App: () => Node = () => {
  const [retryAttempt, setRetryAttempt] = useState(0);

  function initialAds() {
    AppLovinMAX.addEventListener('OnInterstitialLoadedEvent', () => {
      // Interstitial ad is ready to be shown.
      AppLovinMAX.isInterstitialReady(INTERSTITIAL_AD_UNIT_ID); //will now return 'true'

      // Reset retry attempt
      setRetryAttempt(0);
    });
    AppLovinMAX.addEventListener('OnInterstitialLoadFailedEvent', () => {
      // Interstitial ad failed to load
      // We recommend retrying with exponentially higher delays up to a maximum delay (in this case 64 seconds)

      setRetryAttempt(retryAttempt + 1);
      var retryDelay = Math.pow(2, Math.min(6, retryAttempt));

      console.log(
        'Interstitial ad failed to load - retrying in ' + retryDelay + 's',
      );

      setTimeout(function () {
        loadInterstitial();
      }, retryDelay * 10000);
    });
    AppLovinMAX.addEventListener('OnInterstitialClickedEvent', e => {
      console.log(e);
    });
    AppLovinMAX.addEventListener('OnInterstitialDisplayedEvent', e => {
      console.log('Banner ad loaded from ' + e.networkName);
    });
    AppLovinMAX.addEventListener('OnInterstitialAdFailedToDisplayEvent', e => {
      // Interstitial ad failed to display. We recommend loading the next ad
      console.log(e);
      loadInterstitial();
    });
    AppLovinMAX.addEventListener('OnInterstitialHiddenEvent', () => {
      // loadInterstitial();
    });

    // Load the first interstitial
    loadInterstitial();
  }
  function loadInterstitial() {
    AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
  }
  function bannerAds() {
    AppLovinMAX.addEventListener('OnBannerAdLoadedEvent', adInfo => {
      console.log('Banner ad loaded from ' + adInfo.networkName);
    });
    AppLovinMAX.addEventListener('OnBannerAdLoadFailedEvent', errorInfo => {
      console.log(
        'Banner ad failed to load with error code ' +
          errorInfo.code +
          ' and message: ' +
          errorInfo.message,
      );
    });
    AppLovinMAX.addEventListener('OnBannerAdClickedEvent', adInfo => {
      console.log('Banner ad clicked');
    });
    AppLovinMAX.addEventListener('OnBannerAdExpandedEvent', adInfo => {
      console.log('Banner ad expanded');
    });
    AppLovinMAX.addEventListener('OnBannerAdCollapsedEvent', adInfo => {
      console.log('Banner ad collapsed');
    });
  }
  AppLovinMAX.initialize(SDK_KEY, configuration => {
    console.log('init detail');
    // Banner Ad Listeners
    initialAds();
    bannerAds();
  });

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
