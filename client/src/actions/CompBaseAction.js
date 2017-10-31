import axios from 'axios';

// GET COMPETENCE DE BASE
export function getCompBase() {
    return function(dispatch) {
        axios.get('/competencebase')
            .then(function(response) {
                dispatch({type:"GET_COMPBASE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"GET_COMPBASE_REJECTED", payload:err})
            })
    }
}


// POST COMPETENCE DE BASE
export function postCompBase() {
    return function(dispatch) {
        axios.post('/competencebase')
            .then(function(response) {
                dispatch({type:"POST_COMPBASE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_COMPBASE_REJECTED", payload:err})
            })
    }
}

// UPDATE COMPETENCE DE BASE
export function updateCompBase(id, newData) {
    return function(dispatch) {
        axios.put('/competencebase/' + id, newData)
            .then(function(response) {
                dispatch({type:"UPDATE_COMPBASE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"UPDATE_COMPBASE_REJECTED", payload:err})
            })
    }
}