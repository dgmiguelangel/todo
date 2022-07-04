import React from 'react';
import {AppUI} from './AppUI';
import {TodoProvider} from '../TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;


/*
  const defaultTodos = [
    {text: "Cortar cebollo", completed: false},
    {text: "Tomar el curso de Intro a React", completed: false},
    {text: "Llorar con la llorona", completed: false},
  ]

  console.log('Render (antes del useEffect)');

  React.useEffect(() => { //se ejecuta justo antes de la renderizacion
    console.log('use effect');
  }, [totalTodos]);

  console.log('Render (despues del useEffect)');
*/