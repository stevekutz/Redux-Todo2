import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore} from 'redux';       //
import {Provider} from 'react-redux';

import rootReducer from './reducers';

import TodoListSpread from './components/TodoListSpread';
import TodoListOA from './components/TodoListOA';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider className = "provider" store = {store}>
    <TodoListSpread
      titleProp = "My Todo List spread!!!"
      subTitleProp = "(as prop passed down)"
    />
    <TodoListOA
      titleProp = "My Todo List OA!!!"
      subTitleProp = "(as prop passed down)"
    />

  </Provider>

  , rootElement);

