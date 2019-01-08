import React from 'react'
import {TodosProvider, TodoItemConsumer} from '../ContextAPI/TodosProvider'
import {TodoConsumer} from '../ContextAPI/TodoContext'
import Todo from './Todo'
import UpdateTodo from './Forms/UpdateTodo'

const Todos = () => {
	return (
		<TodosProvider>
			<TodoConsumer>
      	{
      		({ edit }) =>{
	      		return (
	      			<TodoItemConsumer>
	      			{
	      				({item}) => {
	      					return (
	      						edit === item._id ? <UpdateTodo /> : <Todo />
	      					)
	      				}
	      			}
	      			</TodoItemConsumer>
	      		) 
	      	} 
      	}
      </TodoConsumer>
    </TodosProvider>
	)
}

export default Todos