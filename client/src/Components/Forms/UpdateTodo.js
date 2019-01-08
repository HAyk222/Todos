import React, { Component } from 'react';
import { TodoItemConsumer } from '../../ContextAPI/TodosProvider' 
import { TodoConsumer } from '../../ContextAPI/TodoContext'

export default class Form extends Component {
	render () {
		return (
			<TodoItemConsumer>
				{
					({ item }) => {
						return (
							<TodoConsumer>
								{
									({ editValue, changeValue, handleBlur, updateTodo }) => {
										return (
											<form 
												className="todo-form"
												onSubmit={((event) => updateTodo(event,item._id))} >
								        <input 
								        	type="text" 
								        	autoFocus
								        	value={editValue} 
								        	onChange={e => changeValue(e.target.value, 'editValue')}
								        	onBlur={(event) => handleBlur(event)}
								        	className="formInput" />
								        <input 
								        	className={editValue.length === 0 ? "disabled" : "update"} 
								        	type="submit" 
								        	value="Update Todo"
								        	disabled={editValue.length === 0 ? true : false} />
								      </form>
										)
									}
								}
				      </TodoConsumer>
						)
					}
				}
      </TodoItemConsumer>
		)
	}
}