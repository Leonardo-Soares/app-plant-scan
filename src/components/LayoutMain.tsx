import React, { useEffect, useState } from 'react'
import CardTopNavigation from './CardTopNavigation'
import CardBottomNavigation from './CardBottomNavigation'
import { SafeAreaView, ScrollView, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ILayout {
    children?: any
    ativaIcon?: number
}


export default function LayoutMain({ children, ativaIcon }: ILayout) {
    const [dadosUsuario, setDadosUsuario] = useState<any>()

    async function getDadosUser() {
        try {
            const jsonValue = await AsyncStorage.getItem('dados-user');
            if (jsonValue) {
                const jsonDadosUser = JSON.parse(jsonValue)
                setDadosUsuario(jsonDadosUser)
            }
        } catch (error) {
            console.log('ERRO STORAGE');
        }
    }

    useEffect(() => {
        getDadosUser()
    }, [])

    return (
        <SafeAreaView>
            <View className='w-full h-full'>
                <CardTopNavigation idUsuario={dadosUsuario?.id} />
                <ScrollView >
                    {children}
                </ScrollView>
                <CardBottomNavigation ativaIcon={ativaIcon} />
            </View>
        </SafeAreaView>
    )
}