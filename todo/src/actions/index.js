export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const REMOVE_TODO = 'REMOVE_TODO';

export const ADD_TODO_OA = 'ADD_TODO_OA';
export const TOGGLE_TODO_OA = 'TOGGLE_TODO_OA';

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

// another syntax
export const addTodoOA = (newTodo) => {
  return {
   type: ADD_TODO_OA,
   payload: newTodo
  }
};


export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}


// another syntax
export const toggleTodoOA = (id) => {
  return {
    type: TOGGLE_TODO_OA,
    payload: id
  };
};

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED,
    payload: null
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id
  }
};