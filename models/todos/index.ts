import { app } from "../domain";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const $todos = app.createStore<Todo[]>([]);
export const addTodo = app.createEvent<Todo>();

export const select = app.createEvent<Todo>();
export const $currentTodo = app.createStore<Todo | null>(null);
