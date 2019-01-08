import React, { Component } from 'react';
import Layout from './HOC/Layout';
import Todos from './Components/Todos';
import Filter from './Components/Filter';
import image from './images/loading.gif'
import { TodoConsumer } from './ContextAPI/TodoContext'
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
      	<TodoConsumer>
      	{
      		({response}) => (
						response && <div className="overlay">
		      		<img src={image} alt="loader" />
		      	</div>
      		)
      	}
        </TodoConsumer>
        <Todos />
	       <Filter />
      </Layout>
    );
  }
}

export default App;
