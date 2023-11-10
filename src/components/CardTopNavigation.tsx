import React, { useState } from 'react'
import { colors } from '@theme/colors'
import { Modal, Text, Image, TouchableOpacity, View } from 'react-native'
import IcoMenu from '../../assets/svg/IcoMenu'
import IcoClose from '../../assets/svg/IcoClose'

export default function CardTopNavigation() {
    const [modalMenu, setModalMenu] = useState(false)

    return (
        <>
            <Modal animationType='slide' visible={modalMenu} transparent>
                <View className='flex-1 w-full items-center justify-center bg-[#0D986A]' >
                    <TouchableOpacity onPress={() => setModalMenu(false)} className='absolute top-8 right-8 z-50'>
                        <IcoClose />
                    </TouchableOpacity>
                    <View className='items-end gap-y-8'>
                        <Text className='text-4xl font-bold text-white'>Home</Text>
                        <Text className='text-4xl font-bold text-white'>Cadastros</Text>
                        <Text className='text-4xl font-bold text-white'>Carteirinha</Text>
                        <Text className='text-4xl font-bold text-white'>Sair</Text>
                    </View>
                    <Image className='absolute h-full flex-1 opacity-40' source={require('../../assets/img/bg-fundo-menu.png')} />
                </View>
            </Modal>
            <View
                className='w-full flex-row justify-between items-center px-8 py-5 z-50 mt-12'
                style={{ backgroundColor: colors.greenSecondary, elevation: 12 }}
            >
                <View>
                    <Text className='text-white'>Olá,</Text>
                    <Text className='text-white text-2xl font-semibold'>Carlos</Text>
                </View>
                <TouchableOpacity onPress={() => setModalMenu(true)}>
                    <IcoMenu />
                </TouchableOpacity>
            </View>
        </>
    )
}