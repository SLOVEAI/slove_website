import { isDevelopmentMode } from "./utils";

export const BACKEND_URL = isDevelopmentMode ? "/api" : "http://www.slove.io";
