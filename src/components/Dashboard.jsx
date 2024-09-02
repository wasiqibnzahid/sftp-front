import React, { useEffect, useState } from "react";
import Button from "./Button.jsx";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (productId) {
      navigate(`/product/${productId}`);
    }
  };
  // Search Enter Event listener
  useEffect(() => {
    function handleEnter(event) {
      if (event.key === "Enter") {
        handleSearch();
      }
    }
    const searchInput = document.getElementById("search-input");

    if (searchInput) {
      searchInput.addEventListener("keydown", handleEnter);
    }
    return () => {
      searchInput.removeEventListener("keydown", handleEnter);
    };
  });
  return (
    <>
      <nav>
        <div className="nav-container flex items-center justify-between p-8">
          <div className="img-container">
            <img
              src="/logos/cxn_logo_slogan_galaxy_grey (1).png"
              className="w-[200px]"
            />
          </div>
          <div className="input-container relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-[14px] text-paragraphGrey"></i>
            <input
              id="search-input"
              placeholder="Search..."
              type="search"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="avenir-light mr-3 w-[200px] rounded-md border border-solid border-resposeGrey p-[9px] pl-9 text-paragraphGrey outline-none focus:border-inputActive active:border-inputActive"
            />
            <Button text="Search" onClick={handleSearch}></Button>
          </div>
        </div>
      </nav>
      <div className="dashboard-container">
        <div className="dashboard-heading-container p-8">
          <h1 className="avenir-heavy animate-[fadeLeft_0.5s_ease_0.5s_forwards] text-[48px] opacity-0">
            DashBoard:
          </h1>
        </div>
        <div className="dashboard-cards grid grid-cols-1 gap-6 px-12 sm:grid-cols-2 md:grid-cols-3">
          <div class="dashboard-card bg-white flex animate-[fadeInUp_0.5s_ease_0.5s_forwards] rounded-3xl bg-primaryWhite p-6 opacity-0">
            <div>
              <div class="mb-4 text-3xl">
                <div className="svg-container flex h-16 w-16 items-center justify-center rounded-full bg-[#7A83C6]">
                  <i class="fas fa-dollar-sign s text-primaryWhite"></i>
                </div>
              </div>
              <div class="avenir-heavy mb-2 text-2xl text-primaryGrey">
                Total Sales
              </div>
              <div class="avenir-heavy text-4xl">$15,000</div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="progress relative h-24 w-24 rounded-full">
                <svg className="h-28 w-28">
                  <circle
                    className="translate-x-3 translate-y-4 fill-none stroke-[#7A83C6] stroke-[14px]"
                    style={{
                      strokeDasharray: 200,
                      strokeDashoffset: -30,
                      strokeLinecap: "round",
                    }}
                    cx="38"
                    cy="38"
                    r="36"
                  ></circle>
                </svg>
                <div className="number avenir-light absolute left-0 top-1 flex h-full w-full items-center justify-center text-paragraphGrey">
                  81%
                </div>
              </div>
            </div>
          </div>

          <div class="dashboard-card bg-white flex animate-[fadeInUp_0.5s_ease_0.5s_forwards] rounded-3xl bg-primaryWhite p-6 opacity-0">
            <div>
              <div class="mb-4 text-3xl">
                <div className="svg-container flex h-16 w-16 items-center justify-center rounded-full bg-[#EE7B88]">
                  <i class="fas fa-credit-card text-primaryWhite"></i>
                </div>
              </div>
              <div class="avenir-heavy mb-2 text-nowrap text-2xl text-primaryGrey">
                Total Expenses
              </div>
              <div class="avenir-heavy text-4xl">$5,000</div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="progress relative h-24 w-24 rounded-full">
                <svg className="h-28 w-28">
                  <circle
                    className="translate-x-3 translate-y-4 fill-none stroke-[#7A83C6] stroke-[14px]"
                    style={{
                      strokeDasharray: 160,
                      strokeDashoffset: -30,
                      strokeLinecap: "round",
                    }}
                    cx="38"
                    cy="38"
                    r="36"
                  ></circle>
                </svg>
                <div className="number avenir-light absolute left-0 top-1 flex h-full w-full items-center justify-center text-paragraphGrey">
                  62%
                </div>
              </div>
            </div>
          </div>

          <div class="dashboard-card bg-white flex animate-[fadeInUp_0.5s_ease_0.5s_forwards] rounded-3xl bg-primaryWhite p-6 opacity-0">
            <div>
              <div class="text-yellow-500 mb-4 text-3xl">
                <div className="svg-container flex h-16 w-16 items-center justify-center rounded-full bg-[#41EFBB]">
                  <i class="fas fa-money-bill-wave text-primaryWhite"></i>
                </div>
              </div>
              <div class="avenir-heavy mb-2 text-nowrap text-2xl text-primaryGrey">
                Total Income
              </div>
              <div class="avenir-heavy text-4xl">$10,000</div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="progress relative h-24 w-24 rounded-full">
                <svg className="h-28 w-28">
                  <circle
                    className="translate-x-3 translate-y-4 fill-none stroke-[#7A83C6] stroke-[14px]"
                    style={{
                      strokeDasharray: 81,
                      strokeDashoffset: 10,
                      strokeLinecap: "round",
                    }}
                    cx="38"
                    cy="38"
                    r="36"
                  ></circle>
                </svg>
                <div className="number avenir-light absolute left-0 top-1 flex h-full w-full items-center justify-center text-paragraphGrey">
                  45%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-chat-orders-container grid p-8">
          <div className="dashboard-chart avenir-heavy text-[32px]">
            <h1 className="animate-[fadeLeft_0.5s_ease_1s_forwards] opacity-0">
              Revenue Chart:
            </h1>
            <div className="chart-contianer animate-[fadeInUp_0.5s_ease_1s_forwards] opacity-0">
              <Line
                data={{
                  labels: [
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                  ],
                  datasets: [
                    {
                      label: "Revenue",
                      data: [2000, 4000, 5000, 3000, 4000, 6000],
                    },
                  ],
                }}
                options={{
                  title: {
                    display: true,
                    text: "Monthly Revenue",
                  },
                  backgroundColor: "#7A83C6",
                  borderColor: "#7A83C6",
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                }}
              />
            </div>
          </div>
          <div className="new-products">
            <h1 className="dashboard-chart avenir-heavy my-8 ml-10 mt-12 animate-[fadeLeft_0.5s_ease_1s_forwards] text-[38px] opacity-0">
              New Arrivals:
            </h1>
            <div className="new-arrival-card-container flex flex-wrap justify-center gap-10">
              <div class="new-arrival-card bg-white w-[300px] animate-[fadeInUp_0.5s_ease_1s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
                <img
                  src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=612x612&w=0&k=20&c=2KKjX9tXo0ibmBaPlflnJNdtZ-J77wrprVStaPL2Gj4="
                  alt="Product Image"
                  class="h-48 w-full object-cover"
                />
                <div class="p-4">
                  <h2 class="avenir-medium mb-2 text-[22px]">Product Title</h2>
                  <p class="avenir-heavy mb-2 text-[18px]">$299</p>
                  <p class="avernir-light">
                    This is a brief description of the product. It provides key
                    features and benefits.
                  </p>
                </div>
              </div>
              <div class="new-arrival-card bg-white w-[300px] animate-[fadeInUp_0.5s_ease_1s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
                <img
                  src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=612x612&w=0&k=20&c=2KKjX9tXo0ibmBaPlflnJNdtZ-J77wrprVStaPL2Gj4="
                  alt="Product Image"
                  class="h-48 w-full object-cover"
                />
                <div class="p-4">
                  <h2 class="avenir-medium mb-2 text-[22px]">Product Title</h2>
                  <p class="avenir-heavy mb-2 text-[18px]">$299</p>
                  <p class="avernir-light">
                    This is a brief description of the product. It provides key
                    features and benefits.
                  </p>
                </div>
              </div>
              <div class="new-arrival-card bg-white w-[300px] animate-[fadeInUp_0.5s_ease_1s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
                <img
                  src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=612x612&w=0&k=20&c=2KKjX9tXo0ibmBaPlflnJNdtZ-J77wrprVStaPL2Gj4="
                  alt="Product Image"
                  class="h-48 w-full object-cover"
                />
                <div class="p-4">
                  <h2 class="avenir-medium mb-2 text-[22px]">Product Title</h2>
                  <p class="avenir-heavy mb-2 text-[18px]">$299</p>
                  <p class="avernir-light">
                    This is a brief description of the product. It provides key
                    features and benefits.
                  </p>
                </div>
              </div>
              <div class="new-arrival-card bg-white w-[300px] animate-[fadeInUp_0.5s_ease_1s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
                <img
                  src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=612x612&w=0&k=20&c=2KKjX9tXo0ibmBaPlflnJNdtZ-J77wrprVStaPL2Gj4="
                  alt="Product Image"
                  class="h-48 w-full object-cover"
                />
                <div class="p-4">
                  <h2 class="mb-2 text-xl">Product Title</h2>
                  <p class="text-gray-500 mb-2">$299</p>
                  <p class="text-gray-700">
                    This is a brief description of the product. It provides key
                    features and benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
