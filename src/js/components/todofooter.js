import React from 'react';

var TodoFooter = React.createClass({
	render: function(){

		var completedCount = this.props.completedCount;
		var totalCount = this.props.totalCount;

		return (<li className='list-group-item'>
					已完成: {completedCount} | 总数: {totalCount}
				</li>);
	}
});

export default TodoFooter;