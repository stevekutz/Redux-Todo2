import React from 'react';
import './TodoList.css';

import {connect} from 'react-redux';                            // we MUST point to specific actions file now
import {addTodo, toggleTodo, clearCompleted, removeTodo} from "../actions/actions_spread";

class TodoListSpread extends React.Component {
  state = {
    newTodo: '',
    completed: false,
    id: '',

  };


  // set up for adding another input field...
  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  //   this.setState({newTodo: e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState(
      {
        newTodo: '',
        completed: false,
        id: '',
      }
    );
  };

  handleToggleTodo = id => {
    this.props.toggleTodo(id);

  };

  handleClearCompleted = () => {
    this.props.clearCompleted();
  };

  handleRemoveTodo = (id) => {
    console.log(id);
    this.props.removeTodo(id);

  };

  render() {

    return (

      <div className = "todoListContainer">

        <div className = "headerTitles">
          <h3 className = "titleProp"> {this.props.titleProp} </h3>
          <h5 className = "subTitleProp">{this.props.subTitleProp}</h5>
        </div>



        { this.props.todosAsProps &&
          this.props.todosAsProps.map ((todo, index) => (
            <div className = "todoListItem">
              <h4

                key = {todo.id}
                onClick = { () => this.handleToggleTodo(todo.id)}
                style = {
                  todo.completed
                    ? { color: 'grey',
                        textDecoration: 'line-through',
                        textDecorationStyle: 'wavy',
                        textDecorationColor: 'white',
                  }
                    : null
                }

                >{todo.value}
              </h4>
              <button
                onClick={ () => this.handleRemoveTodo(todo.id)}
              > Delete todo using id </button>
          </div>

          ))}


       <form
         className = "formContainer"
         onSubmit = {this.handleSubmit}>

         <input className = "inputField"
           type = 'text'
           value = {this.state.newTodo}
           onChange = {this.handleChange}
           placeholder = 'add a todo here'
           name = "newTodo"

           />
           <div className = "addTodoContainer">
             <button className = "buttonStyle">Add Todo</button>

           </div>


       </form>
        <button
          className = "buttonStyle"
          onClick = {this.handleClearCompleted}
        > Clear Completed Todos </button>

      </div>

    )
  }

}

const mapStateToProps = state => {
  console.log("TodoListSpread state >>> ",state);
  return {                      // receive initial state from reducer
    todosAsProps: state.spreadReducers.todos   // NOTICE how we access state !!
                                // then any updates to state
  };
};

export default connect (
  mapStateToProps,
  {addTodo, toggleTodo, clearCompleted, removeTodo}


)(TodoListSpread);
