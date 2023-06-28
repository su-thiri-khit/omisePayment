import { ReactNode } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type HeaderProps = {
  hasBackButton?: boolean;
  onPressBackButton?: () => void;
  title: string;
  rightTitle?: ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  hasBackButton = true,
  onPressBackButton,
  title = '',
  rightTitle
}) => {
  return (
    <View style={styles.headerView}>
      {hasBackButton && (
        <TouchableOpacity
          onPress={onPressBackButton && onPressBackButton}
          style={styles.backButtonView}>
          <Image
            source={require('../assets/images/ic_backButton.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
      {rightTitle && rightTitle}
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
    width: 20,
    height: 20,
    resizeMode: 'contain',    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
});
