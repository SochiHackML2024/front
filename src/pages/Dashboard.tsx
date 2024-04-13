import { PredictionChart, DataGrid, Controls } from "../widgets";

export const Dashboard = () => {
  return (
    <div className={"container py-8 mx-auto w-full flex flex-col gap-6"}>
      <PredictionChart />
      <div className={"grid grid-cols-4 gap-6"}>
        <div className={"col-span-1"}>
          <Controls />
        </div>
        <div className={"col-span-3"}>
          <DataGrid />
        </div>
      </div>
    </div>
  );
};
