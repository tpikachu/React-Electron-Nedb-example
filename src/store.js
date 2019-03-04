import { createStore } from 'redux'
import reducer from './reducer/reducer';


const  db = window.require('electron').remote.getGlobal('database');

const initialstate = {
    tasks:[],
}

export const store = createStore(reducer, initialstate);

db.find({}, function (err, data) {
    store.dispatch({type: 'SET_TASKS', data})
});