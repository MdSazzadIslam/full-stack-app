import http from "../config";
class productService {
  static getProducts = async (page, limit, searchBy) => {
    debugger;
    if (searchBy === null || searchBy === undefined) {
      searchBy = "";
    }
    return await http.get(
      `products/?limit=${limit}` + `&page=${page}` + `&searchBy=${searchBy}`
    );
  };

  static getProduct = async (id) => {
    return await http.get(`products/${id}`);
  };

  static createProduct = async (title, data) => {
    debugger;
    return await http.post("products", {
      data,
    });
  };

  static updateProduct = async (id, data) => {
    debugger;
    return await http.put(`products/${id}`, {
      data,
    });
  };
}
export default productService;
