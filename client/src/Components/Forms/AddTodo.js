import React, { Component } from 'react';
import { TodoConsumer } from '../../ContextAPI/TodoContext'

export default class Form extends Component {
	render () {
		return (
			<TodoConsumer>
			{
				({ changeValue, addValue, addTodo }) => {
					return (
						<form
							onSubmit={(event) => addTodo(event)} 
							className="todo-form">
			        <input 
			        	type="text" 
			        	value={addValue}
			        	onChange={e => changeValue(e.target.value, 'addValue')}
			        	className="formInput" />
			        <input 
			        	className={addValue.length === 0 ? "disabled" : "add"} 
			        	type="submit" value="Add Todo" 
			        	disabled={addValue.length === 0 ? true : false} />
			      </form>
					)
				}
			}
      </TodoConsumer>
		)
	}
}