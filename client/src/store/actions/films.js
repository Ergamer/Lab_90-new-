import axios from "../../axios-api";
import {FETCH_COMMENTS_SUCCESS, FETCH_FILMS_SUCCESS, FETCH_ONE_FILM_SUCCESS} from "./actionTypes";

export const fetchFilmsSuccess = films => {
  return {type: FETCH_FILMS_SUCCESS, films}
};


export const fetchGetAllFilms = () => {
  return dispatch => {
      axios.get('/films').then(
          response => {
              return dispatch(fetchFilmsSuccess(response.data))
          }
      )
  }
};

export const fetchOneFilmSuccess = film => {
    return {type: FETCH_ONE_FILM_SUCCESS, film}
};

export const showOneFilm = (id) => {
    return dispatch => {
        axios.get('/films/' + id).then(
            response => {
                return dispatch(fetchOneFilmSuccess(response.data))
            }
        )
    }
};



export const fetchThisFilmOrder = (id) => {
    return (dispatch, getState) => {
        axios.post('/films/' + id).then(
            response => {
                return dispatch(fetchFilmsSuccess(id))
            }
        )
    }
};

export const addNewFilm = (id) => {
    return (dispatch, getState) => {
        for (let item of id.entries()) {
            console.log(item)
        }
        return axios.post('/films', id, {headers: {"Token": getState().users.user.token}}).then(
            response => console.log(response.data)
        )
    }
};


export const removeThisFilmFromOrderList = (id) => {
  return dispatch => {
      axios.delete('/films', id).then(
          response => {
              return dispatch(fetchFilmsSuccess(id))
          }
      )
  }
};


export const fetchCommentsSuccess = comments => {
    return {type: FETCH_COMMENTS_SUCCESS, comments};
};

export const fetchComments = (id) => {
    return dispatch => {
        axios.get('/comments?film=' + id).then(
            response => {
                return dispatch(fetchCommentsSuccess(response.data))
            }
        )
    }
};


export const addComments = (data) => {
    return (dispatch, getState) => {

        const headers = {
            'Token': getState().users.user.token
        };

        axios.post('/films', data, {headers}).then(
            response => {
                console.log(response.data);
                return dispatch(fetchComments(response.data.post))
            }
        )
    }
};