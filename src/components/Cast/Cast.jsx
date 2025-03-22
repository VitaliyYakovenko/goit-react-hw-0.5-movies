import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieCast from "rest-api/fetchMovieCast";

export default function Cast() {
    const [cast, setCast] = useState("");
    const {movieId} = useParams();

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast);       
     }, [movieId]);


    if (cast?.cast?.length === 0) {
        return (<p>Cant find a cast</p>)
    }
    return (<ul>
        {cast?.cast?.map(({ id, original_name, profile_path }) =>
            <li key={id}>
                <p>{original_name}</p>
                <img src={profile_path} alt={original_name} />
            </li>)}
    </ul>);
};