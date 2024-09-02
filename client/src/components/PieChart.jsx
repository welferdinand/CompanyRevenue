// components/PieChart.js
import { Pie } from "react-chartjs-2";

export default function PieChart({ chartData }) {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
      <h3 className="font-semibold leading-none tracking-tight">Company Revenue</h3>
      <div className="mt-4 w-full h-[334px]">
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Company Revenue from January - May 2024",
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
            elements: {
              arc: {
                borderWidth: 2,
              },
            }
          }}
        />
      </div>
    </div>
  );
}
