import React from 'react'
import  { TodoConsumer } from '../../ContextAPI/TodoContext'
import  { TodoItemConsumer } from '../../ContextAPI/TodosProvider'

const Buttons = () => {
	return (
		<TodoConsumer>
			{({ editTodo, deleteTodo }) => {
				return (
					<TodoItemConsumer>
						{({ item }) => (
							<React.Fragment>
								<span 
									className="edit" 
									onClick={() => editTodo(item._id, item.text)} >
									Edit
								</span>
						    <span 
						    	className="delete"
						    	onClick={() => deleteTodo(item._id)}	>
						    	Delete
						    </span>
					    </React.Fragment>
						)}
			    </TodoItemConsumer>
				)
			}}
    </TodoConsumer>
	)
}

export default Buttons