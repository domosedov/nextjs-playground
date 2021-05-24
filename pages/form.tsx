import React, { FC, MouseEvent } from "react";
import { FieldError, FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextInput } from "../components/text-input";
import { FileDropzone } from "../components/dropzone";

const schema = Yup.object({}).shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  isOk: Yup.boolean().default(false).required(),
  hello: Yup.string().when(
    "isOk",
    (isOk: boolean, schema: Yup.StringSchema) => {
      return isOk ? schema.required() : schema.notRequired();
    }
  ),
  file: Yup.mixed<File>()
    .test((value) => {
      if (value) {
        return value.type === "image/png";
      } else {
        return true;
      }
    })
    .notRequired(),
});

export type YupInputs = Yup.InferType<typeof schema>;

export const Form: FC = () => {
  const formMethods = useForm<YupInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      isOk: true,
      hello: "wtf",
    },
  });

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = formMethods;

  const onSubmit = handleSubmit(async (inputs) => {
    console.log(inputs);
  });

  const handleReset = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    reset();
  };

  return (
    <div>
      <h1>Form</h1>
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          {/* <TextInput name="email" /> */}
          {/* <TextInput name="password" type="password" /> */}
          {/* <TextInput name="file" type="file" /> */}
          <TextInput name="isOk" type="checkbox" />
          <TextInput name="hello" type="text" />
          {errors.email?.message}
          <FileDropzone />
          {(errors.file as unknown as FieldError)?.message && (
            <div>
              {(errors.file as unknown as FieldError).message as string}
            </div>
          )}
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button>Submit</button>
        </form>
      </FormProvider>
      <DevTool control={control} placement="bottom-right" />
    </div>
  );
};

export default Form;
