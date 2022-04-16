import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { useTransition, animated } from 'react-spring'
import useInterval from 'react-useinterval'

import shrek1 from '../images/shrek1.png'
import shrek2 from '../images/shrek2.png'
import shrek3 from '../images/shrek3.png'

const slides = [shrek1, shrek2, shrek3]

const Wrapper = styled.div`
    position: relative;
    height: 200px;
    width: 200px;
    overflow: hidden;
    box-shadow: -2px 2px 12px lightgrey;
    margin: 0.5em 0 0 0.5em;
`

const Image = styled(animated.img)`
    height: 200px;
    width: 200px;
    position: absolute;
`

const Portrait = props => {
  const [index, setIndex] = useState(0)
  const iterateIndex = () => setIndex(prevIndex => prevIndex === slides.length - 1 ? 0 : prevIndex + 1)

  useInterval(iterateIndex, 5000)
  

  const transitions = useTransition(
    slides[index],
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
  )
}

export default Portrait

