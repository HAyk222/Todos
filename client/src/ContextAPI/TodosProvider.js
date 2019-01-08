import React from 'react';
import { TodoConsumer } from './TodoContext'

const { Provider, Consumer } = React.createContext();

const TodosProvider = (props) => {
	return (
		<TodoConsumer>
			{({ data }) =>(
				<ul>
		      { data.map( item => {
		      		return (
		      			<li 
		      				key={item._id}>
			      			<Provider 
			      				value={{ item }}
			      			>
			      				{props.children}
			      			</Provider>
		      			</li>
		      		)
		      	} ) }  
		    </ul>
			)}
    </TodoConsumer>
	)
}

export {TodosProvider, Consumer as TodoItemConsumer}