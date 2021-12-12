import React, { useState } from 'react'
import styled from '@emotion/styled'

const Number = styled.input`
    user-select: none;
    padding: 0.2em 0 0.2em 1em;
    max-width: 2em;
    font-size: 1.1em;
    border-radius: 0;
    border: 1px solid black;
    border-left: transparent;
    border-right: transparent;

    &:focus {
        outline: none;
    }
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const UpDown = styled.span`
    user-select: none;
    border: solid 1px black;
    padding: 0.2em;
    font-size: 1.1em;
    cursor: pointer;

    ${props => props.radius}
`

const Wrapper = styled.div`
    box-shadow: 2px 2px 12px lightgrey;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
`

const Button = styled.button`
    width: 100%;
    padding: 1em 0;
    font-size: 1.1em;
    border: none;
    background-color: #B0C400;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 2px 2px 12px lightgrey;
    &:hover {
        background-color: #C4D300;
    }
`

const NumberInput = ({value, setValue}) => {

    const handleInput = e => {
        let value = e.target.value
        if (value > 0 && value < 100) {
            setValue(value)
        }
    }

    return (
        <div>
            <UpDown radius={`
                border-radius: 0.2em 0 0 0.2em;
            `}
            onClick={() => setValue(state => state - 1)}
            >-</UpDown>
            <Number 
            type='number' 
            value={value}
            min={1}
            max={99}
            onChange={e => handleInput(e)}
            />
            <UpDown radius={`
                border-radius: 0 0.2em 0.2em 0;
            `}
            onClick={() => setValue(state => 1 + state)}
            >+</UpDown>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 2em;

    @media (min-width: 768px) {
        top: 3.5em;
        right: 1.5em;
    }
`

const Input = ({ triggerInput }) => {
    const [number, setNumber] = useState(3)

    return (
        <Container>
        <Wrapper>
            Gimme like, &nbsp;
            <NumberInput 
            value={number}
            setValue={setNumber}
            />
             &nbsp; paragraphs of Shrek
        </Wrapper>
        <Button
        onClick={() => triggerInput(number)}
        >GO(gre)</Button>
        </Container>
    )
}

export default Input