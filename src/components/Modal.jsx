import React, { useRef } from "react";
// import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const Modal = ({
  movie: { original_title, overview, backdrop_path, popularity, id },
  showModal,
  setShowModal,
}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  // const movi_id = useParams();
  // console.log(`params is ${movi_id}`);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 backdrop-blur-sm flex justify-center items-center"
    >
      {/* ⬇️ inner Modal box (without ref and without onClick) */}
      <div className="flex flex-col gap-3 items-center bg-gray-500 rounded-xl p-2">
        <h2 className="font-extrabold text-2xl">{original_title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
        <p className="text-xl max-w-xl px-2 text-center">{overview}</p>
        <div className="flex justify-center gap-2">
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className="text-3xl text-red-900"
          />
          <h4 className="text-xl mb-0.5">{popularity.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Modal;
