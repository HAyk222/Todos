import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateAddValue, addData} from '../../Redux/Actions/TodoActions'


class Form extends Component {
	changeValue = (e) => {
    const val = e.target.value
    this.props.updateAddValue(val)
  }

  addTodo = (e) => {
  	e.preventDefault();
  	this.props.addData(this.props.addValue, this.props.filter)
  }

	render () {
		const {addValue} = this.props
		return (
			<form
				onSubmit={this.addTodo} 
				className="todo-form">
        <input 
        	type="text" 
        	value={addValue}
        	onChange={this.changeValue}
        	className="formInput" />
        <input 
        	className={addValue.length === 0 ? "disabled" : "add"} 
        	type="submit" value="Add Todo" 
        	disabled={addValue.length === 0 ? true : false} />
      </form>
		)
	}
}

export default connect(
  (state) => ({addValue: state.todo.addValue, filter: state.todo.filter}),
  {updateAddValue, addData}
)(Form)