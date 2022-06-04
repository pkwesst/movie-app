import Styled from "styled-components";

const MovieItem = ({ movie }) => {
  const { title, overview, release_date, poster_path, vote_average } = movie;

  console.log(movie);

  return (
    <MovieItemStyle>
      {
        <div className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            alt={title}
          />
          <div className="movie-info">
            <h3>{title}</h3>
            <span>⭑{vote_average}</span>
          </div>
          <div className="movie-detail">
            <p>Realese Date {release_date}</p>
            <h4>OVERVIEW</h4>
            <p>{overview}</p>
          </div>
        </div>
      }
      {<></>}
    </MovieItemStyle>
  );
};

export default MovieItem;

const MovieItemStyle = Styled.div`
    display: flex-column;
    margin: 50px;
    color: #e4e4e6;
    border-radius:5px;
    &:hover{
      cursor: pointer;
    }
    
    .movie{
        position: relative;
        width: 300px;  
        overflow: hidden; 
        margin:0;  
        background-color: #67676c;
        height: 560px;
        border-radius:5px;
    }

    &:hover .movie-detail {
        transform: translateY(0);
      }

    .movie img{
        display: block;
        width: 100%;
        object-fit: cover;
    }
    
    .movie-info{
        display: flex;
        justify-content: space-between;
        margin: 15px;
        
        h3{
          margin:0;
        }
        
        span{
            display: flex;
            justify-content: center;
            width: 37px;
            height: 25px;
            padding: 5px;
            font-size: 18px;
            border-radius: 5px;
            color: orange;
            background-color: #1f1f21;
        
        }
    }

    .movie-detail{
        max-height: 100%;
        padding: 1rem;
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        border-radius: 5px;
        background-color: #e4e4e6;
        color: #313134;
        transform: translateY(101%);
        overflow-y: auto;
        transition: transform 0.2s ease-in-out;
    }
`;
