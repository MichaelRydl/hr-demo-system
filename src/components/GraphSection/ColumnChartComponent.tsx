import React, { FC } from "react";
import Highcharts from "highcharts/highstock";
import ColumnChart from "highcharts-react-official";
import { IPositionStat, Position } from "../../models/employee";

type ColumnChartComponentProps = {
  statsByPosition: IPositionStat[];
};

const handleOptions = (positionStats: IPositionStat[]) => {
  const options = {
    chart: {
      type: "column",
      inverted: true,
    },
    title: {
      text: "Average age",
    },
    credits: {
      enabled: false,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemMarginTop: 10,
    },
    xAxis: {
      categories: [
        Position.BackendDeveloper,
        Position.ProductOwner,
        Position.CEO,
        Position.FrontendDeveloper,
        Position.ScrumMaster,
      ],
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    series: [
      {
        showInLegend: false,
        data: positionStats.map((stat) => stat.age),
      },
    ],
  };

  return options;
};

const ColumnChartComponent: FC<ColumnChartComponentProps> = ({
  statsByPosition,
}) => {
  return (
    <ColumnChart
      containerProps={{ style: { height: "100%" } }}
      highcharts={Highcharts}
      options={handleOptions(statsByPosition)}
    />
  );
};

export default ColumnChartComponent;
