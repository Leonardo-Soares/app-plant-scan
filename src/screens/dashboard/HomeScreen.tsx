import LayoutMain from '@components/LayoutMain'
import CardTopico from '@components/CardTopico'
import { useNavigate } from '@hooks/useNavigate'
import CardProduto from '@components/CardProduto'
import { View, Text, ScrollView } from 'react-native'

export function HomeScreen() {
  const { navigate } = useNavigate()

  return (
    <LayoutMain ativaIcon={1}>
      <View className='mx-9 mt-8'>
        <Text className='text-2xl font-bold'>Últimos plantas cadastradas</Text>
      </View>
      <View className='h-92'>
        <ScrollView
          horizontal
          className='ml-6 mt-2'
          contentContainerStyle={{ flexDirection: 'row' }}
        >
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </ScrollView>
      </View>
      <View className='mt-4 mb-8 mx-9'>
        <CardTopico
          titulo='Carteirinha Virtual'
          onPress={() => navigate('PerfilScreen')}
        />
        <CardTopico
          mt={20}
          titulo='Dúvidas Frequentes'
        />
      </View>
    </LayoutMain>
  );
}
