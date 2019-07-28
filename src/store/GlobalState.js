import React, { useState } from 'react';
import { DeckProvider } from './DeckContext';


const assembleDeck = () => {
  let deck = [];
    for (let suite of ['spade', 'club', 'heart', 'diamond']) {
      for (let number = 1; number <= 13; number++) {
        let displayName = number
        switch (number) {
          case 1:
            displayName = 'A'
            break;
          case 11:
            displayName = 'J'
            break;
          case 12:
            displayName = 'Q'
            break;
          case 1:
            displayName = 'K'
            break;
        }
        deck.push(
          {
            number: number,
            displayName: displayName,
            suite: suite
          }
        )
      }
    }
    shuffle(deck);
    return deck;
}

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}



const GlobalState = props => {

  const [cards, setCards] = useState(assembleDeck);

  const incrementNumber = (index) => {
    let newDeck = [...cards]; // copy state
    newDeck[index] = { ...newDeck[index], number: newDeck[index].number += 1 };
    setCards(newDeck);
    console.log("incrementing card number", cards);
  }

  return (
    <DeckProvider value={{
      cards: cards,
      incrementNumber: incrementNumber
    }}>
      {props.children}
    </DeckProvider>
  )
}

export default GlobalState;