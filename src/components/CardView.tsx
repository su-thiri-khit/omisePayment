import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type CardViewProps = {
  onPressAddNewCard?: () => void;
};

const EmptyCardView: React.FC<CardViewProps> = ({onPressAddNewCard}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../assets/images/ic_addButton.png')}
        style={styles.visaImage}
      />
      <View style={styles.cardNumberView}>
        <Text
          style={[
            styles.cardNumberCircularText,
            {paddingRight: 24, alignSelf: 'center', justifyContent: 'center'},
          ]}>
          ....
        </Text>
        <Text style={[styles.cardNumberCircularText, {paddingRight: 24}]}>
          ....
        </Text>
        <Text style={[styles.cardNumberCircularText, {paddingRight: 24}]}>
          ....
        </Text>
        <Text style={styles.cardNumberCircularText}>3282</Text>
      </View>
      <View style={styles.infoView}>
        <View style={styles.nameView}>
          <Text style={styles.infoTitle}> Name on Card</Text>
          <Text style={styles.infoValue}> Ty Lee</Text>
        </View>
        <View style={styles.expiredInfoView}>
          <Text style={styles.infoTitle}> Expires</Text>
          <Text style={styles.infoValue}> 12/25</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EmptyCardView;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#26000000',
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 30,
  },
  visaImage: {
    width: 66,
    height: 20,
    marginTop: 32,
    marginBottom: 16,
  },
  cardNumberView: {
    flexDirection: 'row',
  },
  cardNumberCircularText: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: '500',
    letterSpacing: 1,
    color: '#808080',
  },
  infoView: {
    flexDirection: 'row',
    marginTop: 14,
  },
  nameView: {
    flex: 2,
    flexDirection: 'column',
  },
  expiredInfoView: {
    flex: 1,
  },
  infoTitle: {
    color: '#8F8F8F',
    fontSize: 10,
    fontWeight: '500'
  },
  infoValue: {
    color: '#000',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 22
  }
});
