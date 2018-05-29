import {FETCH_COMMENTS_SUCCESS, FETCH_FILMS_SUCCESS, FETCH_ONE_FILM_SUCCESS} from "../actions/actionTypes";


const initialState = {
  films: [],
  comments: [],
  film: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_FILMS_SUCCESS:
          return {...state, films: action.films};
      case FETCH_ONE_FILM_SUCCESS:
          return {...state, film: action.film};
      case FETCH_COMMENTS_SUCCESS:
          return{...state, comments: action.comments};
      default:
          return state;
  }
};


export default reducer;