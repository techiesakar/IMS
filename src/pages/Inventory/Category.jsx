import DataLayout from "components/ui/DataLayout";
import CategoryTable from "components/page-components/inventory/category/CategoryTable";
import AddCategory from "components/page-components/inventory/category/AddCategory";
import CategoryContextAPI, {
  CategoryContext,
} from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
const Category = () => {
  document.title = "SA - Brand";

  return (
    <CategoryContextAPI>
      <CategoryContext.Consumer>
        {({}) => {
          return (
            <DataLayout
              title="All Categories"
              showFilter={true}
              showEdit={false}
              showViewAll={false}
            >
              <div className="max-w-screen-xl w-full mx-auto grid grid-cols-12 gap-24">
                <div className="col-span-8">
                  <CategoryTable />
                </div>

                <div className="col-span-4">
                  <AddCategory />
                </div>
              </div>
            </DataLayout>
          );
        }}
      </CategoryContext.Consumer>
    </CategoryContextAPI>
  );
};

export default Category;
