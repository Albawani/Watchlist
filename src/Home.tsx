// Beispiel: src/pages/Home.tsx
import { useEffect, useState } from "react";
import { searchMulti, posterUrl } from "./lib/tmdb";
import { Link } from "react-router-dom";
import MovieCard from "./components/MovieCard";

export default function Home() {
    const [q, setQ] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState<any[]>([])

    async function handleSearch() {
        setSearchValue(q)
        try {
            const data = await searchMulti(q)  // API-Call
            setResults(data)                   // speichere Resultate
        } catch (err) {
            console.error(err)
            setResults([])
        }
        setQ("")                              // Input leeren
    }

    return (
        <div>
            <input className="search-box" value={q} onKeyDown={e => {
                if (e.key === "Enter") handleSearch()
            }}
                   onChange={e => setQ(e.target.value)} placeholder="Search…" />
            <button className="search-btn" onClick={handleSearch}>Suchen</button>
            <p className="search-result">Ergebnisse für: {searchValue}</p>

            <div className="grid">
                {results.map(r => (
                    <MovieCard
                        key={`${r.media_type}-${r.id}`}
                        title={r.title || r.name}
                        overview={r.overview}
                        poster={posterUrl(r.poster_path)}
                    />
                ))}
            </div>
        </div>
    );
}
