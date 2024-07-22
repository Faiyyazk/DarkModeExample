const commonColors = {
  neutral100: '#FBFBFB',
  neutral200: '#F5F6F6',
  neutral400: '#B9C8DC',
  neutral500: '#9DB2CE',
  neutral700: '#6C7886',
  brand400: '#0DC0DC',
  brand500: '#00ADD8',
  brand600: '#0081A3',
  bgTimeOverlay: '#12181ECC',
  brandSecondary: '#00954C',
  orange: '#FF7A00',
  textColor: '#1E1E1E',
  eventShareButton: '#96BAC33D',
  qrColor: '#00ADD7',
};

const light = {
  background: '#E9EFF3',
  neutral800: '#202D3C',
  neutral900: '#18212B',
  blue: '#0090FA',
  bottomBar: '#FFFFFF',
  highlightCardBackground: '#FBFBFB',
  highlightCardDateTextColor: '#192430',
  highlightCardTitleTextColor: '#1E1E1E',
  highlightCardDescriptionTextColor: '#6C7886',
  quickLinkBackground: '#FFFFFF',
  quickLinkTextColor: '#1E1E1E',
  ...commonColors,
};

const dark = {
  background: '#12181E',
  neutral800: '#F5F6F6',
  neutral900: '#FFFFFF',
  bottomBar: '#18212B',
  highlightCardBackground: '#192430',
  highlightCardDateTextColor: '#FBFBFB',
  highlightCardTitleTextColor: '#EAF4F4',
  highlightCardDescriptionTextColor: '#C4C4C4',
  quickLinkBackground: '#18212B',
  quickLinkTextColor: '#FBFBFB',
  ...commonColors,
};

export const COLORS = {
  light,
  dark,
};
