import React from 'react'
import { colors } from '@theme/colors'
import IcoHome from '../../assets/svg/IcoHome'
import IcoSair from '../../assets/svg/IcoSair'
import { useNavigate } from '@hooks/useNavigate'
import IcoPlantas from '../../assets/svg/IcoPlantas'
import { TouchableOpacity, View } from 'react-native'
import useAuthenticatedStore from '@stores/useAuthenticatedStore'

interface IBottomNavigation {
    ativaIcon?: number
}

export default function CardBottomNavigation({ ativaIcon }: IBottomNavigation) {
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
                <IcoHome active={ativaIcon == 1 ? true : false} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPlantas}>
                <IcoPlantas active={ativaIcon == 2 ? true : false} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onLogout}>
                <IcoSair />
            </TouchableOpacity>
        </View>
    )
}