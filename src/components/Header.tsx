import {ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export type HeaderProps = {
  hasBackButton?: boolean;
  title: string;
  rightTitle?: ReactNode;
  children?: ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  hasBackButton = true,
  title = '',
  rightTitle,
  children,
}) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.leftView}>Header</Text>
      <Text style={styles.centerView}>Header</Text>
      <Text style={styles.rightView}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: 'yellow'
  },
  leftView: {
    flex: 1,
  },
  centerView: {
    flex: 3,
  },
  rightView: {
    flex: 1,
  }
});
