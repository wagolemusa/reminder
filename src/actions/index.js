import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
//import { bake_cookies, read_cookie } from 'sfcookies';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log('action in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action  = {
        type: DELETE_REMINDER,
        id 

    }
    console.log('deleting in actions', action);
    return action;
}


export const clearReminders = () =>{
    return{
        type: CLEAR_REMINDERS
    }
}