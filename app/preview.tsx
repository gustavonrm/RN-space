import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

import { ThemedText } from '@/components/common/ThemedText';
import {
  useGetLauchDetailsQuery,
  usePostLaunchesMutation,
} from '@/redux/apis/launches.api';
import { useCallback, useEffect, useState } from 'react';
import { selectFetchedLaunches } from '@/redux/slices/launches.slices';
import { useSelector } from 'react-redux';
import { ThemedActivityIndicator } from '@/components/common/ThemedActivityIndicator';
import { LaunchCard } from '@/components/launches/LaunchCard';
import { Filters } from '@/components/launches/Filters';
import { useRoute } from '@react-navigation/native';

export default function PreviewScreen() {
  const route = useRoute();
  const { id } = route.params;

  const { data, isLoading, isError } = useGetLauchDetailsQuery(id);
  if (isLoading) return <ThemedActivityIndicator />;

  const handlePress = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  console.log(data);
  return (
    <View style={styles.container}>
      <ThemedText style={styles.overview} type="title">
        {data.name}
      </ThemedText>
      <ThemedText style={styles.mission} type="subtitle">
        {'ROCKET NAME'}
      </ThemedText>
      <ThemedText style={styles.line} type="defaultSemiBold">
        {data.details}
      </ThemedText>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(data.links.article)}
        >
          <ThemedText style={styles.line}>Learn More</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(data.links.youtube)}
        >
          <ThemedText style={styles.line}>Watch</ThemedText>
        </TouchableOpacity>
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
