export const getDataFromDb = (type) => {
  let filter = type === undefined ? 'All' : type
  return fetch(`api/getData/${filter}`)
  .then(data => data.json())
}

export const addDataToDb = (text) => {
  return fetch("api/addData",{
    method: "POST",
    body: JSON.stringify({ text, completed: false }),
    headers: {"Content-Type": "application/json"}
  })
  .then( data => data.json() )
}

export const deleteDataToDb = (id) => {
  return fetch('api/deleteData',{
    method: "POST",
    body: JSON.stringify({ id: id }),
    headers: {"Content-Type": "application/json"}
  })
  .then( data => data.json() )
}

export const completeDataFromDb = (boolean, id) => {
	return fetch("api/checkedData",{
    method: "POST",
    body: JSON.stringify({ 
      completed: boolean,
      id: id
    }),
    headers: {"Content-Type": "application/json"}
  })
  .then( data => data.json() )
}

export const updateDataFromDb = (text, id) => {
	return fetch("api/updateData",{
    method: "POST",
    body: JSON.stringify({ text, id }),
    headers: {"Content-Type": "application/json"}
  })
  .then( data => data.json() )
}