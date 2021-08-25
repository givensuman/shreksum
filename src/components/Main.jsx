import React, { useState } from 'react'

import Shreks from './Shreks'
import shrekImg from '../images/shrek1.png'
import { quotes } from '../quotes'

export default function Main({ showBody, setShowBody, text, setText }) {

    const [paragraphs, setParagraphs] = useState(5)
    const [buttonText, setButtonText] = useState('Copy')

    const handleInput = e => {
        let value = Number(e.target.value)
        if (value > 0 && value < 100) {
            setParagraphs(Number(e.target.value))
        }
        // setParagraphs(Number(e.target.value))
    }

     // Join a sequence of random Shrek quotes
     const createParagraph = () => {
        let paragraph = ''
        // Generate 4, 5, or 6 sentences
        let sentenceCount = Math.floor(Math.random() * 3) + 4
        const createSentence = () => quotes[Math.floor(Math.random() * quotes.length)]
        let i = 0
        while (i < sentenceCount) {
            let sentence = createSentence()
            paragraph = paragraph + ' ' + sentence
            i++
        }
        while (paragraph.length < 250) {
            let sentence = createSentence()
            paragraph = paragraph + ' ' + sentence
        }
        return paragraph
    }

    // Create an array of paragraphs
    const createText = () => {
        let textArray = []
        let i = 0
        while (i < paragraphs) {
            let newParagraph = createParagraph()
            textArray.push(newParagraph)
            i++
        }
        return textArray
    }

    return (
        <div id='header'>
            <div id='shreks-wrapper'>
                <Shreks />
            </div>
            <div id='input-div'>
                <input
                        id ='inputValue'
                        type='number'
                        value={paragraphs}
                        onChange={e => handleInput(e)}
                        max='99'
                        min='1'/>
                <span>paragraphs of <span id='shrek-text'>Shrek</span></span>
                <input
                        id='inputSubmit'
                        type='submit' 
                        value='GO(gre)' 
                        onClick={() => {
                            setText(createText())
                            setShowBody(true)
                            setButtonText('Copy')
                        }}/>
                    {   showBody ?
                        <button onClick={() => {
                            navigator.clipboard.writeText(text)
                            setButtonText('Copied!')
                        }}
                        className='animate__animated animate__fadeInUpBig'>{buttonText}</button>
                        : null
                    }
            </div>
        </div>
    )
}