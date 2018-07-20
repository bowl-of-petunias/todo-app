import { combineReducers } from 'redux';

import { RootAction } from '../actions';
import { todosReducer, TodosState } from './todos';

export interface RootState {
  readonly todos: TodosState;
}

export const rootReducer = combineReducers<RootState, RootAction>({
  todos: todosReducer,
});