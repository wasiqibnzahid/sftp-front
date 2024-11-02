import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IProduct, searchProducts } from "../services/api.ts";

export default function Search() {
  const { text } = useParams();
  const location = useLocation();
  const [productId, setProductId] = useState(text + (location.hash || ""));
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSearch = () => {
    if (productId) {
      navigate(`/search/${productId}`);
    }
  };
  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      const idToUse = encodeURIComponent(text! + (location.hash || ""));
      const data = await searchProducts(idToUse).catch((e) => []);
      setLoading(false);
      const products = data;
      setProducts(products);
    };
    fetchProductDetails();
  }, [text, location.hash]);

  return (
    <>
      <Navbar
        productId={productId}
        setProductId={setProductId}
        handleSearch={handleSearch}
      />
      <div className="dashboard-container">
        <div className="dashboard-chat-orders-container grid p-8">
          <div className="new-products">
            <div className="flex items-center justify-center p-8">
              <h2 className="about-us-heading avenir-heavy relative mb-8 w-max animate-[fadeLeft_0.5s_ease_forwards] px-8 text-[48px] opacity-0 before:absolute before:-bottom-1 before:left-0 before:block before:h-[5px] before:w-full before:rounded-full before:bg-[#7A83C6] before:content-['']">
                Results
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="new-arrival-card-container relative grid grid-cols-4 items-center justify-start gap-10">
                {products.length > 0 && !loading ? (
                  products.map((prod) => (
                    <Link
                      to={`/product/${prod.product_id}`}
                      className="new-arrival-card bg-white h-full animate-[fadeInUp_0.5s_ease_0.5s_forwards] cursor-pointer overflow-hidden rounded-lg opacity-0 shadow-md"
                    >
                      <img
                        src={
                          prod?.img_url ||
                          "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
                        }
                        alt="Product Image"
                        style={prod?.img_url ? {} : { background: "#edebed" }}
                        className="h-[60%] w-full max-w-[100%] object-contain"
                      />
                      <div className="p-4">
                        <h2 className="avenir-medium mb-2 text-[22px]">
                          {prod.product_id}
                        </h2>
                        <p className="avernir-light line-clamp-3">
                          {prod.description}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : loading ? (
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <div
                      className="h-[50px] w-[50px] animate-spin rounded-[50%]"
                      style={{
                        border: "solid #ccc",
                        borderLeftColor: "transparent",
                      }}
                    ></div>
                  </div>
                ) : (
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-nowrap">
                    No Products Found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
