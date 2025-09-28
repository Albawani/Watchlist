import { api } from "./api"

export async function searchMulti(q: string) {
    const { data } = await api.get("/search/multi", {
        params: { query: q, include_adult: false }
    })
    return (data.results || []).filter(
        (r: any) => r.media_type === "movie" || r.media_type === "tv"
    )
}

export function posterUrl(path?: string) {
    return path ? `${import.meta.env.VITE_TMDB_IMG}${path}` : ""
}
