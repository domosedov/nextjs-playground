import { $count } from "./counter-ssr";
import { $todos } from "./todos";

export const EFFECTOR_SSR_DATA_PROP_NAME = "ssr-preloaded-data";

export const addEffectorPreloadData = async (
  pageProps: Record<string, any>
) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=3"
  );
  const todos = await response.json();

  if (pageProps.props) {
    pageProps.props[EFFECTOR_SSR_DATA_PROP_NAME] = {
      [$count.sid!]: { counter: 42 },
      [$todos.sid!]: todos,
    };
  }
  return pageProps;
};
