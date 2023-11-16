import { api } from '@services/axios'
import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import LayoutMain from '@components/LayoutMain'
import CardCarteira from '@components/CardCarteira'

interface IDadosUsuario {
  name: string
  email: string
  numero_matricula: string
  telefone: string

}

export function PerfilScreen(props: any) {
  const idUsuario = props.route.params
  const [usuario, setUsuario] = useState<IDadosUsuario | any>()

  async function getUsuario() {
    try {
      const response = await api.get(`/usuario/${idUsuario}`)
      if (response.data.success) {
        setUsuario(response.data.results)
      }
    } catch (error: any) {
      console.log('ERRO DADOS USUÁRIO =>', error.response.data)
    }
  }

  useEffect(() => {
    getUsuario()
  }, [])

  return (
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
  );
}
