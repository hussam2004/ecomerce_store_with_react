import { httpClient } from "../../../../lib/axios";

class AuthService {
  async login(payload: object) {
    const response = await httpClient.post("/auth/login", payload);
    return response.data;
  }
  async signup(payload: object) {
    const response = await httpClient.post("/auth/login", payload);
    return response.data;
  }
}

export default new AuthService();
