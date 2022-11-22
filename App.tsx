import React from 'react';
import SignUp from './src/modules/Authentication/SignUp';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import {
  useFonts,
  FiraSans_400Regular,
  FiraSans_500Medium,
  FiraSans_600SemiBold,
  FiraSans_700Bold,
} from '@expo-google-fonts/fira-sans';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    FiraSans_400Regular,
    FiraSans_500Medium,
    FiraSans_600SemiBold,
    FiraSans_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator color={theme.colors.SECONDARY_TITLE_WHITE} />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <SignUp />
      </ThemeProvider>
    </>
  );
};

export default App;
