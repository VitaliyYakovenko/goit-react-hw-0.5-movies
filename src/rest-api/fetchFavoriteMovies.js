
// export const KEY = `5c9fbebd8a4183e94064202846ae6076`;
export const KEY = `793101b692eebc010688aa54a5a6ba55`; 
export const BASE_URL = `https://api.themoviedb.org`; 


export default async function fetchAllMovies() {
     
    try {
        const resp = await fetch(`${BASE_URL}/3/trending/all/day?api_key=${KEY}`)
        if (!resp.ok) {
            throw new Error();
        }
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};



