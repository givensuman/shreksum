import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Header from '../views/Header'
import Menu from '../views/Menu'
import Body from '../views/Body'

import quotes from '../../quotes/quotes.js'

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
`

const App = () => {
    const [paragraphs, setParagraphs] = useState(3)
    const [showBody, setShowBody] = useState(false)
    const [text, setText] = useState(['', '', ''])
    const [character, setCharacter] = useState('shrek')

    const triggerInput = value => {
        setShowBody(true)
        setParagraphs(value)
    }

    useEffect(() => {
        const createParagraph = () => {
            let paragraph = ''
            // Generate 4, 5, or 6 sentences
            let sentenceCount = Math.floor(Math.random() * 3) + 4
            const createSentence = () => quotes[character][Math.floor(Math.random() * quotes[character].length)]
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

        let textArray = []
        let i = 0
        while (i < paragraphs) {
            let newParagraph = createParagraph()
            textArray.push(newParagraph)
            i++
        }
        setText(textArray)
    }, [paragraphs])

    return (
        <Wrapper>
            <Header />
            <Menu
            triggerInput={triggerInput}
            />
            <Body
            show={showBody}
            text={text}
            />
        </Wrapper>
    )
}

export default App