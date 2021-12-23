import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ICAlert} from '../../../assets/icon';
import Vertwo from './Vertwo';

const Header = ({type}) => {
  const navigation = useNavigation();

  if (type == 'vertwo') {
    return <Vertwo />;
  }
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.greet}>Hello</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={ICAlert} />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>Ayogi Kurniawan</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  greet: {
    fontFamily: 'Rubik-Medium',
    color: 'black',
    fontSize: 16,
  },
  name: {
    fontFamily: 'Rubik-Bold',
    color: 'black',
    fontSize: 30,
    marginTop: -24,
  },
});
