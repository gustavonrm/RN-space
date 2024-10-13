import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Launches',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'rocket' : 'rocket-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'star' : 'star-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
