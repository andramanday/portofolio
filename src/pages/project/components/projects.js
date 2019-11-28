import React from 'react'

export default function Product({ imgurl, title, language }) {
  return (
    <>
        <div className="box-img">
            <img src={imgurl} alt="img1" width="100%"/>
        </div>
        <div className="box-title">
            <h1>{title}</h1>
            <p>{language}</p>
        </div>
    </>
  )
}