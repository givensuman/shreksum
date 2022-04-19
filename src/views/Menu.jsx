import React from 'react'
import styled from '@emotion/styled'

import Portrait from '../components/Portrait'
import Input from '../components/Input'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const Menu = ({ triggerInput }) => {
    return (
        <Wrapper>
            <Portrait />
            <Input 
            triggerInput={triggerInput}
            />
        </Wrapper>
    )
}

export default Menu