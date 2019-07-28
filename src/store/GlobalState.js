import React, { useState } from 'react';
import { DeckProvider } from './DeckContext';


const assembleDeck = () => {
  let deck = [];
    for (let suite of ['spade', 'club', 'heart', 'diamond']) {
      for (let number = 1; number <= 13; number++) {
        let displayName = number
        let faceDown = false;
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
          case 13:
            displayName = 'K'
            break;
        }

        deck.push(
          {
            number: number,
            displayName: displayName,
            suite: suite,
            faceDown: faceDown
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

const deal = (deck) => {
  const tableauTemplate = [ [1],[2],[3],[4],[5],[6],[7] ];
  let [ initialStock, initialTableau, initialFoundation ] = [
    null,
    [ ],
    [ [],[],[],[] ]
  ]

  initialStock = deck;
  
  initialTableau = tableauTemplate.map((stackSize)=>{ // making each stack in the tableau
    const subArray = []
    for(let j = 1; j <= stackSize[0]; j++){ // adding cards to each stack
      subArray.unshift( initialStock.shift() )
    }
    return subArray;
  })

  console.log("tableau: ", initialTableau);
  return [initialStock, initialTableau, initialFoundation]
}

const GlobalState = props => {

  const deck = assembleDeck() // assembles and shuffles deck
  const [initialStock, initialTableau, initialFoundation] = deal(deck) // returns an array that can be destructured into the starting arraingement

  const [cards, setCards] = useState(assembleDeck());
  const [stock, setStock] = useState(initialStock);
  const [tableau, setTableau] = useState(initialTableau);
  const [foundation, setFoundation] = useState(initialFoundation);

  const incrementNumber = (index) => {
    let newDeck = [...cards]; // copy state
    newDeck[index] = { ...newDeck[index], number: newDeck[index].number += 1 };
    setCards(newDeck);
    // console.log("incrementing card number", cards);
  }

  const flipCard = (index) => {
    let newDeck = [...cards]; // copy state
    newDeck[index] = { ...newDeck[index], faceDown: !newDeck[index].faceDown };
    setCards(newDeck);
  }

  return (
    <DeckProvider value={{
      cards: cards,
      functions: { incrementNumber, flipCard },
      stock: stock,
      tableau: tableau,
      foundation: foundation
    }}>
      {props.children}
    </DeckProvider>
  )
}

export default GlobalState;