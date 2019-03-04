const  db = window.require('electron').remote.getGlobal('database');

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_TASKS':
      return {...state, tasks: action.data};
    case 'ADD_TASK':
        state.tasks.push(action.data);
        db.insert(action.data, function(err, newtask){});
      return state;
    default:
      return state;
  }
}

export default reducer;