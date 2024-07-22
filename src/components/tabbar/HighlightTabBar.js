import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../utils/theme';
import {wp} from '../../utils/responsive';
import {useTheme} from '@react-navigation/native';

export default function HighlightTabBar({state, descriptors, navigation}) {
  const {dark, colors} = useTheme();

  return (
    <ScrollView
      horizontal
      contentContainerStyle={[theme.flexDirectionRow]}
      showsHorizontalScrollIndicator={false} // Hide scrollbar if you don't need it
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icon =
          options.tabBarIcon !== undefined ? options.tabBarIcon : null;

        // Ensure icon is a function and returns a valid React element
        const renderIcon =
          icon && typeof icon === 'function'
            ? icon({focused: isFocused})
            : null;

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
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View
              style={[
                theme.flexDirectionRow,
                theme.alignItemsCenter,
                styles.tabBar,
                {
                  backgroundColor: isFocused ? colors.brand600 : 'transparent',
                  borderColor: isFocused
                    ? colors.brand600
                    : dark
                    ? colors.neutral200
                    : colors.brand600,
                  borderWidth: 1,
                  marginLeft: index === 0 ? wp(16) : wp(6),
                  marginRight: index === state.routes.length - 1 ? wp(16) : 0,
                },
              ]}>
              {renderIcon && (
                <View style={theme.marginRight8}>{renderIcon}</View>
              )}
              <Text
                style={[
                  styles.tabBarLabel,
                  {
                    color: isFocused
                      ? colors.neutral100
                      : dark
                      ? colors.neutral200
                      : colors.neutral800,
                  },
                ]}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: wp(20),
    ...theme.paddingLeft16,
    ...theme.paddingRight14,
    ...theme.paddingTop11,
    ...theme.paddingBottom11,
  },
  tabBarLabel: {
    ...theme.fontsPrimaryMedium,
    ...theme.commonFontSize14,
    ...theme.lineHeight20,
  },
});
