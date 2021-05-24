import { createGate } from "effector-react/ssr";
import isEqual from "react-fast-compare";

import { app } from "../domain";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const $todos = app.createStore<Todo[]>([], {
  updateFilter: (next, prev) => !isEqual(prev, next),
});
export const addTodo = app.createEvent<Todo>();
export const fetchTodosFx = app.createEffect<void, Todo[]>();

export const select = app.createEvent<Todo>();
export const $currentTodo = app.createStore<Todo | null>(null);

export const TodosPageGate = createGate({
  domain: app,
});
