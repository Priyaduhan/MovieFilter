import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const ChildRedirect = () => {
  const [movie, setMovie] = useState([]);

  const { childId } = useParams();
  console.log(` children id is ${childId}`);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${childId}&api_key=d68e08fbd2b798d2d15aca9b2f3f0ad4`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjhlMDhmYmQyYjc5OGQyZDE1YWNhOWIyZjNmMGFkNCIsIm5iZiI6MTc0NDY5NTQ4Mi42NzgwMDAyLCJzdWIiOiI2N2ZkZjBiYTMxMTBiZDgyZGZhZDVhZDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.706ECbfWpmlgKnbSl3pWmXrunLl_W0uZEbmREggdUus",
          },
        }
      )
      .then((response) => {
        console.log("movie with id ");
        let results = response.data;
        console.log(results);
        setMovie(results);
      });
  }, [childId]);

  return (
    <div>
      {movie.original_title}
      <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col gap-3 items-center bg-gray-500 rounded-xl p-2">
          <h2 className="font-extrabold text-2xl">{movie.original_title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt=""
          />
          <p className="text-xl max-w-xl px-2 text-center">{movie.overview}</p>
          <div className="flex justify-center gap-2">
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className="text-3xl text-red-900"
            />
            <h4 className="text-xl mb-0.5">{movie.popularity}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildRedirect;
