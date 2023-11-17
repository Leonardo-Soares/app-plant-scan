import { useNavigate } from '@hooks/useNavigate'
import React, { useEffect, useState } from 'react'
import BarcodeMask from 'react-native-barcode-mask'
import { useIsFocused } from '@react-navigation/native'
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner'
import { Button, Dimensions, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import ButtonSolid from '@components/ButtonSolid'
import { colors } from '@theme/colors'

const finderWidth: number = 280
const finderHeight: number = 230
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const viewMinX = (width - finderWidth) / 2
const viewMinY = (height - finderHeight) / 2


export function CameraScreen(props: any) {
  const isFocused = useIsFocused()
  const { navigate, goBack } = useNavigate()
  const qrUsuario = props.route.params.usuario
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [type, setType] = useState<any>(BarCodeScanner.Constants.Type.back)
  const [scanned, setScanned] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    if (!scanned) {
      const { type, data, bounds: { origin } = {} } = scanningResult
      // @ts-ignore
      const { x, y } = origin
      if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
        setScanned(true)
        const id = data
        if (qrUsuario) {
          navigate('PerfilScreen', { id, outroUsuario: true })
          return;
        } else {
          navigate('DetalhesPlantaScreen', { id })
          return;
        }
      }
    }
  }

  if (hasPermission === null) {
    return <Text>Buscando permissão...</Text>
  }
  if (hasPermission === false) {
    return <Text>Você não autorizou acessr sua câmera</Text>
  }

  return (
    <View className='flex-1'>
      <BarCodeScanner onBarCodeScanned={handleBarCodeScanned}
        type={type}
        style={[StyleSheet.absoluteFillObject]}
        className='flex-1 justify-center items-center'
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
      >
        <View className='flex-1 bg-transparent flex-row'>
          <TouchableOpacity
            className='flex-1 items-end'
            onPress={() => {
              setType(
                type === BarCodeScanner.Constants.Type.back
                  ? BarCodeScanner.Constants.Type.front
                  : BarCodeScanner.Constants.Type.back
              )
            }}>
            <Text className='text-sm m-2 text-white'> Trocar câmera </Text>
          </TouchableOpacity>
        </View>
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
        <View className='w-full px-8 pb-12 '>
          <ButtonSolid
            text='Fechar câmera'
            backgroundColor={colors.greenSecondary}
            handleLogin={() => goBack()}
          />
        </View>
      </BarCodeScanner>
    </View>
  )
}