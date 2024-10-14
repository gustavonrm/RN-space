import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';

import { ThemedText } from '../common/ThemedText';
import { TabBarIcon } from '../navigation/TabBarIcon';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFiltering, setFiltering } from '@/redux/slices/launches.slices';

export function FilterButton() {
  const color = useThemeColor({ light: 'black', dark: 'white' }, 'text');
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(setFiltering(null))}>
      <TabBarIcon name={'menu-outline'} color={color} />
    </TouchableOpacity>
  );
}
