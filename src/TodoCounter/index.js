import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const estilos = {
    color: 'red',
    backgroundColor: 'yellow'
}

function TodoCounter(){
    
    const { 
        totalTodos: total, 
        completedTodos: completed 
    } = React.useContext(TodoContext);

    return(
        <h2 className='TodoCounter' style={estilos} >Has completado {completed} de {total} TODOs</h2>
    );
}

export {TodoCounter};