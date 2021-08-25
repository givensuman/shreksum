import React, { useState, useEffect } from 'react'

import shrek1 from '../images/shrek1.png'
import shrek2 from '../images/shrek2.png'
import shrek3 from '../images/shrek3.png'

export default function Shreks() {

    const [shrek, setShrek] = useState(shrek1)

    useEffect(() => {
        const interval = setInterval(() => {
            if (shrek === shrek1) {
                setShrek(shrek2)
            } else if (shrek === shrek2) {
                setShrek(shrek3)
            } else {
                setShrek(shrek1)
            }
        }, 4000)

        return () => clearInterval(interval)
    }, [shrek])

    return (
        <div>
            <img id='shrek' src={shrek} alt='shrek' />
        </div>
    )
}