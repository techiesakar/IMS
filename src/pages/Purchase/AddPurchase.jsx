import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import suppliers from "data/suppliers.json";
import categories from "data/categories.json";
import products from "data/inventory.json";
import { useNavigate } from "react-router-dom";

const AddPurchase = () => {
  const [isMember, setIsMember] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const handleSelectSupplier = (event) => {
    setSelectedSupplier(event.target.value);
  };

  const navigate = useNavigate();
  return (
    <DataLayout
      title="Purchase"
      showFilter={false}
      showEdit={false}
      showAdd={false}
      showViewAll={true}
      viewAllLink={() => {
        navigate("/purchases");
      }}
    >
      <form className=" rounded grid grid-cols-12 gap-12">
        {/* Sales Data Starts*/}
        <div className="flex flex-col gap-6 col-span-7 bg-white p-8">
          {/* Row One Start */}
          <h1 className="text-2xl font-semibold text-left">Purchases Data</h1>
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Purchase Code</span>
              <input
                type="text"
                placeholder="CX100"
                disabled
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Item Code</span>
              <input
                type="text"
                placeholder="CX100"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Date</span>
              <input
                type="date"
                placeholder="Product Name"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div>

          {/* Row One End */}
          <div className="flex gap-12 w-full">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Item's Name</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                {products.products.map((product) => (
                  <option className="capitalize" value={product.title}>
                    {product.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Categories</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                {categories.categories.map((category) => (
                  <option className="capitalize" value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Brand</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                {categories.brands.map((brand) => (
                  <option className="capitalize" value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row One End */}
          <div className="flex gap-2 w-full">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Qty</span>
              <input
                type="number"
                min="1"
                placeholder="1"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Unit Price</span>
              <input
                type="text"
                placeholder="Unit Price"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            {/* Payment Method */}
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Payment Method</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                <option value="">Wallet/E-banking</option>
                <option value="">Credit/Debit Card</option>
                <option selected value="">
                  Cash on Delivery
                </option>
                <option value="">Credit</option>
              </select>
            </div>
            {/* Shipping Method */}

            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Payment Status</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                <option selected value="">
                  Progress
                </option>
                <option value="">Success</option>
                <option value="">Due</option>
                <option value="">Cancelled</option>
              </select>
            </div>
          </div>
          {/* Row Two End */}
          <div className="flex gap-4 w-full">
            <Button variant="contained" color="primary" size="sm">
              Add Item
            </Button>
          </div>
          {/* Row Five End */}

          <div className="flex gap-4 w-full items-center">
            <div className="flex items-center w-full flex-col gap-6 ">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-2">Category</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Qty</th>
                    <th className="p-2">Unit Price</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">Computers</td>
                    <td className="p-2">Lenovo XP 5200</td>
                    <td className="p-2">2</td>
                    <td className="p-2">20</td>
                    <td className="p-2">40</td>

                    <td className="p-2">
                      <button className="p-2 text-blue-500 text-xl">
                        <BsPencilFill />
                      </button>
                      <button className="p-2 text-red-500 text-xl">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h1 className="text-2xl font-bold text-right ml-auto">
                Order Total Rs. 40.00
              </h1>
              <Button
                className="ml-auto"
                variant="contained"
                color="primary"
                size="md"
              >
                Save Purchase Order
              </Button>
            </div>
          </div>
        </div>
        {/* Sales Data Ends */}

        {/* Customer's Form Start */}
        <div className="flex flex-col gap-6 col-span-5 bg-white p-8">
          <h1 className="text-2xl font-semibold text-left">Supplier's Data</h1>

          <div className="flex gap-8">
            <h1 className="text-lg font-semibold text-left">
              Already a supplier ?
            </h1>
            <div className="flex gap-3">
              <label
                htmlFor="yes"
                className="py-1 px-2 border border-gray-300 rounded-md flex gap-1"
              >
                <input
                  type="radio"
                  id="yes"
                  name="member"
                  onClick={() => setIsMember(true)}
                />
                Yes
              </label>
              <label
                htmlFor="no"
                className="py-1 px-2 border border-gray-300 rounded-md flex gap-1"
              >
                <input
                  id="no"
                  onClick={() => setIsMember(false)}
                  type="radio"
                  name="member"
                  checked={!isMember ? true : false}
                />
                No
              </label>
            </div>
          </div>

          {isMember ? (
            <>
              <div className="flex flex-col w-full gap-12">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Select Suppliers</span>

                  <select
                    value={selectedSupplier}
                    onChange={handleSelectSupplier}
                    name=""
                    id=""
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  >
                    {suppliers.suppliers.map((supplier, index) => (
                      <option key={index} value={supplier.title}>
                        {supplier.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h1>{selectedSupplier}</h1>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Row Start */}
              <div className="flex w-full gap-12">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Supplier ID</span>
                  <input
                    type="text"
                    placeholder="CX100"
                    disabled
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Supplier Name"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
              </div>
              {/* Row  End */}
              <div className="flex w-full gap-12">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Contact</span>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Email</span>
                  <input
                    type="Email"
                    placeholder="Email"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row  End */}
              <div className="flex w-full gap-12">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>PAN or VAT Number</span>
                  <input
                    type="text"
                    placeholder="PAN or VAT Number"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Address</span>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row Five End */}
            </>
          )}

          {/* Row Five End */}
        </div>
        {/* Customer's Form Ends */}
      </form>
    </DataLayout>
  );
};

export default AddPurchase;
