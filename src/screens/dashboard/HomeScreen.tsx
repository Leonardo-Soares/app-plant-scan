import { api } from '@services/axios'
import Loading from '@components/Loading'
import { useEffect, useState } from 'react'
import LayoutMain from '@components/LayoutMain'
import CardTopico from '@components/CardTopico'
import { useNavigate } from '@hooks/useNavigate'
import CardProduto from '@components/CardProduto'
import { View, Text, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function HomeScreen() {
  const isFocused = useIsFocused()
  const { navigate } = useNavigate()
  const [loading, setLoading] = useState(true)
  const [listaPlantas, setListaPlantas] = useState([])
  const [dadosUsuario, setDadosUsuario] = useState<any>()

  async function getPlantas() {
    try {
      const response = await api.get(`/plantas`)
      if (response.data.success) {
        setListaPlantas(response.data.results)
      }
    } catch (error: any) {
      console.log('ERRO LISTA PLANTAS =>', error.response.data)
    }
    setLoading(false)
  }

  async function getDadosUser() {
    try {
      const jsonValue = await AsyncStorage.getItem('dados-user');
      if (jsonValue) {
        const jsonDadosUser = JSON.parse(jsonValue)
        setDadosUsuario(jsonDadosUser)
      }
    } catch (error) {
      console.log('ERRO STORAGE');
    }
    getPlantas()
  }

  useEffect(() => {
    getDadosUser()
  }, [])

  useEffect(() => {
    getPlantas()
    getDadosUser()
  }, [isFocused])

  return (
    <>
      {loading &&
        <Loading />
      }
      <LayoutMain ativaIcon={1}>
        <View className='mx-9 mt-8'>
          <Text className='text-2xl font-bold'>Últimas plantas cadastradas</Text>
        </View>
        <View className='h-92'>
          <ScrollView
            horizontal
            className='ml-6 mt-2'
            contentContainerStyle={{ flexDirection: 'row' }}
          >
            {listaPlantas && listaPlantas.map((item: any) => (
              <CardProduto
                id={item.id}
                key={item.id}
                imagem={item.image}
                nome_popular={item.name_popular}
                nome_cientifico={item.name_scientific}
              />
            ))}

          </ScrollView>
        </View>
        <View className='mt-4 mb-8 mx-9'>
          <CardTopico
            titulo='Scanear Qr Code'
            onPress={() => navigate('CameraScreen')}
          />
          <CardTopico
            mt={20}
            titulo='Carteirinha Virtual'
            onPress={() => navigate('PerfilScreen', dadosUsuario.id)}
          />
        </View>
      </LayoutMain>
    </>
  );
}
