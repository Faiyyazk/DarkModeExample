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
};

const light = {
  background: '#E9EFF3',
  neutral800: '#202D3C',
  neutral900: '#18212B',
  blue: '#0090FA',
  bottomBar: '#FFFFFF',
  ...commonColors,
};

const dark = {
  background: '#12181E',
  neutral800: '#F5F6F6',
  neutral900: '#FFFFFF',
  bottomBar: '#18212B',
  ...commonColors,
};

export const COLORS = {
  light,
  dark,
};
