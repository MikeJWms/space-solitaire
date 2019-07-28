import React from "react";
import ReactCardFlip from 'react-card-flip';
// SVG imports
import spade from '../assets/spade.svg'
import diamond from '../assets/diamond.svg'
import club from '../assets/club.svg'
import heart from '../assets/heart.svg'

export default function Card(props){
  let suiteSVG = null;
  let style = null;
  switch (props.value.suite) {
    case 'heart':
      suiteSVG = heart;
      style = { color: '#ff0000' };
      break;
    case 'diamond':
      suiteSVG = diamond;
      style = { color: '#ff0000' };
      break;
    case 'club':
      suiteSVG = club;
      break;
    case 'spade':
      suiteSVG = spade;
      break;
    default:
      break;
  }

  return (
    <div className={props.className}>
      <ReactCardFlip isFlipped={props.value.faceDown} flipDirection="horizontal">
        <div key="front" onClick={()=>{props.functions.flipCard(props.index)}}>
          <div className="Card" key={props.value.number + props.value.suite}>
            <div className="Number">
              <span style={style}>{props.value.displayName}</span>
            </div>
            <div className="suite">
              <img src={suiteSVG} alt={props.value.suite}></img>
            </div>
            <div className="art">
            </div>
            {/* <button onClick={()=>{props.functions.incrementNumber(props.index)}}>Increment</button> */}
            {/* <button onClick={()=>{props.functions.flipCard(props.index)}}>flip</button> */}
          </div>
        </div>
        <div key="back" onClick={()=>{props.functions.flipCard(props.index)}}>
          <div className="Card">

          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}