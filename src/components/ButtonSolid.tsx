import React from 'react'
import { colors } from '@theme/colors'
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native'

interface IButtonSolid {
    text: string
    handleLogin?: any
    isLoading?: boolean
    backgroundColor?: string
}

export default function ButtonSolid({ handleLogin, isLoading, text, backgroundColor }: IButtonSolid) {
    return (
        <TouchableOpacity
            onPress={handleLogin}
            style={{
                backgroundColor: backgroundColor ?? '#8CEC8A'
            }}
            className="flex items-center justify-center h-12 rounded-lg"
        >
            <Text style={{ color: colors.white, fontWeight: '700' }}>
                {isLoading ? <ActivityIndicator color={'#ffffff'} /> : text}
            </Text>
        </TouchableOpacity>
    )
}