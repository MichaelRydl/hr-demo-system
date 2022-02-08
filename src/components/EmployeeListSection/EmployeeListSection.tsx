import React, { useEffect, useState } from "react";
import axios from "axios";
import RowItem from "../RowItem/RowItem";
import { IEmployee } from "../../models/employee";

const EmployeeListSection = () => {
  const [employeesData, setEmployeesData] = useState<IEmployee[]>([]);
  const [newEmployeeData, setNewEmployeeData] = useState<IEmployee>({
    age: 0,
    id: 0,
    name: "",
    position: "",
  });

  useEffect(() => {
    axios
      .get("http://34.140.193.23/api/employees")
      .then((res) => setEmployeesData(res.data))
      .catch((error) => {
        console.error("Failed to load data.", error);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewEmployeeData({
      ...newEmployeeData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const employee: IEmployee = {
      age: newEmployeeData.age,
      id: newEmployeeData.id,
      name: newEmployeeData.name,
      position: newEmployeeData.position,
    };

    axios
      .post("http://34.140.193.23/api/employees", JSON.stringify(employee), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => setEmployeesData([...employeesData, res.data]));
  };

  const handleDeleteEmployee = (id: number) => {
    axios.delete(`http://34.140.193.23/api/employees/${id}`).then(() => {
      const employees = employeesData.filter((employee) => employee.id !== id);
      setEmployeesData(employees);
    });
  };

  return (
    <div className="h-full bg-gray-200 row-span-3 col-span-2 rounded-lg drop-shadow-xl overflow-auto">
      <div>
        {employeesData.map((employee, i) => (
          <RowItem
            key={`${employee.name}-${i}`}
            {...{ employee }}
            onDeleteButtonClick={handleDeleteEmployee}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Person Age:
          <input type="number" name="age" onChange={handleChange} />
        </label>
        <label>
          Person Position:
          <input type="text" name="position" onChange={handleChange} />
        </label>
        <button type="submit">Přidat zaměstnance</button>
      </form>
    </div>
  );
};

export default EmployeeListSection;
