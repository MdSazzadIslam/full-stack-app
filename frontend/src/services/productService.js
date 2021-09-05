import http from "../config";
class productService {
  static getProducts = async (page, limit, searchBy) => {
    return await http.get(
      `products/?limit=${limit}` +
        "&page=" +
        `${page}` +
        `&searchBy=${searchBy}`
    );
  };

  static getProduct = async (id) => {
    return await http.get(`products/${id}`);
  };

  static createProduct = async (title, data) => {
    return await http.post("products", {
      data,
    });
  };

  static updateProduct = async (id, data) => {
    return await http.put(`products/${id}`, {
      data,
    });
  };
}
export default productService;
