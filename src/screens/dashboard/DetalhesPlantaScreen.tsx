import LayoutMain from '@components/LayoutMain'
import { View, Text, Alert } from 'react-native'
import { useNavigate } from '@hooks/useNavigate'

export function DetalhesPlantaScreen() {
  const { navigate } = useNavigate()

  return (
    <LayoutMain>
      <View className='mx-9 my-8'>
        <Text className='text-2xl font-bold'>Detalhes</Text>


      </View>

    </LayoutMain>
  );
}
