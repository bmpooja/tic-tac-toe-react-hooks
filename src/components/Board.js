import React from 'react';
import Square from './Square';

const Board= ({square, onClick}) =>  (
    
     <div>
     <Square value='1' onClick = {()=> onClick(
         'Dummty value'
     )}/>
      <Square value='2' onClick = {()=> onClick(
         'Dummty value'
     )}/>
      <Square value='3' onClick = {()=> onClick(
         'Dummty value'
     )}/>
      <Square value='4' onClick = {()=> onClick(
         'Dummty value'
     )}/>
      <Square value='5' onClick = {()=> onClick(
         'Dummty value'
     )}/>
      <Square value='6' onClick = {()=> onClick(
         'Dummty value'
     )}/>
      <Square value='7' onClick = {()=> onClick(
         'Dummty value'
     )}/>
      <Square value='8' onClick = {()=> onClick(
         'Dummty value'
     )}/>
      <Square value='9' onClick = {()=> onClick(
         'Dummty value'
     )}/>
     </div>
    )
    
export default Board;