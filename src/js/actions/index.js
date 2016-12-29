let nextTodoId = 0;
if (localStorage.todos){
	nextTodoId = JSON.parse(localStorage.todos).slice(-1)[0].id + 1;
}

export const addTodo = function(wording){
	return(
		{
			type: 'ADD_TODO',
			id: nextTodoId++,
			wording: wording
		}
	);
};

export const toggleTodo = function(id){
	return(
		{
			type: 'TOGGLE_TODO',
			id: id
		}
	);
};

export const deleteTodo = function(id){
	return(
		{
			type: 'DELETE_TODO',
			id: id
		}
	);
}

export const setVisibilityFilter = function(filter){
	return(
		{
			type: 'SET_VISIBILITY_FILTER',
			filter: filter
		}
	);
};