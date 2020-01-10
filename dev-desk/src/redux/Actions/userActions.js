import axios from 'axios';
import decode from 'jwt-decode';
import {
  LOADING, LOGIN, SET_ERRORS, GET_USER_DETAILS, LOGOUT
} from '../types';

export const userLogin = (username, password, history) => dispatch => {
  dispatch({type: LOADING});
  
  axios
    .post('https://dev-desk-que-3-bw.herokuapp.com/api/user/login', {
      username,
      password
    })
    
    .then(({data}) => {
      dispatch({
        type: LOGIN
      });
      
      localStorage.setItem('token', `${data.token}`);
      let id = decode(data.token).subject;
      history.push('/studentDashboard');
      
      axios
        .get(`https://dev-desk-que-3-bw.herokuapp.com/api/user/login/${id}`)
        .then(({data}) => {
          dispatch({
            type: GET_USER_DETAILS,
            payload: data
          });
        });
    })
    
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

export const userSignUp = (userData, history) => dispatch => {
  debugger;
  console.log(userData);
  dispatch({type: LOADING});
  
  axios
    .post('https://dev-desk-que-3-bw.herokuapp.com/api/user/register', userData)
    
    .then(({data}) => {
      dispatch(userLogin(userData.username, userData.password, history));
    })
    
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

export const logOutUser = history => dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('reduxState');
  dispatch({type: LOGOUT});
  history.push('/studentLogin');
  window.location.reload(true);
};