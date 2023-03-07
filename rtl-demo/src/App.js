import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor]=useState('red');
  const [isDisabled, setIsDisabled]=useState(false)
  const buttonTest = color === 'red'? 'Blue': 'Red'

  const handleClick =()=>{
    if(color==='red'){
      setColor('blue')
    }else{
      setColor('red')
    }
  }

  const handleCheckbox = ()=>{
    setIsDisabled(!isDisabled)
  }
  return (
    <div className="App">
    <button style={{backgroundColor:isDisabled? 'gray': color}} onClick={handleClick} disabled={isDisabled}>Change to {buttonTest}</button>
    <div><input type="checkbox" id="checkbox" onChange={handleCheckbox} />
    <label htmlFor="checkbox">Change the button state</label>
    </div>
    </div>
  );
}

export default App;
