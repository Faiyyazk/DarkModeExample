import {useTheme} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import BlastedImage from 'react-native-blasted-image';
import {hp, wp} from '../utils/responsive';
import LinearGradient from 'react-native-linear-gradient';
import {
  AmenityIcon,
  ArrowRightIcon,
  BookADeskIcon,
  BuildingIcon,
  BulletinIcon,
  ContestsIcon,
  DigitalFormsIcon,
  EventsIcon,
  ForwardArrowIcon,
  HighlightClockIcon,
  PromotionsIcon,
  QRLogoIcon,
  RegisterEventIcon,
  RetailersIcon,
  ShareIcon,
} from '../components/icons/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../utils/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HighlightTabBar from '../components/tabbar/HighlightTabBar';
import {DateTime} from 'luxon';

const Tab = createMaterialTopTabNavigator();

const baseWidth = 390;
const baseHeight = 106;
const {width: deviceWidth} = Dimensions.get('window');
const height = (deviceWidth / baseWidth) * baseHeight;

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const data = [1, 2, 3, 4, 5];

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100, // Trigger onViewableItemsChanged when 100% of the item is visible
  };

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
                theme.paddingBottom11,
                theme.paddingTop11,
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
      <View style={[theme.paddingTop32, theme.flexDirectionColumn]}>
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

  function buildQuickLinks() {
    return (
      <View style={[theme.paddingTop32, theme.flexDirectionColumn]}>
        <Text
          style={{
            color: colors.neutral900,
            ...theme.marginLeft16,
            ...theme.marginRight16,
            ...theme.commonFontSize20,
            ...theme.lineHeight24,
            ...theme.fontsPrimarySemiBold,
          }}>
          Quick Links
        </Text>
        <View style={[theme.flexDirectionColumn, theme.marginTop16]}>
          <View
            style={[
              theme.flexDirectionRow,
              theme.alignItemsCenter,
              theme.marginLeft16,
              theme.marginRight16,
            ]}>
            <View
              style={[
                theme.flexDirectionRow,
                theme.alignItemsCenter,
                theme.flex1,
                theme.borderRadius8,
                theme.paddingLeft16,
                theme.paddingRight16,
                theme.paddingTop14,
                theme.paddingBottom14,
                {backgroundColor: colors.quickLinkBackground},
              ]}>
              <BuildingIcon width={28} height={28} color={colors.qrColor} />
              <Text
                style={[
                  theme.marginLeft16,
                  theme.commonFontSize16,
                  theme.lineHeight19,
                  theme.fontsPrimaryMedium,
                  theme.flex1,
                  {color: colors.quickLinkTextColor},
                ]}>
                {`Building\nUpdates`}
              </Text>
            </View>
            <View style={theme.marginLeft12} />
            <View
              style={[
                theme.flexDirectionRow,
                theme.alignItemsCenter,
                theme.flex1,
                theme.borderRadius8,
                theme.paddingLeft16,
                theme.paddingRight16,
                theme.paddingTop14,
                theme.paddingBottom14,
                {backgroundColor: colors.quickLinkBackground},
              ]}>
              <AmenityIcon color={colors.qrColor} />
              <Text
                style={[
                  theme.marginLeft16,
                  theme.commonFontSize16,
                  theme.lineHeight19,
                  theme.fontsPrimaryMedium,
                  theme.flex1,
                  {color: colors.quickLinkTextColor},
                ]}>
                {`Discover\nAmenities`}
              </Text>
            </View>
          </View>
          <View
            style={[
              theme.flexDirectionRow,
              theme.alignItemsCenter,
              theme.marginLeft16,
              theme.marginRight16,
              theme.marginTop12,
            ]}>
            <View
              style={[
                theme.flexDirectionRow,
                theme.alignItemsCenter,
                theme.flex1,
                theme.borderRadius8,
                theme.paddingLeft16,
                theme.paddingRight16,
                theme.paddingTop14,
                theme.paddingBottom14,
                {backgroundColor: colors.quickLinkBackground},
              ]}>
              <RetailersIcon color={colors.qrColor} />
              <Text
                style={[
                  theme.marginLeft16,
                  theme.commonFontSize16,
                  theme.lineHeight19,
                  theme.fontsPrimaryMedium,
                  theme.flex1,
                  {color: colors.quickLinkTextColor},
                ]}>
                {`Explore\nRetailers`}
              </Text>
            </View>
            <View style={theme.marginLeft12} />
            <View
              style={[
                theme.flexDirectionRow,
                theme.alignItemsCenter,
                theme.flex1,
                theme.borderRadius8,
                theme.paddingLeft16,
                theme.paddingRight16,
                theme.paddingTop14,
                theme.paddingBottom14,
                {backgroundColor: colors.quickLinkBackground},
              ]}>
              <DigitalFormsIcon color={colors.qrColor} />
              <Text
                style={[
                  theme.marginLeft16,
                  theme.commonFontSize16,
                  theme.lineHeight19,
                  theme.fontsPrimaryMedium,
                  theme.flex1,
                  {color: colors.quickLinkTextColor},
                ]}>
                {`Digital\nForms`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function buildNews() {
    return (
      <View style={[theme.paddingTop32, theme.flexDirectionColumn]}>
        <View
          style={[
            theme.flexDirectionRow,
            theme.alignItemsCenter,
            theme.justifyContentSpaceBetween,
            theme.marginLeft16,
            theme.marginRight16,
          ]}>
          <Text
            style={{
              color: colors.neutral900,
              ...theme.commonFontSize20,
              ...theme.lineHeight24,
              ...theme.fontsPrimarySemiBold,
            }}>
            News
          </Text>
          <TouchableOpacity
            style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
            <Text
              style={{
                color: colors.brand500,
                ...theme.commonFontSize14,
                ...theme.lineHeight20,
                ...theme.fontsPrimaryMedium,
                ...theme.marginRight4,
              }}>
              Show All
            </Text>
            <ArrowRightIcon />
          </TouchableOpacity>
        </View>
        <FlatList
          ref={flatListRef}
          horizontal
          data={data}
          contentContainerStyle={[theme.marginTop16]}
          keyExtractor={item => item.toString()}
          renderItem={({item, index}) => {
            return (
              <View
                style={[
                  theme.flexDirectionColumn,
                  theme.marginRight16,
                  theme.paddingLeft12,
                  theme.paddingRight12,
                  theme.paddingTop12,
                  theme.paddingBottom12,
                  theme.borderRadius8,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    marginLeft: index === 0 ? wp(16) : 0,
                    width: wp(288),
                    backgroundColor:
                      currentIndex === index
                        ? colors.newsActiveCardBackground
                        : colors.newsInActiveCardBackground,
                    borderColor:
                      currentIndex === index
                        ? colors.newsActiveCardBorderColor
                        : colors.newsInActiveCardBorderColor,
                    borderWidth: 1,
                  },
                ]}>
                <View
                  style={[
                    theme.justifyContentSpaceBetween,
                    theme.flexDirectionRow,
                    theme.alignItemsCenter,
                  ]}>
                  <View
                    style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
                    <View
                      style={[
                        {backgroundColor: colors.newsCardTagColor},
                        theme.paddingLeft8,
                        theme.paddingRight8,
                        theme.paddingTop6,
                        theme.paddingBottom6,
                        theme.flexDirectionRow,
                        theme.alignItemsCenter,
                        theme.borderRadius4,
                      ]}>
                      <BulletinIcon color={colors.blue} />
                      <Text
                        style={[
                          theme.marginLeft6,
                          theme.commonFontSize13,
                          theme.fontsPrimaryMedium,
                          theme.lineHeight18,
                          {
                            color: colors.bulletinTextColor,
                          },
                        ]}>
                        Bulletin
                      </Text>
                    </View>
                    <Text
                      style={[
                        theme.marginLeft8,
                        theme.commonFontSize13,
                        theme.fontsPrimaryRegular,
                        theme.lineHeight18,
                        {color: colors.bulletinDateTextColor},
                      ]}>
                      Mar 30
                    </Text>
                  </View>
                  <View
                    style={[
                      theme.borderRadius6,
                      {
                        width: wp(12),
                        height: wp(12),
                        backgroundColor: colors.redColor,
                      },
                    ]}
                  />
                </View>
                <Text
                  style={[
                    theme.marginTop16,
                    theme.marginBottom12,
                    theme.commonFontSize16,
                    theme.fontsPrimarySemiBold,
                    theme.lineHeight19,
                    {
                      color: colors.bulletinTitleTextColor,
                    },
                  ]}>
                  Flex Parking Passes
                </Text>
                <Text
                  numberOfLines={3}
                  style={[
                    theme.commonFontSize13,
                    theme.fontsPrimaryRegular,
                    theme.lineHeight16,
                    {
                      color: colors.bulletinDescriptionTextColor,
                    },
                  ]}>
                  The Flex Parking passes will allow tenants to choose between
                  two passes that accommodates hybrid work schedules.
                </Text>
              </View>
            );
          }}
          snapToAlignment="start"
          snapToInterval={wp(264) + theme.marginRight16.marginRight}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: height + 38}}
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
                <View style={[theme.marginLeft24]}>
                  <QRLogoIcon />
                </View>
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
        {buildQuickLinks()}
        {buildNews()}
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
