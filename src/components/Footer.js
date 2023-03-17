import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="d-flex flex-column h-100">
                <footer className="w-100 pt-4 flex-shrink-0" style={{zIndex: '5'}}>
                    <div className="container pt-4 justify-content-center align-items-center">
                        <div className="row gy-4 gx-5 gutter">
                            <div className='blur footer-blur-1'></div>
                            <div className='footer-blur-2'></div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 mb-5" style={{ color: 'var(--orange)' }}>PORTFOLIO</h5>
                                <p className="small mt-5" style={{ color: 'var(--primary-orange)' }}>This Project has been my first ever responsive web page . I am working on this project for 1 month and finally it is completed . I have applied all my knowledge here . Thanks for visiting .</p>
                                <p className="small mb-0 mt-3" style={{ color: 'var(--primary-orange)' }}>&copy; Copyrights. All rights reserved. <a
                                    href="/" style={{ color: 'var(--orange)' }}>Portfolio.com</a></p>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="mb-5" style={{ color: 'var(--orange)' }}>Quick links</h5>
                                <ul className="list-unstyled text-muted mt-5">
                                    <li><a href="#home">HOME</a></li>
                                    <li><a href="#about">PROGRAMS</a></li>
                                    <li><a href="#work">WHY US</a></li>
                                    <li><a href="#certificate">PLANS</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="mb-5" style={{ color: 'var(--orange)' }}>Get Help</h5>
                                <ul className="list-unstyled text-muted mt-5">
                                    <li><a href="/">PRE-Booking</a></li>
                                    <li><a href="/">UPCOMING OFFERS AND UPDATE</a></li>
                                    <li><a href="/">JOIN US</a></li>
                                    <li><a href="/">FAQ's</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="mb-5" style={{ color: 'var(--orange)' }}>Newsletter</h5>
                                <p className="small mt-5" style={{ color: 'var(--primary-orange)' }}>It's being my pleasure for you to join with me and started working with my team . Thanks for visiting here . Have a nice day .</p>
                                
                            </div>
                            <div className="container mt-5">

                                <footer className="text-center text-white">
                                    <div className="container pb-0">
                                        <section className="">
                                            <form action="">
                                                <div className="row d-flex justify-content-center">
                                                    <div className="col-auto">
                                                        <p className="pt-2">
                                                            <strong>Sign up for our newsletter</strong>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-5 col-12">
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="email" id="form5Example2" className="form-control" placeholder='Email address'/>
                                                            <label className="form-label" htmlfor="form5Example2"></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="submit" className="btn btn-outline-light mb-4">
                                                            Subscribe
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </section>
                                    </div>
                                </footer>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
