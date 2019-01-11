import React, {Component} from 'react'
import {connect} from 'react-redux'
import {checkedData} from '../../Redux/Actions/TodoActions'
import  { TodoItemConsumer } from '../../ContextAPI/TodosProvider'

class Checkbox extends Component {

	handleChecked = (id) => {
		let boolean
    this.props.data.forEach(item => {
      if(item._id === id){
        boolean = !item.completed
      }
    })
		this.props.checkedData(boolean, id, this.props.filter)
	}

	render(){
		return(
			<TodoItemConsumer>
				{
					({ item }) => {
						return (
							<input 
								type="checkbox" 
								checked={item.completed}
								onChange={() => this.handleChecked(item._id)} />
						)
					}
				}
			</TodoItemConsumer>
		)
	}
}

export default connect(
	(state) => ({filter: state.todo.filter, data: state.todo.data}),
  {checkedData}
 )(Checkbox)