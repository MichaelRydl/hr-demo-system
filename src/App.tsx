import React from "react";
import EmployeeListSection from "./components/EmployeeListSection/EmployeeListSection";
import GraphSection from "./components/GraphSection/GraphSection";
import StatisticSection from "./components/StatisticSection/StatisticSection";

function App() {
  return (
    <div className="h-[calc(100vh_-_40px)] m-5 grid grid-cols-4 grid-rows-2 gap-4">
      <EmployeeListSection />
      <StatisticSection />
      <GraphSection />
    </div>
  );
}

export default App;
