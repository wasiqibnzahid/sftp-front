import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import { useNavigate } from "react-router-dom";
import PriceAnalysisTable from "./PriceAnalysisTable.jsx";

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
      console.log(products);
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
        <div className="dashboard-heading-container p-8">
          <h1 className="avenir-heavy animate-[fadeLeft_0.5s_ease_forwards] text-[48px] opacity-0">
            DashBoard:
          </h1>
        </div>
        <PriceAnalysisTable products={products} />

        <div className="dashboard-chat-orders-container grid p-8">
          <div className="new-products">
            <h1 className="dashboard-chart avenir-heavy my-8 ml-10 mt-12 animate-[fadeLeft_0.5s_ease_1s_forwards] text-[38px] opacity-0">
              New Arrivals:
            </h1>
            <div className="flex justify-center">
              <div className="new-arrival-card-container grid grid-cols-3 items-center justify-start gap-10">
                <div className="new-arrival-card bg-white h-[370px] w-[300px] animate-[fadeInUp_0.5s_ease_1s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
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
                        <div className="avernir-light italic text-paragraphGrey">
                          No Product Description...
                        </div>
                      )}
                    </p>
                  </div>
                </div>
                <div className="new-arrival-card bg-white h-[370px] w-[300px] animate-[fadeInUp_0.5s_ease_1s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
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
                        <div className="avernir-light italic text-paragraphGrey">
                          No Product Description...
                        </div>
                      )}
                    </p>
                  </div>
                </div>
                <div className="new-arrival-card bg-white h-[370px] w-[300px] animate-[fadeInUp_0.5s_ease_1s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
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
                        <div className="avernir-light italic text-paragraphGrey">
                          No Product Description...
                        </div>
                      )}
                    </p>
                  </div>
                </div>
                <div className="new-arrival-card bg-white h-[370px] w-[300px] animate-[fadeInUp_0.5s_ease_1s_forwards] overflow-hidden rounded-lg opacity-0 shadow-md">
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
                        <div className="avernir-light italic text-paragraphGrey">
                          No Product Description...
                        </div>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
