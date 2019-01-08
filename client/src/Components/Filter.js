import React, { Component } from 'react';
import Count from './FilterComponents/Count'
import FilterLinks from './FilterComponents/FilterLinks'

export default class Filter extends Component {
	render () {
		return (
			<div className="filter_content">
				<Count />
	      <FilterLinks />
      </div>
		)
	}
}