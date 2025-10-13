import { httpClient } from "../../../lib/axios";

class ProductService {
  #endpoint = "/products";

  async getXProducts(offset: number, limit: number) {
    const response = await httpClient.get(
      this.#endpoint + `?offset=${offset}&limit=${limit}`
    );
    return response.data;
  }
  // https://api.escuelajs.co/api/v1/products
  async all() {
    const response = await httpClient.get(this.#endpoint);
    return response.data;
  }

  async details(id: number) {
    const response = await httpClient.get(this.#endpoint + `/${id}`);
    return response.data;
  }

  async getRelayedProducts(id: number) {
    const response = await httpClient.get(this.#endpoint + `/${id}/related`);
    return response.data;
  }
}

export default new ProductService();
