import * as React from 'react';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

export const App: React.SFC = () => (
  <div>
    <div>Todo App</div>
    <AddTodoForm />
    <TodoList />
  </div>
);
