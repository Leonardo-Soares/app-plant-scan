import { api } from '@services/axios'
import { colors } from '@theme/colors'
import Loading from '@components/Loading'
import { useEffect, useState } from 'react'
import QRCode from 'react-native-qrcode-svg'
import LayoutMain from '@components/LayoutMain'
import { useNavigate } from '@hooks/useNavigate'
import ButtonSolid from '@components/ButtonSolid'
import { View, Text, Image, Modal } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

interface IDetalhePlanta {
  id: any
  effects: string
  curiosities: string
  names_group: string
  name_popular: string
  name_scientific: string
  characteristics: string
}

export function DetalhesPlantaScreen(props?: any) {
  const isFocused = useIsFocused()
  const { navigate } = useNavigate()
  const idPlanta = props.route.params.id 
  const [loading, setLoading] = useState(true)
  const [modalErro, setModalErro] = useState(false)
  const [planta, setPlanta] = useState<IDetalhePlanta>()

  async function getPlanta() {
    setLoading(true)
    try {
      const response = await api.get(`/planta/${idPlanta}`)
      if (response.data.success) {
        setPlanta(response.data.results)
      }
    } catch (error: any) {
      console.log('ERRO LISTA PLANTAS =>', error.response.data)
      setModalErro(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    getPlanta()
  }, [isFocused])

  return (
    <>
      {loading &&
        <Loading />
      }
      <Modal visible={modalErro} transparent>
        <View className='flex-1 items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <View className='bg-white rounded-xl px-3 py-3 mx-4' style={{ elevation: 8 }}>
            <Text className='text-xl text-center font-bold'>Erro ao localizar planta</Text>
            <View className='my-3'>
              <Text className='text-center'>Ocorreu um erro ao localizar essa planta, faça o scan novamente !</Text>
            </View>
            <ButtonSolid
              text='Voltar e tentar novamente'
              backgroundColor={colors.greenSecondary}
              handleLogin={() => navigate('HomeScreen')}
            />
          </View>
        </View>
      </Modal>
      <LayoutMain>
        <View className='mx-9 mt-8 mb-4'>
          <Text className='text-2xl font-bold'>Detalhes</Text>
        </View>
        <View className='bg-white rounded-lg px-2 py-6 mx-9 mb-8' style={{ elevation: 8 }}>
          {/* <View className='mx-auto w-32 h-32 bg-red-100 rounded-full' style={{ elevation: 6 }}> */}
          <View className='mx-auto w-32 h-32' style={{ elevation: 6 }}>
            {/* <Image className='w-full h-full rounded-full' resizeMode='cover' source={require('../../../assets/img/temp/planta.jpg')} /> */}
            {planta?.id &&
              <View className='w-full justify-center items-center p-4'>
                <QRCode
                  value={planta.id.toString()}
                />
              </View>
            }
          </View>
          <View className='items-center mt-2 mb-4'>
            <Text className='text-lg text-[#707070]'>Nome popular</Text>
            <Text className='text-2xl font-bold text-[#0B845C]'>{planta?.name_popular}</Text>
          </View>
          <View className='items-center mt-4'>
            <Text className='text-lg text-[#707070]'>Nome cientifíco</Text>
            <Text className='text-2xl font-bold text-[#0B845C]'>{planta?.name_scientific}</Text>
          </View>
          <View className='items-center mt-2 mb-4'>
            <Text className='text-lg text-[#707070]'>Curiosidades</Text>
            <Text className='text-2xl font-bold text-[#0B845C]'>{planta?.curiosities}</Text>
          </View>
          <View className='items-center mt-2 mb-4'>
            <Text className='text-lg text-[#707070]'>Efeitos</Text>
            <Text className='text-2xl font-bold text-[#0B845C]'>{planta?.effects}</Text>
          </View>
          <View className='items-center mt-2 mb-4'>
            <Text className='text-lg text-[#707070]'>Características</Text>
            <Text className='text-2xl font-bold text-[#0B845C]'>{planta?.characteristics}</Text>
          </View>
          <View className='items-center mt-2 mb-4'>
            <Text className='text-lg text-[#707070]'>Grupo(s)</Text>
            <Text className='text-2xl font-bold text-[#0B845C]'>{planta?.names_group}</Text>
          </View>
        </View>
      </LayoutMain>
    </>
  );
}
