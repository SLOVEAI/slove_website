import { isDevelopmentMode } from "./utils";

export const BACKEND_URL = isDevelopmentMode ? "/api" : "http://localhost:4000";
