import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createSession = async (email, password) => {
    //api.use(cors());
    return api.post("/sessions", { email, password });
};