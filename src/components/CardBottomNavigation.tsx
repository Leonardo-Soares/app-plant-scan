import React from 'react'
import { colors } from '@theme/colors'
import IcoHome from '../../assets/svg/IcoHome'
import IcoSair from '../../assets/svg/IcoSair'
import { useNavigate } from '@hooks/useNavigate'
import IcoPlantas from '../../assets/svg/IcoPlantas'
import { TouchableOpacity, View } from 'react-native'
import useAuthenticatedStore from '@stores/useAuthenticatedStore'

export default function CardBottomNavigation() {
    const { navigate } = useNavigate()
    const { setIsAuthenticated } = useAuthenticatedStore()

    function onHome() {
        navigate('HomeScreen')
    }
    function onPlantas() {
        navigate('RegisterPlantaScreen')
    }
    function onLogout() {
        setIsAuthenticated(false)
    }

    return (
        <View
            className='flex-row justify-between w-full px-8 py-5 z-50'
            style={{ backgroundColor: colors.greenSecondary }}
        >
            <TouchableOpacity onPress={onHome}>
                <IcoHome />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPlantas}>
                <IcoPlantas />
            </TouchableOpacity>
            <TouchableOpacity onPress={onLogout}>
                <IcoSair />
            </TouchableOpacity>
        </View>
    )
}