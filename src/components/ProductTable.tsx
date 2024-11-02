import React, { useMemo, useState } from "react";
import { IProduct } from "../services/api";

const ProductTable: React.FC<{ data: IProduct[] }> = ({
  data: dataProp = [],
}) => {
  const [sort, setSort] = useState({
    sortKey: "company",
    sortDir: "asc" as "asc" | "desc",
  });

  function changeKey(key: keyof IProduct) {
    const newState = { ...sort };
    if (key === sort.sortKey) {
      newState.sortDir = newState.sortDir === "asc" ? "desc" : "asc";
    } else {
      newState.sortKey = key;
      newState.sortDir = "asc";
    }
    setSort(newState);
  }
  const renderSortIcon = (key: string) => {
    if (sort.sortKey === key) {
      return sort.sortDir === "asc" ? "▲" : "▼";
    }
    return "";
  };
  const data = useMemo(() => {
    return [...dataProp].sort((a, b) => {
      const aValue = a?.[sort.sortKey as keyof IProduct];
      const bValue = b?.[sort.sortKey as keyof IProduct];

      const aVal = aValue || "";
      const bVal = bValue || "";

      if (sort.sortDir === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }, [dataProp, sort]);
  return (
    <table className="divide-gray-200 mb-10 mt-4 min-w-full divide-y text-left">
      <thead className="bg-gray-50 text-left">
        <tr>
          <th
            onClick={() => changeKey("company")}
            className="avenir-heavy text-gray-500 w-1/5 cursor-pointer px-6 py-3 text-center text-[19px] text-xs font-medium uppercase tracking-wider"
          >
            Company {renderSortIcon("company")}
          </th>
          <th
            onClick={() => changeKey("available_quantity")}
            className="avenir-heavy text-gray-500 w-1/5 cursor-pointer px-6 py-3 text-center text-[19px] text-xs font-medium uppercase tracking-wider"
          >
            Stock {renderSortIcon("available_quantity")}
          </th>
          <th
            onClick={() => changeKey("available_next_quantity")}
            className="avenir-heavy text-gray-500 w-1/5 cursor-pointer px-6 py-3 text-center text-[19px] text-xs font-medium uppercase tracking-wider"
          >
            Next Available Quantity {renderSortIcon("available_next_quantity")}
          </th>
          <th
            onClick={() => changeKey("available_next_date")}
            className="avenir-heavy text-gray-500 w-1/5 cursor-pointer px-6 py-3 text-center text-[19px] text-xs font-medium uppercase tracking-wider"
          >
            Next Available Date {renderSortIcon("available_next_date")}
          </th>
          <th
            onClick={() => changeKey("price")}
            className="avenir-heavy text-gray-500 w-1/5 cursor-pointer px-6 py-3 text-center text-[19px] text-xs font-medium uppercase tracking-wider"
          >
            Price {renderSortIcon("price")}
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-gray-200 divide-y">
        {data.map((item, index) => (
          <tr key={index}>
            <td className="avenir-light text-gray-900 w-1/5 whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
              {item.company}
            </td>
            <td className="avenir-light text-gray-500 w-1/5 whitespace-nowrap px-6 py-4 text-center text-sm">
              {item.available_quantity}
            </td>
            <td className="avenir-light text-gray-500 w-1/5 whitespace-nowrap px-6 py-4 text-center text-sm">
              {item?.available_next_quantity ?? "-"}
            </td>
            <td className="avenir-light text-gray-500 w-1/5 whitespace-nowrap px-6 py-4 text-center text-sm">
              {item?.available_next_date?.replaceAll(".", "-") || "-"}
            </td>
            <td className="avenir-light text-gray-500 w-1/5 whitespace-nowrap px-6 py-4 text-center text-sm">
              {item?.price ? `€${item?.price}` : "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProductTable;
