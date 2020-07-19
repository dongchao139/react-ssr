import React from 'react';
import Header from '../Header';
const Home = () => {
  return (
    <div>
      <Header/>
      <h1>Home !</h1>
      <button onClick={() => alert('click')}>
        click
      </button>
    </div>
  )
};

export default Home;