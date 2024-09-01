import React, { useEffect, useState } from "react";
import Button from "./Button.jsx";
import { useNavigate, useParams } from "react-router-dom";
import ProductTable from "./ProductTable.jsx";
export default function Product() {
  const [productId, setProductId] = useState("");
  const [animationTrigger, setAnimationTrigger] = useState("");
  const inStock = true;
  // Navigate
  const navigate = useNavigate();
  const handleSearch = () => {
    if (productId) {
      navigate(`/product/${productId}`);
    }
  };

  //   Get Product Id from URL

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  //   Fetch Data from json
  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch("/db.json");
      const data = await response.json();
      const product = data.find((item) => item.id === id);
      setProduct(product);
    };

    fetchProductDetails();
  }, [id]);
  console.log(product);
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
  // Animation Triggerer
  useEffect(() => {
    if (product) {
      setAnimationTrigger();
    }
  });
  const exampleData = [
    { company: "Company A", stock: 150, price: "$20.00" },
    { company: "Company B", stock: 200, price: "$18.50" },
  ];
  return (
    <>
      <nav>
        <div className="nav-container flex justify-between p-8">
          <div className="img-container">
            <a href="/">
              <img
                src="/logos/cxn_logo_slogan_galaxy_grey (1).png"
                className="w-[200px]"
              />
            </a>
          </div>
          <div className="input-container">
            <input
              id="search-input"
              type="search"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="avenir-light mr-3 w-[200px] rounded-md border border-solid border-resposeGrey p-[9px] text-paragraphGrey outline-none focus:border-inputActive active:border-inputActive"
            />
            <Button text="Search"></Button>
          </div>
        </div>
      </nav>
      {product ? (
        <div className="product-page-container px-12" key={product.id}>
          <h1 className="avenir-heavy mb-4 text-[48px]">Product Details:</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="img-container animate-[fadeInUp_0.5s_ease_forwards] border border-solid border-paragraphGrey">
              <img src={product.image} className="w-full" />
            </div>
            <div className="details flex animate-[fadeInUp_0.5s_ease_0.5s_forwards] flex-col justify-center opacity-0">
              <div className="product-category avenir-light text-[22px] text-paragraphGrey text-opacity-85">
                {product.category}
              </div>
              <div className="product-title avenir-heavy text-[32px]">
                {product.title}
              </div>
              <div className="product-discription mt-4">
                <p className="avenir-light text-[18px] text-paragraphGrey">
                  {product.description}
                </p>
              </div>
              <div
                className={`product-stock avenir-heavy mt-2 text-[18px] ${
                  inStock ? "text-correctGreen" : "text-alertRed"
                }`}
              >
                {inStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </div>
          <div className="product-providers avenir-medium mt-10 animate-[fadeLeft_0.5s_ease_1s_forwards] text-[25px] opacity-0">
            <span className="avenir-heavy">
              Product Providers: <br />
            </span>
            <ProductTable data={exampleData} />
          </div>
        </div>
      ) : (
        <div>
          <h1 className="avenir-heavy mb-4 text-[48px]">Product Details:</h1>
          <div className="flex items-center justify-center">
            <h1 className="avenir-heavy mt-28 text-[48px]">Loading...</h1>
          </div>
        </div>
      )}
    </>
  );
}
