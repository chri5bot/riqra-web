import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export const API_URL =
  process.env.REACT_APP_API_URL ||
  `${window.location.protocol}//${window.location.host}/api`;
