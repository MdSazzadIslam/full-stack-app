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
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [searchBy, setSearchBy] = useState("");

  const fetchProducts = async () => {
    debugger;
    try {
      setLoading(true);
      const res = await ProductService.getProducts(
        activePage,
        itemsCountPerPage,
        searchBy
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
    fetchProducts();
  }, [setProducts, activePage, itemsCountPerPage]);

  const handlePageChange = async (pageNumber) => {
    setActivePage(pageNumber);
    await fetchProducts(pageNumber, itemsCountPerPage);
  };

  const searchProduct = (e) => {
    e.preventDefault();
    fetchProducts();
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

                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="card-body row no-gutters align-items-center">
                      <div className="col-auto">
                        <i className="fas fa-search h4 text-body" />
                      </div>

                      <div className="col">
                        <input
                          className="form-control form-control-lg form-control-borderless"
                          type="search"
                          placeholder="Search by title, brand,condition, availability and price"
                          name="searchBy"
                          value={searchBy}
                          onChange={(e) => setSearchBy(e.target.value)}
                          required={true}
                        />
                      </div>
                      <div className="col-auto">
                        <button
                          className="btn btn-lg btn-success"
                          type="submit"
                          onClick={searchProduct}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
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
                    </tbody>
                  </table>

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
