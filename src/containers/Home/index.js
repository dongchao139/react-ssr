import React from 'react';
import Header from '../Header';
import {connect} from 'react-redux';
import { lens, view, path, assocPath } from 'ramda';
import {bindActionCreators} from 'redux';
import * as actions from './store/actions';

class Home extends React.Component {

  componentDidMount() {
    return this.props.getHomeList();
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>Hello {this.props.name}!</h1>
        <ul>
          {this.props.newsList && this.props.newsList.map(aNew => {
            return <li key={aNew.id}>{aNew.title}</li>
          })}
        </ul>
        <button onClick={() => alert('click')}>
          click
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const namePath = ['home','name'];
  const nameLens = lens(path(namePath), assocPath(namePath));
  const newsListPath = ['home','newsList'];
  const newsListLens = lens(path(newsListPath), assocPath(newsListPath));
  const prop = {
    name: view(nameLens, state),
    newsList: view(newsListLens, state)
  }
  return prop;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);