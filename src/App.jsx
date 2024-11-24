

import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
      <div className="min-h-screen">
        <Navbar></Navbar>
        <Hero></Hero>
        <Menu></Menu>
        <About></About>
      </div>
    </>
  );
}

export default App
