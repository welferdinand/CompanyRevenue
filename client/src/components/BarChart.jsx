
import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
      <h3 className="font-semibold leading-none tracking-tight">Company Revenue</h3>
      <div className="chart-container mt-4">
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Company Revenue from January - May 2024",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
