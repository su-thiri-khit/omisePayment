import {StackScreenProps} from '@react-navigation/stack';
import {NavigationParamList} from '../type/navigationType';
import { SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/Header';


export type CardListScreenProps = StackScreenProps<
  NavigationParamList,
  'CardListScreen'
>;

const CardListScreen = ({navigation, route}: CardListScreenProps) => {
  return (
    <SafeAreaView style={styles.flex}>
      <Header title='Cards' hasBackButton={false}/>
    </SafeAreaView>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  flex: {flex: 1},
});
