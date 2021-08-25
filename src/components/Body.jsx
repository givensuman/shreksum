import React from 'react'

import vines from '../images/vines.png'

export default function Body({ text }) {
    return (
        <div id='body' className='animate__animated animate__fadeInUpBig'>
            <img className='vines' id='top-vines' src={vines} alt='vines' />
            {
                text.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item}</p>
                            <br />
                        </div>
                    )
                })
            }
            <img className='vines' id='bottom-vines' src={vines} alt='more vines' />
        </div>
    )
}