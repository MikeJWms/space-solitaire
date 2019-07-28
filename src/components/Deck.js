import React, { useContext } from 'react';
import DeckContext from '../store/DeckContext';
import Card from './Card.js';

export default function Deck(props) {
  const deckState = useContext(DeckContext)

  return (
    deckState.cards.map((card, index)=>{
      return (
        <Card value={card} index={index} functions={deckState.functions} key={index}></Card>
      )
    })
  )
}