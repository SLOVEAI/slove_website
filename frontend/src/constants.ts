import { isDevelopmentMode } from "./utils";

export const BACKEND_URL = isDevelopmentMode
  ? "/api"
  : "https://www.slove.io/api";
