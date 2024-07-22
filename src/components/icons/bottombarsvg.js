// DynamicSVG.js
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const BottomBarSvg = () => {
  const {colors} = useTheme();
  const {width: deviceWidth} = Dimensions.get('window');
  const baseWidth = 390;
  const baseHeight = 106;

  // Path remains the same, viewBox handles the scaling
  const path =
    'M0 37.0599C0 31.059 4.43302 25.9806 10.379 25.1699L193.379 0.220952C194.455 0.0742993 195.545 0.0742981 196.621 0.220951L379.621 25.1699C385.567 25.9806 390 31.059 390 37.0599V106.34H0V37.0599Z';

  return (
    <Svg
      width={deviceWidth}
      height={(deviceWidth / baseWidth) * baseHeight} // Maintain aspect ratio
      viewBox="0 0 390 106"
      preserveAspectRatio="xMidYMid meet"
      fill="none">
      <Path d={path} fill={colors.bottomBar} />
    </Svg>
  );
};

export default BottomBarSvg;
