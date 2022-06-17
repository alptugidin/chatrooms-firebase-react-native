import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const base = StyleSheet.create({
  main: {
    backgroundColor: colors.orange200,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  touch: {
    width: '75%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});

export default {
  primary: StyleSheet.create({
    ...base,
    buttonText: {
      ...base.buttonText,
      color: 'white',
    },
    touch: {
      ...base.touch,
      backgroundColor: colors.orange400,
    },
  }),

  secondary: StyleSheet.create({
    ...base,
    buttonText: {
      ...base.buttonText,
      color: colors.orange400,
    },
    touch: {
      ...base.touch,
      backgroundColor: 'white',
    },
  }),
};
