import React, { useState, useEffect } from 'react'
import Tts from 'react-native-tts';
import { Vocabulary } from './Screens'
import { PRONOUNS, VOCABULARY } from './constants'
import { getRandomInt } from './helpers'

const App: () => React$Node = () => {

    const [currentPhrase, setCurrentPhrase] = useState(false);
    const [ttsStatus, setTtsStatus] = useState(false);

    useEffect(() => {
        getRandomWord();
        setupTTS();
    }, []);

    useEffect(() => {
        readText();
    }, [currentPhrase])

    const setupTTS = () => {
        Tts.addEventListener('tts-start', event => setTtsStatus('started') );
        Tts.addEventListener('tts-finish', event => setTtsStatus('finished') );
        Tts.addEventListener('tts-cancel', event => setTtsStatus('cancelled') );
        Tts.setDefaultRate(0.5);
        Tts.setDefaultPitch(1);
        Tts.getInitStatus().then(initTts);
    }

    const initTts = async () => {
        setTtsEnglish();
        setTtsStatus('initialized');
    };

    const setTtsSpanish = async () => {
        Tts.setDefaultRate(0.4);
        await Tts.setDefaultVoice("com.apple.ttsbundle.Monica-compact");
    }

    const setTtsEnglish = async () => {
        Tts.setDefaultRate(0.5);
        await Tts.setDefaultVoice("com.apple.ttsbundle.Daniel-compact");
    }

    const readText = async () => {
        if (!currentPhrase) return;
        console.log('here', currentPhrase);

        Tts.stop();
        await setTtsEnglish();
        Tts.speak(currentPhrase.english);

        setTimeout(() => {
            setTtsSpanish();
            Tts.speak(currentPhrase.spanish);
        }, 3000)
    };

    const getRandomWord = () => {
        const pronounIndex = getRandomInt(PRONOUNS.spanish.length);
        const wordObj = VOCABULARY[getRandomInt(VOCABULARY.length)];

        setCurrentPhrase(
            {
                english: `${PRONOUNS.english[pronounIndex]} ${wordObj.english[pronounIndex]}`,
                spanish: `${PRONOUNS.spanish[pronounIndex]} ${wordObj.spanish[pronounIndex]}`
            }
        )
    }

    return (
        <Vocabulary
            currentPhrase={currentPhrase}
            getRandomWord={getRandomWord}
        />
    );
};

export default App;
