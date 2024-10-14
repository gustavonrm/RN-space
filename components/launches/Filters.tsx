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

export function Filters() {
  const color = useThemeColor({ light: 'black', dark: 'white' }, 'text');
  const color2 = useThemeColor({ light: 'white', dark: 'black' }, 'text');

  const [filter, setFilter] = useState(false);
  const filtering = useSelector(selectFiltering);
  const dispatch = useDispatch();
  console.log(filtering);

  const close = () => {
    dispatch(setFiltering(null));
  };

  return (
    <Modal
      useNativeDriver
      hideModalContentWhileAnimating
      backdropTransitionOutTiming={0}
      onBackdropPress={close}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      isVisible={filtering}
      style={styles.modal}
    >
      <SafeAreaView style={{ ...styles.container, backgroundColor: color2 }}>
        <TouchableOpacity onPress={close} style={{ alignSelf: 'flex-end' }}>
          <TabBarIcon name={'close-outline'} color={color} />
        </TouchableOpacity>
        <ThemedText style={styles.title} type="subtitle">
          {'Filters'}
        </ThemedText>
        <TouchableOpacity style={styles.row} onPress={() => setFilter(!filter)}>
          <ThemedText style={styles.line} type="defaultSemiBold">
            {filter ? 'Success' : 'Failed'}
          </ThemedText>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    flex: 1,
    marginLeft: '15%',
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 50,
    textTransform: 'uppercase',
    fontWeight: 500,
    textAlign: 'right',
  },
  line: {
    textTransform: 'uppercase',
    marginVertical: 5,
    fontSize: 13,
    fontWeight: 600,
    textAlign: 'right',
  },
  row: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 5,
    marginLeft: 10,
  },
});
