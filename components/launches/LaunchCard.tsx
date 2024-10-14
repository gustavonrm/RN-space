import { View, Text, StyleSheet } from 'react-native';

import { ThemedText } from '../common/ThemedText';

export function LaunchCard({ name, date_utc, success, rocket }) {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.mission} type="subtitle">
        {name}
      </ThemedText>
      <ThemedText style={styles.overview} type="title">
        {'Overview'}
      </ThemedText>
      <View style={styles.row}>
        <ThemedText style={styles.line} type="defaultSemiBold">
          {'Date'}
        </ThemedText>
        <ThemedText style={styles.info}>{date_utc}</ThemedText>
      </View>
      <View style={styles.row}>
        <ThemedText style={styles.line} type="defaultSemiBold">
          {'Mission'}
        </ThemedText>
        <ThemedText style={styles.info}>
          {success ? 'Success' : 'Failed'}
        </ThemedText>
      </View>
      <View style={styles.row}>
        <ThemedText style={styles.line} type="defaultSemiBold">
          {'Rocket'}
        </ThemedText>
        <ThemedText style={styles.info}>{rocket}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mission: {
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  container: {
    margin: 20,
  },
  overview: {
    marginVertical: 10,
    textTransform: 'uppercase',
  },
  line: {
    textTransform: 'uppercase',
    marginVertical: 5,
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  info: {
    textTransform: 'uppercase',
    fontWeight: 600,
  },
});
