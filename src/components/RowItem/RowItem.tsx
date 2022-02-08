import React from "react";
import { IEmployee } from "../../models/employee";

type RowItemProps = {
  employee: IEmployee;
  onDeleteButtonClick: (id: number) => void;
};

const RowItem: React.FC<RowItemProps> = ({ employee, onDeleteButtonClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid lightgrey",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 30%)",
          justifyItems: "center",
          padding: "12px 0",
        }}
      >
        <p>{employee.name}</p>
        <p>{employee.age}</p>
        <p>{employee.position}</p>
      </div>
      <button
        style={{ width: "20%" }}
        className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none text-white"
        onClick={() => onDeleteButtonClick(employee.id)}
      >
        Smazat
      </button>
    </div>
  );
};

export default RowItem;
