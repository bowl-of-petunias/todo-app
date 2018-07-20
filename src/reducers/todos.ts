import { Reducer } from 'redux';

import { ADD_TODO, RootAction, TOGGLE_TODO } from '../actions';
import { Todo } from '../model';
import { Indexed } from '../utils/Indexed';

export interface TodosState {
  readonly allIds: number[];
  readonly entities: Readonly<Indexed<Todo>>;
  readonly nextId: number;
}

const initialState: TodosState = {
  allIds: [],
  entities: {},
  nextId: 0
};

export const todosReducer: Reducer<TodosState, RootAction> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: ;
      const id = state.nextId;
      const todo: Todo = { id, title: action.title, completed: false };
      return {
        allIds: [...state.allIds, id],
        entities: { ...state.entities, [id]: todo },
        nextId: id + 1
      };
    case TOGGLE_TODO:
      if (state.entities[action.id]) {
        const oldTodo = state.entities[action.id];
        const newTodo: Todo = { ...oldTodo, completed: !oldTodo.completed };
        return { ...state, entities: { ...state.entities, [action.id]: newTodo } };
      }
      return state;
    default:
      return state;
  }
}