import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './Types';
import setAuthToken from '../SetAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
  axios.post('/user', user)
  .then(res => history.push('/signin'))
  .catch(err => {
    dispatch({type: GET_ERRORS, payload: err.response.data});
  });
}

export const loginUser = (user, history) => dispatch => {
  axios.post('/login', user)
  .then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    history.push('/choosePerso?pseudo=' + decoded.pseudo)
  })
  .catch(err => {
    dispatch({type: GET_ERRORS,payload: err});
  });
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const logoutUser = (history) => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/login');
}
