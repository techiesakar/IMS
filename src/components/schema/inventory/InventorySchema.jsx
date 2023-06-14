import * as Yup from "yup";
const MAX_FILE_SIZE = 902400; //100KB
const validFileExtensions = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};
function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

export const inventorySchema = Yup.object().shape({
  product_name: Yup.string().required("Product Name required"),
  product_brand: Yup.string().required("Brand Name required"),
  product_category: Yup.string().required("Category Name required"),
  product_quantity: Yup.number().required("Quantity Required"),
  image: Yup.mixed()
    .required("Required")
    .test("is-valid-type", "Not a valid image type", (value) =>
      isValidFileType(value && value.name.toLowerCase(), "image")
    )
    .test(
      "is-valid-size",
      "Max allowed size is 100KB",
      (value) => value && value.size <= MAX_FILE_SIZE
    ),
  priceperunit: Yup.number().required("Price Per Qty required"),
});
