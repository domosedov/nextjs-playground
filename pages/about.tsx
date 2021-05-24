import { FC } from "react";
import { useStore } from "effector-react";

import { $count } from "../models/counter-ssr";

const About: FC = () => {
  const count = useStore($count);
  return (
    <div>
      <h1>About</h1>
      <p>Count: {count.counter}</p>
    </div>
  );
};

export default About;
