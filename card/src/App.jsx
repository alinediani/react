import React from 'react';
import Card from './componentes/card'
import Navbar from './componentes/navbar'
import './index.css'

export default()=>(
    <div >
        <header>
            <Navbar></Navbar>
        </header>
        <h1>Login</h1>
       <div className='a'>
        <Card titulo="Exemplo de card"></Card>
        <Card titulo='2'></Card>
        <Card titulo='Aline'></Card>
        </div>
        </div>
 
)