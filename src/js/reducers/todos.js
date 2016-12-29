let _todos;

(function() {
	if (localStorage.todos) {
		_todos = JSON.parse(localStorage.todos);
	} else {
		_todos = [];
	}
})();

const todos = function(state = _todos, action) {
	switch (action.type) {
		case 'ADD_TODO':
			var _state = [...state, {
				id: action.id,
				wording: action.wording,
				completed: false
			}];

			localStorage.setItem('todos', JSON.stringify(_state));

			return (_state);


		case 'TOGGLE_TODO':
			var _state = state.map(function(todo) {
				if (todo.id == action.id) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					});
				}
				return todo;
			});

			localStorage.setItem('todos', JSON.stringify(_state));

			return _state;


		case 'DELETE_TODO':
			var _state = state.filter(function(todo) {
				return todo.id !== action.id;
			});

			if (_state.length == 0){
				delete localStorage.todos;
			}else{
				localStorage.setItem('todos', JSON.stringify(_state));
			}

			return _state;

		default:
			return state;
	}
};

export default todos;