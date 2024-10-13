import { StyleSheet, View, FlatList } from 'react-native';

import { ThemedText } from '@/components/common/ThemedText';
import { usePostLaunchesMutation } from '@/redux/apis/launches.api';
import { useEffect, useState } from 'react';
import { selectFetchedLaunches } from '@/redux/slices/launches.slices';
import { useSelector } from 'react-redux';
import { ThemedActivityIndicator } from '@/components/common/ThemedActivityIndicator';
import { LaunchCard } from '@/components/launches/LaunchCard';

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
        <ThemedActivityIndicator />
      ) : (
        <FlatList
          data={launches}
          renderItem={({ item }) => (
            <LaunchCard
              name={item.name}
              date_utc={item.date_utc}
              success={item.success}
              rocket={item.rocket}
            />
          )}
          keyExtractor={(item) => item.id}
          onEndReached={() =>
            data?.hasNextPage === true && postLaunches(data?.nextPage)
          }
          ListFooterComponent={isLoading && <ThemedActivityIndicator />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
