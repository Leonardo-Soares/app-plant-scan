import LayoutMain from '@components/LayoutMain'
import CardProduto from '@components/CardProduto'
import { View, Text, ScrollView } from 'react-native'

export function HomeScreen() {

  return (
    <LayoutMain>
      <View className='mx-9 mt-8'>
        <Text className='text-2xl font-bold'>Últimos plantas cadastradas</Text>
      </View>
      <ScrollView
        horizontal
        className='ml-6 mt-2'
        contentContainerStyle={{ flexDirection: 'row', height: 330 }}
      >
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </ScrollView>
    </LayoutMain>
  );
}
