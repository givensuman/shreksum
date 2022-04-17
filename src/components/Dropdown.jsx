import React, { useState } from 'react'
import styled from '@emotion/styled'
import { CaretDown, CaretUp } from 'phosphor-react'

import { useCharacter } from '../pages/App'

const Entry = styled.span`
    border: solid 1px black;
    width: 6em;
    padding: 0.25em 0 0.25em 0.5em;
    margin-left: 0.5em;
    margin-top: 0.25em;
    cursor: pointer;
    text-align: left;
`

const Options = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    border: solid 1px black;
    border-top: none;

    span {
        background-color: white;
        width: 6em;
        padding: 0.25em 0 0.25em 0.5em;
        cursor: pointer;

        &:hover {
            background-color: #d8d8d8;
        }
    }
`

const Dropdown = () => {
    const [ character, setCharacter ] = useCharacter()
    const [isOpen, setIsOpen] = useState(false)

    const options = [
        'shrek', 'fiona', 'donkey', 'farquaad'
    ]

    const capitalize = string => 
        string.substring(0, 1).toUpperCase() + string.substring(1)

    return (
        <div className='col center' style={{ position: 'relative' }}>
        <Entry 
        className='row'
        style={{
            alignItems: 'center',
            position: 'relative'
        }}
        onClick={() => setIsOpen(state => !state)}
        >
            {capitalize(character)}
            {isOpen ? 
            <CaretUp
            weight='bold' 
            style={{ margin: '0 0.25em 0 auto' }}
            /> : 
            <CaretDown 
            weight='bold' 
            style={{ margin: '0 0.25em 0 auto' }}
            />}
        </Entry>
        {isOpen &&
        <Options className='col center'>
            {options.filter(item => item !== character).map((item, index) => {
                return (
                    <span 
                    key={index}
                    onClick={() => {
                        setCharacter(item)
                        setIsOpen(false)
                    }}
                    >
                        {capitalize(item)}
                    </span>
                )
            })}
        </Options>
        }
        </div>
    )
}

export default Dropdown