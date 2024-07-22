import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import BottomBarSvg from '../icons/bottombarsvg';
import {theme} from '../../utils/theme';
import {
  BuildingIcon,
  CalendarIcon,
  HomeIcon,
  QuadIcon,
  QuestionIcon,
} from '../icons/icons';
import {hp, wp} from '../../utils/responsive';
import {useTheme} from '@react-navigation/native';

const {width: deviceWidth} = Dimensions.get('window');
const baseWidth = 390;
const baseHeight = 106;

const height = (deviceWidth / baseWidth) * baseHeight;
const desiredTopMargin = 48;
const topMargin = (desiredTopMargin / baseHeight) * height;

const desiredIconSize = 32;
const iconSize = (desiredIconSize / baseHeight) * height;

export default function MyBottomTabBar({state, navigation}) {
  const {dark, colors} = useTheme();

  function getIcon(index, isFocused) {
    switch (index) {
      case 0:
        return (
          <HomeIcon
            width={iconSize}
            height={iconSize}
            color={
              isFocused
                ? colors.brand400
                : dark
                ? colors.neutral500
                : colors.neutral700
            }
          />
        );
      case 1:
        return (
          <BuildingIcon
            width={iconSize}
            height={iconSize}
            color={
              isFocused
                ? colors.brand400
                : dark
                ? colors.neutral500
                : colors.neutral700
            }
          />
        );
      case 2:
        return (
          <QuadIcon
            width={topMargin}
            height={topMargin}
            color={
              isFocused
                ? colors.brand400
                : dark
                ? colors.neutral500
                : colors.neutral700
            }
          />
        );
      case 3:
        return (
          <CalendarIcon
            width={iconSize}
            height={iconSize}
            color={
              isFocused
                ? colors.brand400
                : dark
                ? colors.neutral500
                : colors.neutral700
            }
          />
        );
      case 4:
        return (
          <QuestionIcon
            width={iconSize}
            height={iconSize}
            color={
              isFocused
                ? colors.brand400
                : dark
                ? colors.neutral500
                : colors.neutral700
            }
          />
        );
      default:
        return <View style={{width: iconSize, height: iconSize}} />;
    }
  }

  return (
    <View style={[styles.bgTransparent, {height: height}]}>
      <View style={[theme.flexDirectionRow, styles.container]}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <View
              style={[
                {
                  height: height,
                  marginRight: wp(state.routes.length === index + 1 ? 0 : 24),
                },
                styles.itemContainer,
              ]}>
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={{top: index === 2 ? topMargin / 1.6 : topMargin}}
                onLongPress={onLongPress}>
                {getIcon(index, isFocused)}
              </TouchableOpacity>

              <View
                style={[
                  styles.bottomBorder,
                  {
                    backgroundColor: isFocused
                      ? colors.brand400
                      : styles.bgTransparent.backgroundColor,
                  },
                ]}
              />
            </View>
          );
        })}
      </View>
      <BottomBarSvg style={styles.bottomBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  bgTransparent: {
    backgroundColor: 'transparent',
    zIndex: 9000,
    position: 'absolute',
    bottom: -1,
  },
  container: {
    zIndex: 9000,
    position: 'absolute',
    top: 0,
    left: wp(24),
    right: wp(24),
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  bottomBorder: {
    height: hp(4),
    width: '100%',
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    bottom: 0,
    position: 'absolute',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
