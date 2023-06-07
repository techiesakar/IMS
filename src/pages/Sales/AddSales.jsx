import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import categories from "data/categories.json";
import products from "data/inventory.json";
import customerData from "data/customerData.json";
import UserProfileCard from "components/ui/UserProfileCard";
import { useNavigate } from "react-router-dom";

const AddSales = () => {
  const [isMember, setIsMember] = useState(false);
  const [customerPhone, setCustomerPhone] = useState(null);
  const [customerProfile, setCustomerProfile] = useState(false);
  const navigate = useNavigate();

  const getCustomerData = () => {
    setCustomerProfile(!customerProfile);
  };

  const handleNumberChange = (e) => {
    setCustomerPhone(e.target.value);
  };
  useEffect(() => {
    getCustomerData();
  }, [customerPhone]);

  return (
    <DataLayout
      title="Sale Product"
      showFilter={false}
      showEdit={false}
      showAdd={false}
      showViewAll={true}
      viewAllLink={() => {
        navigate("/sales");
      }}
    >
      <form className=" rounded grid grid-cols-12 gap-12">
        {/* Sales Data Starts*/}
        <div className="flex flex-col gap-6 col-span-7 bg-white p-8">
          {/* Row One Start */}
          <h1 className="text-2xl font-semibold text-left">Sales Data</h1>
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Sales Code</span>
              <input
                type="text"
                placeholder="CX100"
                disabled
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
              <span>Item Code</span>
              <input
                type="text"
                placeholder="CX100"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
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

          <div className="flex gap-2 w-full">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Shipping Address</span>
              <input
                type="text"
                placeholder="Shipping Address"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Billing Address</span>
              <input
                type="text"
                placeholder="Billing Address"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
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
                Save Sales Order
              </Button>
            </div>
          </div>
        </div>
        {/* Sales Data Ends */}
        {/* Customer's Data Start */}
        <div className="flex flex-col gap-6 col-span-5 bg-white p-8">
          <h1 className="text-2xl font-semibold text-left">Customer's Data</h1>

          <div className="flex gap-8">
            <h1 className="text-lg font-semibold text-left">
              Already a member ?
            </h1>
            <div className="flex gap-3 items-center">
              <label
                htmlFor="yes"
                className="border border-gray-300 rounded-md flex gap-2 py-1 px-2 cursor-pointer"
              >
                <input
                  type="radio"
                  id="yes"
                  name="member"
                  className=" border border-gray-300 rounded-md flex gap-1"
                  onClick={() => setIsMember(true)}
                />
                Yes
              </label>
              <label
                htmlFor="no"
                className="border border-gray-300 rounded-md flex gap-2 py-1 px-2 cursor-pointer"
              >
                <input
                  id="no"
                  onClick={() => setIsMember(false)}
                  type="radio"
                  name="member"
                  className=" border border-gray-300 rounded-md flex gap-1"
                  checked={!isMember ? true : false}
                />
                No
              </label>
            </div>
          </div>

          {isMember ? (
            <>
              <div className="flex w-full gap-12">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Phone</span>
                  <input
                    onChange={handleNumberChange}
                    type="text"
                    placeholder="Customer's Phone"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex gap-4 w-full">
                {customerProfile && (
                  <>
                    {customerData.users.map(
                      (user) =>
                        user.phone === customerPhone && (
                          <UserProfileCard
                            name={user.firstName}
                            email={user.email}
                            phone={user.phone}
                            address={user.address.address}
                            image={user.image}
                          />
                        )
                    )}
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Row One Ends */}
              <div className="flex w-full gap-12">
                <div className="flex flex-col items-start gap-2 w-1/2">
                  <span>First Name</span>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col items-start gap- w-1/2">
                  <span>Last Name</span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
              </div>
              {/* Row Second End */}
              <div className="flex gap-12 w-full">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Phone</span>
                  <input
                    type="text"
                    placeholder="Customer's Phone"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex w-full gap-12">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Address</span>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
              </div>
              {/* Row Third End */}
              <div className="flex gap-12 w-full">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Gender</span>
                  <div className="flex items-center gap-4">
                    <div className="flex  gap-2 border border-gray-200 cursor-pointer rounded-md py-2 px-3">
                      <label className="cursor-pointer" htmlFor="female">
                        Female
                      </label>
                      <input
                        id="female"
                        type="radio"
                        placeholder="Address"
                        name="gender"
                        value="female"
                      />
                    </div>

                    <div className="flex  gap-2 border border-gray-200 cursor-pointer rounded-md py-2 px-3">
                      <label className="cursor-pointer" htmlFor="male">
                        Male
                      </label>
                      <input
                        id="male"
                        type="radio"
                        placeholder="Address"
                        name="gender"
                        value="male"
                      />
                    </div>
                    <div className="flex  gap-2 border border-gray-200 cursor-pointer rounded-md py-2 px-3">
                      <label className="cursor-pointer" htmlFor="other">
                        Other
                      </label>
                      <input
                        id="other"
                        type="radio"
                        placeholder="Address"
                        name="gender"
                        value="other"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Row Four End */}
            </>
          )}

          {/* Row Five End */}
        </div>
        {/* Customer's Data Ends */}
      </form>
    </DataLayout>
  );
};

export default AddSales;
