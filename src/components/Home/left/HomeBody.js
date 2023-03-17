import React from 'react'
import calories from '../assets/calories.png'
export default function HomeBody() {
  return (
    <div className='container home-body' style={{ paddingLeft: '2rem' }}>
      {/* THE AD SECTION */}

      <button className='btn btn-lg bg-dark ad' style={{ cursor: 'default', height: '3.5rem', borderRadius: '3rem' }}>
        <div></div>
        <span className="text-light" style={{ letterSpacing: '0.1rem', zIndex: '2', fontWeight: '300' }}>The Best Fitness Club in the Town</span>
      </button>

      {/* THE AD SECTION */}

      {/* MAIN HEADING */}

      <div className="main-heading">
        <div>
          <span className='card-title stroke-text' id='outline-text'>SHAPE</span>
          <span className='card-title mx-5'>YOUR</span>
        </div>
        <div>
          <span className='card-title'>IDEAL</span>
          <span className='card-title mx-5'>BODY</span>
        </div>
      </div>

      {/* MAIN HEADING */}

      {/* ADVERTISEMENT LINE */}

      <div className="ad-line">
        <p className="card-text">In here we will help you to shape and build your ideal body and live up your life to fullest</p>
      </div>

      {/* ADVERTISEMENT LINE */}

      {/* FIGURES */}

      <div className="figures" style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <span>+ 30</span>
          <span>Expert Coaches</span>
        </div>
        <div>
          <span>+ 978</span>
          <span>Members Joined</span>
        </div>
        <div>
          <span>+ 50</span>
          <span>Fitness Programs</span>
        </div>
      </div>

      {/* FIGURES */}


      <div className='row'>
        <div className="col-sm-8 col-12">
          {/* buttons */}

          <div className='button' style={{ marginTop: '2rem' }}>
            <a href="/" className='btn text-light p-2 px-3 display-inline-block' style={{ backgroundColor: 'var(--orange)' }}>Get Started</a>
            <a href="/" className='btn text-light p-2 px-3 display-inline-block mx-3' style={{ backgroundColor: 'var(--orange)' }}>Learn More</a>
          </div>

          {/* buttons */}
        </div>
        <div className="col-sm-4 col-12">
          {/* CALORIES */}

          <button className='btn btn-lg bg-secondary calories' style={{display: 'flex', height: '8rem'}}>
            <div>
              <img src={calories} alt=".." />
            </div>
            <div className='flex' style={{marginLeft: '1rem'}}>
              <span style={{ letterSpacing: '0.1rem', fontWeight: '300', color: 'var(--gray)' }}>Calories <br /> Burned</span>
              <span className="text-light" style={{ letterSpacing: '0.1rem', fontWeight: '500' }}>220 <br /> Kcal</span>
            </div>
          </button>
          {/* CALORIES */}
        </div>
      </div>



    </div>
  )
}
