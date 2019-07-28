import React, { useContext } from 'react';
import DeckContext from '../store/DeckContext';
import spade from '../assets/spade.svg'
import diamond from '../assets/diamond.svg'
import club from '../assets/club.svg'
import heart from '../assets/heart.svg'

export default function Card(props) {
  const deckState = useContext(DeckContext)
  return (
    deckState.cards.map((card, index)=>{
      let suiteSVG = null;
      let style = null;
      switch(card.suite){
        case 'heart':
          suiteSVG = heart;
          style = { color: '#ff0000'};
          break;
        case 'diamond':
            suiteSVG = diamond;
            style = { color: '#ff0000'};
          break;
        case 'club':
            suiteSVG = club;
          break;
        case 'spade':
            suiteSVG = spade;
          break;
      }

      return (
        <div className="Card" key={index}>
          <div className="Number">
            <span style={style}>{ card.displayName }</span>
          </div>
          <div className="suite">
            <img src={suiteSVG} alt={card.suite}></img>
          </div>
          <div className="art">
          </div>
          {/* <button onClick={()=>{deckState.incrementNumber(index)}}>Increment</button> */}
        </div>
      )
    })
  )
}