import React from 'react'
import CardTopNavigation from './CardTopNavigation'
import CardBottomNavigation from './CardBottomNavigation'
import { SafeAreaView, ScrollView, View } from 'react-native'

export default function LayoutMain({ children }: { children?: any }) {
    return (
        <SafeAreaView>
            <View className='w-full h-full'>
                <CardTopNavigation />
                <ScrollView >
                    {children}
                </ScrollView>
                <CardBottomNavigation />
            </View>
        </SafeAreaView>
    )
}