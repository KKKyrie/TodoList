import React from 'react';

var Todo = React.createClass({
	render: function(){
		return (
			<li className='list-group-item'
				style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
			>
				<span onClick={ this.props.onClick } style={{cursor: 'pointer'}}>{ this.props.wording }</span>
				<span className='pull-right' onClick={ this.props.onDeleteClick } style={{cursor: 'pointer'}}>删除</span>
			</li>
		);
	}
});

export default Todo;