import { useEvent, useStore } from "effector-react/ssr";
import { FC } from "react";
import { $count, inc } from "../models/counter-ssr";
import { addEffectorPreloadData } from "../models/add-effector-preload-data";

export const getServerSideProps = async () => {
  return await addEffectorPreloadData({ props: {} });
};

const Home: FC = () => {
  let count = useStore($count);
  let increment = useEvent(inc);
  return (
    <div>
      <h1>Hello</h1>
      <div>{count.counter}</div>
      <button onClick={() => increment()}>INC</button>
    </div>
  );
};

export default Home;
