import React from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'

export default function CardCarteira() {
    return (
        <View
            className='bg-white rounded-lg p-5'
            style={{
                elevation: 8
            }}
        >
            <Text className='text-[#353535] text-2xl text-center font-bold border-b-2 border-solid border-[#D9D9D9] pb-3'>
                Carlos Carvalho
            </Text>

            <Text className='text-[#7A7A7A] text-center pt-3'>
                Número da Carteirinha
            </Text>

            <Text className='text-[#353535] text-3xl font-extrabold text-center'>
                018752052112-20
            </Text>

            <View className='mt-4'>
                <Text className='text-[#7A7A7A] text-md'>
                    Telefone
                </Text>
                <Text className='text-[#353535] text-xl font-bold'>
                    (99) 9 999-9999
                </Text>
            </View>
            <View className='mt-2'>
                <Text className='text-[#7A7A7A] text-md'>
                    E-mail
                </Text>
                <Text className='text-[#353535] text-xl font-bold'>
                    teste@email.com
                </Text>
            </View>


        </View>

    )
}