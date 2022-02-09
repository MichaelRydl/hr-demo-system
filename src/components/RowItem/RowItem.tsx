import React from "react";
import { IEmployee } from "../../models/employee";

type RowItemProps = {
  employee: IEmployee;
  onDeleteButtonClick: (id: number) => void;
};

const RowItem: React.FC<RowItemProps> = ({ employee, onDeleteButtonClick }) => {
  return (
    <div className="grid grid-cols-[2fr_1fr_3fr_1fr] items-center border-b px-4 py-2 hover:bg-slate-100 last:border-none">
      <p className="font-bold truncate">{employee.name}</p>
      <p className="truncate">{employee.age}</p>
      <p className="truncate">{employee.position}</p>
      <button
        className="bg-red-500 rounded-lg p-2 hover:bg-red-600 active:bg-red-700 focus:outline-none text-white"
        onClick={() => onDeleteButtonClick(employee.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default RowItem;
