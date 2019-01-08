import React from 'react';
import AddTodo from '../Components/Forms/AddTodo';
import Header from '../Components/Header';

const Layout = (props) => {
	return (
		<div className="todo-content">
			<AddTodo />
				{ props.children }
			<Header />
		</div>
	)
}

export default Layout