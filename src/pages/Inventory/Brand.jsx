import DataLayout from "components/ui/DataLayout";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BrandContextApi, {
  BrandContext,
} from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";
import Table from "components/page-components/inventory/brand/BrandTable";
import AddBrand from "components/page-components/inventory/brand/AddBrand";
import EditBrand from "components/page-components/inventory/brand/EditBrand";
import { useSearchParams } from "react-router-dom";
const Brand = () => {
  document.title = "SA - Brand";
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams, "slug");
  return (
    <BrandContextApi>
      <BrandContext.Consumer>
        {({ setCurrentBrand, currentBrand }) => {
          return (
            <DataLayout
              title="All Brands"
              showFilter={true}
              showEdit={false}
              showViewAll={false}
            >
              {/* Main Container For Brands */}

              <div className="max-w-screen-xl w-full mx-auto grid grid-cols-12 gap-12">
                <div className="col-span-8">
                  <Table setCurrentBrand={setCurrentBrand} />
                </div>
                <div className="col-span-4">
                  <AddBrand />
                  {currentBrand.length > 0 && (
                    <EditBrand
                      currentBrand={currentBrand}
                      setCurrentBrand={setCurrentBrand}
                    />
                  )}
                </div>
              </div>

              <ToastContainer />
            </DataLayout>
          );
        }}
      </BrandContext.Consumer>
    </BrandContextApi>
  );
};

export default Brand;
