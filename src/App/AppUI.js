import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateButton } from '../CreateButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';


function AppUI(){
    
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    
    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />            
            <TodoList>
                {error && <TodoError />}
                {loading && <TodoLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodo />}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)} 
                    onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
};

export { AppUI }; //export nombrado no permite cambiar el nombre