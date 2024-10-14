import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '../common/ThemedText';
import { useNavigation } from 'expo-router';

export function LaunchCard({ id, name, date_utc, success, rocket }) {
  const date = new Date(date_utc);

  const year = date.getUTCFullYear();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNames[date.getUTCMonth()];
  const day = String(date.getUTCDate()).padStart(2, '0');

  const formattedDate = `${month} ${day}, ${year}`;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <ThemedText style={styles.mission} type="subtitle">
            {name}
          </ThemedText>
          <ThemedText style={styles.overview} type="title">
            {'Overview'}
          </ThemedText>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('preview', { id: id })}
        >
          <ThemedText style={styles.line}>Learn More</ThemedText>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <ThemedText style={styles.line} type="defaultSemiBold">
          {'Date'}
        </ThemedText>
        <ThemedText style={styles.info}>{formattedDate}</ThemedText>
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
    fontWeight: 600,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});
