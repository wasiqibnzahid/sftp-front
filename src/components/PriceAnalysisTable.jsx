import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const PriceAnalysisTable = ({ products }) => {
  const [searchId, setSearchId] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(null);
  let inputPriceAnalysis;

  // Enter key listener
  useEffect(() => {
    inputPriceAnalysis = document.getElementById("input-price-analysis");

    function handleEnter(event) {
      if (event.key === "Enter") {
        handleSearch();
      }
    }
    if (inputPriceAnalysis) {
      inputPriceAnalysis.addEventListener("keydown", handleEnter);
    }
    return () => {
      inputPriceAnalysis.removeEventListener("keydown", handleEnter);
    };
  }, []);
  const handleSearch = () => {
    inputPriceAnalysis = document.getElementById("input-price-analysis");
    setSearchId(inputPriceAnalysis.value);
  };

  //   Product Search
  useEffect(() => {
    if (searchId) {
      const product = products.find((p) => p.id === searchId);
      setFilteredProduct(product);
    } else {
      setFilteredProduct(null);
    }
  }, [searchId, products]);

  //   ChartData
  const chartData = {
    labels: filteredProduct?.companies.map((company) => company.name),
    datasets: [
      {
        label: `${filteredProduct?.title} Prices`,
        data: filteredProduct?.companies.map((company) => company.price),
        backgroundColor: "#5f00c4",
      },
    ],
  };

  return (
    <>
      <h1 className="avenir-heavy mb-4 animate-[fadeLeft_0.5s_ease_forwards] pl-8 text-[38px] text-primaryGrey opacity-0">
        Price Analysis:
      </h1>
      <div className="p-4">
        <div className="price-analysis-container rounded-lg bg-[#222430] p-4">
          <div className="mb-4 flex justify-center pt-5">
            <div className="input-container relative ml-4 animate-[fadeLeft_0.5s_ease_forwards] opacity-0">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-[14px] text-[#6B7280]"></i>
              <input
                id="input-price-analysis"
                placeholder="Search a product..."
                type="search"
                className="mr-3 w-[200px] rounded-md border border-solid border-[#6B7280] p-[9px] pl-9 text-[#6B7280] outline-none focus:border-[#3B82F6]"
              />
              <Button text="Search" onClick={handleSearch} />
            </div>
          </div>

          {filteredProduct ? (
            <div key={filteredProduct.id} className="min-h-[850px] p-8">
              <h1 className="Price-chart avenir-heavy mb-4 animate-[fadeLeft_0.5s_ease_forwards] text-[38px] text-primaryWhite opacity-0">
                {filteredProduct.title}:
              </h1>
              <h1 className="Price-chart avenir-heavy mb-4 mt-8 animate-[fadeLeft_0.5s_ease_forwards] text-[38px] text-primaryWhite opacity-0">
                Price Analyses Table:
              </h1>
              <table className="w-full table-auto animate-[fadeInUp_0.7s_ease_0.4s_forwards] text-center opacity-0">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-[#FFFFFF]">Company</th>
                    <th className="px-4 py-2 text-[#FFFFFF]">Stock</th>
                    <th className="px-4 py-2 text-[#FFFFFF]">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProduct.companies.map((company, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 text-[#FFFFFF]">
                        {company.name}
                      </td>
                      <td className="border px-4 py-2 text-primaryWhite">
                        {company.stock}
                      </td>
                      <td className="border px-4 py-2 text-[#FFFFFF]">
                        <p className="text-[#00ad6e]">
                          ${company.price ? company.price.toFixed(2) : "N/A"}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 h-96">
                <h1 className="Price-chart avenir-heavy mb-4 mt-8 animate-[fadeLeft_0.5s_ease_0.7s_forwards] text-[38px] text-primaryWhite opacity-0">
                  Price Analyses Chart:
                </h1>
                <div className="bar-container h-full animate-[fadeInUp_0.5s_ease_0.7s_forwards] opacity-0">
                  <Bar
                    data={chartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      borderColor: "#FFF",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <p className="flex animate-[fadeLeft_0.5s_ease_forwards] justify-center text-[#6B7280] opacity-0">
              Search for a valid Product
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PriceAnalysisTable;
