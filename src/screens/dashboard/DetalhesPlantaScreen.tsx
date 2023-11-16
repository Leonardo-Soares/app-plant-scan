import { api } from '@services/axios'
import Loading from '@components/Loading'
import { useEffect, useState } from 'react'
import QRCode from 'react-native-qrcode-svg'
import LayoutMain from '@components/LayoutMain'
import { View, Text, Image } from 'react-native'

interface IDetalhePlanta {
  id: any
  effects: string
  curiosities: string
  names_group: string
  name_popular: string
  name_scientific: string
  characteristics: string
}

export function DetalhesPlantaScreen(props: any) {
  const idPlanta = props.route.params.id
  const [loading, setLoading] = useState(true)

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
    }
    setLoading(false)
  }

  useEffect(() => {
    getPlanta()
  }, [])

  return (
    <>
      {loading &&
        <Loading />
      }
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
            <Text className='text-2xl font-bold text-[#0B845C]'>{planta?.curiosities}</Text>
          </View>
          <View className='items-center mt-2 mb-4'>
            <Text className='text-lg text-[#707070]'>Características</Text>
            <Text className='text-2xl font-bold text-[#0B845C]'>{planta?.curiosities}</Text>
          </View>
          <View className='items-center mt-2 mb-4'>
            <Text className='text-lg text-[#707070]'>Grupo(s)</Text>
            <Text className='text-2xl font-bold text-[#0B845C]'>{planta?.curiosities}</Text>
          </View>
        </View>
      </LayoutMain>
    </>
  );
}
