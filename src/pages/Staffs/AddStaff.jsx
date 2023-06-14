import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
import React from "react";

const AddStaff = () => {
  document.title = "SA - Add Staff";

  return (
    <DataLayout
      title="Add Staff"
      showFilter={true}
      showEdit={true}
      showAdd={true}
      addItemLink="/staff/add"
      viewAllLink="/staffs"
    >
      <form className="bg-white p-8 rounded ">
        <div className="flex flex-col gap-6">
          {/* Row One Start */}
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start gap-2 w-1/2">
              <span>Staff ID</span>
              <input
                type="text"
                placeholder="CX100"
                disabled
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Date of Created</span>
              <input
                type="text"
                disabled
                placeholder="19-10-2022"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Date of Joined</span>
              <input
                type="text"
                disabled
                placeholder="19-10-2022"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div>{" "}
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
            <div className="flex flex-col items-start gap-2 w-1/2">
              <span>Middle Name</span>
              <input
                type="text"
                placeholder="Middle Name"
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
                placeholder="98677***68"
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
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>PAN Number</span>
              <input
                type="text"
                placeholder="PAN  Number"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div>
          {/* Row Second End */}
          <div className="flex gap-12 w-full">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Address</span>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
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
          {/* Row One Start */}
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Position</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                <option value="">Manager</option>
                <option value="">Supervisor</option>
                <option value="">Assistant</option>
                <option value="">Associate</option>
                <option value="" selected>
                  Sales Manager
                </option>
              </select>
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Role</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                <option value="">Admin</option>
                <option value="">Editor</option>
                <option value="" selected>
                  Sales
                </option>
              </select>
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Salary</span>
              <input
                type="number"
                placeholder="Salary"
                min={8000}
                step={100}
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div>
          {/* Row Third End */}
          {/* Row Third End */}
          <div className="flex gap-4 w-full">
            <input type="file" />
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
        </div>
      </form>
    </DataLayout>
  );
};

export default AddStaff;
