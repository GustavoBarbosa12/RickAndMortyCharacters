import axios from "axios";
import { RMApiEndpoints } from "../api/rick-and-morty-api/rick-and-morty-api-endpoints";

export default axios.create({
    baseURL: RMApiEndpoints.BASEURL,
    headers: {
        "Content-type": "application/json"
    }
})