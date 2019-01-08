import React from 'react'
import Checkbox from './TodoComponents/Checkbox'
import TodoText from './TodoComponents/Text'
import Buttons from './TodoComponents/Buttons'

const Todo = () => {
	return (
		<React.Fragment>
			<Checkbox />
      <TodoText />
      <Buttons />
		</React.Fragment>
	)
}

export default Todo