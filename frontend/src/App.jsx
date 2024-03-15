import React from 'react'
import Navbar from './components/navbar/Navbar' 
import Menu from './components/Menu/Menu';

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  return (
    <div>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default App
