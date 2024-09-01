import React from "react";

export default function ProductTable({ data }) {
  return (
    <table className="divide-gray-200 mb-10 mt-4 min-w-full divide-y text-left">
      <thead className="bg-gray-50 text-left">
        <tr>
          <th className="avenir-heavy text-gray-500 w-1/3 px-6 py-3 text-center text-[19px] text-xs font-medium uppercase tracking-wider">
            Company:
          </th>
          <th className="avenir-heavy text-gray-500 w-1/3 px-6 py-3 text-center text-[19px] text-xs font-medium uppercase tracking-wider">
            Stock:
          </th>
          <th className="avenir-heavy text-gray-500 w-1/3 px-6 py-3 text-center text-[19px] text-xs font-medium uppercase tracking-wider">
            Price:
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-gray-200 divide-y">
        {data.map((item, index) => (
          <tr key={index}>
            <td className="avenir-light text-gray-900 w-1/3 whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
              {item.company}
            </td>
            <td className="avenir-light text-gray-500 w-1/3 whitespace-nowrap px-6 py-4 text-center text-sm">
              {item.stock}
            </td>
            <td className="avenir-light text-gray-500 w-1/3 whitespace-nowrap px-6 py-4 text-center text-sm">
              {item.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
