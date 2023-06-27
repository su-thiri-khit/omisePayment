import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type EmptyCardViewProps = {
  onPressAddNewCard?: () => void;
};

const EmptyCardView: React.FC<EmptyCardViewProps> = ({onPressAddNewCard}) => {
  return (
    <View>
      <Image
        source={require('../assets/images/ic_addButton.png')}
        style={styles.card}
      />
      <Text style={styles.noCardsFoundText}>No Cards Found</Text>
      <Text style={styles.recommendationText}>
        We recommend adding a card {'\n'} for easy payment.
      </Text>
      <TouchableOpacity onPress={onPressAddNewCard}>
        <Text style={styles.addNewCardText}>Add New Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCardView;

const styles = StyleSheet.create({
  card: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  noCardsFoundText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 16,
  },
  recommendationText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 12,
  },
  addNewCardText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#4AD8DA'
  },
});
