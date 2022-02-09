import React from "react";
import { IEmployee } from "../../models/employee";

type RowItemProps = {
  employee: IEmployee;
  onDeleteButtonClick: (id: number) => void;
};

const RowItem: React.FC<RowItemProps> = ({ employee, onDeleteButtonClick }) => {
  return (
    <div className="flex justify-between border-b last:border-none">
      <div className="w-5/6 grid grid-cols-[2fr_1fr_3fr] justify-items-center p-2 hover:bg-slate-100">
        <p className="font-bold">{employee.name}</p>
        <p>{employee.age}</p>
        <p>{employee.position}</p>
      </div>
      <button
        className="w-1/6 bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none text-white"
        onClick={() => onDeleteButtonClick(employee.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default RowItem;
