import {getDataFromDb, addDataToDb, deleteDataToDb, completeDataFromDb, updateDataFromDb} from '../../FetchRequest/Ajax'

export const updateAddValue = (val) => ({type:'UPDATE_ADDVALUE', payload: val})
export const loadTodos = (data) => ({type: 'TODOS_LOAD', payload: data})
export const changeFilter = (type) => ({type: 'CHANGE_FILTER', payload: type})
export const editTodo = (data) => ({type: 'EDIT_TODO', payload: data})
export const updateUpValue = (val) => ({type:'UPDATE_UPVALUE', payload: val})
export const backEdit = (val) => ({type:'BACK_EDIT'})
export const fetch = () => ({type:'FETCH_DATA'})

export const fetchTodos = (filter) => {
  return (dispatch) => {
  	dispatch(fetch())
    getDataFromDb(filter)
      .then(data => dispatch(loadTodos(data)))
      .then(data => dispatch(changeFilter(filter)))
  }
}

export const addData = (text, filter) => {
	return (dispatch) => {
		addDataToDb(text)
			.then((data) => dispatch(fetchTodos(filter)) )
  }
}

export const deleteData = (id, filter) => {
	return (dispatch) => {
		deleteDataToDb(id)
			.then((data) => dispatch(fetchTodos(filter)))
  }
}

export const checkedData = (boolean, id, filter) => {
	return (dispatch) => {
		completeDataFromDb(boolean, id)
			.then((data) => dispatch(fetchTodos(filter)))
  }
}

export const updateData = (text, id, filter) => {
	return (dispatch) => {
		updateDataFromDb(text, id)
			.then((data) => dispatch(fetchTodos(filter)))
  }
}