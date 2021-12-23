import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {ICcss, ICSwift, ICui, ICux} from '../../assets/icon';
import {Card, Header, Input} from '../../component/molecules';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input label="" onChangeText={() => {}} placeholder="Search Course" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 12,
            }}>
            <Text
              style={{
                fontFamily: 'Rubik-Medium',
                color: 'black',
                fontSize: 14,
                paddingTop: 3,
              }}>
              Category
            </Text>
            <Image source={ICcss} />
            <Image source={ICux} />
            <Image source={ICSwift} />
            <Image source={ICui} />
          </View>
          <View style={{paddingTop: 23, paddingBottom: 40}}>
            <Card onPress={() => navigation.navigate('DetailPage')} />
            <Card onPress={() => navigation.navigate('DetailPage')} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  content: {
    paddingTop: 12,
  },
});
