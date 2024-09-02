// pages/DashboardPage.js
import CustomNavbar from "../components/CustomNavbar";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { dummyData } from "../utils/dummyData";
import { BarChart } from "../components/BarChart";
import PieChart from "../components/PieChart";

Chart.register(CategoryScale);

export default function DashboardPage() {
  const [chartData, setChartData] = useState({
    labels: dummyData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue in USD ",
        data: dummyData.map((data) => data.revenue),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <CustomNavbar />
      <div className="container mx-auto p-4">
        <div className="flex flex-row">
          <div className="flex-1 p-4">
            <h1 className="m-3">Company Revenue in Bar Chart</h1>
            <BarChart chartData={chartData} />
          </div>
          <div className="flex-1 p-4">
          <h1 className="m-3">Company Revenue in Pie Chart</h1>
          <PieChart chartData={chartData} />
          </div>
        </div>
      </div>
    </>
  );
}
