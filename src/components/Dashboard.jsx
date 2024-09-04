import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [productId, setProductId] = useState("");
  const [products, setProducts] = useState("");
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
  //   Fetch Data from json
  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch("/db.json");
      const data = await response.json();
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
              <div className="new-arrival-card-container grid grid-cols-3 items-center justify-start gap-10">
                <div className="new-arrival-card bg-white h-[370px] w-[300px] animate-[fadeInUp_0.5s_ease_0.5s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
                  <img
                    src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=612x612&w=0&k=20&c=2KKjX9tXo0ibmBaPlflnJNdtZ-J77wrprVStaPL2Gj4="
                    alt="Product Image"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="avenir-medium mb-2 text-[22px]">
                      Product Title
                    </h2>
                    <p className="avenir-heavy mb-2 text-[18px]">$299</p>
                    <p className="avernir-light line-clamp-3">
                      {true ? (
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sed ratione et perspiciatis, minima aliquam, natus repudiandae recusandae aspernatur ducimus eius. Molestiae reprehenderit itaque autem unde temporibus omnis veniam maiores ab. Amet impedit nihil accusamus. Assumenda harum minus explicabo tenetur esse repudiandae numquam, asperiores libero suscipit natus obcaecati quas, id dolorem, distinctio quibusdam. Consequatur pariatur deserunt illo perspiciatis, commodi esse nemo perferendis modi eum ducimus. Id odit nihil eveniet magnam ex quaerat ipsum enim corporis. Voluptatibus, numquam totam ullam ipsa quis dolores beatae sapiente earum expedita sit quo ipsam atque facilis magnam officia amet quibusdam voluptate ut animi possimus praesentium rerum? Laudantium ea laboriosam, nihil aperiam eius et consequatur rem, labore accusamus illum consectetur assumenda atque. Ab voluptate harum sit nemo distinctio officia nobis repellat accusantium deleniti inventore, similique provident quas libero. Fuga labore cupiditate itaque pariatur consequuntur repellat explicabo cumque nihil ducimus eaque aliquam excepturi repudiandae sint ut nulla dolore, iusto totam nesciunt nemo. Similique dolorum fuga corporis quod consequuntur voluptatum? Voluptatum illum architecto, repellendus autem pariatur recusandae suscipit obcaecati, consectetur expedita mollitia sunt. Nam velit expedita tenetur, id nisi provident blanditiis fugiat autem neque ducimus in voluptatem aspernatur, quam labore beatae. Nulla quos totam iusto qui molestiae perspiciatis?"
                      ) : (
                        <span className="avernir-light italic text-paragraphGrey">
                          No Product Description...
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="new-arrival-card bg-white h-[370px] w-[300px] animate-[fadeInUp_0.5s_ease_0.5s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
                  <img
                    src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=612x612&w=0&k=20&c=2KKjX9tXo0ibmBaPlflnJNdtZ-J77wrprVStaPL2Gj4="
                    alt="Product Image"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="avenir-medium mb-2 text-[22px]">
                      Product Title
                    </h2>
                    <p className="avenir-heavy mb-2 text-[18px]">$299</p>
                    <p className="avernir-light line-clamp-3">
                      {false ? (
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sed ratione et perspiciatis, minima aliquam, natus repudiandae recusandae aspernatur ducimus eius. Molestiae reprehenderit itaque autem unde temporibus omnis veniam maiores ab. Amet impedit nihil accusamus. Assumenda harum minus explicabo tenetur esse repudiandae numquam, asperiores libero suscipit natus obcaecati quas, id dolorem, distinctio quibusdam. Consequatur pariatur deserunt illo perspiciatis, commodi esse nemo perferendis modi eum ducimus. Id odit nihil eveniet magnam ex quaerat ipsum enim corporis. Voluptatibus, numquam totam ullam ipsa quis dolores beatae sapiente earum expedita sit quo ipsam atque facilis magnam officia amet quibusdam voluptate ut animi possimus praesentium rerum? Laudantium ea laboriosam, nihil aperiam eius et consequatur rem, labore accusamus illum consectetur assumenda atque. Ab voluptate harum sit nemo distinctio officia nobis repellat accusantium deleniti inventore, similique provident quas libero. Fuga labore cupiditate itaque pariatur consequuntur repellat explicabo cumque nihil ducimus eaque aliquam excepturi repudiandae sint ut nulla dolore, iusto totam nesciunt nemo. Similique dolorum fuga corporis quod consequuntur voluptatum? Voluptatum illum architecto, repellendus autem pariatur recusandae suscipit obcaecati, consectetur expedita mollitia sunt. Nam velit expedita tenetur, id nisi provident blanditiis fugiat autem neque ducimus in voluptatem aspernatur, quam labore beatae. Nulla quos totam iusto qui molestiae perspiciatis?"
                      ) : (
                        <span className="avernir-light italic text-paragraphGrey">
                          No Product Description...
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="new-arrival-card bg-white h-[370px] w-[300px] animate-[fadeInUp_0.5s_ease_0.5s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
                  <img
                    src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=612x612&w=0&k=20&c=2KKjX9tXo0ibmBaPlflnJNdtZ-J77wrprVStaPL2Gj4="
                    alt="Product Image"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="avenir-medium mb-2 text-[22px]">
                      Product Title
                    </h2>
                    <p className="avenir-heavy mb-2 text-[18px]">$299</p>
                    <p className="avernir-light line-clamp-3">
                      {true ? (
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sed ratione et perspiciatis, minima aliquam, natus repudiandae recusandae aspernatur ducimus eius. Molestiae reprehenderit itaque autem unde temporibus omnis veniam maiores ab. Amet impedit nihil accusamus. Assumenda harum minus explicabo tenetur esse repudiandae numquam, asperiores libero suscipit natus obcaecati quas, id dolorem, distinctio quibusdam. Consequatur pariatur deserunt illo perspiciatis, commodi esse nemo perferendis modi eum ducimus. Id odit nihil eveniet magnam ex quaerat ipsum enim corporis. Voluptatibus, numquam totam ullam ipsa quis dolores beatae sapiente earum expedita sit quo ipsam atque facilis magnam officia amet quibusdam voluptate ut animi possimus praesentium rerum? Laudantium ea laboriosam, nihil aperiam eius et consequatur rem, labore accusamus illum consectetur assumenda atque. Ab voluptate harum sit nemo distinctio officia nobis repellat accusantium deleniti inventore, similique provident quas libero. Fuga labore cupiditate itaque pariatur consequuntur repellat explicabo cumque nihil ducimus eaque aliquam excepturi repudiandae sint ut nulla dolore, iusto totam nesciunt nemo. Similique dolorum fuga corporis quod consequuntur voluptatum? Voluptatum illum architecto, repellendus autem pariatur recusandae suscipit obcaecati, consectetur expedita mollitia sunt. Nam velit expedita tenetur, id nisi provident blanditiis fugiat autem neque ducimus in voluptatem aspernatur, quam labore beatae. Nulla quos totam iusto qui molestiae perspiciatis?"
                      ) : (
                        <span className="avernir-light italic text-paragraphGrey">
                          No Product Description...
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="new-arrival-card bg-white h-[370px] w-[300px] animate-[fadeInUp_0.5s_ease_0.5s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
                  <img
                    src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=612x612&w=0&k=20&c=2KKjX9tXo0ibmBaPlflnJNdtZ-J77wrprVStaPL2Gj4="
                    alt="Product Image"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="avenir-medium mb-2 text-[22px]">
                      Product Title
                    </h2>
                    <p className="avenir-heavy mb-2 text-[18px]">$299</p>
                    <p className="avernir-light line-clamp-3">
                      {true ? (
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sed ratione et perspiciatis, minima aliquam, natus repudiandae recusandae aspernatur ducimus eius. Molestiae reprehenderit itaque autem unde temporibus omnis veniam maiores ab. Amet impedit nihil accusamus. Assumenda harum minus explicabo tenetur esse repudiandae numquam, asperiores libero suscipit natus obcaecati quas, id dolorem, distinctio quibusdam. Consequatur pariatur deserunt illo perspiciatis, commodi esse nemo perferendis modi eum ducimus. Id odit nihil eveniet magnam ex quaerat ipsum enim corporis. Voluptatibus, numquam totam ullam ipsa quis dolores beatae sapiente earum expedita sit quo ipsam atque facilis magnam officia amet quibusdam voluptate ut animi possimus praesentium rerum? Laudantium ea laboriosam, nihil aperiam eius et consequatur rem, labore accusamus illum consectetur assumenda atque. Ab voluptate harum sit nemo distinctio officia nobis repellat accusantium deleniti inventore, similique provident quas libero. Fuga labore cupiditate itaque pariatur consequuntur repellat explicabo cumque nihil ducimus eaque aliquam excepturi repudiandae sint ut nulla dolore, iusto totam nesciunt nemo. Similique dolorum fuga corporis quod consequuntur voluptatum? Voluptatum illum architecto, repellendus autem pariatur recusandae suscipit obcaecati, consectetur expedita mollitia sunt. Nam velit expedita tenetur, id nisi provident blanditiis fugiat autem neque ducimus in voluptatem aspernatur, quam labore beatae. Nulla quos totam iusto qui molestiae perspiciatis?"
                      ) : (
                        <span className="avernir-light italic text-paragraphGrey">
                          No Product Description...
                        </span>
                      )}
                    </p>
                  </div>
                </div>
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

          <div className="grid grid-cols-3 gap-8">
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
            <div className="dashboard-card flex animate-[fadeInUp_0.5s_ease_2s_forwards] flex-col items-center rounded-lg bg-[#00B894] p-6 text-center text-primaryWhite opacity-0">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
