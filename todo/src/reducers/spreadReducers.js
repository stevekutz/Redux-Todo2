//import {ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED, REMOVE_TODO} from "../actions";

// NICER way of using lots of actions
import {actions_spread} from '../actions/index';

const initialState = {
  todos:
    [
      {
        value: 'build reducer',
        completed: false,
        id: 1,
      },
      {
        value: 'make containers',
        completed: false,
        id: 2,
      },
    ]
};


export function spreadReducers (state = initialState, action ) {

  switch(action.type) {

    // syntax using chaining to find specific action type
  /*  case actions_spread.ADD_TODO:

      if(action.payload) {    // do NOT add empty todo !!!
        return {
          ...state,
          todos: [
            ...state.todos,
            {value: action.payload, completed: false, id: Date.now()}
          ]
        };
      }
  */

    case actions_spread.ADD_TODO:

      if(action.payload) {
        return {
         ...state.todos,
          todos: state.todos.concat({value: action.payload, completed: false, id: Date.now()})
        }
      }

/*
    case actions_spread.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todoTask => {
          if (todoTask.id === action.payload) {
            return {
              ...todoTask,
              completed: !todoTask.completed
            };
          } else {
            return todoTask;
          }

        })};
*/
    case actions_spread.TOGGLE_TODO:
      return {
        ...state.todos,
        todos: state.todos.map(todoTask => {
          return  (todoTask.id === action.payload ? {...todoTask, completed: !todoTask.completed} : todoTask )
        })

      };



    case actions_spread.CLEAR_COMPLETED:
      console.log("CLEAR called");
      return {
         ...state.todos,
        todos: state.todos.filter(todoItem => todoItem.completed === false)
      };

    case actions_spread.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todoItem => todoItem.id !== action.payload)

      };


    default:
      return state;

  }

}



