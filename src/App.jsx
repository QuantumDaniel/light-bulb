import { useState, useEffect, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isOn, setIsOn] = useState(false);
  const [bulb, setBulb] = useState('/download-(2).jpg');


  function togglebutton(e) {
    setIsOn(e.target.checked);
  }
  useEffect(() => {
    if (isOn) {
      setBulb('/download-(1) .png')
    }

    else {
      setBulb('/download-(2).jpg')
    }


  }, [isOn]);




  return (
    <Fragment>
      <div className="form-check form-switch text-white">
        <input className="form-check-input" type="checkbox" id="mySwitch" checked={isOn} onChange={togglebutton} />
        <label className="form-check-label" for="mySwitch">Click to switch the bulb</label>
      </div>
      <img src={bulb} alt="bulb image" height="150" width="100" className='mt-4' />

    </Fragment>
  )
}

export default App
