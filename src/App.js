import { createGlobalStyle } from "styled-components";
import MovieList from "./components/MovieList";

const GlobalStyle = createGlobalStyle`
body{
  background-color: #1f1f21;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  box-sizing: border-box;
  display: flex;

}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MovieList />
    </div>
  );
}

export default App;
