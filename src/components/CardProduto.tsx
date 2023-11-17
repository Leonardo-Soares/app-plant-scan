import React from 'react'
import { colors } from '@theme/colors'
import QRCode from 'react-native-qrcode-svg'
import { useNavigate } from '@hooks/useNavigate'
import ButtonSolidSecondary from './ButtonSolidSecondary'
import { Text, Image, View, TouchableOpacity } from 'react-native'

interface ICardPlanta {
    id: any
    imagem: string
    nome_popular: string
    nome_cientifico: string
}

export default function CardProduto({ nome_cientifico, nome_popular, imagem, id }: ICardPlanta) {
    const { navigate } = useNavigate()

    return (
        <TouchableOpacity onPress={() => navigate('DetalhesPlantaScreen', { id })} className='bg-white rounded-lg px-2 py-6 mx-2 my-2 w-52' style={{ elevation: 8 }}>
            {/* <View className='mx-auto w-32 h-32 bg-red-100 rounded-full' style={{ elevation: 6 }}> */}
            <View className='mx-auto w-32 h-32' style={{ elevation: 6 }}>
                {/* <Image
                    resizeMode='cover'
                    className='w-full h-full rounded-full'
                    source={require('../../assets/img/temp/planta.jpg')}
                /> */}
                {id &&
                    <View className='w-full justify-center items-center p-4'>
                        <QRCode
                            value={id.toString()}
                        />
                    </View>
                }
            </View>
            <View className='items-center mt-4'>
                <Text className='text-xs text-[#707070]'>Nome cientifíco</Text>
                <Text className='text-sm font-bold text-[#0B845C]'>{nome_cientifico}</Text>
            </View>
            <View className='items-center mt-2 mb-4'>
                <Text className='text-xs text-[#707070]'>Nome popular</Text>
                <Text className='text-sm font-bold text-[#0B845C]'>{nome_popular}</Text>
            </View>
            <ButtonSolidSecondary
                text='Detalhes'
                color={colors.greenSecondary}
                handleLogin={() => navigate('DetalhesPlantaScreen', { id })}
            />
        </TouchableOpacity>
    )
}