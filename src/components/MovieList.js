import styled from "styled-components";
import MovieItem from "./MovieItem";
import axios from "axios";
import { useEffect, useState } from "react";

const MovieListStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// const exMovie = {
//   title: "제목",
//   overview: "내용",
//   release_date: "2022-04-06",
//   vote_average: "6.7",
//   poster_path: "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
// };

const MovieList = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
        );
        setMovies(response.data.results);
        console.log(movies);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <MovieListStyle>대기 중</MovieListStyle>;
  }
  if (!movies) {
    return null;
  }

  return (
    <MovieListStyle>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MovieListStyle>
  );
};

export default MovieList;
