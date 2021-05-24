import { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

import { YupInputs } from "../pages/form";

type Props = {
  name: keyof YupInputs;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
};

export const TextInput: FC<Props> = ({ name, type = "text" }) => {
  const { register } = useFormContext<YupInputs>();
  return (
    <div>
      <input type={type} {...register(name)} />
    </div>
  );
};
