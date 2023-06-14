import React from "react";
import { useLocation } from "react-router-dom";
import DataLayout from "components/ui/DataLayout";
import { useNavigate } from "react-router-dom";

import BrandContextAPI from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";
import CategoryContextAPI from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import InventoryContextAPI from "hoc/ContextApi/InventoryContextAPI/InventoryContextAPI";
import ProductTypeOthers from "components/page-components/inventory/productType/Others";
import Clothing from "components/page-components/inventory/productType/Clothing";

const AddInventory = () => {
  document.title = "SA - Inventory";
  const location = useLocation();
  console.log(location);
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");
  const navigate = useNavigate();

  let productType = null;

  switch (type) {
    case "clothing": {
      productType = <Clothing />;
      break;
    }
    default: {
      productType = <ProductTypeOthers />;
      break;
    }
  }

  return (
    <DataLayout
      title="Add Product"
      showFilter={false}
      showEdit={false}
      showAdd={false}
      showViewAll={true}
      viewAllLink="/inventory"
    >
      <InventoryContextAPI>
        <BrandContextAPI>
          <CategoryContextAPI>
            <div className="bg-white pt-4 px-8">
              <ul className="flex">
                <li
                  onClick={() => {
                    navigate("?type=others");
                  }}
                  className={`py-1 px-3 cursor-pointer border ${
                    location.search === "?type=others" &&
                    "bg-blue-500 text-white"
                  }`}
                >
                  Others
                </li>
                <li
                  onClick={() => {
                    navigate("?type=clothing");
                  }}
                  className={`py-1  px-3 cursor-pointer border ${
                    location.search === "?type=clothing" &&
                    "bg-blue-500 text-white"
                  }`}
                >
                  Clothing
                </li>
              </ul>
            </div>

            {productType}
          </CategoryContextAPI>
        </BrandContextAPI>
      </InventoryContextAPI>
    </DataLayout>
  );
};

export default AddInventory;
