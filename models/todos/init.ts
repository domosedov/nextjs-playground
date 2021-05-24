import { $currentTodo, $todos, addTodo, select } from ".";

$todos.on(addTodo, (todos, newTodo) => [...todos, newTodo]);

$currentTodo.on(select, (_, todo) => todo);
