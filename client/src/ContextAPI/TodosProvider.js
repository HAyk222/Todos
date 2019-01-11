import React, {Component} from 'react';
import { TodoConsumer } from './TodoContext'

const { Provider, Consumer } = React.createContext();

class TodosProvider extends Component {
	render(){
		return(
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
				      				{this.props.children}
				      			</Provider>
			      			</li>
			      		)
			      	} ) }  
			    </ul>
				)}
	    </TodoConsumer>
		)
	}
}

export {TodosProvider, Consumer as TodoItemConsumer}