import { api } from '@services/axios'
import { View, Text } from 'react-native'
import Loading from '@components/Loading'
import { useEffect, useState } from 'react'
import LayoutMain from '@components/LayoutMain'
import CardCarteira from '@components/CardCarteira'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IDadosUsuario {
  id: any
  name: string
  email: string
  telefone: string
  numero_matricula: string
}

export function PerfilScreen() {
  const isFocused = useIsFocused()
  const [loading, setLoading] = useState(true)
  const [telefoneMask, setTelefoneMask] = useState('')
  const [usuario, setUsuario] = useState<IDadosUsuario | any>()

  const formatPhoneNumber = (input: string) => {
    // Eliminar caracteres no numéricos
    const cleaned = ('' + input).replace(/\D/g, '');

    // Aplicar la máscara al número de teléfono
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (match) {
      setTelefoneMask(`(${match[1]}) ${match[2]}-${match[3]}`);
    }
  }

  async function getUsuario() {
    setLoading(true)
    try {
      const jsonValue = await AsyncStorage.getItem('dados-user')
      if (jsonValue) {
        const jsonDadosUser = JSON.parse(jsonValue)
        const response = await api.get(`/usuario/${jsonDadosUser.id}`)
        if (response.data.success) {
          setUsuario(response.data.results)
          formatPhoneNumber(response.data.results.telefone)
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
              id={usuario?.id}
              nome={usuario?.name}
              email={usuario?.email}
              telefone={telefoneMask}
              numero_carteira={usuario?.numero_matricula}
            />
          </View>
        </View>

      </LayoutMain>
    </>
  );
}
