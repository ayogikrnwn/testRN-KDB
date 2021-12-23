import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ICDiscuss, ICLessons, ICTests} from '../../assets/icon';
import {ILCourseVid} from '../../assets/illustration';
import {Header, IntersitialAds} from '../../component/molecules';
import AppLovinMAX from 'react-native-applovin-max';
import {useNavigation} from '@react-navigation/native';
import {ADS_initial, INTERSTITIAL_AD_UNIT_ID, SDK_KEY} from '../../constanta';

const DetailPage = () => {
  if (AppLovinMAX.isInterstitialReady(INTERSTITIAL_AD_UNIT_ID)) {
    AppLovinMAX.showInterstitial(INTERSTITIAL_AD_UNIT_ID);
  }
  AppLovinMAX.showBanner(INTERSTITIAL_AD_UNIT_ID);
  // }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type="vertwo" />
        <View style={styles.content}>
          <Text style={styles.titlehead}>Tags For Header</Text>
          <Text style={styles.desc}>3 of 11 Lessons</Text>
          <View style={styles.tab}>
            <Image source={ICLessons} />
            <Image source={ICTests} />
            <Image source={ICDiscuss} />
          </View>
          <View style={styles.vidContainer}>
            <Image source={ILCourseVid} style={{width: 335}} />
            <Text style={styles.titletext}>Introduction</Text>
            <Text style={styles.text}>
              You can launch a new career in web develop- ment today by learning
              HTML & CSS. You don't need a computer science degree or expensive
              software. All you need is a computer, a bit of time, a lot of
              determination, and a teacher you trust. Once the form data has
              been validated on the client-side, it is okay to submit the form.
              And, since we covered validation in the previous article, we're
              ready to submit! This article looks at what happens when a user
              submits a form — where does the data go, and how do we handle it
              when it gets there? We also look at some of the security concerns.
            </Text>
          </View>
        </View>
      </ScrollView>
      {AppLovinMAX.createBanner(
        ADS_initial,
        AppLovinMAX.AdViewPosition.BOTTOM_CENTER,
      )}
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingTop: 36,
  },
  titlehead: {
    fontFamily: 'Rubik-SemiBold',
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
  desc: {
    fontFamily: 'Rubik-Light',
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
  tab: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  vidContainer: {
    marginTop: 16,
  },
  titletext: {
    fontFamily: 'Rubik-SemiBold',
    color: 'black',
    fontSize: 20,
    marginTop: 24,
  },
  banner: {
    // Set background color for banners to be fully functional
    backgroundColor: '#000000',
    position: 'absolute',
    width: '100%',
    height: AppLovinMAX.isTablet() ? 90 : 50,
    bottom: Platform.select({
      ios: 36, // For bottom safe area
      android: 0,
    }),
  },
  text: {
    fontFamily: 'Rubik-Light',
    color: 'black',
    fontSize: 14,
    marginTop: 4,
  },
});
