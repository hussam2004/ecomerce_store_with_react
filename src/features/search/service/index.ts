import { httpClient } from "../../../lib/axios";

class SearchService {
  #endpoint = "/products";
  // [GET] https://api.escuelajs.co/api/v1/products/?title=Generic
  async getByTitle(title: string) {
    const response = await httpClient.get(`${this.#endpoint}/?title=${title}`);
    return response.data;
  }
}

export default new SearchService();
