import './TodoItem.css';

import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import { RootState } from '../reducers';
import { getTodo } from '../selectors';

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

export default connect<StateProps, DispatchProps, OwnProps, RootState>((state, ownProps) => ({
  completed: getTodo(state, ownProps.id).completed,
  title: getTodo(state, ownProps.id).title,
}), (dispatch, ownProps) => ({
  toggleTodo: () => dispatch(toggleTodo(ownProps.id))
}))(TodoItem);