import React from "react";

function Table({ thead, children }) {
  return (
    <div>
      <table className="w-full  text-left text-gray-800 bg-white">
        <thead className="text-gray-900  ">
          <tr className="border-b">
            {thead.map((val, i) => {
              return (
                <th scope="col" className="px-6 py-4">
                  {val.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
