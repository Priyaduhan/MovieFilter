import React from "react";

const AdultPoster = ({
  filterAdult: {
    original_title,
    original_language,
    poster_path,
    release_date,
    vote_average,
    adult,
    video,
  },
}) => {
  return (
    <div>
      {
        <div className="w-[280px] mx-auto  rounded-md text-center bg-[#A0B7CF] text-black ">
          <div
            className=" h-[300px] w-[210px] bg-cover bg-no-repeat mx-[30px]  "
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
            }}
          >
            {
              <div className="bg-gray-200 text-green-600 w-[1.9rem] text-center rounded-br-sm  ">
                18+
              </div>
            }

            <h2 className="mt-[15.7rem] ml-[12rem] bg-gray-200 text-center text-black w-[1.2rem] rounded-tl-sm">
              {original_language}
            </h2>
          </div>
          <div className="font-bold"> {original_title} </div>

          <div>
            {" "}
            {release_date} <span>• {vote_average.toFixed(1)}</span>
          </div>
        </div>
      }
    </div>
  );
};

export default AdultPoster;
