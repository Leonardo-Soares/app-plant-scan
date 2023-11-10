import React from 'react'
import CardTopNavigation from './CardTopNavigation'
import CardBottomNavigation from './CardBottomNavigation'
import { SafeAreaView, ScrollView, View } from 'react-native'

interface ILayout {
    children?: any
    ativaIcon?: number
}

export default function LayoutMain({ children, ativaIcon }: ILayout) {
    return (
        <SafeAreaView>
            <View className='w-full h-full'>
                <CardTopNavigation />
                <ScrollView >
                    {children}
                </ScrollView>
                <CardBottomNavigation ativaIcon={ativaIcon} />
            </View>
        </SafeAreaView>
    )
}