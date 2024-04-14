import { Slider } from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

export const Controls = () => {
  const [filename, setFilename] = useState<string>("");
  const [fileError, setFileError] = useState<string>("");
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    if (!file.name.endsWith(".xlsx"))
      return setFileError("Загрузите .xlsx файл");
    setFileError("");

    setFilename(file.name);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const isFileError = useMemo(() => fileError !== "", [fileError]);
  return (
    <aside className={"flex flex-col gap-4 col-span-1 justify-center sm:justify-start items-center sm:items-start"}>
      <div
        {...getRootProps()}
        className={`h-20 w-[80%] sm:w-full flex items-center justify-center text-center align-middle border-2 ${
          isFileError ? "border-red-300" : "border-gray-300"
        } rounded-xl border-dashed`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.44 8.90002C20.04 9.21002 21.51 11.06 21.51 15.11V15.24C21.51 19.71 19.72 21.5 15.25 21.5H8.73998C4.26998 21.5 2.47998 19.71 2.47998 15.24V15.11C2.47998 11.09 3.92998 9.24002 7.46998 8.91002"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2V14.88"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.35 12.65L12 16L8.65002 12.65"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <p>
            {filename === ""
              ? isFileError
                ? fileError
                : "Переместите .xlsx файл сюда или кликните на текст"
              : filename}
          </p>
        )}
      </div>
      <Slider
        label="Индекс цены (множитель)"
        showTooltip={true}
        step={0.1}
        formatOptions={{ style: "percent" }}
        maxValue={1}
        minValue={0}
        marks={[
          {
            value: 0.2,
            label: "20%",
          },
          {
            value: 0.5,
            label: "50%",
          },
          {
            value: 0.8,
            label: "80%",
          },
        ]}
        defaultValue={0.2}
        className="sm:max-w-md w-[80%]"
      />
      <Slider
        label="Рост цены (множитель)"
        step={0.01}
        maxValue={5}
        fillOffset={0}
        minValue={-5}
        formatOptions={{ signDisplay: "always" }}
        defaultValue={0.4}
        className="sm:max-w-md w-[80%]"
      />
    </aside>
  );
};
