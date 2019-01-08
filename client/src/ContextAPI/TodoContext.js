import React, { Component } from 'react'


const { Provider, Consumer } = React.createContext();

class TodoProvider extends Component {
  state = {
    data: [],
    edit: 0,
    editValue: "",
    addValue: "",
    count: 4,
    response: false
  };

  componentDidMount(){
    console.log("componentDidMount")
    this.getDataFromDb()
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.response || prevProps.filter !== this.props.filter) {
      console.log("componentDidUpdate")
      this.getDataFromDb()
    } 
  }

  getDataFromDb = () => {
    let filter = this.props.filter === undefined ? 'All' : this.props.filter
    console.log(this.props.filter)
    fetch(`api/getData/${filter}`)
      .then(data => data.json())
      .then(res => this.setState({ data: res, response: false }))
      .catch(error => console.log(error) )
  };

  addTodo = (e) => {
    e.preventDefault()
    fetch("api/addData",{
      method: "POST",
      body: JSON.stringify({ 
        text: this.state.addValue,
        completed: false
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => {
      this.setState({
        addValue: "",
        response: true
      })
    })
    .catch(error => console.log(error) )
  }

  updateTodo = (e, id) => {
    e.preventDefault();
    fetch("api/updateData",{
      method: "POST",
      body: JSON.stringify({ 
        text: this.state.editValue,
        id: id
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => {
      this.setState({
        editValue: "",
        response: true,
        edit: 0
      })
    })
    .catch(error => console.log(error) )
  }

  handleChecked = (id) => {
    let boolean
    this.state.data.forEach(item => {
      if(item._id === id){
        boolean = !item.completed
      }
    })

    fetch("api/checkedData",{
      method: "POST",
      body: JSON.stringify({ 
        completed: boolean,
        id: id
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then( res => this.setState({ response: true }) )
    .catch(error => console.log(error) )
  }


  deleteTodo = (id) => {
    fetch( 'api/deleteData',{
      method: "POST",
      body: JSON.stringify({ id: id }),
      headers: {"Content-Type": "application/json"}
    } )
    .then( data => this.setState({ response: true }) )
    .catch( error => console.log(error) )
  }

  editTodo = (id, text) => {
  	this.setState({ 
  		edit: id,
  		editValue : text
  	})
  }

  changeValue = (value, type) => {
  	this.setState({ [type]: value })
  }

  handleBlur = (event) => {
  	if( event.relatedTarget && event.relatedTarget.defaultValue === "Update Todo" ) {
      return
    } 
    this.setState({ edit: 0 })
  } 

  render() {
    return (
      <Provider
        value={{
          data: this.state.data,
          editTodo: this.editTodo,
          edit: this.state.edit,
          editValue: this.state.editValue,
          changeValue: this.changeValue,
          handleBlur: this.handleBlur,
          updateTodo: this.updateTodo,
          deleteTodo: this.deleteTodo,
          handleChecked: this.handleChecked,
          addValue: this.state.addValue,
          addTodo: this.addTodo,
          response: this.state.response
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { TodoProvider, Consumer as TodoConsumer }