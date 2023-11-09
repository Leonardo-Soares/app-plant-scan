import { colors } from '@theme/colors';
import React from 'react'
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';

export default function ButtonSolid({ handleLogin, isLoading, text }: { handleLogin?: any, isLoading?: boolean, text: string }) {
    return (
        <TouchableOpacity
            className="flex items-center justify-center h-12 bg-[#8CEC8A] rounded-lg"
            onPress={handleLogin}
        >
            <Text style={{ color: colors.white, fontWeight: '700' }}>
                {isLoading ? <ActivityIndicator color={'#ffffff'} /> : text}
            </Text>
        </TouchableOpacity>
    )
}