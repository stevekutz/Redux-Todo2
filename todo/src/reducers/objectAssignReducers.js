import {ADD_TODO_OA, TOGGLE_TODO_OA,  CLEAR_COMPLETED, REMOVE_TODO} from "../actions";


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

    case ADD_TODO_OA:
      console.log(state);
      if(action.payload) {
        return Object.assign
        ( {},
          state,
          { todosOA: [...state.todosOA, {value: action.payload, completed: false, id: Date.now()}] }
        );
      }

    case TOGGLE_TODO_OA:
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


    case CLEAR_COMPLETED:
      console.log("CLEAR called");
      return {
        // ...state,    // NOT NEEDED since we are filtering anyway!!!!
        todosOA: state.todosOA.filter(todoItem => todoItem.completed === false)
      };

    case REMOVE_TODO:
      return {
        ...state,
        todosOA: state.todosOA.filter(todoItem => todoItem.id !== action.payload)

      };


    default:
      return state;

  }

}


