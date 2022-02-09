import React, { useEffect } from "react";
import axios from "axios";
import RowItem from "../RowItem/RowItem";
import AddEmployee from "../AddEmployee/AddEmployee";
import { IEmployee } from "../../models/employee";

type EmployeeListSectionProps = {
  employeesData: IEmployee[];
  setEmployeesData: React.Dispatch<React.SetStateAction<IEmployee[]>>;
};

const EmployeeListSection: React.FC<EmployeeListSectionProps> = ({
  employeesData,
  setEmployeesData,
}) => {
  useEffect(() => {
    axios
      .get("http://34.140.193.23/api/employees")
      .then((res) => setEmployeesData(res.data))
      .catch((error) => {
        console.error("Failed to load data.", error);
      });
  }, [setEmployeesData]);

  const handleDeleteEmployee = (id: number) => {
    axios.delete(`http://34.140.193.23/api/employees/${id}`).then(() => {
      const employees = employeesData.filter((employee) => employee.id !== id);
      setEmployeesData(employees);
    });
  };

  return (
    <div className="grid grid-rows-[60px_auto_min-content] items-center border row-span-3 col-span-1 overflow-auto">
      <div className="sticky top-0 bg-blue-500 text-white text-lg font-bold text-center border-b p-2">
        <h1>Employees List</h1>
        <p className="text-xs">(name, age, position)</p>
      </div>
      <div className="h-full border-b overflow-auto">
        {employeesData.map((employee, i) => (
          <RowItem
            key={`${employee.name}-${i}`}
            {...{ employee }}
            onDeleteButtonClick={handleDeleteEmployee}
          />
        ))}
      </div>
      <div className="bg-slate-100 border-t">
        <AddEmployee {...{ employeesData, setEmployeesData }} />
      </div>
    </div>
  );
};

export default EmployeeListSection;
