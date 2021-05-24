import { useEvent, useStore } from "effector-react/ssr";
import { FC } from "react";
import { $currentTodo, $todos, addTodo, select } from "../models/todos";
import { addEffectorPreloadData } from "../models/add-effector-preload-data";

export const getServerSideProps = async () => {
  return addEffectorPreloadData({ props: {} });
};

export const Todos: FC = () => {
  const todos = useStore($todos);
  const add = useEvent(addTodo);
  const selectTodo = useEvent(select);
  const currentTodo = useStore($currentTodo);
  return (
    <div>
      <h1>Todos</h1>
      <div>
        <button
          onClick={() =>
            add({ id: 12, title: "asd", userId: 2, completed: true })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            selectTodo({
              id: 122,
              title: "Selected",
              userId: 4,
              completed: true,
            })
          }
        >
          Select
        </button>
        <h2>All todos</h2>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
        <h2>Current</h2>
        <pre>{JSON.stringify(currentTodo, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Todos;
