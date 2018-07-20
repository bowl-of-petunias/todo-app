import { RootState } from '../reducers';

export const getTodo = (state: RootState, id: number) => state.todos.entities[id];
