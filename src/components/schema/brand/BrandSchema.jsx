import * as Yup from "yup";

export const brandSchema = Yup.object().shape({
  Brand_name: Yup.string().required("Brand Name is required"),
});
