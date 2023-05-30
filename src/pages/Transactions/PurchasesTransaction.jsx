import DataLayout from "components/ui/DataLayout";
import React from "react";

const PurchasesTransaction = () => {
  return (
    <DataLayout
      title="Purchases Transaction"
      hideFilter={false}
      hideEdit={false}
      hideAdd={false}
      hideViewAll={true}
      // addItemLink="/transactions/purchases/add"
      // viewAllLink="/transactions/purchases"
    ></DataLayout>
  );
};

export default PurchasesTransaction;
