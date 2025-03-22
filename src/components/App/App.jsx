import {Routes, Route } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MoviesById from "pages/MoviesById";
import NotFound from "pages/NotFound";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesById />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
};



    // style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}