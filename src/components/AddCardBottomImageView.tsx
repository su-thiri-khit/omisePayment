import {View, Image, StyleSheet} from 'react-native';

const AddCardBottomImageView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/ic_verified_by_visa.png')}
        style={[styles.image, {marginRight : 20}]}
      />
      <Image
        source={require('../assets/images/ic_masterCard_securecode.png')}
        style={[styles.image, {marginRight: 20}]}
      />
      <Image
        source={require('../assets/images/ic_omise.png')}
        style={styles.image}
      />
    </View>
  );
};

export default AddCardBottomImageView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  image: {
    width: 40,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
});
