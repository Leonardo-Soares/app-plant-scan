import { View, Text } from 'react-native'
import LayoutMain from '@components/LayoutMain'
import CardCarteira from '@components/CardCarteira';

export function PerfilScreen() {

  return (
    <LayoutMain>
      <View className='mx-9 mt-8'>
        <Text className='text-2xl font-bold'>Carteira virtual</Text>
        <View className='mt-2 mb-4'>
          <CardCarteira />
        </View>
      </View>

    </LayoutMain>
  );
}
