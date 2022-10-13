import React from 'react';

function Direction({setDirection , direction}) {

  return (

    // buttons components
    
    <>
    <button  style={direction==0? {backgroundColor:"green"}:null}  onClick={()=>setDirection(0)}><i class="fa-solid fa-arrow-up"></i> </button>

    <button style={direction==1? {backgroundColor:"green"}:null} onClick={()=>setDirection(1)}><i class="fa-solid fa-arrow-right"></i> </button>
    
    <button style={direction==2? {backgroundColor:"green"}:null} onClick={()=>setDirection(2)}><i class="fa-solid fa-arrow-down"></i> </button>

    <button style={direction==3? {backgroundColor:"green"}:null} onClick={()=>setDirection(3)}><i class="fa-solid fa-arrow-left"></i> </button>
    </>
  )

}

export default Direction;