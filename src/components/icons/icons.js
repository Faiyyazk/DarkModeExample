import React from 'react';
import SvgUri from 'react-native-svg-uri';
import {hp, wp} from '../../utils/responsive';
import {QRLogoSvg} from './svgs';

export const QRLogoIcon = () => (
  <SvgUri width={wp(190)} height={hp(44)} svgXmlData={QRLogoSvg()} />
);
