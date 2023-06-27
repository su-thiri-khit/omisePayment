import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CardListScreen from '../screens/CardListScreen';

export type NavigationParamList = {
  CardListScreen: undefined;
  AddCardListScreen: undefined;
};

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CardList'>
        <Stack.Screen
          name="CardList"
          component={CardListScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
