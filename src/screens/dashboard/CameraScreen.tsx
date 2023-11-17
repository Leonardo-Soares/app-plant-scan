import { useEffect, useState } from 'react'
import LayoutMain from '@components/LayoutMain'
import { useNavigate } from '@hooks/useNavigate'
import { Camera, CameraType } from 'expo-camera'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useIsFocused } from '@react-navigation/native'
import { View, Text, Button, TouchableOpacity } from 'react-native'

export function CameraScreen() {
  const isFocused = useIsFocused()
  const { navigate } = useNavigate()
  const [scanned, setScanned] = useState(false)
  const [type, setType] = useState(CameraType.back)
  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      console.log('status', status)
      console.log('teste')

      setHasPermission(status === 'granted')
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true)

    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  const handleBarCodeScannedTeste = ({ type, data }: any) => {
    console.log(data);
    console.log(type);

    alert(`hello!`);
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function toggleCameraType() {
    setType((current: any) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <LayoutMain>
      <Camera className='flex-1 w-full h-[50vh]' type={type} />
      <View className='mx-9 z-50'>
        <Text className='text-2xl font-bold text-center py-5'>Validar câmera</Text>
        <BarCodeScanner
          onBarCodeScanned={scanned ?
            handleBarCodeScannedTeste
            :
            handleBarCodeScanned}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

        <TouchableOpacity className='h-20 w-full bg-red-100 items-center justify-center' onPress={toggleCameraType}>
          <Text>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </LayoutMain>
  );
}
