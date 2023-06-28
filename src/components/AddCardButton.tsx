import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AddCardButton: React.FC = () => {
  const {styles} = useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.addCardText}> Add Card </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCardButton;

function useStyles() {
  const insets = useSafeAreaInsets();
  return {
    styles: StyleSheet.create({
      container: {
        position: 'absolute',
        left: 22,
        right: 22,
        bottom:
          insets.bottom === 0
            ? 24 // iphone without notch (e.g. iPhone 8)
            : 28, // iphone with notch (e.g. iPhone 13 Pro Max)
      },
      buttonView: {
        borderRadius: 22,
        backgroundColor: '#4AD8DA',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      addCardText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.1,
      },
    }),
  };
}
