import React from 'react'
import { NavLink  } from 'react-router-dom'

const FilterLinks = () => {
	return (
		<div className="filter">
			<NavLink exact activeClassName="selected" to="/">All</NavLink >
    	<NavLink activeClassName="selected" to="/Completed">Completed</NavLink >
    	<NavLink activeClassName="selected" to="/Active">Active</NavLink >
    </div>
	)
}

export default FilterLinks