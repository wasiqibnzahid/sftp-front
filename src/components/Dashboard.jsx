import React, { useState } from "react";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (productId) {
      navigate(`/product/${productId}`);
    }
  };
  return (
    <>
      <nav>
        <div className="nav-container flex justify-between p-8">
          <div className="img-container">
            <img
              src="/logos/cxn_logo_slogan_galaxy_grey (1).png"
              className="w-[200px]"
            />
          </div>
          <div className="input-container">
            <input
              type="search"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="mr-3 p-[9px] w-[200px] border-resposeGrey border-solid border rounded-md focus:border-inputActive active:border-inputActive outline-none avenir-light text-paragraphGrey"
            />
            <Button text="Search" onClick={handleSearch}></Button>
          </div>
        </div>
      </nav>
      <div>
        <h1 className="avenir-heavy text-[80px]">DashBoard Page</h1>
      </div>
    </>
  );
}
