import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Donut(props) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (props.data) {
      const labels = props.data.map((item) => item.name);
      const values = props.data.map((item) => item.value);
      const backgroundColor = props.data.map((item) => item.backgroundColor);

      const data = {
        labels: labels,
        datasets: [
          {
            label: "#",
            data: values,
            backgroundColor: backgroundColor,
          },
        ],
      };

      setChartData(data);
    }
  }, [props.data]);

  if (!chartData) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    height: 800,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const meta = chart.getDatasetMeta(0);
                const style = meta.controller.getStyle(i);
                const value = data.datasets[0].data[i];
                return {
                  text: `${label}: ${value}`,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  lineWidth: style.borderWidth,
                  hidden: !chart.getDataVisibility(i),
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
}
