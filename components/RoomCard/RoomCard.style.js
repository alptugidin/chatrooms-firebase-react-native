import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const style = StyleSheet.create({
  main: {
    width: 180,
    height: 180,
    marginVertical: 5,
    borderWidth: 1,
    backgroundColor: colors.gray50,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: colors.gray200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 23,
    color: colors.orange400,
  },
});
