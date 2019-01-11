const initState = {
  data: [],
	edit: 0,
	editValue: "",
	addValue: "",
	fetch: false,
	filter: ""
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_ADDVALUE':
      return {
      	...state, 
      	addValue: action.payload
      }
    case 'TODOS_LOAD':
      return {
      	...state, 
      	data: action.payload, 
      	edit: 0,
      	addValue: "", 
      	editValue: "",
      	fetch: false
      }
    case 'CHANGE_FILTER':
    	return {
    		...state,
    		filter: action.payload
    	}
    case 'EDIT_TODO':
    	return {
    		...state,
    		edit: action.payload.id,
    		editValue: action.payload.text
    	}
    case 'UPDATE_UPVALUE':
    	return {
    		...state,
    		editValue: action.payload
    	}
    case 'BACK_EDIT':
    	return {
    		...state,
    		edit: 0
    	}
    case 'FETCH_DATA':
    	return {
    		...state,
    		fetch: true
    	}
    default:
      return state
  }
}