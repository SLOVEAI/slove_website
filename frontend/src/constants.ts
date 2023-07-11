import { isDevelopmentMode } from "./utils";

export const BACKEND_URL = isDevelopmentMode ? "/api" : "backend.slove.io";
