import { StackScreenProps } from "@react-navigation/stack";
import { NavigationParamList } from "../type/navigationType";
import { View, Text } from "react-native";

export type AddCardScreenProps = StackScreenProps<NavigationParamList, 'AddCardScreen' >

const AddCardScreen = ({ navigation, route}: AddCardScreenProps) => {
    return (
        <View>
           <Text>Add Card Screen </Text> 
        </View>
    )
}

export default AddCardScreen