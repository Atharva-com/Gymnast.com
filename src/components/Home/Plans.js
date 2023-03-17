import React from 'react'
import arrow from './assets/rightArrow.png'
import tick from './assets/whiteTick.png'
import dumbshell from './assets/dumbell.svg'
import plans from './assets/plan.svg'
import premium from './assets/premium.svg'

export default function Plans() {
    return (
        <div className='' style={{zIndex: '5'}}>
            <div className="blur plan-blur-1"></div>
            <div className="blur plan-blur-2"></div>
            <div className="row" style={{ fontSize: '3rem', color: '#d9d9d9', letterSpacing: '0.1rem', fontStyle: 'italic', textTransform: 'uppercase' }}>
                <div className="col-lg-4 col-12 stroke-text text-end">
                    <span>READY TO START</span>
                </div>
                <div className="col-lg-4 col-12 text-center">
                    <span>YOUR JOURNEY</span>
                </div>
                <div className="col-lg-4 col-12 stroke-text">
                    <span>NOW WITH US</span>
                </div>
            </div>


            <div className="row mx-3 mt-5">
                <div className="col-md-4 mb-3 mb-sm-0 d-flex justify-content-end">
                    <div className="card my-5" style={{ backgroundColor: 'var(--caloryCard)', width: '20rem', height: '36rem'}}>
                        <div className="card-body text-light">
                            <img src={plans} alt="" className="card-title mt-3" style={{ height: '3rem' }} />
                            <h6 className="card-subtitle mt-3" style={{ fontWeight: 'bold' }}>BASIC PLAN</h6>
                            <div className="price mt-3" style={{fontSize: '3rem'}}>
                                <span>Rs</span>
                                <span className='mx-3'>800</span>
                            </div>
                            <div className="details-r mt-5">
                                <div>
                                    <img src={tick} alt="" />
                                    <span>2 hours of excercises</span>
                                </div>
                                <div>
                                    <img src={tick} alt="" />
                                    <span>Free consultaion to coaches</span>
                                </div>
                                <div>
                                    <img src={tick} alt="" />
                                    <span>Access to The Community</span>
                                </div>
                            </div>
                            <a href="/" className="btn btn-sm text-light mt-5" style={{fontSize: '0.9rem', fontWeight: '300'}}>See more benefits</a>
                            <a href="/"><img src={arrow} className="mt-5" alt="" style={{height: '1rem', width: '1.4rem'}}/></a> <br />
                            <a href="/" className="btn btn-sm bg-light text-dark m-5 d-grid" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Join now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 mb-sm-0 d-flex justify-content-center">
                    <div className="card" style={{ background: 'var(--planCard)', width: '23rem' }}>
                        <div className="card-body text-light">
                            <img src={premium} alt="" className="card-title mt-3" style={{ height: '3rem' }} />
                            <h6 className="card-subtitle mt-3" style={{ fontWeight: 'bold' }}>PREMIUM PLAN</h6>
                            <div className="price mt-3" style={{fontSize: '3rem'}}>
                                <span>Rs</span>
                                <span className='mx-3'>1000</span>
                            </div>
                            <div className="details-r mt-5">
                                <div>
                                    <img src={tick} alt="" />
                                    <span>5 hour of excercises</span>
                                </div>
                                <div>
                                    <img src={tick} alt="" />
                                    <span>Free consultaion of Coaches</span>
                                </div>
                                <div>
                                    <img src={tick} alt="" />
                                    <span>Accessto minibar</span>
                                </div>
                            </div>
                            <a href="/" className="btn btn-sm text-light mt-5" style={{fontSize: '0.9rem', fontWeight: '300'}}>See more benefits</a>
                            <a href="/"><img src={arrow} className="mt-5" alt="" style={{height: '1rem', width: '1.4rem'}}/></a> <br />
                            <a href="/" className="btn btn-sm bg-light m-5 mb-0 d-grid" style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--orange)'}}>Join now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 mb-sm-0">
                    <div className="card my-5" style={{ backgroundColor: 'var(--caloryCard)', width: '20rem', height: '36rem' }}>
                        <div className="card-body text-light">
                            <img src={dumbshell} alt="" className="card-title mt-3" style={{height: '3rem'}} />
                            <h6 className="card-subtitle mt-3" style={{ fontWeight: 'bold' }}>PRO PLAN</h6>
                            <div className="price mt-3" style={{fontSize: '3rem'}}>
                                <span>Rs</span>
                                <span className='mx-3'>1200</span>
                            </div>
                            <div className="details-r mt-5">
                                <div>
                                    <img src={tick} alt="" />
                                    <span>8 hours of excercises</span>
                                </div>
                                <div>
                                    <img src={tick} alt="" />
                                    <span>Consultation of Private Coach</span>
                                </div>
                                <div>
                                    <img src={tick} alt="" />
                                    <span>Free Fitness Merchandises</span>
                                </div>
                            </div>
                            <a href="/" className="btn btn-sm text-light mt-5" style={{fontSize: '0.9rem', fontWeight: '300'}}>See more benefits</a>
                            <a href="/"><img src={arrow} className="mt-5" alt="" style={{height: '1rem', width: '1.4rem'}}/></a> <br />
                            <a href="/" className="btn btn-sm bg-light text-dark m-5 d-grid" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
