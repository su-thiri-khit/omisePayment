import {StackScreenProps} from '@react-navigation/stack';
import {NavigationParamList} from '../type/navigationType';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import Header from '../components/Header';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import AddCardBottomImageView from '../components/AddCardBottomImageView';

export type AddCardScreenProps = StackScreenProps<
  NavigationParamList,
  'AddCardScreen'
>;

const AddCardScreen = ({navigation, route}: AddCardScreenProps) => {
  const [cardNumber, setCardNumber] = useState('');

  const [cardName, setCardName] = useState('');

  const [expiryDate, setExpiryDate] = useState('');

  const [ccvNumber, setCCVNumber] = useState('');

  const onChangeCardNumber = (text: string) => {
    setCardNumber(text.replace(/[^0-9]/g, ''));
  };

  const onChangeCCVNumber = (text: string) => {
    setCCVNumber(text.replace(/[^0-9]/g, ''));
  };

  const CardNumberTextInputView: React.FC = () => (
    <View style={styles.textInputView}>
      <TextInput
        value={cardNumber}
        onChangeText={onChangeCardNumber}
        style={styles.textInputValue}
        placeholder="0000 0000 0000 0000"
        keyboardType="numeric"
        maxLength={16}
      />
      <View style={styles.cardNumberImagesView}>
        <Image
          source={require('../assets/images/ic_visa.png')}
          style={styles.cardNumberImage}
        />
        <Image
          source={require('../assets/images/ic_masterCard.png')}
          style={styles.cardNumberImage}
        />
        <Image
          source={require('../assets/images/ic_jcb.png')}
          style={styles.cardNumberImage}
        />
      </View>
    </View>
  );

  const CardNameTextInputView: React.FC = () => (
    <View style={styles.textInputView}>
      <TextInput
        value={cardName}
        onChangeText={setCardName}
        style={styles.textInputValue}
        placeholder="Ty Lee"
        maxLength={50}
      />
    </View>
  );

  const ExpiryDateTextInputView: React.FC = () => (
    <View style={styles.textInputView}>
      <TextInput
        value={expiryDate}
        onChangeText={setExpiryDate}
        style={styles.textInputValue}
        placeholder="MM/YY"
        maxLength={5}
      />
    </View>
  );

  const CCVTextInputView: React.FC = () => (
    <View style={styles.textInputView}>
      <TextInput
        value={ccvNumber}
        onChangeText={onChangeCCVNumber}
        style={styles.textInputValue}
        placeholder=""
        keyboardType="numeric"
        maxLength={3}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.flex}>
      <Header title="Add Card" onPressBackButton={() => navigation.pop()} />
      <View style={styles.container}>
        <Text style={[styles.titleText, {marginTop: 16}]}>
          ATM/Debit/Credit card number
        </Text>
        <CardNumberTextInputView />
        <Text style={[styles.titleText, {marginTop: 22}]}>Name on Card</Text>
        <CardNameTextInputView />
        <View style={styles.otherInfoContainer}>
          <View style={styles.otherInfoView}>
            <Text style={styles.titleText}>Expiry date</Text>
            <ExpiryDateTextInputView />
          </View>
          <View style={[styles.otherInfoView, {paddingLeft: 16}]}>
            <Text style={styles.titleText}>CCV</Text>
            <CCVTextInputView />
          </View>
        </View>
        <AddCardBottomImageView/>
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
  },
  titleText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  textInputView: {
    borderRadius: 5,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#E6E3E6',
    marginTop: 8,
    padding: 16,
    flexDirection: 'row',
  },
  textInputValue: {
    flex: 3,
    placeHolderColor: '#CDCDCD',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.8,
  },
  cardNumberImagesView: {
    flexDirection: 'row',
    flex: 1,
  },
  cardNumberImage: {
    width: 20,
    height: 15,
    resizeMode: 'contain',
    margin: 4,
  },
  otherInfoContainer: {
    marginTop: 22,
    flexDirection: 'row',
  },
  otherInfoView: {
    flex: 1,
  },
});
