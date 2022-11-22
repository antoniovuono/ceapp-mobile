import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './user.bottom.tab.routes';

const { Navigator, Group, Screen } = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      initialRouteName="BottomTabs"
      screenOptions={{ headerShown: false }}
    >
      <Group>
        <Screen name="BottomTabs" component={BottomTabs} />
      </Group>
    </Navigator>
  );
};

export default StackRoutes;
