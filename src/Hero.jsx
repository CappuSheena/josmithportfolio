import { useState } from 'react'
import './Hero.css'
import scottCarrollDeer from './assets/scottCarrollDeer.jpg'

function Hero() {

    // Here im using a boolean state to toggle the menu open and closed. Im setting 'menuOpen' to false as default, and setMenuOpen is the fucntion to change the state to True.
  const [menuOpen, setMenuOpen] = useState(false)

  // Togglemenu will be called on click, and will set the menuOpen state to the opposite of what it currently is. This means I dont need a separate function to close the menu.
  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <div className="hero-container">
      <div className={`overlay ${menuOpen ? 'active' : ''}`}>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Gallery</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div className="hero-text">
        <h1>Jo<br />Smith</h1>
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Hero
