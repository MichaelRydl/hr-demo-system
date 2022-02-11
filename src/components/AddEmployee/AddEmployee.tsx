import React, {
  useState,
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
} from "react";
import { IEmployee, Position } from "../../models/employee";
import { client } from "../../backend/client";

type AddEmployeeProps = {
  employeesData: IEmployee[];
  setEmployeesData: Dispatch<SetStateAction<IEmployee[]>>;
  scrollToNewItem: () => void;
};

const AddEmployee: FC<AddEmployeeProps> = ({
  employeesData,
  setEmployeesData,
  scrollToNewItem,
}) => {
  const [newEmployee, setNewEmployee] = useState<IEmployee>({
    age: 0,
    id: 0,
    name: "",
    position: Position.BackendDeveloper,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (newEmployee.name.length <= 0) {
      alert("Name must contain at least 1 character.");
      return;
    }

    if (newEmployee.age <= 0) {
      alert("Age must be a positive number.");
      return;
    }

    const employee: IEmployee = {
      age: newEmployee.age,
      id: newEmployee.id,
      name: newEmployee.name,
      position: newEmployee.position,
    };

    client
      .post("/employees", employee)
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

    scrollToNewItem();
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header mb-0">
          <button
            className="
            relative
            flex
            items-center
            w-full
            p-4
            font-bold
            text-base text-blue-500 text-left
            bg-gray-200
            rounded-none
            transition
            hover:bg-gray-300
            hover:text-blue-600
          "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            New Employee +
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <form
            className="h-full p-4 font-bold bg-slate-100"
            onSubmit={handleSubmit}
          >
            <label className="grid items-center p-2 md:grid-cols-2">
              <p className="mb-2 md:mb-0">Employee Name:</p>
              <input
                className="rounded-lg p-3 md:py-1"
                value={newEmployee.name}
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
            </label>
            <label className="grid items-center p-2 md:grid-cols-2">
              <p className="mb-2 md:mb-0">Employee Age:</p>
              <input
                className="rounded-lg p-3 md:py-1"
                value={newEmployee.age === 0 ? "" : newEmployee.age}
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChange}
              />
            </label>
            <label className="grid items-center p-2 md:grid-cols-2">
              <p className="mb-2 md:mb-0">Employee Position:</p>
              <select
                className="rounded-lg p-3 md:py-1"
                name="position"
                value={newEmployee.position}
                onChange={handleChange}
              >
                <option value={Position.BackendDeveloper}>
                  Backend Developer
                </option>
                <option value={Position.CEO}>CEO</option>
                <option value={Position.FrontendDeveloper}>
                  Frontend Developer
                </option>
                <option value={Position.ProductOwner}>Product Owner</option>
                <option value={Position.ScrumMaster}>Scrum Master</option>
              </select>
            </label>
            <button
              type="submit"
              className="w-full mt-4 p-2 bg-blue-600 font-bold text-white text-white rounded-lg rounded-lg hover:bg-blue-700 active:bg-blue-800"
            >
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
