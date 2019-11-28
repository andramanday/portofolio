import serverCall from '../../config/serverCall'

export const getAbout=()=>dispatch=>{
  dispatch({
    type:GET_ALL_ABOUTS_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/about`
  })
  .then(res=>{
    dispatch({
      type: GET_ALL_ABOUTS_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ALL_ABOUTS_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getAboutbyID=(id)=>dispatch=>{
  dispatch({
    type:GET_ABOUT_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/about/${id}`
  })
  .then(res=>{
    dispatch({
      type: GET_ABOUT_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ABOUT_FAIL,
      payload: {error}
    })
    return error
  })
}

export const GET_ALL_ABOUTS_BEGIN='GET_ALL_ABOUTS_BEGIN'
export const GET_ALL_ABOUTS_SUCCESS='GET_ALL_ABOUTS_SUCCESS'
export const GET_ALL_ABOUTS_FAIL='GET_ALL_ABOUTS_FAIL'

export const GET_ABOUT_BEGIN='GET_ABOUT_BEGIN'
export const GET_ABOUT_SUCCESS='GET_ABOUT_SUCCESS'
export const GET_ABOUT_FAIL='GET_ABOUT_FAIL'