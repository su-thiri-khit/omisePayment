import {createStackNavigator} from '@react-navigation/stack';
import {NavigationParamList, ScreenName} from '../type/navigationType';
import {NavigationContainer} from '@react-navigation/native';
import CardListScreen from '../screens/CardListScreen';
import AddCardScreen from '../screens/AddCardScreen';

const Stack = createStackNavigator<NavigationParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.CardList}
          component={CardListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.AddCard}
          component={AddCardScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
