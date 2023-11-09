import React from 'react'
import { ScrollView, View } from 'react-native'
import CardBottomNavigation from './CardBottomNavigation'

export default function LayoutMain({ children }: { children?: any }) {
    return (
        <View className='w-full h-full'>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                {children}
            </ScrollView>
            <CardBottomNavigation />
        </View>
    )
}