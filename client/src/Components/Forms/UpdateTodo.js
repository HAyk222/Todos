import React, { Component } from 'react';
import {connect} from 'react-redux'
import { updateUpValue, backEdit, updateData } from '../../Redux/Actions/TodoActions'
import { TodoItemConsumer } from '../../ContextAPI/TodosProvider' 

class Form extends Component {

	changeValue = (value) => {
		this.props.updateUpValue(value)
	}

	handleBlur = (e) => {
		if( e.relatedTarget && e.relatedTarget.defaultValue === "Update Todo" ) {
      return
    } 
		this.props.backEdit()
	}

	updateTodo = (e, id) => {
		e.preventDefault()
		const {editValue, filter} = this.props
		this.props.updateData(editValue, id, filter)
	}

	render () {
		const {editValue} = this.props
		return (
			<TodoItemConsumer>
				{
					({ item }) => {
						return (
							<form 
								className="todo-form"
								onSubmit={((event) => this.updateTodo(event,item._id))} >
				        <input 
				        	type="text" 
				        	autoFocus
				        	value={editValue} 
				        	onChange={e => this.changeValue(e.target.value)}
				        	onBlur={(event) => this.handleBlur(event)}
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
      </TodoItemConsumer>
		)
	}
}

export default connect(
	(state) => ({editValue: state.todo.editValue, filter: state.todo.filter}),
	{updateUpValue, backEdit, updateData}
)(Form)