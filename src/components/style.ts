import {padding, scaleFont} from './../utils/mixins';
import {StyleSheet} from 'react-native';
import colors from '../assets/colors';
import {scaleSize} from '../utils/mixins';

const styles = StyleSheet.create({
  imageCardContainer: {
    height: scaleSize(200),
    width: scaleSize(160),
  },
  imageContainer: {
    flexDirection: 'column-reverse',
    flex: 1,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(10),
    borderBottomLeftRadius: scaleSize(10),
    borderBottomRightRadius: scaleSize(10),
  },
  footerLabel: {
    color: colors.WHITE,
  },
  footerLabelContainer: {
    position: 'absolute',
    bottom: scaleSize(10),
    right: scaleSize(10),
  },
  input: {
    borderRadius: 50,
    borderWidth: 0.2,
    borderColor: colors.BLACK,
    paddingHorizontal: scaleSize(10),
    width: '80%',
    height: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: scaleSize(10),
  },
  listHeaderContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listHeaderTitle: {color: colors.BLACK, fontSize: scaleFont(20)},
  fullScreenContainer: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(20),
  },
  originalSize: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  fullScreenHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingVertical: scaleSize(10),
    paddingHorizontal: scaleSize(10),
    justifyContent: 'space-between',
  },
  fullScreenHeaderTitle: {
    color: colors.WHITE,
    fontSize: scaleFont(20),
  },
  commentBlockContainer: {
    width: '100%',
    backgroundColor: colors.GRAY,
    borderRadius: 10,
    padding: scaleSize(10),
  },
  userLabel: {width: '100%', fontWeight: 'bold'},
  commentContent: {flexWrap: 'wrap'},
  actionBoxContainer: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(5),
    right: scaleSize(20),
    top: scaleSize(20),
  },
  commentBlockPadding: {padding: scaleSize(10)},
  imageBorders: {borderRadius: 10},
  emptyCommentsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  emptyCommentsHeader: {height: '10%'},
  emptyCommentsLabelContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCommentsLabel: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: scaleFont(17),
  },
  emptyCommentsInputContainer: {
    height: scaleSize(70),
    justifyContent: 'flex-end',
  },
});

export default styles;
