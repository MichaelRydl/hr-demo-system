import React, { useState } from "react";
import EmployeeListSection from "./components/EmployeeListSection/EmployeeListSection";
import GraphSection from "./components/GraphSection/GraphSection";
import StatisticSection from "./components/StatisticSection/StatisticSection";
import { IEmployee, IPositionStat } from "./models/employee";

function App() {
  const [employeesData, setEmployeesData] = useState<IEmployee[]>([]);
  const [statsByPosition, setStatsByPosition] = useState<IPositionStat[]>([]);

  return (
    <div className="min-h-full grid grid-rows-[auto] text-xs md:h-[calc(100vh_-_40px)] md:grid-rows-2 md:grid-cols-2 md:gap-4 md:text-base md:m-5">
      <EmployeeListSection {...{ employeesData, setEmployeesData }} />
      <StatisticSection
        {...{ employeesData, statsByPosition, setStatsByPosition }}
      />
      <GraphSection {...{ statsByPosition }} />
    </div>
  );
}

export default App;
