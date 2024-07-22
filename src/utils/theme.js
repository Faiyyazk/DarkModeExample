import {fp, hp, wp} from './responsive';

export const theme = {
  flexDirectionColumn: {
    flexDirection: 'column',
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  flex1: {
    flex: 1,
  },

  paddingTop32: {
    paddingTop: hp(32),
  },

  paddingTop44: {
    paddingTop: hp(44),
  },

  paddingBottom32: {
    paddingBottom: hp(32),
  },

  paddingTop16: {
    paddingTop: hp(16),
  },

  paddingTop6: {
    paddingTop: hp(6),
  },

  paddingBottom6: {
    paddingBottom: hp(6),
  },

  paddingLeft12: {
    paddingLeft: wp(12),
  },

  paddingRight12: {
    paddingRight: wp(12),
  },

  paddingLeft24: {
    paddingLeft: wp(24),
  },

  paddingRight24: {
    paddingRight: wp(24),
  },

  borderRadius6: {
    borderRadius: hp(6),
  },

  marginLeft4: {
    marginLeft: wp(4),
  },

  marginLeft16: {
    marginLeft: wp(16),
  },

  marginRight16: {
    marginRight: wp(16),
  },

  fontsPrimaryRegular: {
    fontFamily: 'AlbertSans-Regular',
    fontWeight: 'normal',
  },

  fontsPrimaryMedium: {
    fontFamily: 'AlbertSans-Medium',
    fontWeight: '500',
  },

  fontsPrimarySemiBold: {
    fontFamily: 'AlbertSans-SemiBold',
    fontWeight: '600',
  },

  fontsPrimaryBold: {
    fontFamily: 'AlbertSans-Bold',
    fontWeight: '700',
  },

  commonFontSize24: {
    fontSize: fp(24),
  },

  commonFontSize16: {
    fontSize: fp(16),
  },

  commonFontSize20: {
    fontSize: fp(20),
  },

  lineHeight19: {
    lineHeight: fp(19),
  },

  lineHeight22: {
    lineHeight: fp(22),
  },

  lineHeight24: {
    fontSize: fp(24),
  },

  lineHeight29: {
    lineHeight: fp(29),
  },
};
