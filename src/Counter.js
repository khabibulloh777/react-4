import React, { useState } from 'react'

function Counter() {
    const [number, setNumber ]= useState ("qoshilmadimadi") //qavs ichidagi qiymat boshlangich qiymat sayt zagruska bolganda
    const qoshish = (e) =>{
        setNumber("qoshilmadi" )
    } 
    const ayrish = (e) =>{
      
        
            setNumber("ayrildi")
        
    }
  

    return (
        <div className="counter">
             <button onClick={qoshish}>+</button>
             <h2>{number}</h2>
             <button onClick={ayrish}>-</button>

        </div>
    )
}

export default Counter
