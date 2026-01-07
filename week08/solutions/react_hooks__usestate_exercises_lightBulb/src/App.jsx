import { useState } from 'react';
import './App.css';
const LightBulb = ({ light }) => {
  return (
    <div className={`container ${light ? 'night' : 'light'}`}>
      <div className='bulb-light'>
        <div id='light' />
        <div id='bulb'>
          <div className='bulb-top'>
            <div className='reflection' />
          </div>
          <div className='bulb-middle-1' />
          <div className='bulb-middle-2' />
          <div className='bulb-middle-3' />
          <div className='bulb-bottom' />
        </div>

        <div id='base'>
          <div className='screw-top' />
          <div className='screw-a' />
          <div className='screw-b' />
          <div className='screw-a' />
          <div className='screw-b' />
          <div className='screw-a' />
          <div className='screw-b' />
          <div className='screw-c' />
          <div className='screw-d' />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [light, setLight] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count >= 10) {
      setIsDisabled(true);
      alert('Too many times :(');
    } else {
      setLight((prev) => !prev);
      setCount((prev) => prev + 1);
    }
  };
  return (
    <>
      <button onClick={handleClick} disabled={isDisabled}>
        {isDisabled ? 'Locked' : light ? 'turn off' : 'turn on'}
      </button>
      <LightBulb light={light} />
    </>
  );
};

export default App;
