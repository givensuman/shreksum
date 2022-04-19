import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { useTransition, animated } from 'react-spring'
import useInterval from 'react-useinterval'
import { useCharacter } from '../pages/App'

// import frame from '../images/frame.png'

import shrek1 from '../images/characters/shrek1.png'
import shrek2 from '../images/characters/shrek2.png'
import shrek3 from '../images/characters/shrek3.png'

import fiona1 from '../images/characters/fiona1.png'
import fiona2 from '../images/characters/fiona2.png'
import fiona3 from '../images/characters/fiona3.png'

import donkey1 from '../images/characters/donkey1.png'
import donkey2 from '../images/characters/donkey2.png'
import donkey3 from '../images/characters/donkey3.png'

import farquaad1 from '../images/characters/farquaad1.png'
import farquaad2 from '../images/characters/farquaad2.png'
import farquaad3 from '../images/characters/farquaad3.png'


const slides = {
  shrek: [shrek1, shrek2, shrek3],
  fiona: [fiona1, fiona2, fiona3],
  donkey: [donkey1, donkey2, donkey3],
  farquaad: [farquaad1, farquaad2, farquaad3]
}

const Wrapper = styled.div`
    position: relative;
    top: 50px;
    height: 300px;
    width: 300px;
    overflow: hidden;
    box-shadow: -2px 2px 12px lightgrey;

    @media (max-width: 768px) {
      height: 250px;
      width: 250px;
    }
`

const Image = styled(animated.img)`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
`

const Portrait = props => {
  const [index, setIndex] = useState(0)
  const iterateIndex = () => setIndex(prevIndex => prevIndex === 2 ? 0 : prevIndex + 1)

  const [ character ] = useCharacter()

  useInterval(iterateIndex, 5000)

  useEffect(() => {
    setIndex(0)
  }, [character])
  

  const transitions = useTransition(
    slides[character][index],
    {
      from: {opacity: 0, transform: 'scale(1.1)'},
      enter: {opacity: 1, transform: 'scale(1)'},
      leave: {opacity: 0, transform: 'scale(1.1)'},
      config: {
          duration: 2000
      }
    }

  )

  return (
    <div style={{ position: 'relative' }}>

    <Wrapper {...props}>
      {transitions((props, item) => 
        <Image
          key={index}
          src={item}
          style={{
              ...props
            }}
        />
      )}
    </Wrapper>

    </div>
  )
}

export default Portrait

