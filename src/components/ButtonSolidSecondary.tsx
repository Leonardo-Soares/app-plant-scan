import { colors } from '@theme/colors';
import React from 'react'
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';

export default function ButtonSolidSecondary({ handleLogin, isLoading, text, color }: { handleLogin?: any, isLoading?: boolean, text: string, color?: string }) {
    return (
        <TouchableOpacity
            className="flex items-center justify-center h-8 rounded-lg"
            style={{ backgroundColor: color ?? '#fff', elevation: 8 }}
            onPress={handleLogin}
        >
            <Text style={{ color: colors.white, fontWeight: '700' }}>
                {isLoading ? <ActivityIndicator color={'#ffffff'} /> : text}
            </Text>
        </TouchableOpacity>
    )
}