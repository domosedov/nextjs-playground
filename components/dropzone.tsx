import { FC, useCallback } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { YupInputs } from "../pages/form";

type DropzoneProps = {
  name: string;
  onDrop: DropzoneOptions["onDrop"];
};

export const FileDropzone: FC = () => {
  const { register, setValue } = useFormContext<YupInputs>();
  const { name } = register("file");
  const onDrop: DropzoneOptions["onDrop"] = useCallback(
    (acceptedFiles: File[]) => {
      setValue("file", acceptedFiles[0], {
        shouldValidate: true,
      });
    },
    []
  );

  return <Dropzone name={name} onDrop={onDrop} />;
};

export const Dropzone: FC<DropzoneProps> = ({ name, onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div {...getRootProps()} style={{ border: "1px solid black" }}>
      <input {...getInputProps()} />
      <p>Drag file here</p>
    </div>
  );
};
