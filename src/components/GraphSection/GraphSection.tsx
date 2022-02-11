import React, { useState, FC } from "react";
import { IPositionStat } from "../../models/employee";
import ColumnChartComponent from "./ColumnChartComponent";
import PieChartComponent from "./PieChartComponent";

type GraphSectionProps = {
  statsByPosition: IPositionStat[];
};

const GraphSection: FC<GraphSectionProps> = ({ statsByPosition }) => {
  const [isPieShown, setIsPieShown] = useState(true);

  // function to change what Graph type is shown - default graph is Pie Graph
  const changeGraph = () => {
    setIsPieShown((prevState) => !prevState);
  };

  return (
    <div className="relative border overflow-auto p-2 md:row-span-2 md:col-span-1">
      <button
        type="submit"
        className="absolute top-0 right-0 z-10 m-2 p-2 bg-blue-600 font-bold text-white rounded-lg rounded-lg hover:bg-blue-700 active:bg-blue-800"
        title={isPieShown ? "Column graph" : "Pie graph"}
        onClick={() => changeGraph()}
      >
        {isPieShown ? (
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        ) : (
          <svg
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
          </svg>
        )}
      </button>
      {isPieShown ? (
        <PieChartComponent {...{ statsByPosition }} />
      ) : (
        <ColumnChartComponent {...{ statsByPosition }} />
      )}
    </div>
  );
};

export default GraphSection;
