import { isDevelopmentMode } from "./utils";

export const BACKEND_URL = isDevelopmentMode
  ? "/api"
  : "http://test-3.eba-pztnpuuz.eu-north-1.elasticbeanstalk.com";
