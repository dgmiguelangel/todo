import React from 'react';
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();

function TodoProvider(props){
    
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []);

    //const[patito, savePatito] = useLocalStorage('PATITO', 'LULI');
    const[searchValue, setSearchValue] = React.useState('');  

    const[openModal, setOpenModal] = React.useState(false);

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => !!todo.completed).length; // todo.completed === true
    
    let searchedTodos = [];

    if(!searchValue.length >= 1){
        searchedTodos = todos;
        
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            completed: false
        });
        saveTodos(newTodos);
    };

    const completeTodo = (text) => { //arrayfunctions
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos); //actualizamos el estado set para que react lo renderize
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return(
        <TodoContext.Provider value={{ // propiedades que queremos compartir
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};


/*
const { Provider, Consumer} = React.createContext();
<TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer> </TodoContext.Consumer>
*/