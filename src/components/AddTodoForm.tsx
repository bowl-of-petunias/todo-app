import * as React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import { RootState } from '../reducers';

interface DispatchProps {
  addTodo: (title: string) => any;
}

interface LocalState {
  title: string;
}

class AddTodoForm extends React.Component<DispatchProps, LocalState> {
  public readonly state: Readonly<LocalState> = {
    title: ''
  };

  public render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.title} onChange={this.onChange} />
        <button type="submit">Add Todo</button>
      </form>
    );
  }

  private onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  }

  private onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }
}

export default connect<{}, DispatchProps, {}, RootState>(null, (dispatch) => ({
  addTodo: (title: string) => dispatch(addTodo(title))
}))(AddTodoForm);