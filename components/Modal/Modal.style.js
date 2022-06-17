import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const style = StyleSheet.create({
  modal: {},
  main: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('window').width - 20,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    marginVertical: 10,
  },

  input: {
    backgroundColor: 'white',
    width: '90%',
    fontSize: 16,
    color: colors.gray600,
  },

  parentMain: {
    alignItems: 'center',
    flex: 1,
  },
});
