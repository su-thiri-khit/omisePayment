import {StackScreenProps} from '@react-navigation/stack';
import {NavigationParamList} from '../type/navigationType';
import {SafeAreaView, StyleSheet, View} from 'react-native';
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
      <Header title="Cards" hasBackButton={false} />
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
});
