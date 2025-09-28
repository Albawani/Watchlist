type MovieCardProps = {
    title: string
    overview?: string
    poster?: string
}

export default function MovieCard({ title, overview, poster }: MovieCardProps) {
    return (
        <div className="movie-card">
            <h3 className="title" title={title}>{title}</h3>
            {poster && <img className="poster" src={poster} alt={title}/>}
        </div>
    )
}
