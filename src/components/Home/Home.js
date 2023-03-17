import React from 'react'
import Footer from '../Footer';
import HomeBody from './left/HomeBody';
import Navbar from './left/Navbar';
import Plans from './Plans';
import Programs from './Programs';
import Reasons from './Reasons';
import Right from './right/Right';
import Testimonals from './Testimonals';

export default function Home() {
  return (
    <div className='App'>
      <div className="row page-1">
        <div className='blur home-blur'></div>
        <div className="col-lg-9 col-12 left" style={{zIndex: '5'}}>
          <Navbar />
          <HomeBody />
        </div>
        <div className="col-lg-3 col-12 right my-sm-0 my-3" style={{ opacity: '1', backgroundColor: 'var(--orange)', height: '100vh' }}>
          <Right />
        </div>
      </div>

      <Programs/>

      <Reasons/>

      <Plans/>
      
      <Testimonals/>
      
      <div class="text-success">
        <hr className="border-light border-2 opacity-50"/>
      </div>
      {/* <hr className="border border-light border-2 opacity-50" style={{position: 'relative', top: '3rem'}} /> */}
      <Footer />
    </div>
  )
}
