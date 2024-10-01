import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.tsx";
import { Link, useNavigate } from "react-router-dom";
import { fetchDashboardProducts, IProduct } from "../services/api.ts";

export default function Dashboard() {
  const [productId, setProductId] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSearch = () => {
    if (productId) {
      navigate(`/product/${productId}`);
    }
  };
  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      const data = await fetchDashboardProducts().catch((e) => []);
      setLoading(false);
      const products = data;
      setProducts(products);
    };
    fetchProductDetails();
  }, []);

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
                Products
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
                        src={prod.img_url}
                        alt="Product Image"
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
                  <div className="absolute text-nowrap left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    No Products Found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-contianer mt-8 p-8 pb-16 pt-0">
          <div className="mb-12 flex flex-col items-center justify-center text-center">
            <h2 className="about-us-heading avenir-heavy relative mb-8 w-max animate-[fadeLeft_0.5s_ease_forwards] px-8 text-[48px] opacity-0 before:absolute before:-bottom-1 before:left-0 before:block before:h-[5px] before:w-full before:rounded-full before:bg-[#7A83C6] before:content-['']">
              About Us
            </h2>

            <p className="avenir-heavy mt-4 animate-[fadeLeft_0.5s_ease_forwards] text-[38px] text-primaryGrey opacity-0">
              <i>"Transforming technology into your competitive </i> edge."
            </p>
            <p className="avenir-light mt-4 animate-[fadeLeft_0.5s_ease_forwards] text-[18px] text-primaryGrey opacity-0">
              Welcome to ConXioN! We specialize in providing top-quality
              products and services tailored to <br /> meet your needs. Our
              mission is to deliver excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="dashboard-card flex animate-[fadeInUp_0.5s_ease_1s_forwards] flex-col items-center justify-between rounded-lg bg-[#7A83C6] p-6 text-center text-primaryWhite opacity-0">
              <div className="icon-container mb-4 mr-4 flex justify-start text-paragraphGrey opacity-70">
                <i className="fa-solid fa-bullseye text-[70px]"></i>
              </div>
              <h3 className="avenir-heavy pb-2 text-[28px]">Our Mission</h3>
              <p className="avenir-medium text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam eius velit molestiae voluptatem magnam rem qui earum
                debitis exercitationem impedit.
              </p>
            </div>
            <div className="dashboard-card flex animate-[fadeInUp_0.5s_ease_1.5s_forwards] flex-col items-center justify-between rounded-lg bg-[#EE7B88] p-6 text-center text-primaryWhite opacity-0">
              <div className="icon-container mb-4 mr-4 flex justify-start text-paragraphGrey opacity-70">
                <i className="fa-solid fa-users text-[70px]"></i>
              </div>
              <h3 className="avenir-heavy pb-2 text-[28px]">Our Team</h3>
              <p className="avenir-medium text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam eius velit molestiae voluptatem magnam rem qui earum
                debitis exercitationem impedit.
              </p>
            </div>
            {/* <div className="dashboard-card flex animate-[fadeInUp_0.5s_ease_2s_forwards] flex-col items-center rounded-lg bg-[#00B894] p-6 text-center text-primaryWhite opacity-0">
              <div className="icon-container mb-4 mr-4 flex justify-start text-paragraphGrey opacity-70">
                <i className="fa-solid fa-envelope text-[70px]"></i>
              </div>
              <div>
                <h3 className="avenir-heavy text-[28px]">Contact Us!</h3>
                <p className="avenir-medium mt-2 text-[16px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam eius velit molestiae voluptatem magnam rem qui
                  earum debitis exercitationem impedit.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
