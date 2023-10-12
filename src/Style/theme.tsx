/**
 * colors
 * fontFamily
 * fontSize
 * gap
 */

type ColorsType = {
  Primary: string;
  G_100: string;
  G_50: string;
  G_10: string;
  R_100: string;
  R_50: string;
  R_10: string;
  B_100: string;
  B_10: string;
};
type FontFamilyType = {
  Ko: string;
  En: string;
};
type FontSizeType = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
};
type GapType = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

const colors: ColorsType = {
  Primary: '#0063e5',
  G_100: '#13151d',
  G_50: '#838383',
  G_10: '#C9C9C9',
  R_100: '#C00A0A',
  R_50: '#F85555',
  R_10: '#FFCECE',
  B_100: '#1104A8',
  B_10: '#8ABDFF',
};
const fontFamily: FontFamilyType = {
  Ko: 'Gothic A1',
  En: 'Montserrat',
};
const fontSize: FontSizeType = {
  xs: '12rem',
  sm: '14rem',
  md: '16rem',
  lg: '18rem',
  xl: '20rem',
  xxl: '24rem',
  xxxl: '30rem',
};
const gap: GapType = {
  xs: '10rem',
  sm: '15rem',
  md: '20rem',
  lg: '30rem',
};

const theme = {
  colors,
  fontFamily,
  fontSize,
  gap,
};

export default theme;
