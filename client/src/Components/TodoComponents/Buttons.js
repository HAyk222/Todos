import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteData, editTodo} from '../../Redux/Actions/TodoActions'
import  { TodoItemConsumer } from '../../ContextAPI/TodosProvider'

class Buttons extends Component {

	deleteTodo = (id, filter) => {
		this.props.deleteData(id, this.props.filter)
	}

	editTodo = (id, text) => {
		this.props.editTodo({id, text})
	}

	render(){
		return (
			<TodoItemConsumer>
				{({ item }) => (
					<React.Fragment>
						<span 
							className="edit" 
							onClick={() => this.editTodo(item._id, item.text)} >
							Edit
						</span>
				    <span 
				    	className="delete"
				    	onClick={() => this.deleteTodo(item._id, this.props.filter)} 	>
				    	Delete
				    </span>
			    </React.Fragment>
				)}
	    </TodoItemConsumer>
		)
	}
}

export default connect(
  (state) => ({filter: state.todo.filter}),
  {deleteData, editTodo}
)(Buttons)
