import {scaleFont, scaleSize} from './../utils/mixins';
import {StyleSheet} from 'react-native';
import colors from '../assets/colors';

const globalStyles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    paddingTop: scaleSize(25),
    paddingHorizontal: scaleSize(20),
    bottom: scaleSize(5),
  },
  imagesListHeader: {
    fontWeight: 'bold',
    fontSize: scaleFont(20),
    color: colors.BLACK,
    paddingBottom: scaleSize(5),
  },
  rowContainer: {width: '100%', justifyContent: 'space-evenly'},
  seperator: {paddingBottom: scaleSize(10)},
});

export default globalStyles;
