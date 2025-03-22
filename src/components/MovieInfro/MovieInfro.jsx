



export default function MovieInfro({movie}) {

    return (<>
        <h1>{movie?.title || movie?.name}</h1>
        <img src={movie?.backdrop_path} alt={movie?.tagline} />
        <p>User score {movie?.vote_average}</p>
        <p>Status {movie?.status}</p>
        <p>Overview</p>
        <p>{movie?.overview}</p>
        <p>Ganre</p>
        <ul>
            {movie?.genres.map(({ name }) => <li key={name}>{name}</li>)}
        </ul>
    </>);
};