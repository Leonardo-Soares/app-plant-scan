import LayoutMain from '@components/LayoutMain'
import CardTopico from '@components/CardTopico'
import { useNavigate } from '@hooks/useNavigate'
import CardProduto from '@components/CardProduto'
import { Camera, CameraType } from 'expo-camera'
import { View, Text, ScrollView, Button, Modal } from 'react-native'
import { useState } from 'react'
import ButtonSolidSecondary from '@components/ButtonSolidSecondary'
import { colors } from '@theme/colors'

export function HomeScreen() {
  const { navigate } = useNavigate()
  const [type, setType] = useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions()

  if (permission) {
    if (!permission.granted) {
      // Camera permissions are not granted yet
      return (
        <Modal visible transparent>
          <View className='flex-1 w-full items-center justify-center'>
            <Text style={{ textAlign: 'center' }}>Permitir que o App use sua câmera ?</Text>
            <View className='w-52 mt-2'>
              <ButtonSolidSecondary
                text='Solicitar Permissão'
                color={colors.greenSecondary}
                handleLogin={requestPermission}
              />
            </View>
          </View>
        </Modal>
      )
    }
  }

  function toggleCameraType() {
    setType((current: any) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

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
          titulo='Scanear Qr Code'
          onPress={toggleCameraType}
        />
        <CardTopico
          mt={20}
          titulo='Carteirinha Virtual'
          onPress={() => navigate('PerfilScreen')}
        />
      </View>
    </LayoutMain>
  );
}
