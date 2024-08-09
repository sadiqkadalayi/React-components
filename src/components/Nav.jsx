import React from 'react'

function Nav() {
    return (
        <div className="row">
        <div className='row mb-5 mt-5'>
            <div className='col-8'>
                <h5>Basic React Login & Signup Applcation <br />Using Bootstrap</h5>
            </div>
            
            <div className='col-4'>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">React JS</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Languages</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">HTML</a></li>
                            <li><a className="dropdown-item" href="#">CSS</a></li>
                            <li><a className="dropdown-item" href="#">JavaScript</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">React</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Node JS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Express</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Nav
