import React from "react";
import { Chart } from "react-google-charts";

export function Donut({ data, width }) {
  const options = {
    pieSliceText: "none",
    pieHole: "0.4",
    is3D: false,
    legend: { position: "right", alignment: "center" },
  };

  const options1 = {
    pieSliceText: "none",
    pieHole: "0.4",
    is3D: false,
    legend: {
      position: "top",
      alignment: "center",
      textStyle: { color: "blue", fontSize: 10 },
    },
    chartArea: {
      width: "90%",
      height: "90%",
    },
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={width > 600 ? options : options1}
    />
  );
}
