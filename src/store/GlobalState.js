import React, { useState } from 'react';

import { DeckProvider } from './DeckContext';

const GlobalState = props => {
  const [cards, setCards] = useState([
    {
    number: 2,
    color: 'black',
    suite: 'spade'
    },
    {
      number: 3,
      color: 'black',
      suite: 'spade'
    },
    {
      number: 4,
      color: 'black',
      suite: 'spade'
    }
  ])

  const incrementNumber = (index) => {
    let newDeck = [...cards]; // copy state
    newDeck[index] = {...newDeck[index], number: newDeck[index].number += 1};
    setCards(newDeck);
    console.log("incrementing card number", cards);
  }

  return (
    <DeckProvider value={{
      cards: cards,
      incrementNumber: incrementNumber
    }}>
      { props.children }
    </DeckProvider>
  )
}

export default GlobalState;