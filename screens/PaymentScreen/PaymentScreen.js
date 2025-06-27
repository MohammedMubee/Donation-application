import TextBox from '../../component/TextBox/TexBox';
import { Linking, Alert } from 'react-native';
import { View, Keyboard } from 'react-native';
import { style } from './style';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../component/BackButton/BackButton';
import Header from '../../component/Header/Header';
import Button from '../../component/Button/Button';
export const PaymentScreen = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const sendToWhatsApp = () => {
    const phoneWithCountryCode = '916381065059'; // Example: India (+91)
    const message = 'Hello, this is a test message from my app!';

    const url = `whatsapp://send?phone=${phoneWithCountryCode}&text=${encodeURIComponent(
      message,
    )}`;

    Linking.openURL(url).catch(() => {
      Alert.alert('WhatsApp is not installed or phone number is invalid');
    });
  };
  return (
    <SafeAreaView>
      <View style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={style.header}>
          <Header title={'My Card Payment'} type={1} />
        </View>
        <View style={style.textAreaContainer}>
          <TextBox
            label="Card Holder Name"
            value={cardHolder}
            onChangeText={setCardHolder}
            placeholder="Enter your name"
            editable={true}
            // style={{""}}
          />
          <TextBox
            label="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="Enter your name"
            editable={true}
            // style={{""}}
          />
          <View style={style.textArea}>
            <View style={{ flex: 1, marginRight: 15 }}>
              <TextBox
                label="Expired Date"
                placeholder="MM/YY"
                value={expiry}
                onChangeText={setExpiry}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TextBox
                label="CVV"
                placeholder="CVV"
                value={cvv}
                onChangeText={setCvv}
              />
            </View>
          </View>
        </View>
        <View style={style.button}>
          <Button title={'Confirm Payment'} onPress={sendToWhatsApp} />
        </View>
      </View>
    </SafeAreaView>
  );
};
