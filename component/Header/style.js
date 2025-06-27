import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';
export const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    color: '#36455A',
  },
  title2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    color: '#36455A',
  },
  title3: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#36455A',
  },
});
