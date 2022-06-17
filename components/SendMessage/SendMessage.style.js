import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
export const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 25,
  },

  inputView: {
    width: Dimensions.get('window').width - 67,
    borderRadius: 99,
  },
  input: {
    backgroundColor: colors.gray200,
    borderRadius: 25,
    fontSize: 17,
    paddingHorizontal: 15,
    color: colors.gray600,
  },
  iconView: {
    justifyContent: 'flex-end',
  },
});
