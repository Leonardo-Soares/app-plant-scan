import React from 'react'
import { colors } from '@theme/colors'
import IcoHome from '../../assets/svg/IcoHome'
import IcoSair from '../../assets/svg/IcoSair'
import IcoPerfil from '../../assets/svg/IcoPerfil'
import IcoPlantas from '../../assets/svg/IcoPlantas'
import { useNavigate } from '@hooks/useNavigate'
import { TouchableOpacity, View } from 'react-native'
import useAuthenticatedStore from '@stores/useAuthenticatedStore'

export default function CardBottomNavigation() {
    const { navigate } = useNavigate()
    const { setIsAuthenticated } = useAuthenticatedStore()

    function onLogout() {
        setIsAuthenticated(false)
        navigate('LoginScreen')
    }

    return (
        <View
            className='flex-row justify-between w-full px-8 py-5 z-50'
            style={{ backgroundColor: colors.greenSecondary }}
        >
            <TouchableOpacity onPress={() => { }}>
                <IcoHome />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <IcoPerfil />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <IcoPlantas />
            </TouchableOpacity>
            <TouchableOpacity onPress={onLogout}>
                <IcoSair />
            </TouchableOpacity>
        </View>
    )
}