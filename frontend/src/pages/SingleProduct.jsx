import React from "react";
import { useHistory } from "react-router-dom";

const SingleProduct = () => {
  const history = useHistory();

  const {
    title,
    description,
    imageLink,
    brand,
    condition,
    availability,
    price,

    link,
  } = history.location.state;

  return (
    <div className="main-content">
      <div className="container">
        {/* Table */}
        <h2 className="mb-5"> </h2>
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-header border-0">
                <h3 className="mb-0">Product Detail Information</h3>
              </div>

              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 product_img">
                    <img
                      src={imageLink}
                      alt={brand}
                      className="img-responsive"
                      width="300px"
                      height="300px"
                    />
                  </div>
                  <div className="col-md-6 product_content">
                    <h6>
                      <strong> Title:</strong> <span>{title}</span>
                    </h6>
                    <p>
                      <strong> description:</strong> {description}
                    </p>
                    <h6>
                      Link:
                      <a href={link} target="_blank" rel="noreferrer">
                        {link}
                      </a>
                    </h6>
                    <br />
                    brand: {brand} <br />
                    availability: {availability} <br />
                    condition: {condition}
                    <h3 className="cost">
                      <span className="glyphicon glyphicon-usd" /> {price}
                    </h3>
                    <div className="space-ten" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
