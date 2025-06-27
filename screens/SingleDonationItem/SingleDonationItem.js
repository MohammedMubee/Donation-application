import React from 'react';

import style from './style';
import { useSelector } from 'react-redux';
import { Image, ScrollView, View, Text } from 'react-native';
import BackButton from '../../component/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Badge from '../../component/Badges/Badge';
import Header from '../../component/Header/Header';
import Button from '../../component/Button/Button';
import { Routes } from '../../navigation/Routes';
const SingleDonationItem = ({ navigation, route }) => {
 const navigatio = useNavigation();

  const handleDonatePress = () => {
    navigatio.navigate(Routes.PaymentScreen); // or just 'PaymentScreen' if you're not using a constant
  };
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const categoryInformation = route.params.categoryInformation;
  console.log(donationItemInformation, 'fooo');
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <Image
          source={{ uri: donationItemInformation.image }}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>{donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}  onPress={handleDonatePress}>
        <Button title={"Donate"} onPress={() => navigation.navigate('PaymentScreen')} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
