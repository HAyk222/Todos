import React from 'react';
import { TodoConsumer } from '../../ContextAPI/TodoContext'

const Count = () => {
	return (
		<TodoConsumer>
		{
			({data}) => {
				return (
					<div className="todo">
					  <span> Todos </span>
					  <span className="count"> {data.length} </span>
					</div>
				)
			}
		}
		</TodoConsumer>
	)
}

export default Count