import React from 'react'
import CardItems from './CardItems'
import img9 from '../images/img-9.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img7 from '../images/img-7.jpg'

import './Card.css'
const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check Out this EPIC Destination!</h1>
      <div className="cards__container">
        <div className="card__wrapper">
            <ul className="cards__items">
                <CardItems 
                src={img9}
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/"
                />
                <CardItems 
                src={img2}
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/"
                />
            </ul>
            <ul className='cards__items'>
            <CardItems
              src={img4}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/'
            />
            <CardItems
              src={img3}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/'
            />
            <CardItems
              src={img7}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
