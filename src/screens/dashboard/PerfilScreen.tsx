import { api } from '@services/axios'
import { colors } from '@theme/colors'
import Loading from '@components/Loading'
import { useEffect, useState } from 'react'
import LayoutMain from '@components/LayoutMain'
import { View, Text, Modal, Alert } from 'react-native'
import { useNavigate } from '@hooks/useNavigate'
import ButtonSolid from '@components/ButtonSolid'
import CardCarteira from '@components/CardCarteira'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useAuthenticatedStore from '@stores/useAuthenticatedStore'

interface IDadosUsuario {
  id: any
  name: string
  email: string
  telefone: string
  numero_matricula: string
}

export function PerfilScreen(props: any) {
  const idUsuarioVisitante = props.route.params.id
  const usuarioVisitante = props.route.params.outroUsuario

  const isFocused = useIsFocused()
  const { navigate } = useNavigate()
  const [loading, setLoading] = useState(true)
  const [modalErro, setModalErro] = useState(false)
  const [telefoneMask, setTelefoneMask] = useState('')
  const { setIsAuthenticated } = useAuthenticatedStore()
  const [modalUsuario, setModalUsuario] = useState(false)
  const [usuario, setUsuario] = useState<IDadosUsuario | any>()
  const [telefoneVisitante, setTelefoneVisitante] = useState('')
  const [dadosVisitante, setDadosVisitante] = useState<IDadosUsuario | any>()

  const formatPhoneNumber = (input: string) => {
    // Eliminar caracteres no numéricos
    const cleaned = ('' + input).replace(/\D/g, '');

    // Aplicar la máscara al número de teléfono
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (match) {
      setTelefoneMask(`(${match[1]}) ${match[2]}-${match[3]}`)
    }
  }

  const formatPhoneNumberVisitante = (input: string) => {
    // Eliminar caracteres no numéricos
    const cleaned = ('' + input).replace(/\D/g, '');

    // Aplicar la máscara al número de teléfono
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (match) {
      setTelefoneVisitante(`(${match[1]}) ${match[2]}-${match[3]}`)
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

  async function getUsuarioVisitante() {
    setLoading(true)
    setModalErro(false)
    try {
      const response = await api.get(`/usuario/${idUsuarioVisitante}`)
      if (response.data.success) {
        setDadosVisitante(response.data.results)
        formatPhoneNumberVisitante(response.data.results.telefone)
        setModalUsuario(true)
        return;
      }
      setModalErro(true)
    } catch (error: any) {
      setModalErro(true)
      console.log('ERRO DADOS USUÁRIO VISITANTE =>', error.response.data)
    }
    setLoading(false)
  }

  async function deleteUser() {
    setLoading(true)
    try {
      const response = await api.delete(`/usuarios/${usuario.id}`)
      if (response.status === 200) {
        Alert.alert('Conta deletada com sucesso !')
      }
      else {
        Alert.alert('Erro ao deletar conta !')
      }

      setIsAuthenticated(false)
    } catch (error: any) {
      console.error('ERRO AO DELETAR USUÁRIO =>', error.response.data);
    }
    setLoading(false)
  }

  useEffect(() => {
    getUsuario()
    if (usuarioVisitante) {
      getUsuarioVisitante()
    }
  }, [])

  useEffect(() => {
    getUsuario()
    if (usuarioVisitante) {
      getUsuarioVisitante()
    }
  }, [isFocused])

  return (
    <>
      {loading &&
        <Loading />
      }
      <Modal visible={modalErro} transparent>
        <View className='flex-1 items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <View className='bg-white rounded-xl px-3 py-3 mx-4' style={{ elevation: 8 }}>
            <Text className='text-xl text-center font-bold'>Erro ao localizar usuário</Text>
            <View className='my-3'>
              <Text className='text-center'>Ocorreu um erro ao localizar esse usuário, faça o scan novamente !</Text>
            </View>
            <ButtonSolid
              text='Voltar e tentar novamente'
              backgroundColor={colors.greenSecondary}
              handleLogin={() => setModalErro(false)}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={modalUsuario} transparent>
        <View className='flex-1 items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <View className='w-full'>
            <View className='bg-white rounded-xl px-3 py-3 mx-6' style={{ elevation: 8 }}>
              <Text className='text-xl text-center font-bold'>Usuário Validado !</Text>
              <View className='my-3'>
                <CardCarteira
                  id={dadosVisitante?.id}
                  nome={dadosVisitante?.name}
                  email={dadosVisitante?.email}
                  telefone={telefoneVisitante}
                  numero_carteira={dadosVisitante?.numero_matricula}
                />
              </View>
              <ButtonSolid
                text='Voltar'
                backgroundColor={colors.greenSecondary}
                handleLogin={() => setModalUsuario(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <LayoutMain>
        <View className='mx-9 mt-8'>
          <Text className='text-2xl font-bold'>Carteira virtual</Text>
          <View className='mt-2 mb-12'>
            <CardCarteira
              id={usuario?.id}
              nome={usuario?.name}
              email={usuario?.email}
              telefone={telefoneMask}
              numero_carteira={usuario?.numero_matricula}
            />
          </View>

          {/* <ButtonSolid
            text='Validar outras carteiras'
            backgroundColor={colors.greenSecondary}
            handleLogin={() => navigate('CameraScreen', { usuario: true })}
          /> */}

          <View className='my-2'></View>

          <ButtonSolid
            text='Deletar conta'
            backgroundColor={colors.danger}
            handleLogin={() => Alert.alert('Deletar conta', 'Tem certeza que deseja deletar sua conta ?', [
              {
                text: 'Cancelar',
                style: 'cancel'
              },
              {
                text: 'Deletar',
                onPress: () => deleteUser()
              }
            ])
            }
          />
        </View>

      </LayoutMain>
    </>
  );
}
