import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../Redux/Actions/TodoActions'

const { Provider, Consumer } = React.createContext();

class TodoProvider extends Component {

  componentDidMount(){
    this.props.fetchTodos(this.props.filter)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.filter !== this.props.filter) {
      this.props.fetchTodos(this.props.filter)
    } 
  }

  render() {
    return (
      <Provider
        value={{ data: this.props.data }} 
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default connect(
  (state) => ({
    data: state.todo.data, 
    response: state.todo.response
  }),
  {fetchTodos}
)(TodoProvider)

export { Consumer as TodoConsumer }