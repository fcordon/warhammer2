import axios from 'axios';

// GET CHARACTER PROFILE
export function getDetails() {
  return function(dispatch) {
    axios.get('/details')
    .then(function(response) {
      dispatch({type:"GET_DETAILS", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_DETAILS_REJECTED", payload:err})
    })
  }
}


// POST CHARACTER PROFILE
export function postDetails(details) {
  return function(dispatch) {
    axios.post('/details', details)
    .then(function(response) {
      dispatch({type:"POST_DETAILS", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_DETAILS_REJECTED", payload:err})
    })
  }
}
