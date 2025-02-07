// app/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HomeIcon, 
  ChartBarIcon,
  HeartIcon, 
  UserIcon, } from 'react-native-heroicons/outline';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Remove labels
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#E5E7EB',
            height: 60, // Adjusted height since we removed labels
            paddingBottom: 0, // Remove extra padding
          },
          default: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#E5E7EB',
            height: 60, // Consistent height across platforms
          },
        }),
        tabBarActiveTintColor: '#4F46E5',
        tabBarInactiveTintColor: '#9CA3AF',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <HomeIcon size={24} color="black" strokeWidth={2} />
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ color }) => <ChartBarIcon size={24} color={color} strokeWidth={2} />
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ color }) => <HeartIcon size={24} color={color} strokeWidth={2} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <UserIcon size={24} color={color} strokeWidth={2} />
        }}
      />
    </Tabs>
  );
}
