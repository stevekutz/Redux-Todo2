//import {ADD_TODO_OA, TOGGLE_TODO_OA, REMOVE_TODO_OA, CLEAR_COMPLETED_OA} from "../actions";
import {actions_ObjectAssign} from '../actions/index';

const initialState = {
  todosOA:
    [
      {
        value: 'build reducerOA',
        completed: false,
        id: 1,
      },
      {
        value: 'make containersOA',
        completed: false,
        id: 2,
      },
    ]
};


export function objectAssignReducers (state = initialState, action ) {
  console.log(state);
  switch(action.type) {

    case actions_ObjectAssign.ADD_TODO_OA:
      console.log(state);
      if(action.payload) {
        return Object.assign( {}, state,
          { todosOA: [...state.todosOA, {value: action.payload, completed: false, id: Date.now()}] });
      }

    case actions_ObjectAssign.TOGGLE_TODO_OA:
      return Object.assign( {}, state,
        { todosOA: state.todosOA.map(todoTask => {
            if (todoTask.id === action.payload) {
              return {
                ...todoTask,
                completed: !todoTask.completed
              };
            } else {
              return todoTask;
            }
          })

        }

      );

    case actions_ObjectAssign.CLEAR_COMPLETED_OA:
      return Object.assign({}, state,
        { todosOA: state.todosOA.filter(todoItem => todoItem.completed === false) });

    case actions_ObjectAssign.REMOVE_TODO_OA:
      return Object.assign( {}, state,
        { todosOA: state.todosOA.filter(todoItem => todoItem.id !== action.payload) });

    default:
      return state;

  }

}


