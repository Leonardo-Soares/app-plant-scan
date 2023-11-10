import React from 'react'
import { TextInput } from 'react-native'
import { formStyles } from '@theme/globalStyles'

interface IPrimary {
    mt?: number
    value?: string
    onChangeText?: any
    keyboardType?: any
    placeholder: string
}

export default function InputPrimary({ value, placeholder, keyboardType, onChangeText, mt }: IPrimary) {
    return (
        <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={[
                formStyles.compactInput,
                {
                    marginTop: mt ?? 0
                }
            ]}
            keyboardType={keyboardType ?? 'default'}
        />
    )
}