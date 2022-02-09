import axios from "axios";
import React, { useState } from "react";
import { IEmployee, Position } from "../../models/employee";

type AddEmployeeSectionProps = {
  employeesData: IEmployee[];
  setEmployeesData: React.Dispatch<React.SetStateAction<IEmployee[]>>;
};

const AddEmployeeSection: React.FC<AddEmployeeSectionProps> = ({
  employeesData,
  setEmployeesData,
}) => {
  const [newEmployee, setNewEmployee] = useState<IEmployee>({
    age: 0,
    id: 0,
    name: "",
    position: Position.BackendDeveloper,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const employee: IEmployee = {
      age: newEmployee.age,
      id: newEmployee.id,
      name: newEmployee.name,
      position: newEmployee.position,
    };

    axios
      .post("http://34.140.193.23/api/employees", employee)
      .then((res) => setEmployeesData([...employeesData, res.data]))
      .then(() =>
        setNewEmployee({
          age: 0,
          id: 0,
          name: "",
          position: Position.BackendDeveloper,
        })
      )
      .catch((error) => {
        console.log("Error when posting data:", error);
      });
  };

  return (
    <form className="h-full p-4 font-bold" onSubmit={handleSubmit}>
      <label className="grid grid-cols-2 p-2">
        Employee Name:
        <input
          className="rounded-lg px-3 py-1"
          value={newEmployee.name}
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
      </label>
      <label className="grid grid-cols-2 p-2">
        Employee Age:
        <input
          className="rounded-lg px-3 py-1"
          value={newEmployee.age}
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />
      </label>
      <label className="grid grid-cols-2 p-2">
        Employee position:
        <select
          className="rounded-lg px-3 py-1"
          name="position"
          value={newEmployee.position}
          onChange={handleChange}
        >
          <option value={Position.BackendDeveloper}>Backend Developer</option>
          <option value={Position.CEO}>CEO</option>
          <option value={Position.FrontendDeveloper}>Frontend Developer</option>
          <option value={Position.ProductOwner}>Product Owner</option>
          <option value={Position.ScrumMaster}>Scrum Master</option>
        </select>
      </label>
      <button
        type="submit"
        className="w-full mt-4 p-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 focus:outline-none text-white rounded-lg"
      >
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployeeSection;
