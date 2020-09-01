import React from 'react';

const style = {
    background: 'lightblue',
    fontSize: '30px',
    fontWeight: '800',
    border: '2px solid darkblue',
    cursor: 'pointer',
}

const Square = ({value, onClick}) => (   
        <button style={style} onClick={onClick}>{value}</button>
)

export default Square;