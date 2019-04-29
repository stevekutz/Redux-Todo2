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
      titleProp = "My Todo List using spread reducers!!!"
      subTitleProp = "(titles are props passed down - old way, dumb component)"
    />
    <TodoListOA
      titleProp = "My Todo List using Object.assign reducers!!!"
      subTitleProp = "(titles are props passed down - old way, dumb component)"
    />
  </Provider>
  , rootElement);

