import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: { Authorization: import.meta.env.VITE_TMDB_TOKEN }
})