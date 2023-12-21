import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, author, image_url, details, title, rating, total_view } = news;
  // console.log(news)
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center ">
        <div className="d-flex ">
          <Image
            roundedCircle
            className="me-2 md-2"
            style={{ height: "50px" }}
            src={author.img}
          ></Image>

          <div className="lh-1">
            <p>
              <small>{author.name}</small>
            </p>
            <p>
              <small>{author.published_date}</small>
            </p>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>



      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200) + '...' }
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div>
          <FaStar className="me-2 text-warning"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
