import React from 'react'
import { Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

interface IDadosUser {
    id: any
    nome: string
    email: string
    telefone: string
    numero_carteira: string
}

export default function CardCarteira({ nome, numero_carteira, telefone, email, id }: IDadosUser) {
    return (
        <View
            className='bg-white rounded-lg p-5'
            style={{
                elevation: 8
            }}
        >
            <Text className='text-[#353535] text-2xl text-center font-bold border-b-2 border-solid border-[#D9D9D9] pb-3'>
                {nome}
            </Text>

            {id &&
                <View className='w-full justify-center items-center pt-3'>
                    <QRCode
                        value={id.toString()}
                    />
                </View>
            }

            <Text className='text-[#7A7A7A] text-center pt-3'>
                Número da Carteirinha
            </Text>

            <Text className='text-[#353535] text-3xl font-extrabold text-center'>
                {numero_carteira}
            </Text>

            <View className='mt-4'>
                <Text className='text-[#7A7A7A] text-md'>
                    Telefone
                </Text>
                <Text className='text-[#353535] text-xl font-bold'>
                    {telefone}
                </Text>
            </View>
            <View className='mt-2'>
                <Text className='text-[#7A7A7A] text-md'>
                    E-mail
                </Text>
                <Text className='text-[#353535] text-xl font-bold'>
                    {email}
                </Text>
            </View>
        </View>
    )
}