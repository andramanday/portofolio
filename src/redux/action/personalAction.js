import serverCall from '../../config/serverCall'

export const getPersonal=()=>dispatch=>{
  dispatch({
    type:GET_ALL_PERSONALS_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/personal`
  })
  .then(res=>{
    dispatch({
      type: GET_ALL_PERSONALS_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ALL_PERSONALS_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getPersonalbyID=(id)=>dispatch=>{
  dispatch({
    type:GET_PERSONAL_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/personal/${id}`
  })
  .then(res=>{
    dispatch({
      type: GET_PERSONAL_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_PERSONAL_FAIL,
      payload: {error}
    })
    return error
  })
}

export const GET_ALL_PERSONALS_BEGIN='GET_ALL_PERSONALS_BEGIN'
export const GET_ALL_PERSONALS_SUCCESS='GET_ALL_PERSONALS_SUCCESS'
export const GET_ALL_PERSONALS_FAIL='GET_ALL_PERSONALS_FAIL'

export const GET_PERSONAL_BEGIN='GET_PERSONAL_BEGIN'
export const GET_PERSONAL_SUCCESS='GET_PERSONAL_SUCCESS'
export const GET_PERSONAL_FAIL='GET_PERSONAL_FAIL'