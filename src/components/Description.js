import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";

const Description = ({ listMovie, match }) => {
  return (
    <div >
      {listMovie
        .filter((el) => el.Title === match.params.Title)
        .map((el, index) => (
          <div key={index} className="row">
            <Card key={index} style={{ width: "35rem" }} className="ca">
              <Card.Img className="imcard" variant="top" src={el.Poster} />
              <Card.Body className="carb">
                <Card.Title>Title : {el.Title}</Card.Title>
                <Card.Text>Year : {el.Year}</Card.Text>
                <Card.Text>Description : {el.Discription}</Card.Text>
                <Card.Text>
                  <ReactStars
                    classNames="stars"
                    count={5}
                    value={el.Rate}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Card.Text>
                <Card.Text>Type : {el.Type}</Card.Text>
                <Link to="/">
                  <Button variant="success">go back</Button>
                </Link>
              </Card.Body>
            </Card>
            <iframe className="vid"
              width="853"
              height="480"
              src={el.trailer}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
    </div>
  );
};

export default Description;
