import { KEY, BASE_URL } from "./fetchFavoriteMovies";



export default async function  fetchRevievById(id) {
    try { 
        const resp = await fetch(`${BASE_URL}/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
        if (!resp.ok) {
            throw new Error();
        }
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};