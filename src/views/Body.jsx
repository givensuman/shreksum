import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import 'animate.css'

import vines from '../images/vines.png'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 600px;
    margin: 0 auto 5em;
    position: relative;
    overflow: hidden;
    padding: 0 1em;

    @media (min-width: 768px) {
        overflow: visible;
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
    background-color: #B0C400;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 2px 2px 12px lightgrey;
    &:hover {
        background-color: #C4D300;
    }
`

const Body = ({ text, show }) => {
    const [buttonText, setButtonText] = useState('Copy')

    useEffect(() => setButtonText('Copy'), [text])

    return (
        show ? 
        <Wrapper className='animate__animated animate__slideInUp'>
            <Button
            onClick={() => {
                navigator.clipboard.writeText(text)
                setButtonText('Copied!')
            }}
            >{buttonText}</Button>
            <Vines src={vines} alt='Vines' show={show}
            css={`
                top: 2em;
                left: 1em;
                @media (min-width: 768px) {
                    top: -3em;
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
                bottom: 0.1em;
                right: 1em;
                transform: rotate(180deg);
                @media (min-width: 768px) {
                    bottom: -3em;
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