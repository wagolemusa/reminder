import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
// import '../index.css';
import moment from 'moment';
import reminders from '../reducers/index';

class App extends  Component {

	constructor(props) {
		super(props);
		this.state = {
			text: '',
			dueDate: ''
		}
	}

	addReminder(){
		//console.log('this.state', this.state);
		console.log('this.state.dueDate', this.state.dueDate);
		this.props.addReminder(this.state.text, this.state.dueDate);
	}

	deleteReminder(id){
		//console.log('deleting in application', id);
		//console.log('this.props', this.props);
		this.props.deleteReminder(id);	
	}

	renderReminders(){
		const { reminders } = this.props;
		return(
			<ul className="list-group col-sm-4">
			{
				reminders.map(reminder => {
					return (
						<li key = {reminder.id} className="list-group-item">
						<div className="list-item">
						<div>{reminder.text}</div>
						<div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
						
						</div>
						<div className="list-item delete-button"
						onClick={() => this.deleteReminder(reminder.id)}
						>
						&#x2715;

						</div> 

						</li>
					)
				})
			}
			</ul>
		)
	}

	render(){
		console.log('this.props', this.props);
		return(
			<div className="App">
				<div className="title">
					Reminder Pro
				</div>
				<div className="form-inline reminder-form">
					<div className="form-group">
						<input 
							className="form-control"
							 placeholder="I have to ..."
							 onChange={event => this.setState({text: event.target.value})}
						/>

						<input className="form-control"
						type="datetime-local"
						onChange={event => this.setState({dueDate: event.target.value})}
						/>

					</div>
				
					<button
						type="button"
						className="btn btn-success"
						onClick={() => this.addReminder()}
					>
						Add Reminder
					</button>
				</div>
				{ this.renderReminders() }

				<div 
					className="btn btn-danger"
					onClick={() => this.props.clearReminders()}
				>
				Clear reminders
				</div>
				
			</div>

		)
	}
}

function mapStateToProps(state){
	return {
		reminders: state
	}
	//console.log('state', state);
}

export default connect(mapStateToProps,{ addReminder, deleteReminder, clearReminders }) (App);