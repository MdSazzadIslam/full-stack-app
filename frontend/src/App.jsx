import React, { useState, useEffect } from "react";
import Row from "./components/Row";
import Loader from "./components/Loader";
import ProductService from "./services/productService";

import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    debugger;
    try {
      setLoading(true);
      const res = await ProductService.getProducts();
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [setProducts]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <div>
      <div className="main-content">
        <div className="container">
          {/* Table */}
          <h2 className="mb-5"> </h2>
          <div className="row">
            <div className="col">
              <div className="card shadow">
                <div className="card-header border-0">
                  <h3 className="mb-0">Card tables</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Status</th>
                        <th scope="col">Users</th>
                        <th scope="col">Completion</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <Row products={products} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
