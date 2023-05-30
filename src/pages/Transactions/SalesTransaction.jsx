import DataLayout from "components/ui/DataLayout";
import React from "react";

const SalesTransaction = () => {
  return (
    <DataLayout
      title="Sales Transaction"
      hideFilter={false}
      hideEdit={false}
      hideAdd={false}
      hideViewAll={true}
      // addItemLink="/transactions/sales/add"
      // viewAllLink="/transactions/sales"
    ></DataLayout>
  );
};

export default SalesTransaction;
