import React from 'react';

var Link = React.createClass({
	render: function(){
		var active = this.props.active;
		var children = this.props.children;
		var onClick = this.props.onClick;

		if (active){
			return (
				<span>{ children }</span>
			);
		}

		return (
			<a href='#' onClick={function(e){
				e.preventDefault();
				onClick();
			}}>
				{children}
			</a>
		);
	}
});

export default Link;