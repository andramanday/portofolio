import {
  GET_ALL_PERSONALS_BEGIN,
  GET_ALL_PERSONALS_SUCCESS,
  GET_ALL_PERSONALS_FAIL,
  GET_PERSONAL_BEGIN,
  GET_PERSONAL_SUCCESS,
  GET_PERSONAL_FAIL,
} from '../action/personalAction'

const initialState = {
  personals: null,
  personal: null,
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PERSONALS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_ALL_PERSONALS_SUCCESS:
      return {
        ...state,
        loading: false,
        personals: action.payload.data.personals
      }
    case GET_ALL_PERSONALS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case GET_PERSONAL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_PERSONAL_SUCCESS:
      return {
        ...state,
        loading: false,
        personal: action.payload.data.personal
      }
    case GET_PERSONAL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}
