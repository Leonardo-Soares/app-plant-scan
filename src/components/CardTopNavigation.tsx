import { colors } from '@theme/colors'
import IcoMenu from '../../assets/svg/IcoMenu'
import IcoClose from '../../assets/svg/IcoClose'
import { useNavigate } from '@hooks/useNavigate'
import React, { useEffect, useState } from 'react'
import useAuthenticatedStore from '@stores/useAuthenticatedStore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Modal, Text, Image, TouchableOpacity, View } from 'react-native'

export default function CardTopNavigation() {
    const { navigate } = useNavigate()
    const [modalMenu, setModalMenu] = useState(false)
    const [nomeUsuario, setNomeUsuario] = useState('')
    const { setIsAuthenticated } = useAuthenticatedStore()

    function onHome() {
        navigate('HomeScreen')
        setModalMenu(false)
    }
    function onCadastrar() {
        navigate('RegisterPlantaScreen')
        setModalMenu(false)
    }
    function onPerfil() {
        navigate('PerfilScreen')
        setModalMenu(false)
    }
    function onLogout() {
        setIsAuthenticated(false)
        setModalMenu(false)
    }

    async function getDadosUser() {
        try {
            const jsonValue = await AsyncStorage.getItem('dados-user');
            if (jsonValue) {
                const jsonDadosUser = JSON.parse(jsonValue)
              
                // Divida a string usando espaço como delimitador
                const partesDoNome = jsonDadosUser.name.split(' ')

                // Pegue o primeiro elemento do array resultante
                const primeiroNome = partesDoNome[0]
                
                setNomeUsuario(primeiroNome)

            }
        } catch (error) {
            console.log('ERRO STORAGE');
        }
    }

    useEffect(() => {
        getDadosUser()
    }, [])

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
                        <TouchableOpacity className='z-50' onPress={onCadastrar}>
                            <Text className='text-4xl font-bold text-white'>Cadastrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='z-50' onPress={onPerfil}>
                            <Text className='text-4xl font-bold text-white'>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='z-50' onPress={onLogout}>
                            <Text className='text-4xl font-bold text-white'>Sair</Text>
                        </TouchableOpacity>
                    </View>
                    <Image className='absolute h-full flex-1 opacity-40' source={require('../../assets/img/bg-fundo-menu.png')} />
                </View>
            </Modal>
            <View
                className='w-full flex-row justify-between items-center px-8 pb-5 pt-8 z-50'
                style={{ backgroundColor: colors.greenSecondary, elevation: 12 }}
            >
                <View>
                    <Text className='text-white'>Olá,</Text>
                    <Text className='text-white text-2xl font-semibold'>{nomeUsuario ?? 'Usuário'}</Text>
                </View>
                <TouchableOpacity onPress={() => setModalMenu(true)}>
                    <IcoMenu />
                </TouchableOpacity>
            </View>
        </>
    )
}