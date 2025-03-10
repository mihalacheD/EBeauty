import { NavLink } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import { Spinner } from "@chakra-ui/react";

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

  if (error) return null;
  if (isLoading) return <Spinner/>;

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
