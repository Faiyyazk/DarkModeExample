import React from 'react';
import SvgUri from 'react-native-svg-uri';
import {hp, wp} from '../../utils/responsive';
import {
  BookADeskSvg,
  BuildingSvg,
  CalendarSvg,
  HomeSvg,
  QRLogoSvg,
  QuadSvg,
  QuestionSvg,
} from './svgs';

export const QRLogoIcon = () => (
  <SvgUri width={wp(190)} height={hp(44)} svgXmlData={QRLogoSvg()} />
);

export const BookADeskIcon = () => (
  <SvgUri width={wp(20)} height={wp(20)} svgXmlData={BookADeskSvg()} />
);

export const HomeIcon = props => (
  <SvgUri
    width={props.width}
    height={props.height}
    svgXmlData={HomeSvg(props)}
  />
);

export const QuadIcon = props => (
  <SvgUri
    width={props.width}
    height={props.height}
    svgXmlData={QuadSvg(props)}
  />
);

export const BuildingIcon = props => (
  <SvgUri
    width={props.width}
    height={props.height}
    svgXmlData={BuildingSvg(props)}
  />
);

export const CalendarIcon = props => (
  <SvgUri
    width={props.width}
    height={props.height}
    svgXmlData={CalendarSvg(props)}
  />
);

export const QuestionIcon = props => (
  <SvgUri
    width={props.width}
    height={props.height}
    svgXmlData={QuestionSvg(props)}
  />
);
