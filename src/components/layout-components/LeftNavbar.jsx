import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  //   console.log(categories);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Category</h2>
      <div className="flex flex-col gap-2 items-center">
        {categories.map((category) => (
          <NavLink key={category._id} className={`btn w-full`}>{category.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
