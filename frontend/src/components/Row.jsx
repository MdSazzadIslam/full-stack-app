import React, { Fragment } from "react";

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
            </div>
          </th>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>{product.link}</td>
          <td>{product.availability}</td>
          <td>{product.brand}</td>
          <td>{product.condition}</td>
        </tr>
      </Fragment>
    );
  });

  return <>{displayProducts}</>;
};

export default Row;
