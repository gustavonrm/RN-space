import { StyleSheet, View, FlatList } from 'react-native';

import { ThemedText } from '@/components/common/ThemedText';
import { usePostLaunchesMutation } from '@/redux/apis/launches.api';
import { useEffect, useState } from 'react';
import { selectFetchedLaunches } from '@/redux/slices/launches.slices';
import { useSelector } from 'react-redux';
import { ThemedActivityIndicator } from '@/components/common/ThemedActivityIndicator';
import { LaunchCard } from '@/components/launches/LaunchCard';
import { Filters } from '@/components/launches/Filters';
import { useRoute } from '@react-navigation/native';

export default function PreviewScreen() {
  const route = useRoute();
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <ThemedText>{id}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
