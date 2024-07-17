import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import BlastedImage from 'react-native-blasted-image';
import {hp, wp} from '../utils/responsive';
import LinearGradient from 'react-native-linear-gradient';
import {QRLogoIcon} from '../components/icons/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../utils/theme';

function HomeScreen() {
  const {dark, colors} = useTheme();
  const insets = useSafeAreaInsets();

  const darkModeGradient = [
    {
      start: {x: 0, y: 0},
      end: {x: 0, y: 1},
      colors: ['rgba(0, 0, 0, 0.00)', '#12181E'],
    },
    {
      start: {x: 0, y: 0},
      end: {x: 0, y: 1},
      colors: ['rgba(0, 0, 0, 0.50)', 'rgba(0, 0, 0, 0.50)'],
    },
  ];

  const lightModeGradient = [
    {
      start: {x: 0, y: 0},
      end: {x: 0, y: 1},
      colors: ['rgba(0, 0, 0, 0.60)', 'rgba(0, 0, 0, 0.60)'],
    },
  ];

  const selectedGradient = dark ? darkModeGradient : lightModeGradient;

  return (
    <ScrollView contentContainerStyle={[]} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <BlastedImage
          style={styles.headerImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          resizeMode="cover"
        />
        {selectedGradient.map((gradient, index) => (
          <LinearGradient
            key={index}
            start={gradient.start}
            end={gradient.end}
            colors={gradient.colors}
            style={styles.headerImageOverlay}>
            <View
              style={[styles.headerContentContainer, {marginTop: insets.top}]}>
              <QRLogoIcon />
              <View style={styles.headerContentInnerContainer}>
                <Text style={{color: colors.netural400}}>Welcome to</Text>
                <Text style={{color: colors.netural100}}>
                  Commerce Court West
                </Text>
                <View style={styles.headerBookingContentContainer}>
                  <View style={[theme.flexDirectionColumn, theme.flex1]}>
                    <Text style={{color: colors.netural100}}>
                      Floor 48 • Flex 4831
                    </Text>
                    <Text style={{color: colors.netural400}}>12 PM - 5 PM</Text>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.buttonContainer,
                      {backgroundColor: colors.brand500},
                    ]}>
                    <Text style={{color: colors.netural100}}>Book A Desk</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: hp(323),
    width: wp(414),
    position: 'relative',
  },
  headerImage: {
    height: hp(323),
    width: wp(414),
    borderBottomLeftRadius: hp(20),
    borderBottomRightRadius: hp(20),
  },
  headerImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: hp(323),
    width: wp(414),
    borderBottomLeftRadius: hp(20),
    borderBottomRightRadius: hp(20),
  },
  headerContentContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    paddingTop: hp(16),
  },
  headerContentInnerContainer: {
    flexDirection: 'column',
    position: 'absolute',
    paddingLeft: wp(24),
    paddingRight: wp(24),
    bottom: 20,
    left: 0,
    right: 0,
  },
  headerBookingContentContainer: {
    flexDirection: 'row',
    paddingTop: hp(44),
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: hp(6),
    paddingTop: hp(6),
    paddingBottom: hp(6),
    paddingLeft: wp(12),
    paddingRight: wp(12),
  },
});

export default HomeScreen;
