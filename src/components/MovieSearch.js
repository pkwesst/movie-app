import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";
import MovieList from "./MovieList";

const MovieSearch = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // console.log(
  //   "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=" +
  //     search
  // );

  const searchMovie = (it) => {
    it.preventDefault();
    setLoading(true);
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=" +
          search
      )
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {loading ? (
        <>
          <InputForm onSubmit={searchMovie}>
            <Input
              className="searchInput"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="&#61442; Input movie title and press Enter!"
              autoFocus
              type="text"
            />
          </InputForm>
          <MovieListStyle>
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </MovieListStyle>
        </>
      ) : (
        <>
          <InputForm onSubmit={searchMovie}>
            <Input
              className="searchInput"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="&#61442; Input movie title and press Enter!"
              autoFocus
              type="text"
            />
          </InputForm>
          <MovieListStyle>
            <MovieList />
          </MovieListStyle>
        </>
      )}
    </>
  );
};

export default MovieSearch;

const InputForm = styled.form`
  margin: 0;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Input = styled.input`
  padding: 15px 20px;
  border-radius: 50px;
  border: 1px solid #67676c;
  background-color: #1f1f21;
  width: 500px;
  outline: none;
  font-size: 21px;
  color: #e4e4e6;
  box-sizing: border-box;

  &::-webkit-input-placeholder {
    font-family: FontAwesome;
    font-weight: normal;
    overflow: visible;
    vertical-align: top;
    display: inline-block !important;
    padding-left: 7px;
    padding-top: 2px;
  }
`;

const MovieListStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
