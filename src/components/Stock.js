import React, { useContext } from 'react';
import DeckContext from '../store/DeckContext';
import Card from './Card.js';

const Stock = props => {
  const deckState = useContext(DeckContext)
  let stock = deckState.stock
  return (
    <span className="Stock">
      {stock.map((card, index)=>{
        return (
          <Card className="Stack" value={card} index={index} functions={deckState.functions} key={index}></Card>
        )
      })}
    </span>
  )
}

export default Stock;



function Deck(props) {
  const deckState = useContext(DeckContext)

  return (
    deckState.cards.map((card, index)=>{
      return (
        <Card value={card} index={index} functions={deckState.functions} key={index}></Card>
      )
    })
  )
}