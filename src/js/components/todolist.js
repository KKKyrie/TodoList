import React from 'react';
import Todo from './todo';

var Todolist = React.createClass({
	render: function(){

		var todos = this.props.todos;
		var onTodoClick = this.props.onTodoClick;
		var onDeleteClick = this.props.onDeleteClick;

		var todolist = todos.map(function(todo){
			return (<Todo
						key = {todo.id}
						wording = { todo.wording }
						completed = { todo.completed }
						onDeleteClick = { function(){
							onDeleteClick(todo.id);
						} }
						onClick = { function(){
							onTodoClick(todo.id);
						} } />);
		});

		return (
			<ul className='list-group'>{ todolist }</ul>
		);
	}
});

export default Todolist;