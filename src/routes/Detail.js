import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(getMovie, []);
  console.log(movie);
  return (
    <div>
      {movie !== "" ? (
        <>
          <img src={movie.large_cover_image} />
          <h1>{movie.title}</h1>
          <strong>Genre :</strong>
          <ul>
            {movie.genres.map((genre, index) => {
              return <li key={index}>{genre}</li>;
            })}
          </ul>
          <p>
            <strong>Synopsis : </strong> {movie.description_full}
          </p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Detail;
