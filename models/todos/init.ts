import { forward } from "effector";
import {
  $currentTodo,
  $todos,
  addTodo,
  fetchTodosFx,
  select,
  TodosPageGate,
} from ".";

fetchTodosFx.use(async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=4"
  );
  return await response.json();
});

$todos
  .on(addTodo, (todos, newTodo) => [...todos, newTodo])
  .on(fetchTodosFx.doneData, (_, todos) => todos);

$currentTodo.on(select, (_, todo) => todo);

forward({
  from: TodosPageGate.open,
  to: fetchTodosFx,
});
