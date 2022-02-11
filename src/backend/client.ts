import axios from "axios";

export const client = axios.create({
    baseURL: "http://34.140.193.23/api" 
});
