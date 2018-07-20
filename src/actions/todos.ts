import { Action } from 'redux';

export const ADD_TODO = 'todos/ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;

export interface AddTodoAction extends Action<ADD_TODO> {
  title: string;
}

export const addTodo = (title: string): AddTodoAction => ({
  title,
  type: ADD_TODO
});

export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export type TOGGLE_TODO = typeof TOGGLE_TODO;

export interface ToggleTodoAction extends Action<TOGGLE_TODO> {
  id: number;
}

export const toggleTodo = (id: number): ToggleTodoAction => ({
  id,
  type: TOGGLE_TODO
});

export type TodoActions = AddTodoAction | ToggleTodoAction;