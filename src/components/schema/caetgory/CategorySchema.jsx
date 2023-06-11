import * as Yup from "yup";

export const categorySchema = Yup.object().shape({
  Category_name: Yup.string().required("Category Name is required"),
});
