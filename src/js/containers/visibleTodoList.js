import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import Todolist from '../components/todolist';

const getVisibleTodos = function(todos, filter){
	switch(filter){
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(function(todo){
				return todo.completed;
			});
		case 'SHOW_ACTIVE':
			return todos.filter(function(todo){
				return !todo.completed;
			});
		default:
			return todos;
	}
};

const mapStateToProps = function(state){
	return ({
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	});
};

const mapDispatchToProps = ({
	onTodoClick: toggleTodo,
	onDeleteClick: deleteTodo
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(Todolist);

export default VisibleTodoList;