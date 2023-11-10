import React from 'react'
import { HomeScreen } from '@screens/dashboard/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RegisterPlantaScreen } from '@screens/dashboard/RegisterPlantaScreen'

const Stack = createNativeStackNavigator();

export function DashboardRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RegisterPlantaScreen" component={RegisterPlantaScreen} />
    </Stack.Navigator>
  );
}
