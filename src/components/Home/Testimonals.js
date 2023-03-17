import React , { useState } from 'react'
import testimonalsData from '../data/testimonialsData'
import lArrow from './assets/leftArrow.png'
import rArrow from './assets/rightArrow.png'
export default function Testimonals() {
  const [selected, setSelected] = useState(0)  
  const tLength = testimonalsData.length
  return (
        <div className="testimonals">
            <div className="left-t">
                <span>TESTIMONALS</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <span>{testimonalsData[selected].review}</span>
                <span style={{color: 'var(--orange)'}}>{testimonalsData[selected].name}{" "} - {testimonalsData[selected].status}</span>        
            </div>
            <div className="right-t">
                <div style={{opacity: '1', transform: 'none'}}></div>
                <div style={{opacity: '1', transform: 'none'}}></div>
                <img src={testimonalsData[selected].image} alt="" style={{opacity: '1', transform: 'none'}}/>
                <div className="arrows">
                    <img onClick={()=>{
                        selected===0 ? setSelected(tLength-1) : setSelected((prev)=> prev-1)
                    }} src={lArrow} alt="" />
                    <img onClick={()=>{
                        selected===(tLength-1) ? setSelected(0) : setSelected((prev)=> prev+1)
                    }} src={rArrow} alt="" />
                </div>
            </div>
        </div>
  )
}
