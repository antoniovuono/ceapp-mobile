import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../modules/Home/HomePage';
import HistoricPage from '../modules/Historic/HistoricPage';
import DashboardPage from '../modules/Dashboard/DashboardPage';
import MyProfilePage from '../modules/Profile/MyProfilePage';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Platform, Text } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarInactiveTintColor: theme.colors.SECONDARY_BACKGROUND_WHITE,
        tabBarActiveTintColor: theme.colors.CLEAR_BLUE,
        tabBarStyle: {
          backgroundColor: theme.colors.PRIMARY_BACKGROUND_BLUE,
          borderTopColor: theme.colors.PRIMARY_BACKGROUND_BLUE,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.REGULAR,
          fontSize: 12,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={22} color={color} />
          ),
        }}
      />

      <Screen
        name="Historic"
        component={HistoricPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={22} color={color} />
          ),
        }}
      />

      <Screen
        name="Dashboard"
        component={DashboardPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="pie-chart" size={22} color={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={MyProfilePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={22} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTabs;
