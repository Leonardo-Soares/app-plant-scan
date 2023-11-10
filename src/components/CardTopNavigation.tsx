import React, { useState } from 'react'
import { colors } from '@theme/colors'
import IcoMenu from '../../assets/svg/IcoMenu'
import IcoClose from '../../assets/svg/IcoClose'
import { useNavigate } from '@hooks/useNavigate'
import useAuthenticatedStore from '@stores/useAuthenticatedStore'
import { Modal, Text, Image, TouchableOpacity, View } from 'react-native'

export default function CardTopNavigation() {
    const { navigate } = useNavigate()
    const [modalMenu, setModalMenu] = useState(false)
    const { setIsAuthenticated } = useAuthenticatedStore()

    function onHome() {
        navigate('HomeScreen')
        setModalMenu(false)
    }
    function onCadastros() {
        navigate('')
        setModalMenu(false)
    }
    function onCarteira() {
        navigate('')
        setModalMenu(false)
    }
    function onLogout() {
        setIsAuthenticated(false)
        navigate('LoginScreen')
        setModalMenu(false)
    }

    return (
        <>
            <Modal animationType='slide' visible={modalMenu} transparent>
                <View className='flex-1 w-full items-center justify-center bg-[#0D986A]' >
                    <TouchableOpacity onPress={() => setModalMenu(false)} className='absolute top-8 right-8 z-50'>
                        <IcoClose />
                    </TouchableOpacity>
                    <View className='items-end gap-y-8'>
                        <TouchableOpacity className='z-50' onPress={onHome}>
                            <Text className='text-4xl font-bold text-white'>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='z-50' onPress={() => navigate('')}>
                            <Text className='text-4xl font-bold text-white'>Cadastros</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='z-50' onPress={() => navigate('')}>
                            <Text className='text-4xl font-bold text-white'>Carteirinha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='z-50' onPress={onLogout}>
                            <Text className='text-4xl font-bold text-white'>Sair</Text>
                        </TouchableOpacity>
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