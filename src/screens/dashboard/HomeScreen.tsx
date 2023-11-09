import { View, Text } from 'react-native'
import LayoutMain from '@components/LayoutMain'

export function HomeScreen() {

  return (
    <LayoutMain>
      <View className="flex-1 justify-center items-center font-brand">
        <Text className="text-black">Home</Text>
      </View>
    </LayoutMain>
  );
}
