import React from 'react'
import './card.css'
export default props=>{
    return(
        
        <div className='Card'>
           <div className="title">{props.titulo}</div>
           <div className='content'>Conteúdo</div>
        </div>
       
    )
}
