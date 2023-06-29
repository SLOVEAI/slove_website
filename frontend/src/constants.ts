import { isDevelopmentMode } from "./utils";

export const BACKEND_URL = isDevelopmentMode ? "/api" : "https://api.slove.io";
