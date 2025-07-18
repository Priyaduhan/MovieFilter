import React, { useState } from "react";
import Poster from "./Poster";
import Modal from "./Modal";

const Card = ({ movieList }) => {
  const [showModal, setShowModal] = useState(false); // to show card modal
  const [selected, setselected] = useState(null); // if card is selected or not

  function handleClick(index) {
    setselected(index);
    setShowModal(true);
  }
  console.log(`showmodal is ${showModal}`);

  return (
    <div className="mt-2">
      {/* <h1 className="font-bold text-center text-xl text-[#5279A3] mt-[3rem]">
        All Movies
      </h1> */}
      <div>
        <div className="sm:grid sm:grid-cols-2 sm:place-content-around gap-2 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {movieList.map((movie, index) => (
            <li
              key={movie.id}
              className="list-none mb-2   "
              onClick={() => handleClick(index)}
            >
              <Poster movie={movie} />
            </li>
          ))}
        </div>
      </div>
      {showModal && selected !== null && (
        <Modal
          movie={movieList[selected]}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Card;
