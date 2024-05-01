import configureStore from 'redux-mock-store';
import { addTodo, removeOne, clearTodo } from './ducks/todoSlice';

const mockStore = configureStore([]);
let store;

beforeEach(() => {
  store = mockStore({ todos: { items: [] } });
});

it('should add a todo', () => {
  store.dispatch(addTodo('Test Todo'));
  expect(store.getActions()).toEqual([{ type: 'todos/addTodo', payload: 'Test Todo' }]);
});


