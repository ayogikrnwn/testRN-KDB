import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {ILCourse} from '../../../assets/illustration';

const Card = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={ILCourse} style={styles.img} />
      <View style={{paddingHorizontal: 16, paddingTop: 16}}>
        <Text style={styles.time}>3h 30min</Text>
        <Text style={styles.title}>UI</Text>
        <Text style={styles.desc}>Advanced Mobile Interface</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 297,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 10,
  },
  img: {
    width: 323,
  },
  time: {
    fontFamily: 'Rubik-Regular',
    color: '#5BA092',
    fontSize: 12,
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    marginBottom: 4,
  },
  desc: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
  },
});
