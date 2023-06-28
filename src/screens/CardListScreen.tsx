import {StackScreenProps} from '@react-navigation/stack';
import {NavigationParamList, ScreenName} from '../type/navigationType';
import {SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';
import EmptyCardView from '../components/EmptyCardView';
import CardView from '../components/CardView';

export type CardListScreenProps = StackScreenProps<
  NavigationParamList,
  'CardListScreen'
>;

const CardListScreen = ({navigation, route}: CardListScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Cards"
        hasBackButton={false}
        rightTitle={
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenName.AddCard)}
            style={styles.addButtonView}>
            <Image
              source={require('../assets/images/ic_addButton.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        }
      />
      {/* <View style={styles.emptyCardView}>
        <EmptyCardView />
      </View> */}
      <CardView />
    </SafeAreaView>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  emptyCardView: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  addButtonView: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
