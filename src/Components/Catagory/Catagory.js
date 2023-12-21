import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../../Shared/NewsCard/NewsCard";

const Catagory = () => {
  const {id}=useParams()
  const CategoryNews=useLoaderData();
  return (
    <div>
      {/* <h4>All category {CategoryNews.length}</h4> */}
      {
        CategoryNews.map(news=><NewsCard
        key={news._id}
        news={news}
        ></NewsCard>)
      }
    </div>
  );
};

export default Catagory;
