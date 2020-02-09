import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Gradient } from '../Components'

const { width, height } = Dimensions.get('window');

function Vocabulary({ currentPhrase, getRandomWord, ...props }) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Gradient width={width} height={height} color1="#FFB066" color2="#FF7F7F" style={{ position: 'absolute' }}  />

            <TouchableOpacity activeOpacity={0.85} onPress={getRandomWord} style={{ width, borderRadius: 0, backgroundColor: 'white', padding: 25, position: 'absolute', bottom: 0 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: '700' }}>{currentPhrase.english}</Text>
                </View>
            </TouchableOpacity>

                {/* <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontWeight: '700' }}>{currentPhrase.spanish}</Text>
                </View> */}

        </View>
    )
}

export { Vocabulary }
