import React, { useState } from "react";
import EmployeeListSection from "./components/EmployeeListSection/EmployeeListSection";
import GraphSection from "./components/GraphSection/GraphSection";
import StatisticSection from "./components/StatisticSection/StatisticSection";
import { IEmployee, IPositionStat } from "./models/employee";

function App() {
  const [employeesData, setEmployeesData] = useState<IEmployee[]>([]);
  const [statsByPosition, setStatsByPosition] = useState<IPositionStat[]>([]);

  return (
    <div className="h-[calc(100vh_-_40px)] m-5 grid grid-cols-2 grid-rows-2 gap-4">
      <EmployeeListSection {...{ employeesData, setEmployeesData }} />
      <StatisticSection
        {...{ employeesData, statsByPosition, setStatsByPosition }}
      />
      <GraphSection {...{ statsByPosition }} />
    </div>
  );
}

export default App;
