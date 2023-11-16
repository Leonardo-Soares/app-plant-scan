import { api } from '@services/axios'
import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import LayoutMain from '@components/LayoutMain'
import CardCarteira from '@components/CardCarteira'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '@components/Loading'

interface IDadosUsuario {
  name: string
  email: string
  numero_matricula: string
  telefone: string

}

export function PerfilScreen() {
  const isFocused = useIsFocused()
  const [loading, setLoading] = useState(true)
  const [usuario, setUsuario] = useState<IDadosUsuario | any>()

  async function getUsuario() {
    setLoading(true)
    try {
      const jsonValue = await AsyncStorage.getItem('dados-user')
      if (jsonValue) {
        const jsonDadosUser = JSON.parse(jsonValue)
        const response = await api.get(`/usuario/${jsonDadosUser.id}`)
        if (response.data.success) {
          setUsuario(response.data.results)
        }
      }
    } catch (error: any) {
      console.log('ERRO DADOS USUÁRIO =>', error.response.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    getUsuario()
  }, [])

  useEffect(() => {
    getUsuario()
  }, [isFocused])

  return (
    <>
      {loading &&
        <Loading />
      }
      <LayoutMain>
        <View className='mx-9 mt-8'>
          <Text className='text-2xl font-bold'>Carteira virtual</Text>
          <View className='mt-2 mb-4'>
            <CardCarteira
              email={usuario?.email}
              nome={usuario?.name}
              numero_carteira={usuario?.numero_matricula}
              telefone={usuario?.telefone}
            />
          </View>
        </View>

      </LayoutMain>
    </>
  );
}
