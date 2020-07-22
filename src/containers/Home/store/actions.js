import axios from 'axios';

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
      .then(res => {
        dispatch({
          type: 'initHomeList',
          payload: res.data.data
        });
      });
  }
}