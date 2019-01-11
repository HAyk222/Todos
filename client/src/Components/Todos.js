import React from 'react'
import {connect} from 'react-redux'
import {TodoItemConsumer} from '../ContextAPI/TodosProvider'
import {TodosProvider} from '../ContextAPI/TodosProvider'
import Todo from './Todo'
import UpdateTodo from './Forms/UpdateTodo'

const Todos = (props) => {
	return (
		<TodosProvider>
			<TodoItemConsumer>
			{
				({item}) => {
					return (
						props.edit === item._id ? <UpdateTodo /> : <Todo />
					)
				}
			}
			</TodoItemConsumer>
    </TodosProvider>
	)
}

export default connect(
	(state) => ({edit: state.todo.edit})
)(Todos)