import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'

export default function CardTopico({ titulo, onPress, mt }: { titulo: string, onPress?: any, mt?: any }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ elevation: 8, marginTop: mt ?? 0 }}
            className='bg-[#0B845C] h-20 items-start justify-center rounded-2xl'
        >
            <Image
                className='absolute w-full h-20 opacity-40'
                source={require('../../assets/img/bg-card.png')}
            />
            <Text className='text-white font-bold text-2xl pl-4'>{titulo}</Text>
        </TouchableOpacity>

    )
}