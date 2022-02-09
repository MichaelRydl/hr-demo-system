import React, { useEffect, useState } from "react";
import axios from "axios";
import { IEmployee, IPositionStat } from "../../models/employee";

type StatisticSectionProps = {
  employeesData: IEmployee[];
};

const StatisticSection: React.FC<StatisticSectionProps> = ({
  employeesData,
}) => {
  const [statsByPosition, setStatsByPosition] = useState<IPositionStat[]>([]);

  useEffect(() => {
    axios
      .get("http://34.140.193.23/api/employees/statistics_by_position")
      .then((res) => setStatsByPosition(res.data))
      .catch((error) => {
        console.error("Failed to load data.", error);
      });
  }, [employeesData.length]);

  return (
    <div className="grid grid-rows-[60px_auto] items-center border col-span-1 rounded-lg">
      <div className="h-full grid grid-cols-3 items-center bg-blue-500 text-white text-lg font-bold text-center border-b p-2">
        <h1>Position</h1>
        <h1>Count of employees</h1>
        <h1>Average age</h1>
      </div>
      {statsByPosition.map((positionStat, i) => (
        <div key={i} className="grid grid-cols-3 text-center p-2 overflow-auto">
          <p>{positionStat.position}</p>
          <p>{positionStat.count}</p>
          <p>{positionStat.age}</p>
        </div>
      ))}
    </div>
  );
};

export default StatisticSection;
