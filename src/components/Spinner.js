import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner=()=> {
  
    return (
      <div className="container ">
        <img className='my-3  mx-auto display:inline block' src={loading} alt='loading' />
      </div>
    )
  
}
export default Spinner