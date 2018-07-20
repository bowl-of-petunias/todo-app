import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../reducers';
import TodoItem from './TodoItem';

interface StateProps {
  ids: number[];
}

const TodoList: React.SFC<StateProps> = (props) => (
  <ul>
    {props.ids.map(id =>
      <TodoItem
        key={id}
        id={id}
      />
    )}
  </ul>
);

export default connect<StateProps, {}, {}, RootState>((state) => ({
  ids: state.todos.allIds
}))(TodoList);
