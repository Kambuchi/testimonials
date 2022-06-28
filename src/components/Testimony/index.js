import React from 'react'
import './testimony.css'

function Testimony(props) {
  return (
    <div className='testimony-div'>
      <img className='testimony-img' src={require(`../../img/testimony-${props.img}.png`)} alt='user'/>
      <div className='testimony-text-div'>
        <p className='testimony-name'><strong>{props.name}</strong> in {props.country}</p>
        <p className='testimony-tittle'>{props.career} at <strong>{props.company}</strong></p>
        <p className='testimony-content'>"{props.testimony}"</p>
      </div>
    </div>
  )
}

export {Testimony}