import React from 'react'
import dumbshell from './assets/dumbell.png'
import runing from './assets/runing.png'
import fire from './assets/flame.svg'
import heart from './assets/heartRate.svg'
import arrow from './assets/rightArrow.png'
// import programs from '../data/programsData'
export default function Programs() {
    return (
        <div className='' style={{ marginTop: '5rem' }}>
            <div className="row" style={{ fontSize: '3rem', color: '#d9d9d9', letterSpacing: '0.1rem', fontStyle: 'italic', textTransform: 'uppercase' }}>
                <div className="col-lg-4 col-12 stroke-text text-end">
                    <span>explore our</span>
                </div>
                <div className="col-lg-4 col-12 text-center">
                    <span>programs</span>
                </div>
                <div className="col-lg-4 col-12 stroke-text">
                    <span>to shape you</span>
                </div>
            </div>


            <div className="row mx-3 mt-5">
                <div className="col-md-3 mb-3 mb-sm-0">
                    <a href="/">
                        <div className="card program-card" style={{backgroundColor: 'gray'}}>
                            <div className="card-body text-light">
                                <img src={dumbshell} alt="" className="card-title" style={{height: '2rem'}} />
                                <h5 className="card-subtitle mb-2 mt-3">Strength Training</h5>
                                <p className="card-text mt-3">In this Program you are trained to improve your strength through may exercises .</p>
                                <span className="btn btn-sm text-light" style={{fontSize: '1.1rem', fontWeight: '500'}}>Join Us</span>
                                <span href="/"><img src={arrow} className="mx-3" alt="" style={{height: '1rem', width: '1.4rem'}}/></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="/">
                        <div className="card program-card" style={{backgroundColor: 'gray'}}>
                            <div className="card-body text-light">
                            <img src={runing} alt="" className="card-title" style={{height: '2rem'}} />
                                <h5 className="card-subtitle mb-2 mt-3">Cardio Training</h5>
                                <p className="card-text mt-3">In this Program , you are trained to do sequential moves in range of untill 20 to 30 minutes .</p>
                                <span className="btn btn-sm text-light" style={{fontSize: '1.1rem', fontWeight: '500'}}>Join Us</span>
                                <span href="/"><img src={arrow} className="mx-3" alt="" style={{height: '1rem', width: '1.4rem'}}/></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3 mb-3 mb-sm-0">
                    <a href="/">
                        <div className="card program-card" style={{backgroundColor: 'gray'}}>
                            <div className="card-body text-light">
                                <img src={fire} alt="" className="card-title" style={{height: '2rem'}} />
                                <h5 className="card-subtitle mb-2 mt-3">Fat Burning</h5>
                                <p className="card-text mt-3">This Programs is suitable for those who wants to get rid of your fat and lose their fat .</p>
                                <span className="btn btn-sm text-light" style={{fontSize: '1.1rem', fontWeight: '500'}}>Join Us</span>
                                <span><img src={arrow} className="mx-3" alt="" style={{height: '1rem', width: '1.4rem'}}/></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3 mb-3 mb-sm-0">
                    <a href="/">
                        <div className="card program-card" style={{backgroundColor: 'gray'}}>
                            <div className="card-body text-light">
                                <img src={heart} alt="" className="card-title" style={{height: '2rem'}} />
                                <h5 className="card-subtitle mb-2 mt-3">Health Fitness</h5>
                                <p className="card-text mt-3">This programs is designed for those who exercises only for their body fitness not body Building .</p>
                                <span className="btn btn-sm text-light" style={{fontSize: '1.1rem', fontWeight: '500'}}>Join Us</span>
                                <span href="/"><img src={arrow} className="mx-3" alt="" style={{height: '1rem', width: '1.4rem'}}/></span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
