import React, { useState } from 'react'
import calculateWinner from '../helper'
import Board from './Board'

const style={
    width: '200px',
    margin:'20px auto'
}
const Game =()=> {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0);
    const [isXnext, setXnext]= useState(true);
    const winner = calculateWinner(history[stepNumber]);


const handleClick=(i)=>{
    console.log('history :',history)
    const timeInHistory = history.slice(0, stepNumber+1);
    const current = timeInHistory[stepNumber];
    const squares =[...current];

    if(winner || squares[i]){
        return;
    }
    squares[i] = isXnext ? 'X' : 'O'
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXnext(!isXnext);
    }
    const renderMoves =() => {
        return history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : `Go to start`;
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}> {destination} </button>
                </li>
            )
        })        
    }
    const jumpTo = step =>{
        setStepNumber(step);
        setXnext (step% 2 === 0);
    }
    return(
        <>
         <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={style}>
                <p>{winner ? 'Winner: ' +winner : 'Next Player: ' + (isXnext ? 'X' : 'O')}</p>
                {renderMoves()}
                </div>
        </>
    )
}


export default Game;