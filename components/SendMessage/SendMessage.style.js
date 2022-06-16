import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
export const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },

  inputView: {
    width: Dimensions.get('window').width - 67,
  },
  input: {
    backgroundColor: colors.gray200,
    borderRadius: 25,
    fontSize: 17,
    paddingHorizontal: 10,
  },
  iconView: {
    justifyContent: 'flex-end',
  },
});
