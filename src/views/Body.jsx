import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Copy } from 'phosphor-react'
import 'animate.css'

import { useCharacter } from '../pages/App'
import characters from '../styles/characters'

import vines from '../images/vines.png'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 600px;
    height: fit-content;
    margin: 7.5em auto 5em;
    overflow: hidden;
    padding: 0 1em 5em;

    @media (min-width: 768px) {
        overflow: visible;
    }

    @media (max-width: 768px) {
        margin-top: 5em;
    }
`

const Paragraph = styled.p`
    text-indent: 3ch;
`

const Vines = styled.img`
    opacity: 0.2;
    max-height: 200px;
    position: absolute;
    display: ${props => props.show ? 'block' : 'none'};
    user-select: none;
    ${props => props.css}
`

const Button = styled.button`
    font-size: 1em;
    margin-bottom: 2em;
    padding: 0.5em 1em;    
    border: none;
    background-color: ${props => characters[props.character].alt};
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 2px 2px 12px lightgrey;
    &:hover {
        background-color: ${props => characters[props.character].accent};
    }
    z-index: 2;
`

const Body = ({ text, show }) => {
    const [buttonText, setButtonText] = useState('Copy')
    const [ character ] = useCharacter()

    useEffect(() => setButtonText('Copy'), [text])

    return (
        show ? 
        <Wrapper className='animate__animated animate__slideInUp'>
            <Button
            character={character}
            className='row center'
            onClick={() => {
                navigator.clipboard.writeText(text)
                setButtonText('Copied!')
            }}
            >
                {buttonText}
                <Copy weight='bold' size={'1rem'} style={{
                    marginLeft: '0.2em'
                }} />
            </Button>
            <Vines src={vines} alt='Vines' show={show}
            css={`
                top: 0em;
                left: -1em;
                @media (min-width: 768px) {
                    top: 0em;
                    left: -3em;
                    opacity: 0.5;
                }
            `}
            />
            { show ? 
                text.map((item, index) => 
                        <Paragraph key={index}>
                            {item}
                        <br />
                        </Paragraph>
                    )
            : null }
            <Vines src={vines} alt='Vines' show={show}
            css={`
                bottom: 0em;
                right: -1em;
                transform: rotate(180deg);
                @media (min-width: 768px) {
                    bottom: 0em;
                    right: -3em;
                    opacity: 0.5;
                }
            `}
            />
        </Wrapper>
        : <Wrapper></Wrapper>
    )
}

export default Body