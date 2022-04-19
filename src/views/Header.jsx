import React from 'react'
import styled from '@emotion/styled'

import Banner from '../components/Banner'

import github from '../images/github.png'

const Wrapper = styled.div`

`

const Logo = styled.img`
    position: absolute;
    top: 1em;
    right: 1em;
    color: black;
    height: 2em;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`

const Header = () => {
    return (
        <Wrapper>
            <Banner />
            <a href='https://www.github.com/givensuman/shreksum'>
                <Logo src={github} alt='Github' className='animate__animated animate__fadeIn' />
            </a>
        </Wrapper>
    )
}

export default Header