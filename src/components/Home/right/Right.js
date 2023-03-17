import React from 'react'
import heart from '../assets/heart.png'
import heroImage from '../assets/hero_image.png'
import heroImageBack from '../assets/hero_image_back.png'
export default function Right() {
    return (
        <div>

            {/* BUTTONS */}

            <div className='d-flex justify-content-center align-items-center' style={{ opacity: '1', position: 'relative', top: '1.2rem' }}>
                <a href="/" className='btn btn-sm text-dark p-2 px-3 btn-light display-inline-block mx-3'>REGISTER/LOGIN</a>
                <a href="/" className='btn btn-sm text-dark p-2 px-3 btn-light display-inline-block mx-3'>JOIN NOW</a>
            </div>

            {/* BUTTONS */}


            {/* HEART RATE */}

            <button className='btn btn-lg bg-secondary text-center btn-rate flex'>
                <div>
                    <img src={heart} alt=".." />
                </div>
                <span style={{ letterSpacing: '0.1rem',fontWeight: '300', color: 'var(--gray)'}}>Heart Rate</span>
                <span className="text-light" style={{ letterSpacing: '0.1rem',fontWeight: '500' }}>116 bpm</span>
            </button>

            {/* HEART RATE */}

            {/* BANNER IMAGES */}

            <img src={heroImageBack} className="hero-img-back" alt="" />
            <img src={heroImage} className="hero-img" alt="" />

            {/* BANNER IMAGES */}
        </div>
    )
}
