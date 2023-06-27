import { StackScreenProps } from "@react-navigation/stack";
import { NavigationParamList } from "../navigations/AppNavigator";
import { View, Text } from "react-native";

export type CardListScreenProps = StackScreenProps<NavigationParamList, 'CardListScreen' >

const CardListScreen = ({ navigation, route}: CardListScreenProps) => {
    return (
        <View>
           <Text>Card List Screen </Text> 
        </View>
    )
}

export default CardListScreen