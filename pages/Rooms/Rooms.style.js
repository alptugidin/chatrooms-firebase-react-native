import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    paddingTop: 5,
  },

  bg: {
    flex: 1,
    backgroundColor: colors.gray500,
    opacity: 0.6,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
});
