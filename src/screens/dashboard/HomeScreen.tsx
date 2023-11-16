import { colors } from '@theme/colors'
import { api } from '@services/axios'
import { useEffect, useState } from 'react'
import LayoutMain from '@components/LayoutMain'
import CardTopico from '@components/CardTopico'
import { useNavigate } from '@hooks/useNavigate'
import CardProduto from '@components/CardProduto'
// import { Camera, CameraType } from 'expo-camera'
import ButtonSolidSecondary from '@components/ButtonSolidSecondary'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, ScrollView, Modal, Linking } from 'react-native'

export function HomeScreen() {
  const { navigate } = useNavigate()
  const [listaPlantas, setListaPlantas] = useState([])
  const [dadosUsuario, setDadosUsuario] = useState<any>()
  // const [type, setType] = useState(CameraType.back)
  // const [permission, requestPermission] = Camera.useCameraPermissions()

  // if (permission) {
  //   if (!permission.granted) {
  //     // Camera permissions are not granted yet
  //     return (
  //       <Modal visible transparent>
  //         <View className='flex-1 w-full items-center justify-center'>
  //           <Text style={{ textAlign: 'center' }}>Permitir que o App use sua câmera ?</Text>
  //           <View className='w-52 mt-2'>
  //             <ButtonSolidSecondary
  //               text='Solicitar Permissão'
  //               color={colors.greenSecondary}
  //               handleLogin={requestPermission}
  //             />
  //           </View>
  //         </View>
  //       </Modal>
  //     )
  //   }
  // }

  async function getPlantas() {
    try {
      const response = await api.get(`/plantas`)
      if (response.data.success) {
        setListaPlantas(response.data.results)
      }
    } catch (error: any) {
      console.log('ERRO LISTA PLANTAS =>', error.response.data)
    }
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
  }

  useEffect(() => {
    getPlantas()
    getDadosUser()
  }, [])

  return (
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
        {/* <CardTopico
          titulo='Scanear Qr Code'
          onPress={openCamera}
        /> */}
        <CardTopico
          mt={20}
          titulo='Carteirinha Virtual'
          onPress={() => navigate('PerfilScreen', dadosUsuario.id)}
        />
      </View>
    </LayoutMain>
  );
}
