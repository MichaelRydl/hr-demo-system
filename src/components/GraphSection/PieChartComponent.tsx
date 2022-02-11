import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import { IPositionStat } from "../../models/employee";

type PieChartComponentProps = {
  statsByPosition: IPositionStat[];
};

const handleOptions = (positionStats: IPositionStat[]) => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Count of employees",
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
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "",
        color: "#006600",
        lineWidth: 1,
        marker: {
          enabled: false,
          symbol: "circle",
          states: {
            hover: {
              enabled: true,
              lineWidth: 1,
            },
          },
        },
        data: positionStats.map((stat) => ({
          name: stat.position,
          y: stat.count,
          sliced: false,
        })),
      },
    ],
  };

  return options;
};

const PieChartComponent: React.FC<PieChartComponentProps> = ({
  statsByPosition,
}) => {
  return (
    <PieChart
      containerProps={{ style: { height: "100%" } }}
      highcharts={Highcharts}
      options={handleOptions(statsByPosition)}
    />
  );
};

export default PieChartComponent;
