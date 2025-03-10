import { NavLink } from "react-router-dom";
import useCategory from "../hooks/useCategory";

const CategoryList = () => {

  const { categories, isLoading, error } = useCategory();

  const customCategoryNames: { [key: string]: string } = {
    "all": "All",
    "fragrances": "Fragrances",
    "skin-care": "Skincare",
    "mens-shirts": "Clothing",
    "womens-bags": "Bags",
    "womens-shoes": "Shoes",
    "womens-jewellery": "Accessories",
    "tops": "Tops",
    "sunglasses": "Sunglasses",
    "womens-watches": "Watches",
    "beauty": "Beauty"
  };


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <NavLink to="/">Home</NavLink>

      {/* Link pentru All */}
      <NavLink key="all" to="/category/all">
        {customCategoryNames["all"]}
      </NavLink>

      {categories
          .filter((category) => Object.prototype.hasOwnProperty.call(customCategoryNames, category.slug))
         .map((category) => (
        <NavLink key={category.slug} to={`/category/${category.slug}`}>
          {customCategoryNames[category.slug]}
        </NavLink>
      ))}
    </>
  );
};

export default CategoryList;
