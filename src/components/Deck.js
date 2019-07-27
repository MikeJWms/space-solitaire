import React, { useContext } from 'react';
import DeckContext from '../store/DeckContext';

export default function Card(props) {
  const deckState = useContext(DeckContext)

  return (
    deckState.cards.map((card, index)=>{
      return (
        <div className="Card" key={index}>
          <div className="Number">
            <span>{ card.number }</span>
          </div>
          <div className="suite">
            <span>{ card.suite }</span>
          </div>
          <button onClick={()=>{deckState.incrementNumber(index)}}>Increment</button>
        </div>
      )
    })
  )
}