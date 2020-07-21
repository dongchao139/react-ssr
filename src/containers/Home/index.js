import React from 'react';
import Header from '../Header';
import {connect} from 'react-redux';
import { lens, view, path, assocPath } from 'ramda';

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
  const nameLens = lens(path(['home','name'], assocPath(['home','name'])));
  return {
    name: view(nameLens, state)
  }
}

export default connect(mapStateToProps, null)(Home);