import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories);
  useEffect(() => {
    fetch("https://news-portal-server-lyart.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <p>All Categories</p>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSide;
