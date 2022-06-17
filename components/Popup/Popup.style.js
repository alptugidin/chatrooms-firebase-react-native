import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const base = StyleSheet.create({
  main: {
    padding: 5,
    marginTop: 10,
    width: '75%',
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 15,
    fontStyle: 'italic',
  },

  time: {
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'right',
  },

  message: {
    fontSize: 16,
    color: colors.gray600,
  },
  messageView: {
    paddingVertical: 5,
  },
  timeView: {},
});

export default {
  send: StyleSheet.create({
    ...base,
    main: {
      ...base.main,
      backgroundColor: colors.green200,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,

      marginLeft: '25%',
    },
  }),

  receive: StyleSheet.create({
    ...base,
    main: {
      ...base.main,
      backgroundColor: colors.gray200,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginRight: '25%',
    },
  }),
};
