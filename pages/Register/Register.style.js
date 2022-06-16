import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.orange500,
  },
  headerView: {
    height: Dimensions.get('window').height / 4,
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  inputView: {
    flex: 1,
    padding: 5,
  },

  buttonView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
});
