import React, { useEffect } from "react";
import axios from "axios";
import { IEmployee, IPositionStat } from "../../models/employee";

type StatisticSectionProps = {
  employeesData: IEmployee[];
  statsByPosition: IPositionStat[];
  setStatsByPosition: React.Dispatch<React.SetStateAction<IPositionStat[]>>;
};

const StatisticSection: React.FC<StatisticSectionProps> = ({
  employeesData,
  statsByPosition,
  setStatsByPosition,
}) => {
  useEffect(() => {
    axios
      .get("http://34.140.193.23/api/employees/statistics_by_position")
      .then((res) => setStatsByPosition(res.data))
      .catch((error) => {
        console.error("Failed to load data.", error);
      });
  }, [employeesData.length, setStatsByPosition]);

  return (
    <div className="grid grid-rows-[60px_auto] items-center border md:col-span-1">
      <div className="h-full grid grid-cols-3 items-center bg-blue-600 text-white text-sm font-bold text-center border-b p-2 md:text-lg">
        <h1 className="md:truncate" title="Position">
          Position
        </h1>
        <h1 className="md:truncate" title="Count of employees">
          Count of employees
        </h1>
        <h1 className="md:truncate" title="Average age">
          Average age
        </h1>
      </div>
      {statsByPosition.map((positionStat, i) => (
        <div
          key={i}
          className="grid grid-cols-3 text-center px-4 py-2 overflow-auto"
        >
          <p className="md:truncate" title={positionStat.position}>
            {positionStat.position}
          </p>
          <p className="md:truncate">{positionStat.count}</p>
          <p className="md:truncate" title={positionStat.age.toFixed(1)}>
            {positionStat.age.toFixed(1)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatisticSection;
