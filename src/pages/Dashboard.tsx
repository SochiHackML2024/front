import { LineChart } from "@mui/x-charts";
import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

export const Dashboard = () => {
  const [filename, setFilename] = useState<string>("");
  const [fileError, setFileError] = useState<string>("");
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    if (file.type !== "text/csv") return setFileError("Загрузите .csv файл");
    setFileError("");

    setFilename(file.name);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const isFileError = useMemo(() => fileError !== "", [fileError]);
  return (
    <div className={"grid grid-cols-4 gap-4 mx-auto w-full"}>
      <aside className={"flex flex-col gap-4 col-span-1"}>
        <div
          {...getRootProps()}
          className={`h-20 w-full flex items-center justify-center text-center align-middle border-2 ${
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
                  : "Переместите .csv файл сюда или кликните на текст"
                : filename}
            </p>
          )}
        </div>
      </aside>
      <section className={"col-span-3"}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              valueFormatter: (value) =>
                value == null ? "NaN" : value.toString(),
            },
            {
              data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
            },
            {
              data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
              valueFormatter: (value) =>
                value == null ? "?" : value.toString(),
            },
          ]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
        afafa
      </section>
    </div>
  );
};
