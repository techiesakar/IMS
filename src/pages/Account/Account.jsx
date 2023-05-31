import DataLayout from "components/ui/DataLayout";
import React from "react";

const Account = () => {
  return (
    <DataLayout
      title="All Products"
      hideFilter={true}
      hideEdit={true}
      hideAdd={true}
      hideViewAll={true}
    ></DataLayout>
  );
};

export default Account;
