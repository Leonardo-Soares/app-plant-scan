import { Routes } from './src/routes'
import { colors } from '@theme/colors'
import { StatusBar } from 'expo-status-bar'
import Loading from './src/components/Loading'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter'
import { Platform } from 'react-native'
// import OneSignal from 'react-native-onesignal';
// OneSignal.setAppId("api-key");
// OneSignal.promptForPushNotificationsWithUserResponse()

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <StatusBar style={Platform.OS === 'android' ? 'light' : 'auto'} backgroundColor={colors.greenSecondary} translucent />
    </QueryClientProvider>
  );
}
