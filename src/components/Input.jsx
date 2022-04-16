import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Pencil, ArrowFatUp, ArrowFatDown } from 'phosphor-react'

import Dropdown from './Dropdown'

const Number = styled.input`
    user-select: none;
    padding: 0.125em 0.25em;
    width: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;
    border-radius: 0;
    border: 1px solid black;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    transition: border 0.3s;
    text-align: center;

    &:focus {
        outline: none;
        border-color: #B0C400;
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
    cursor: pointer;
    user-select: none;
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
            <Number 
            type='number' 
            value={value}
            min={1}
            max={99}
            onChange={e => handleInput(e)}
            />
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
            <div className='col' style={{ marginLeft: '0.2em' }}>
                <UpDown onClick={() => setNumber(state => state + 1)}>
                    <ArrowFatUp weight='bold' />
                </UpDown>
                <UpDown onClick={() => setNumber(state => state - 1)}>
                    <ArrowFatDown weight='bold' />
                </UpDown>
            </div>
             &nbsp; paragraphs of
             <Dropdown />
        </Wrapper>
        <Button
        className='row center'
        onClick={() => triggerInput(number)}
        >
            GO(gre)

            <Pencil weigh='bold' size={'1.5rem'} style={{
                marginLeft: '0.2em'
            }}/>
        </Button>
        </Container>
    )
}

export default Input