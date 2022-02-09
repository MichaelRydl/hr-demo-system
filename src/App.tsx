import React, { useState } from "react";
import EmployeeListSection from "./components/EmployeeListSection/EmployeeListSection";
import GraphSection from "./components/GraphSection/GraphSection";
import StatisticSection from "./components/StatisticSection/StatisticSection";
import { IEmployee } from "./models/employee";

function App() {
  const [employeesData, setEmployeesData] = useState<IEmployee[]>([]);

  return (
    <div className="h-[calc(100vh_-_40px)] m-5 grid grid-cols-2 grid-rows-2 gap-4">
      <EmployeeListSection {...{ employeesData, setEmployeesData }} />
      <StatisticSection {...{ employeesData }} />
      <GraphSection />
    </div>
  );
}

export default App;
