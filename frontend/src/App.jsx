import React, { useState, useEffect } from "react";
import Row from "./components/Row";
import Loader from "./components/Loader";
import ProductService from "./services/productService";
import Pagination from "react-js-pagination";

import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(10);
  const [totalItemsCount, setTotalItemsCount] = useState();

  const fetchProducts = async (activePage, itemsCountPerPage) => {
    debugger;
    try {
      setLoading(true);
      const res = await ProductService.getProducts(
        activePage,
        itemsCountPerPage
      );
      setProducts(res.data.products);
      setTotalItemsCount(res.data.count);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(setItemsCountPerPage);
    fetchProducts(activePage, itemsCountPerPage);
  }, [setProducts, activePage, itemsCountPerPage]);

  const handlePageChange = async (pageNumber) => {
    setActivePage(pageNumber);
    await fetchProducts(pageNumber, itemsCountPerPage);
  };

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
                  <h3 className="mb-0">Product Information</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Product and Title</th>

                        <th scope="col">Brand</th>
                        <th scope="col">condition</th>
                        <th scope="col">Availability</th>
                        <th scope="col">Price</th>

                        <th scope="col">Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      <Row products={products} />
                      <div className="container-fluid mb-2 mt-1 ">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            {/* <h6>
                    Showing {this.state.currentPage} to{" "}
                    {this.state.totalPages + " "}
                    of {this.state.totalItems} entries
                  </h6> */}
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <div className="float-md-right">
                              <Pagination
                                activePage={activePage}
                                itemsCountPerPage={itemsCountPerPage}
                                totalItemsCount={totalItemsCount}
                                pageRangeDisplayed={itemsCountPerPage}
                                onChange={(e) => handlePageChange(e)}
                                itemClass="page-item"
                                linkClass="page-link"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
