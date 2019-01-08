import React from 'react'
import  { TodoConsumer } from '../../ContextAPI/TodoContext'
import  { TodoItemConsumer } from '../../ContextAPI/TodosProvider'

const Checkbox = () => {
	return (
		<TodoConsumer>
			{
				({ handleChecked }) => {
					return (
						<TodoItemConsumer>
							{
								({ item }) => {
									return (
										<input 
											type="checkbox" 
											checked={item.completed}
											onChange={() => handleChecked(item._id)} />
									)
								}
							}
						</TodoItemConsumer>
					)
				}
			}
		</TodoConsumer>
	)
}

export default Checkbox