import {
  GET_ALL_ABOUTS_BEGIN,
  GET_ALL_ABOUTS_SUCCESS,
  GET_ALL_ABOUTS_FAIL,
  GET_ABOUT_BEGIN,
  GET_ABOUT_SUCCESS,
  GET_ABOUT_FAIL,
} from '../action/aboutAction'

const initialState = {
  abouts: null,
  about: null,
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ABOUTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_ALL_ABOUTS_SUCCESS:
      return {
        ...state,
        loading: false,
        abouts: action.payload.data.abouts
      }
    case GET_ALL_ABOUTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case GET_ABOUT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_ABOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        about: action.payload.data.about
      }
    case GET_ABOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}
