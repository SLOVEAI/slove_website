import { isDevelopmentMode } from "./utils";

export const BACKEND_URL = isDevelopmentMode
  ? "/api"
  : "https://dev-api.slove.io";
