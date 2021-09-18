import {
  LOADING_SEARCH_WORD,
  SET_WORD_SEARCH_RESULT,
  WORD_SEARCH_ERROR,
} from "../types";

const initialState = {
  data: [],
  loadingSearch: false,
  searchErrors: null,
};

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SEARCH_WORD:
      return {
        ...state,
        loadingSearch: true,
        searchErrors: null,
      };
    case SET_WORD_SEARCH_RESULT:
      return {
        ...state,
        data: action.payload,
        loadingSearch: false,
        searchErrors: null,
      };

    case WORD_SEARCH_ERROR:
      return {
        ...state,
        data: [],
        loadingSearch: false,
        searchErrors: action.payload,
      };
    default:
      return state;
  }
};

export default dictionaryReducer;
