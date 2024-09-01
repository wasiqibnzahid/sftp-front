import React, { useEffect, useState } from "react";
import Button from "./Button.jsx";
import { useParams } from "react-router-dom";
export default function Product() {
  const [productId, setProductId] = useState("");
  const inStock = true;
  const companiesStock = ["Company 1", "Company 2", "Company 3", "Company 4"];
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
  function handleCompanyList(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1) {
        string = string + ` and ${array[i]}`;
      } else {
        string = string + ` ${array[i]},`;
      }
    }
    return string;
  }
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
              type="search"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="mr-3 p-[9px] w-[200px] border-resposeGrey border-solid border rounded-md focus:border-inputActive active:border-inputActive outline-none avenir-light text-paragraphGrey"
            />
            <Button text="Search"></Button>
          </div>
        </div>
      </nav>
      {product ? (
        <div className="product-page-container px-12">
          <h1 className="text-[48px] avenir-heavy mb-4">Product Details:</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="img-container border border-solid border-paragraphGrey">
              <img src={product.image} />
            </div>
            <div className="details flex justify-center flex-col">
              <div className="product-category text-[22px] avenir-light text-paragraphGrey text-opacity-85">
                {product.category}
              </div>
              <div className="product-title avenir-heavy text-[32px]">
                {product.title}
              </div>
              <div className="product-discription mt-4">
                <p className="avenir-light text-paragraphGrey text-[18px]">
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
              <div className="product-price avenir-heavy text-[28px] text-primaryGrey">
                Price : {product.price}
              </div>
            </div>
          </div>
          <div className="product-providers mt-10 avenir-medium text-[25px]">
            <span className="avenir-heavy">
              Product Providers: <br />
            </span>
            {handleCompanyList(product.companies)}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
