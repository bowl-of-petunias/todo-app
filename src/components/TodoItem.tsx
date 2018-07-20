import './TodoItem.css';

import classNames from 'classnames';
import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { toggleTodo } from '../actions';
import { RootState } from '../reducers';

interface OwnProps {
  id: number;
}

interface StateProps {
  completed: boolean;
  title: string;
}

interface DispatchProps {
  toggleTodo: () => any;
}

const TodoItem: React.SFC<StateProps & DispatchProps> = (props) => {
  const className = classNames({
    'todo-item': true,
    'todo-item-completed': props.completed
  });

  return (
    <li onClick={props.toggleTodo}>
      <div className={className}>Title: {props.title}</div>
    </li>
  );
};

const mapState: MapStateToProps<StateProps, OwnProps, RootState> = (state, ownProps) => ({
  completed: state.todos.entities[ownProps.id].completed,
  title: state.todos.entities[ownProps.id].title,
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapState, (dispatch, ownProps) => ({
  toggleTodo: () => dispatch(toggleTodo(ownProps.id))
}))(TodoItem);