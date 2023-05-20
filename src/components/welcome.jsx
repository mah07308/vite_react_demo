import React from 'react';
import Sammy from '../img/sammy.jpg';

import '../css/main.css';

const welcome = () => {
  return (
    <div className='wrapper'>
      <h1>Welcome To My App</h1>
      <p>Thisis going to be the coolest app in the world!</p>
      <img src={Sammy} alt='Sammy Image' width={200} height={200} />
    </div>
  );
};

export default welcome;
