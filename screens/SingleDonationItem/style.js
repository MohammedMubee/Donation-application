import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(10),
  },
  badge: {
    marginBottom: 16,
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: verticalScale(7),
    fontSize: scaleFontSize(14),
    fontWeight: '400',
    fontFamily: 'Inter-semibold',
    // lineHeight:scaleFontSize(29)
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
  },
});

export default style;
