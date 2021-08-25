import React, { useState } from 'react'
import 'animate.css'

import Main from '../components/Main'
import Body from '../components/Body'
import '../global.scss'

import logo from '../images/logo.png'
import github from '../images/github.png'

const App = () => {
    const [showBody, setShowBody] = useState(false)
    const [text, setText] = useState(['', '', '', '', ''])

    return (
        <div id='app'>
            <div id='github'>
                <img onClick={() => window.open('https://github.com/givensuman/shreksum/')}src={github} alt='github' />
            </div>
            <div id='shrek-wrapper'>
                <img src={logo} alt='logo'/>
            </div>
            <div id='main-wrapper'>
            <Main
                showBody={showBody}
                setShowBody={setShowBody}
                text={text}
                setText={setText}/>
            {
                showBody ? <Body text={text}/> : null
            } 
            </div>
            
        </div>
    )
}

export default App