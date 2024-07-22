import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BlastedImage from 'react-native-blasted-image';
import {hp, wp} from '../utils/responsive';
import LinearGradient from 'react-native-linear-gradient';
import {
  BookADeskIcon,
  ContestsIcon,
  EventsIcon,
  ForwardArrowIcon,
  HighlightClockIcon,
  PromotionsIcon,
  QRLogoIcon,
  RegisterEventIcon,
  ShareIcon,
} from '../components/icons/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../utils/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HighlightTabBar from '../components/tabbar/HighlightTabBar';
import {DateTime} from 'luxon';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  const {dark, colors} = useTheme();
  const insets = useSafeAreaInsets();

  const events = [
    {
      image:
        'https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Brush & Bloom: Paint a Peony Candle at Work',
      description: 'Celebrating the arrival of sprint!',
      createdAt: DateTime.now(),
    },
    {
      image:
        'https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Brush & Bloom: Paint a Peony Candle at Work',
      description: 'Celebrating the arrival of sprint!',
      createdAt: DateTime.now(),
    },
  ];

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

  function buildEventsIcon({focused}) {
    return (
      <EventsIcon
        color={
          focused
            ? colors.neutral100
            : dark
            ? colors.neutral200
            : colors.brand600
        }
      />
    );
  }

  function buildContestsIcon({focused}) {
    return (
      <ContestsIcon
        color={
          focused
            ? colors.neutral100
            : dark
            ? colors.neutral200
            : colors.brand600
        }
      />
    );
  }

  function buildPromotionsIcon({focused}) {
    return (
      <PromotionsIcon
        color={
          focused
            ? colors.neutral100
            : dark
            ? colors.neutral200
            : colors.brand600
        }
      />
    );
  }

  function renderItem(item, index) {
    const isLastChild = index === events.length - 1;
    return (
      <View
        style={[
          theme.flexDirectionColumn,
          theme.marginLeft16,
          theme.borderRadius8,
          {
            width: wp(354),
            marginRight: wp(isLastChild ? 16 : 0),
            backgroundColor: colors.highlightCardBackground,
          },
        ]}>
        <View>
          <BlastedImage
            width={wp(354)}
            height={hp(120)}
            style={[theme.borderTopLeftRadius8, theme.borderTopRightRadius8]}
            source={{uri: item.image}}
          />
          <View
            style={{
              backgroundColor: colors.bgTimeOverlay,
              top: hp(12),
              left: wp(12),
              ...theme.paddingTop8,
              ...theme.paddingBottom8,
              ...theme.paddingLeft8,
              ...theme.paddingRight8,
              ...theme.borderRadius6,
              ...theme.positionAbsolute,
              ...theme.flexDirectionRow,
              ...theme.alignItemsCenter,
            }}>
            <HighlightClockIcon />
            <Text
              style={[
                theme.marginLeft6,
                theme.commonFontSize14,
                theme.lineHeight19,
                theme.fontsPrimaryMedium,
                {
                  color: colors.neutral100,
                },
              ]}>
              10am - 3pm
            </Text>
          </View>
        </View>

        <View
          style={[
            theme.paddingLeft12,
            theme.paddingRight12,
            theme.paddingTop16,
            theme.paddingBottom16,
            theme.flexDirectionColumn,
          ]}>
          <View style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
            <View
              style={[
                theme.flexDirectionColumn,
                theme.alignItemsCenter,
                theme.justifyContentCenter,
                {width: wp(48)},
              ]}>
              <Text
                style={[
                  theme.commonFontSize24,
                  theme.lineHeight28,
                  theme.fontsPrimaryBold,
                  {color: colors.highlightCardDateTextColor},
                ]}>
                {item.createdAt.toFormat('dd')}
              </Text>
              <Text
                style={[
                  theme.commonFontSize14,
                  theme.lineHeight20,
                  theme.fontsPrimaryMedium,
                  {color: colors.highlightCardDateTextColor},
                ]}>
                {item.createdAt.toFormat('MMM')}
              </Text>
            </View>
            <View
              style={[
                theme.flexDirectionColumn,
                theme.marginLeft24,
                theme.flex1,
              ]}>
              <Text
                style={[
                  theme.commonFontSize14,
                  theme.lineHeight17,
                  theme.fontsPrimaryRegular,
                  {color: colors.highlightCardTitleTextColor},
                ]}
                numberOfLines={2}>
                {item.title}
              </Text>
              <Text
                style={[
                  theme.commonFontSize14,
                  theme.lineHeight20,
                  theme.fontsPrimaryRegular,
                  {color: colors.highlightCardDescriptionTextColor},
                ]}
                numberOfLines={1}>
                {item.description}
              </Text>
            </View>
          </View>

          <View
            style={[
              theme.paddingTop20,
              theme.flexDirectionRow,
              theme.alignItemsCenter,
            ]}>
            <TouchableOpacity
              style={[
                theme.flexDirectionRow,
                theme.flex1,
                theme.paddingTop10,
                theme.paddingBottom10,
                theme.alignItemsCenter,
                theme.justifyContentCenter,
                theme.borderRadius6,
                {
                  backgroundColor: colors.brandSecondary,
                },
              ]}>
              <RegisterEventIcon />
              <Text
                style={[
                  theme.marginLeft4,
                  theme.marginRight4,
                  theme.commonFontSize16,
                  theme.lineHeight22,
                  theme.fontsPrimaryMedium,
                  {
                    color: colors.neutral100,
                  },
                ]}>
                Register Now
              </Text>
              <ForwardArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                theme.paddingTop16,
                theme.paddingBottom16,
                theme.paddingLeft12,
                theme.paddingRight12,
                theme.marginLeft12,
                theme.borderRadius6,
                {
                  backgroundColor: colors.eventShareButton,
                },
              ]}>
              <ShareIcon color={dark ? colors.neutral100 : colors.neutral700} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function buildEvents() {
    return (
      <FlatList
        horizontal
        contentContainerStyle={{
          ...theme.marginTop16,
        }}
        showsHorizontalScrollIndicator={false}
        data={events}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    );
  }

  function buildHightlights() {
    return (
      <View
        style={[
          theme.paddingTop32,
          theme.paddingBottom32,
          theme.flexDirectionColumn,
        ]}>
        <Text
          style={{
            color: colors.neutral900,
            ...theme.marginLeft16,
            ...theme.marginRight16,
            ...theme.commonFontSize20,
            ...theme.lineHeight24,
            ...theme.fontsPrimarySemiBold,
            ...theme.marginBottom16,
          }}>
          Highlights this Week
        </Text>
        <Tab.Navigator
          swipeEnabled={false}
          initialRouteName={'Events'}
          tabBar={HighlightTabBar}>
          <Tab.Screen
            options={{
              tabBarLabel: 'Events',
              tabBarIcon: buildEventsIcon,
            }}
            name="Events"
            children={() => buildEvents()}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'Contests',
              tabBarIcon: buildContestsIcon,
            }}
            name="Contests"
            children={() => buildEvents()}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'Promotions',
              tabBarIcon: buildPromotionsIcon,
            }}
            name="Promotions"
            children={() => buildEvents()}
          />
        </Tab.Navigator>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[]}
        showsVerticalScrollIndicator={false}>
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
                style={[
                  styles.headerContentContainer,
                  {marginTop: insets.top},
                ]}>
                <QRLogoIcon />
                <View style={styles.headerContentInnerContainer}>
                  <Text
                    style={[
                      {color: colors.neutral400},
                      theme.commonFontSize16,
                      theme.lineHeight19,
                      theme.fontsPrimaryRegular,
                    ]}>
                    Welcome to
                  </Text>
                  <Text
                    style={[
                      {color: colors.neutral100},
                      theme.commonFontSize24,
                      theme.lineHeight29,
                      theme.fontsPrimaryBold,
                    ]}>
                    Commerce Court West
                  </Text>
                  <View style={styles.headerBookingContentContainer}>
                    <View
                      style={[
                        theme.flexDirectionColumn,
                        theme.flex1,
                        theme.marginRight16,
                      ]}>
                      <Text
                        numberOfLines={1}
                        style={[
                          {color: colors.neutral100},
                          theme.commonFontSize16,
                          theme.lineHeight19,
                          theme.fontsPrimarySemiBold,
                        ]}>
                        Floor 48 • Flex 4831
                      </Text>
                      <Text
                        style={[
                          {color: colors.neutral400},
                          theme.commonFontSize16,
                          theme.lineHeight22,
                          theme.fontsPrimaryRegular,
                        ]}>
                        12 PM - 5 PM
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={[
                        styles.buttonContainer,
                        {backgroundColor: colors.brand500},
                      ]}>
                      <BookADeskIcon />
                      <Text
                        style={[
                          {color: colors.neutral100},
                          theme.commonFontSize16,
                          theme.lineHeight22,
                          theme.fontsPrimaryMedium,
                          theme.marginLeft4,
                        ]}>
                        Book A Desk
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </LinearGradient>
          ))}
        </View>
        {buildHightlights()}
      </ScrollView>
    </View>
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
    ...theme.flexDirectionColumn,
    ...theme.paddingTop16,
  },
  headerContentInnerContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    ...theme.flexDirectionColumn,
    ...theme.paddingLeft24,
    ...theme.paddingRight24,
  },
  headerBookingContentContainer: {
    ...theme.flexDirectionRow,
    ...theme.alignItemsCenter,
    ...theme.paddingTop44,
  },
  buttonContainer: {
    ...theme.paddingTop6,
    ...theme.paddingBottom6,
    ...theme.paddingLeft12,
    ...theme.paddingRight12,
    ...theme.borderRadius6,
    ...theme.flexDirectionRow,
    ...theme.alignItemsCenter,
  },
  container: {
    ...theme.flex1,
    ...theme.flexDirectionColumn,
  },
});

export default HomeScreen;
