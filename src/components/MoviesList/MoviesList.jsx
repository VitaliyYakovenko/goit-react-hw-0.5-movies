import { Link} from "react-router-dom"

export default function MoviesList({ movies , location}) {
    
 
    return (<>
        {movies?.map(movie => {
            return (
                <li key={movie?.id}>
                    <Link state={{from: location}} to={`/movies/${String(movie?.id)}`}>
                        {movie?.title || movie?.name || `Can't find a name`}
                    </Link>
                </li>
            );
        })}
    </>
);
};



    // return (movies?.map(movie => {
    //     return <li key={movie?.id}>
    //       <Link to={`/movies/${String(movie?.id)}`}>{movie?.title || movie?.name || `Can't find a name`}
    //       </Link>
    //     </li>
    // }));