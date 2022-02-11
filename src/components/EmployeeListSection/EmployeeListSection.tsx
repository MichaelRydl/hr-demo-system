import React, { useEffect, useRef, Dispatch, FC, SetStateAction } from "react";
import RowItem from "../RowItem/RowItem";
import AddEmployee from "../AddEmployee/AddEmployee";
import { IEmployee } from "../../models/employee";
import { client } from "../../backend/client";

type EmployeeListSectionProps = {
  employeesData: IEmployee[];
  setEmployeesData: Dispatch<SetStateAction<IEmployee[]>>;
};

const EmployeeListSection: FC<EmployeeListSectionProps> = ({
  employeesData,
  setEmployeesData,
}) => {
  const rowItemRef = useRef<null | HTMLDivElement>(null);

  const scrollToNewItem = () => {
    if (rowItemRef)
      rowItemRef.current?.scroll({
        top: rowItemRef.current?.scrollHeight,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    client
      .get("/employees")
      .then((res) => setEmployeesData(res.data))
      .catch((error) => {
        console.error("Failed to load data.", error);
      });
  }, [setEmployeesData]);

  const handleDeleteEmployee = (id: number) => {
    client.delete(`/employees/${id}`).then(() => {
      const employees = employeesData.filter((employee) => employee.id !== id);
      setEmployeesData(employees);
    });
  };

  return (
    <div className="max-h-[90vh] grid grid-rows-[60px_auto_min-content] items-center border overflow-auto md:max-h-full md:row-span-3 md:col-span-1">
      <div className="h-full sticky top-0 bg-blue-600 text-white text-base font-bold text-center border-b p-2 md:text-lg">
        <h1>Employees List</h1>
        <p className="text-xs">(name, age, position)</p>
      </div>
      <div ref={rowItemRef} className="h-full border-b overflow-auto">
        {employeesData.map((employee, i) => (
          <RowItem
            key={`${employee.name}-${i}`}
            {...{ employee }}
            onDeleteButtonClick={handleDeleteEmployee}
          />
        ))}
      </div>
      <AddEmployee {...{ employeesData, setEmployeesData, scrollToNewItem }} />
    </div>
  );
};

export default EmployeeListSection;
