import TodoFooter from '../components/todofooter';
import { connect } from 'react-redux';

const mapStateToProps = function(state){
	var completedCount = 0;
	var todos = state.todos.map(function(todo){
		if (todo.completed){
			completedCount++;
		}
	});
	return({
		completedCount: completedCount,
		totalCount: state.todos.length
	});
};


const CountFooter = connect(mapStateToProps)(TodoFooter);


export default CountFooter;