import React, { FC } from "react";
import { IEmployee } from "../../models/employee";

type RowItemProps = {
  employee: IEmployee;
  onDeleteButtonClick: (id: number) => void;
};

const RowItem: FC<RowItemProps> = ({ employee, onDeleteButtonClick }) => {
  return (
    <div className="grid grid-cols-[2fr_1fr_3fr_1fr] items-center border-b px-4 py-2 hover:bg-slate-100 last:border-none">
      <p className="font-bold mr-2 md:pr-4 md:truncate" title={employee.name}>
        {employee.name}
      </p>
      <p className="mr-2 md:truncate md:pr-4">{employee.age}</p>
      <p className="mr-2 md:truncate md:pr-4" title={employee.position}>
        {employee.position}
      </p>
      <button
        className="bg-red-600 rounded-lg p-2 text-white hover:bg-red-700 active:bg-red-800"
        onClick={() => onDeleteButtonClick(employee.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default RowItem;
