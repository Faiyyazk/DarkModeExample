import React from 'react';
import SvgUri from 'react-native-svg-uri';
import {hp, wp} from '../../utils/responsive';
import {
  BookADeskSvg,
  BuildingSvg,
  CalendarSvg,
  ContestsSvg,
  EventsSvg,
  HighlightClockSvg,
  HomeSvg,
  PromotionsSvg,
  QRLogoSvg,
  QuadSvg,
  QuestionSvg,
  RegisterEventSvg,
  ForwardArrowSvg,
  ShareSvg,
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

export const EventsIcon = props => (
  <SvgUri width={wp(16)} height={wp(16)} svgXmlData={EventsSvg(props)} />
);

export const ContestsIcon = props => (
  <SvgUri width={wp(16)} height={wp(16)} svgXmlData={ContestsSvg(props)} />
);

export const PromotionsIcon = props => (
  <SvgUri width={wp(16)} height={wp(16)} svgXmlData={PromotionsSvg(props)} />
);

export const HighlightClockIcon = props => (
  <SvgUri
    width={wp(14)}
    height={wp(14)}
    svgXmlData={HighlightClockSvg(props)}
  />
);

export const RegisterEventIcon = props => (
  <SvgUri width={wp(20)} height={wp(20)} svgXmlData={RegisterEventSvg(props)} />
);

export const ForwardArrowIcon = () => (
  <SvgUri width={wp(20)} height={wp(20)} svgXmlData={ForwardArrowSvg()} />
);

export const ShareIcon = props => (
  <SvgUri width={wp(20)} height={wp(20)} svgXmlData={ShareSvg(props)} />
);
