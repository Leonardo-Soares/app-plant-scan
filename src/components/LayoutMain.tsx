import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import CardTopNavigation from './CardTopNavigation'
import CardBottomNavigation from './CardBottomNavigation'

export default function LayoutMain({ children }: { children?: any }) {
    return (
        <SafeAreaView>
            <View className='w-full h-full'>
                <CardTopNavigation />
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    {children}
                </ScrollView>
                <CardBottomNavigation />
            </View>
        </SafeAreaView>
    )
}