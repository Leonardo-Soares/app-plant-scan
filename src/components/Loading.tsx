import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function Loading() {
    return (
        <View
            className='flex-1 h-full w-full items-center justify-center absolute z-50'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <ActivityIndicator size={52} color={"#0B845C"} />
        </View>
    )
}