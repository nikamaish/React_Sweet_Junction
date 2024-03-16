import React from 'react'
import Navbar from './components/navbar/Navbar' 
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  return (
    <div>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Slider />

    </div>
  )
}

export default App
