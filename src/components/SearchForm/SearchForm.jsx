import { nanoid } from "nanoid"


export default function SearchForm({findMovies}) {
    const inputId = nanoid();

    return (<form onSubmit={findMovies}>
        <label htmlFor={inputId}>Enter your favorite movie</label>
        <br />
        <br/>
        <input id={inputId} type="text" />
            <br />
        <button type="submit">Search movie by name</button>    
        </form>);
};