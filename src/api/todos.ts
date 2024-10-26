import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 1229;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const addTodos = ({ userId, title, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, { userId, title, completed });
};

export const updateTodos = (todoId: number, completed: boolean) => {
  return client.patch<Todo>(`/todos/${todoId}`, { completed });
};

export const updateTodoTitle = async (todoId: number, newTitle: string) => {
  return client.patch<Todo>(`/todos/${todoId}`, { title: newTitle });
};
