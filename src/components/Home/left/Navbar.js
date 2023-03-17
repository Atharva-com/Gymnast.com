import React from 'react'
import logo from '../assets/logo.png'
export default function Navbar() {
    return (
        <div>
            {/* <div className="row"> */}
                {/* <div className="col-sm-8 col-12 left"> */}
                    <nav className="navbar navbar-expand-lg">
                        {/* <div className="container-fluid"> */}
                            <a className="navbar-brand mx-5" target={"_blank"} style={{cursor: 'pointer', fontWeight: '600', letterSpacing: '.1rem', color: 'white'}} href="/">
                                <img src={logo} alt="..." style={{width: '10rem', height: '3rem'}}/>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight: '1rem', border: '3px solid var(--orange)'}}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="nav navbar-nav justify-content-end align-items-center" style={{fontSize: '0.9rem'}}>
                                    <li className="nav-item px-1">
                                        <a className="nav-link" aria-current="page" href="/">HOME</a>
                                    </li>
                                    <li className="nav-item px-1">
                                        <a className="nav-link" href="/">PROGRAMS</a>
                                    </li>
                                    <li className="nav-item px-1">
                                        <a className="nav-link" href="/">WHY US</a>
                                    </li>
                                    <li className="nav-item px-1">
                                        <a className="nav-link" href="/">PLANS</a>
                                    </li>
                                    <li className="nav-item px-1">
                                        <a className="nav-link" href="/">TESTIMONALS</a>
                                    </li>
                                </ul>
                            </div>
                            
                        {/* </div> */}
                    </nav>
                {/* </div> */}
                
            {/* </div> */}
        </div>
    )
}
