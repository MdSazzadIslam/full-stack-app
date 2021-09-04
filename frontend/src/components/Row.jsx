import React, { Fragment } from "react";

import { NavLink } from "react-bootstrap";

const Row = ({ products }) => {
  const displayProducts = products.map((product) => {
    return (
      <Fragment key={product.id}>
        <tr>
          <th scope="row">
            <div className="media align-items-center">
              <a href="####" className="avatar rounded-circle mr-3">
                <img alt={product.brand} src={product.image_link} />
              </a>
              <div className="media-body">
                <span className="mb-0 text-sm">{product.title}</span>
              </div>
            </div>
          </th>
          <td>{product.brand}</td>
          <td>{product.condition}</td>
          <td>{product.availability}</td>
          <td>{product.price} </td>

          <td className="text-right">
            <div className="dropdown">
              <NavLink
                className="btn btn-sm btn-icon-only text-light"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" style={{ color: "blue" }}>
                  View
                </i>
              </NavLink>
            </div>
          </td>
        </tr>
      </Fragment>
    );
  });

  return <>{displayProducts}</>;
};

export default Row;
