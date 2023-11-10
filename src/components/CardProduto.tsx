import React from 'react'
import { colors } from '@theme/colors'
import { useNavigate } from '@hooks/useNavigate'
import ButtonSolidSecondary from './ButtonSolidSecondary'
import { Text, Image, View, TouchableOpacity } from 'react-native'

export default function CardProduto() {
    const { navigate } = useNavigate()

    return (
        <TouchableOpacity onPress={()=> navigate('DetalhesPlantaScreen')} className='bg-white rounded-lg px-2 py-6 mx-2 my-2 w-52' style={{ elevation: 8 }}>
            <View className='mx-auto w-32 h-32 bg-red-100 rounded-full' style={{ elevation: 6 }}>
                <Image className='w-full h-full rounded-full' resizeMode='cover' source={require('../../assets/img/temp/planta.jpg')} />
            </View>
            <View className='items-center mt-4'>
                <Text className='text-xs text-[#707070]'>Nome</Text>
                <Text className='text-sm font-bold text-[#0B845C]'>Tillandsia</Text>
            </View>
            <View className='items-center mt-2 mb-4'>
                <Text className='text-xs text-[#707070]'>Classe</Text>
                <Text className='text-sm font-bold text-[#0B845C]'>Liliopsida</Text>
            </View>
            <ButtonSolidSecondary
                text='Detalhes'
                color={colors.greenSecondary}
            />
        </TouchableOpacity>
    )
}