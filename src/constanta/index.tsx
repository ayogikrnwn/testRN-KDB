import {Platform} from 'react-native';

export const SDK_KEY =
  'EVDxTzzivO5WMPIRgqGxGCpon2QMpllWFZ2trFUXTN-TR4M1NnCHsTkcPA8p47nzuUF-9XOHOAmT9OZleff30q';
export const ADS_initial = '85657b980a80cfbc';
export const INTERSTITIAL_AD_UNIT_ID = Platform.select({
  android: ADS_initial,
});
