import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type HeaderProps = {
  hasBackButton?: boolean;
  title: string;
//   rightTitle?: ReactNode;
//   children?: ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  hasBackButton = true,
  title = '',
//   rightTitle,
//   children,
}) => {
  return (
    <View style={styles.headerView}>
      {hasBackButton && (
        <TouchableOpacity
          onPress={() => console.log('On press back ')}
          style={styles.backButtonView}>
          <Image
            source={require('../assets/images/ic_backButton.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => console.log('On press add ')}
        style={styles.addButtonView}>
        <Image
          source={require('../assets/images/ic_addButton.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backButtonView: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
  addButtonView: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
