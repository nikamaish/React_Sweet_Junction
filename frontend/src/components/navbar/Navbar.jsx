import React from 'react'
import './Navbar.css'

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div>
      <div className={'strip' + (menuOpen ? 'active': '')} >
        <div className="left">
        <div className='logo'>
          {/* <img src="./Sweet Junction.png"  style={{ width: '12em', height: '10vh' }} alt="" /> */}
            <h1>Sweet Junction</h1>
        </div>
        <div className='wrapper'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
