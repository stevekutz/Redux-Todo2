import {ADD_TODO, ADD_TODO_OA, TOGGLE_TODO, TOGGLE_TODO_OA,  CLEAR_COMPLETED, REMOVE_TODO} from "../actions";


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


function reducer (state = initialState, action ) {

  switch(action.type) {


    case ADD_TODO:

      if(action.payload) {    // do NOT add empty todo !!!
        return {
          ...state,
          todos: [
            ...state.todos,
            {value: action.payload, completed: false, id: Date.now()}
          ]
        };
      }


    case ADD_TODO_OA:
      console.log('FIRE');
      if(action.payload) {
        return Object.assign
        ( {},
          state,
          { todos: [...state.todos, {value: action.payload, completed: false, id: Date.now()}] }
        );
      }


    case TOGGLE_TODO:
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

    case TOGGLE_TODO_OA:
      return Object.assign( {}, state,
        { todos: state.todos.map(todoTask => {
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


    case CLEAR_COMPLETED:
      console.log("CLEAR called");
      return {
        // ...state,    // NOT NEEDED since we are filtering anyway!!!!
        todos: state.todos.filter(todoItem => todoItem.completed === false)
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todoItem => todoItem.id !== action.payload)

      };


    default:
      return state;

  }

}

export default reducer;


