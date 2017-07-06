import AppContainer from './containers/AppContainer';
import  React from 'react';
import  ReactDOM from 'react-dom';

ReactDOM.render(<AppContainer />, document.getElementById('todoapp'));

import TodoActions from './data/TodoAction';

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');
