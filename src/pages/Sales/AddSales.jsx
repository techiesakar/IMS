import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";

const AddSales = () => {
  const [isMember, setIsMember] = useState(false);

  return (
    <DataLayout
      title="Sale Product"
      hideFilter={true}
      hideEdit={true}
      hideAdd={true}
      addItemLink="/inventory/add"
      viewAllLink="/inventory"
    >
      <form className="bg-white p-8 rounded grid grid-cols-2 gap-12">
        {/* Sales Data Starts*/}
        <div className="flex flex-col gap-6">
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
                <option value="">Clothing - Men</option>
                <option value="">Clothing - Women</option>
                <option value="">Computers</option>
                <option value="">Sports</option>
                <option value="">Adventure</option>
              </select>
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Item's Name</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                <option value="">Lenovo XP 5200</option>
                <option value="">Lenovo Idepad</option>
                <option value="">Jacket - XL - Black</option>
                <option value="">Real Madrid Jersey - White</option>
                <option value="">Socks - Black</option>
              </select>
            </div>
          </div>

          {/* Row One End */}
          <div className="flex gap-12 w-full">
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
                <option value="">Online</option>
                <option value="">Cash</option>
                <option value="">Credit</option>
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
            <div className="flex items-center w-full">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-2">Category</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Qty</th>
                    <th className="p-2">Unit Price</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">Computers</td>
                    <td className="p-2">Lenovo XP 5200</td>
                    <td className="p-2">1</td>
                    <td className="p-2">20</td>
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
            </div>
          </div>
        </div>
        {/* Sales Data Ends */}
        {/* Customer's Data Start */}
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold text-left">Customer's Data</h1>

          <div className="flex gap-8">
            <h1 className="text-lg font-semibold text-left">
              Already a member ?
            </h1>
            <div className="flex gap-3">
              <label
                htmlFor="yes"
                className="py-1 px-2 border border-gray-300 rounded-md"
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
                className="py-1 px-2 border border-gray-300 rounded-md"
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
              <div className="flex w-full gap-12">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Phone</span>
                  <input
                    type="text"
                    placeholder="Customer's Phone"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
              </div>{" "}
              <div className="flex gap-4 w-full">
                <Button variant="contained" color="primary" size="sm">
                  Get Data
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex w-full gap-12">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <span>Phone</span>
                  <input
                    type="text"
                    placeholder="Customer's Phone"
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 w-1/2">
                  <span>Customer ID</span>
                  <input
                    type="text"
                    placeholder="CX100"
                    disabled
                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                  />
                </div>
              </div>
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
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="example@email.com"
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

              <div className="flex gap-4 w-full">
                <Button variant="contained" color="primary" size="sm">
                  Save
                </Button>
                <Button variant="contained" color="danger" size="sm">
                  Cancel
                </Button>
              </div>
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
