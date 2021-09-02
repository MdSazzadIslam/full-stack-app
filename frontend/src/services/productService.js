import http from "../config";
class productService {
  static getProducts = async () => {
    return await http.get("products");
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
