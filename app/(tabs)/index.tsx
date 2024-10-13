import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { usePostLaunchesMutation } from '@/redux/apis/launches.api';
import { useEffect, useState } from 'react';
import { selectFetchedLaunches } from '@/redux/slices/launches.slices';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

export default function HomeScreen() {
  const [postLaunches, { data, isLoading }] = usePostLaunchesMutation();
  const launches = useSelector(selectFetchedLaunches);

  const [page, setPage] = useState(0);

  useEffect(() => {
    postLaunches(page);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && launches.length === 0 ? (
        <ActivityIndicator size="small" color={'#fff'} />
      ) : (
        <FlatList
          data={launches}
          renderItem={({ item }) => (
            <ThemedText>
              {item.name} {item.date_utc} {item.success} {item.rocket}
            </ThemedText>
          )}
          keyExtractor={(item) => item.id}
          onEndReached={() =>
            data?.hasNextPage === true && postLaunches(data?.nextPage)
          }
          ListFooterComponent={
            isLoading && <ActivityIndicator size="small" color={'#fff'} />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
