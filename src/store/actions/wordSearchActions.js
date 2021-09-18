import {
  LOADING_SEARCH_WORD,
  SET_WORD_SEARCH_RESULT,
  WORD_SEARCH_ERROR,
} from "../types";
import axios from "axios";
//get brands
export const searchWord = (category, word) => (dispatch) => {
  dispatch({ type: LOADING_SEARCH_WORD });
  axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: SET_WORD_SEARCH_RESULT,
        payload: res.data,
      });
    })
    .catch((error) => {
      let err_data = error.response === undefined ? error : error.response.data;
      dispatch({
        type: WORD_SEARCH_ERROR,
        payload: err_data,
      });
    });
};
