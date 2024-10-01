import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductTable from "./ProductTable";
import Navbar from "./Navbar.tsx";
import {
  fetchDashboardProducts,
  fetchProductsById,
  IProduct,
} from "../services/api.js";
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
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      const data = await fetchProductsById(id!).catch((e) => []);
      setLoading(false);
      setProducts(data);
    };

    fetchProductDetails();
  }, [id]);
  // Search Enter Event listener

  const { description, imgUrl } = useMemo(() => {
    const imgUrl =
      products.find((prod) => prod?.img_url)?.img_url ||
      "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png";
    const description =
      products.find((prod) => prod?.description)?.description ||
      "No Product Description";
    return {
      imgUrl,
      description,
    };
  }, [products]);
  return (
    <>
      <Navbar
        productId={productId}
        setProductId={setProductId}
        handleSearch={handleSearch}
      />
      {products.length > 0 && !loading ? (
        <div className="product-page-container p-8">
          <h1 className="avenir-heavy mb-3 animate-[fadeLeft_0.5s_ease_forwards] text-[48px] opacity-0">
            Product Details:
          </h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="img-container animate-[fadeInUp_0.5s_ease_forwards] border border-solid border-paragraphGrey">
              <img
                src={imgUrl}
                className="max-h-[300px] w-full object-contain"
              />
            </div>
            <div className="details flex animate-[fadeInUp_0.5s_ease_0.5s_forwards] flex-col justify-center opacity-0">
              <div className="product-category avenir-light text-[22px] text-paragraphGrey text-opacity-85">
                Product
              </div>
              <div className="product-title avenir-heavy text-[32px]">{id}</div>
              <div className="product-discription mt-4">
                <p className="avenir-light text-[18px] text-paragraphGrey">
                  {description}
                </p>
              </div>
              {/* <div
                className={`product-stock avenir-heavy mt-2 text-[18px] ${
                  inStock ? "text-correctGreen" : "text-alertRed"
                }`}
              >
                {inStock ? "In Stock" : "Out of Stock"}
              </div> */}
            </div>
          </div>
          <div className="product-providers avenir-medium mt-10 animate-[fadeLeft_0.5s_ease_1s_forwards] text-[25px] opacity-0">
            <span className="avenir-heavy">
              Product Providers: <br />
            </span>
            <ProductTable data={products} />
          </div>
        </div>
      ) : loading ? (
        <div className="mt-12 flex items-center justify-center">
          <div
            className="h-[50px] w-[50px] animate-spin rounded-[50%]"
            style={{
              border: "solid #ccc",
              borderLeftColor: "transparent",
            }}
          ></div>
        </div>
      ) : (
        <div>
          <h1 className="avenir-heavy mb-4 px-12 text-[48px]">
            Product with given id not found
          </h1>
        </div>
      )}
    </>
  );
}
