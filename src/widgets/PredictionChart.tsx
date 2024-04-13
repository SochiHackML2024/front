import { LineChart } from "@mui/x-charts";

export const PredictionChart = () => {
  return (
    <section className={"col-span-3"}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
        series={[
          {
            showMark: false,
            data: [2, 5.5, 2, null, null, null],
          },
          {
            showMark: false,
            data: [null, null, 2, 1, 5, 6],
          },
        ]}
        sx={{
          "& .MuiChartsGrid-root + g > g:nth-of-type(2) > g:nth-of-type(2) .MuiLineElement-root":
            {
              strokeDasharray: "10 5",
              strokeWidth: 2,
            },
        }}
        height={300}
        grid={{ vertical: true, horizontal: true }}
        margin={{ top: 10, bottom: 20 }}
      />
    </section>
  );
};
