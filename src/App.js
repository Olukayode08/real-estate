import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import './Components/Website.css'
import './Components/Index.css'
import Slider from './Components/Slider';
import Secone from './Components/Secone';
import Dropdown from './Components/Dropdown';
import SecTwo from './Components/SecTwo'
import SecThree from './Components/SecThree';
import SecFour from './Components/SecFour';
import Footer from './Components/Footer'

function App() {
  const [open, setOpen] = useState(false)

  const toggle =()=>{
    setOpen(!open)
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown open={open} toggle={toggle} />
      <Slider />
      <Secone />
      <SecTwo />
      <SecThree />
      <SecFour />
      <Footer />
    </>
  );
}

export default App;
