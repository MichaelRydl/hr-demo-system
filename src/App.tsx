import React from "react";
import EmployeeListSection from "./components/EmployeeListSection/EmployeeListSection";
import GraphSection from "./components/GraphSection/GraphSection";
import StatisticSection from "./components/StatisticSection/StatisticSection";

function App() {
  return (
    <div className="h-screen grid grid-cols-3 grid-rows-2 gap-4">
      <EmployeeListSection />
      <StatisticSection />
      <GraphSection />
    </div>
  );
}

export default App;
