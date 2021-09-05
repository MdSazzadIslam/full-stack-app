import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Row = ({ products }) => {
  const displayProducts = products.map((product) => {
    return (
      <Fragment key={product.id}>
        <tr>
          <td>
            <div className="dropdown">
              <Link
                className="btn btn-sm btn-icon-only text-light"
                to={{
                  pathname: "SingleProduct",
                  state: {
                    id: product._id,
                    title: product.title,
                    description: product.description,
                    imageLink: product.image_link,
                    brand: product.brand,
                    condition: product.condition,
                    availability: product.availability,
                    price: product.price,
                    gtin: product.gtin,
                    mpn: product.mpn,
                    shipping: product.shipping,
                    identifierExists: product.identifier_exists,
                    googleProductCategory: product.google_product_category,
                    adult: product.adult,
                    gender: product.gender,
                    color: product.color,
                    link: product.link,
                  },
                }}
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" style={{ color: "blue" }}>
                  View
                </i>
              </Link>
            </div>
          </td>

          <th scope="row">
            <div className="media align-items-center">
              <div className="avatar rounded-circle mr-3">
                <img alt={product.brand} src={product.image_link} />
              </div>
              <div className="media-body">
                <span className="mb-0 text-sm">{product.title}</span>
              </div>
            </div>
          </th>
          <td>{product.brand}</td>
          <td>{product.condition}</td>
          <td>{product.availability}</td>
          <td>{product.price} </td>
        </tr>
      </Fragment>
    );
  });

  return <>{displayProducts}</>;
};

export default Row;
