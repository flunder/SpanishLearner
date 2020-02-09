import React, { useRef } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { BubbleCorner } from '../Components/Svg'
const { width, height } = Dimensions.get('window');

const TextBubble = ({ text, left, getRandomWord }) => (
    <View style={{ flexDirection: left ? 'row' : 'row-reverse', justifyContent: 'flex-start', marginBottom: 10 }}>

        <View style={{ width: 36, height: 36, borderRadius: 100, backgroundColor: left ? '#FF7E7E' : '#947EFF', marginHorizontal: 8 }}/>

        <TouchableOpacity activeOpacity={0.85} onPress={getRandomWord} style={{ flexDirection: 'row' }}>

            {left
                ? <BubbleCorner style={{ position: 'absolute', left: -10 }} />
                : <BubbleCorner style={{ position: 'absolute', right: -10, transform: [{ rotateY: '-180deg' }] }} />
            }

            <View style={{ backgroundColor: 'white', paddingVertical: 11, paddingHorizontal: 13, borderRadius: 6 }}>
                <Text style={{ fontSize: 14, fontWeight: '700', fontFamily: 'CircularStd-Book', color: '#3B4045' }}>
                    {text}
                </Text>
            </View>

        </TouchableOpacity>
    </View>
)

function Vocabulary({ currentPhrase, getRandomWord, history, ...props }) {

    const scrollViewRef = useRef();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2' }}>

            <ScrollView
                ref={scrollViewRef}
                style={{ width: width - 24 }}
                showsVerticalScrollIndicator={false}
                onContentSizeChange={() => { scrollViewRef.current.scrollResponderScrollToEnd({ animated: true }) }}>

                {history.map(item => (
                    <View key={item.id} style={{ marginBottom: 10, paddingTop: item.id === 0 ? 300 : 0 }}>
                        {item.english && <TextBubble text={item.english} left getRandomWord={getRandomWord} />}
                        {item.spanish && <TextBubble text={item.spanish} getRandomWord={getRandomWord} />}
                    </View>
                ))}

            </ScrollView>

        </View>
    )
}

export { Vocabulary }
