import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

var AddTodo = React.createClass({


	render: function(){
		const dispatch = this.props.dispatch;
		let input;
		return (
			<div>
				<form onSubmit={function(e){
					e.preventDefault();
					var wording = input.value;
					if (!wording.trim()){
						return;
					}
					dispatch(addTodo(wording));
					input.value = '';
				}}>
					<input className='form-control' ref={node => {input=node}} placeholder='输入待办事项/回车确认' />
					<button type='submit' className='btn btn-primary' style={{marginTop: '5px'}}>添加</button>
					<button className='btn btn-default' style={{marginTop: '5px', marginLeft: '5px'}} onClick={function(){ delete localStorage.todos; location.reload(); }}>重置</button>
				</form>
			</div>
		);


	}
});

AddTodo = connect()(AddTodo);

export default AddTodo;