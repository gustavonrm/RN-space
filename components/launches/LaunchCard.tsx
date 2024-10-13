import { View, Text, StyleSheet } from 'react-native';

import { ThemedText } from '../common/ThemedText';

export function LaunchCard({ name, date_utc, success, rocket }) {
  return (
    <View style={styles.container}>
      <ThemedText>{name}</ThemedText>
      <ThemedText>{date_utc}</ThemedText>
      <ThemedText>{success ? 'success' : 'failed'}</ThemedText>
      <ThemedText>{rocket}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    margin: 20,
  },
});
