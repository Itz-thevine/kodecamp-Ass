import React from 'react'
import './card.css'

function Card(props) {
  const currencies = props.curr
  
  return (
    <div className='cardContainer'>
      <h1 className='cardTitle'>{props.title}</h1>
      <div className='currencies'>
        
        {
          currencies.map((currency, i) => (
            <div className='item' key={i}>{currency}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Card