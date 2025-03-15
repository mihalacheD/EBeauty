import { NavLink } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import { Spinner } from "@chakra-ui/react";
import { useLinkStyles } from "../styles/useLinkStyle";

const CategoryList = () => {

  const { categories, isLoading, error } = useCategory();
  const linkStyle = useLinkStyles();


  const customCategoryNames: { [key: string]: string } = {
    "all": "All",
    "fragrances": "Fragrances",
    "skin-care": "Skincare",
    "womens-dresses": "Clothing",
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
      <NavLink
        to="/"
        style={({ isActive }) => linkStyle(isActive)}>
          Home
      </NavLink>

      {/* Link pentru All */}
      <NavLink
        key="all"
        to="/all-products"
        style={({ isActive }) => linkStyle(isActive)}>
        {customCategoryNames["all"]}
      </NavLink>

      {categories
         .filter((category) => Object.prototype.hasOwnProperty.call(customCategoryNames, category.slug))
         .map((category) => (
        <NavLink
           key={category.slug}
           to={`/category/${category.slug}`}
           style={({ isActive }) => linkStyle(isActive)}>
          {customCategoryNames[category.slug]}
        </NavLink>
      ))}
    </>
  );
};

export default CategoryList;
