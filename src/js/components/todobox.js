import React from 'react';
import VisibleTodoList from '../containers/visibleTodoList';
import AddTodo from '../containers/addTodo';
import Footer from './footer';
import CountFooter from '../containers/countFooter';

var Todobox = React.createClass({
	render: function(){
		return (
			<div className='well'>
				<VisibleTodoList />
				<CountFooter />
				<hr />
				<AddTodo />
				<hr />
				<Footer />
			</div>
		);
	}
});

export default Todobox;
//