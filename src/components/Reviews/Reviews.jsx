import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchRevievById from "rest-api/fetchRevievById";

export default function Reviews() {
    const [review, setReview] = useState("");
    const [status, setStatus] = useState("idle");
    const { movieId } = useParams();



    useEffect(() => { 
        setStatus("pending");
        fetchRevievById(movieId).then((data) => {
            setReview(data);
            setStatus("sucsess");
        }).catch(() => {
            setStatus("failed");
        })
    }, [movieId]);
    

    if (!review || review?.results.length === 0) {
        return (<p>Sorry but we dont find a review</p>);
    };

    if (status === "pending") {
        return(<p>Loading...</p>)
    };
    if (status === "failed") {
        return (<p>Failed resp</p>)
    };

    if(status === "sucsess" && review?.results.length !== 0)
    return (<ul>
        {review?.results.map(result => {
           return <li key={result.id}>
                <h3>{result.author}</h3>
                <p>{result.content}</p>
            </li>
        })}
    </ul>);
};