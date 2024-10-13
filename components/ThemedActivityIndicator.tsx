import {
  Text,
  type ActivityIndicatorProps,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedActivityIndicatorProps = ActivityIndicatorProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedActivityIndicator({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedActivityIndicatorProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <ActivityIndicator style={[{ color }, style]} {...rest} />;
}
