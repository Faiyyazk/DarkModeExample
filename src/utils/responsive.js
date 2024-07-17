import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 414, 896 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = dimension => {
  return wp2dp((dimension / 414) * 100);
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * 414, 896 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = dimension => {
  return hp2dp((dimension / 896) * 100);
};

/**
 * Font-Percentage
 * Converts font dimension to percentage
 * 414, 896 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const fp = dimension => {
  return wp2dp((dimension / 414) * 100);
};

/**
 * Letter Spacing-Percentage
 * Converts font dimension to percentage
 * 414, 896 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const lp = (fontSize, letterSpacing) => {
  const calculatedFontSize = fp(fontSize);
  return (calculatedFontSize * letterSpacing) / 100;
};
