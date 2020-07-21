import React from 'react';
import Header from '../Header';
import {connect} from 'react-redux';
import { lensProp, view } from 'ramda';

const Home = (props) => {
  return (
    <div>
      <Header/>
      <h1>Hello {props.name}!</h1>
      <button onClick={() => alert('click')}>
        click
      </button>
    </div>
  )
};

const mapStateToProps = (state) => {
  const nameLens = lensProp('name');
  return {
    name: view(nameLens, state)
  }
}

export default connect(mapStateToProps, null)(Home);