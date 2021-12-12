import React from 'react'
import styled from '@emotion/styled'

import logo from '../images/logo.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
    height: 30vh;
    max-height: 200px;
    min-width: 100%;
    margin: 0;
    background-image: linear-gradient(180deg, #98e718, #98e718, #e4e718, #f2f3f4);
`

const Image = styled.img`
    max-width: 40rem;
    width: 90%;
`

const Banner = () => {
    return (
        <Wrapper>
            <Image src={logo} alt='Lorem Shreksum' />
        </Wrapper>
    )
}

export default Banner