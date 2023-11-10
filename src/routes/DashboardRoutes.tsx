import React from 'react'
import { HomeScreen } from '@screens/dashboard/HomeScreen'
import { PerfilScreen } from '@screens/dashboard/PerfilScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RegisterPlantaScreen } from '@screens/dashboard/RegisterPlantaScreen'
import { DetalhesPlantaScreen } from '@screens/dashboard/DetalhesPlantaScreen'

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
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
      <Stack.Screen name="DetalhesPlantaScreen" component={DetalhesPlantaScreen} />
    </Stack.Navigator>
  );
}
