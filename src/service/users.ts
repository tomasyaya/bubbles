import axios, { AxiosResponse } from "axios";
import { User } from "../types/User";

const baseUrl = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: baseUrl,
});

export function getUsers(): Promise<AxiosResponse<User[]>> {
  return api.get("/users");
}
