import React from 'react'
import {TodoItemConsumer} from '../../ContextAPI/TodosProvider'

const TodoText = () => {
	return (
		<TodoItemConsumer>
		{({item}) =>
			<span className="text">{item.text}</span>
		}
		</TodoItemConsumer>
	) 
}

export default TodoText