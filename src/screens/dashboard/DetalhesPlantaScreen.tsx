import LayoutMain from '@components/LayoutMain'
import { View, Text, Image } from 'react-native'

export function DetalhesPlantaScreen() {
  return (
    <LayoutMain>
      <View className='mx-9 mt-8 mb-4'>
        <Text className='text-2xl font-bold'>Detalhes</Text>
      </View>
      <View className='bg-white rounded-lg px-2 py-6 mx-9 mb-8' style={{ elevation: 8 }}>
        <View className='mx-auto w-32 h-32 bg-red-100 rounded-full' style={{ elevation: 6 }}>
          <Image className='w-full h-full rounded-full' resizeMode='cover' source={require('../../../assets/img/temp/planta.jpg')} />
        </View>
        <View className='items-center mt-4'>
          <Text className='text-lg text-[#707070]'>Nome</Text>
          <Text className='text-2xl font-bold text-[#0B845C]'>Tillandsia</Text>
        </View>
        <View className='items-center mt-2 mb-4'>
          <Text className='text-lg text-[#707070]'>Classe</Text>
          <Text className='text-2xl font-bold text-[#0B845C]'>Liliopsida</Text>
        </View>
      </View>
    </LayoutMain>
  );
}
