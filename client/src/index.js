import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoProvider from './ContextAPI/TodoContext'
import * as serviceWorker from './serviceWorker';
import store from './Redux/Store'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route exact path={'/:filter?'} render={({match}) => (
					<TodoProvider filter={match.params.filter} >
						<App />
					</TodoProvider>
				)
			 } />
		</Router>
	</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
