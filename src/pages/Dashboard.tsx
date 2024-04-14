import { PredictionChart, DataGrid, Controls } from "../widgets";

export const Dashboard = () => {
  return (
    <div className={"container py-8 mx-auto w-full flex flex-col gap-6"}>
      <PredictionChart />
      <div className={"grid sm:grid-cols-4 gap-2"}>
        <div className={"sm:col-span-1"}>
          <Controls />
        </div>
        <div className={"sm:col-span-3"}>
          <DataGrid />
        </div>
      </div>
    </div>
  );
};
