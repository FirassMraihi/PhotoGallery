import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: any) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: any) => size * PixelRatio.getFontScale();

function dimensions(
  top: any,
  right = top,
  bottom = top,
  left = right,
  property: string,
) {
  let styles: any = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;
  return styles;
}

export function margin(top: any, right: any, bottom: any, left: any) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top: any, right: any, bottom: any, left: any) {
  return dimensions(top, right, bottom, left, 'padding');
}
