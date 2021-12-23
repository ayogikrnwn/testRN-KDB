import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICback} from '../../../assets/icon';

const Vertwo = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.container}>
      <Image source={ICback} />
      <View style={{flex: 1, marginTop: 4}}>
        <Text style={styles.title}>HTML</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Vertwo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Rubik-SemiBold',
    color: 'black',
    fontSize: 24,
    marginLeft: -20,
  },
});
