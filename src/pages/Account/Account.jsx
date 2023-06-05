import DataLayout from "components/ui/DataLayout";
import React from "react";

const Account = () => {
  return (
    <DataLayout
      title="All Products"
      showFilter={true}
      showEdit={true}
      showAdd={true}
      showViewAll={true}
    ></DataLayout>
  );
};

export default Account;
