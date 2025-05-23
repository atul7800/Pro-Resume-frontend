import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const axiosClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data) => axiosClient.post("/user-resumes", data);
const GetUserResumes = (userEmail) =>
  axiosClient.get(`/user-resumes?filters[userEmail][$eq]=${userEmail}`);
const UpdateResumeDetails = (id, data) =>
  axiosClient.put("/user-resumes/" + id, data);
const GetResumeById = (id) =>
  axiosClient.get("/user-resumes/" + id + "?populate=*");

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetails,
  GetResumeById,
};
