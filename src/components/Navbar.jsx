import React from "react";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";
export default function Navbar({ productId, setProductId, handleSearch }) {
  const navigate = useNavigate();
  function handleEnter(event) {
    if (event.key === "Enter") {
      handleSearch();
      setProductId("")
    }
  }
  return (
    <nav className="w-full">
      <div className="nav-container flex items-center justify-between p-8">
        <div className="img-container">
          <img
            src="/logos/cxn_logo_slogan_galaxy_grey (1).png"
            className="nav-img static w-[200px] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="input-container relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-[14px] text-paragraphGrey"></i>
          <input
            id="search-input"
            placeholder="Search..."
            type="search"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            onKeyDown={handleEnter}
            className="avenir-light mr-3 w-[200px] rounded-md border border-solid border-resposeGrey p-[9px] pl-9 text-paragraphGrey outline-none focus:border-inputActive active:border-inputActive"
          />
          <Button text="Search" onClick={handleSearch}></Button>
        </div>
      </div>
    </nav>
  );
}
