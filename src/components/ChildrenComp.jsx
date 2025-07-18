import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import components
import Navbar from "./Navbar";
import ChildPoster from "./ChildPoster";
import Modal from "./Modal";
import heroBg from "../assets/hero-bg.png";

const ChildrenComp = () => {
  // const [young, setYoung] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // filtered card for 13+
  const [showChild, setShowChild] = useState(false); //state to show pop card
  const [selectedChild, setSelectedChild] = useState(null); // if the current card is selected or not
  const [showModal, setShowModal] = useState(false); // to show pop card when clicked
  let filtered;
  const handleClick = (index) => {
    setSelectedChild(index);
    setShowChild(true);
  };

  const getChildData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=true&page=7&sort_by=popularity.desc&api_key=d68e08fbd2b798d2d15aca9b2f3f0ad4"
      )
      .then((response) => {
        console.log(" children movie data fetch");
        let results = response.data.results;
        // setYoung();
        filtered = results.filter((item) => item.adult == false);
        setFilteredData(filtered);

        console.log(response.data.results);
      });
  };
  useEffect(() => {
    getChildData();
  }, []);
  return (
    <div style={{ backgroundImage: `url(${heroBg})` }}>
      <Navbar />
      <h1 className="text-white  ml-[43%] font-medium text-2xl my-4">Above 13+ Movies</h1>
      <div className="sm:grid sm:grid-cols-3 sm:place-content-around gap-2">
        {filteredData.map((filterChild, index) => (
          <div key={filterChild.id} onClick={() => handleClick(index)}>
            {" "}
            <Link to={`/children/${filterChild.id}`}>
              <ChildPoster filterChild={filterChild} />
            </Link>
          </div>
        ))}
        {/* {young
          .filter((item) => item.adult == false)
          .map((filterChild) => (
            <ChildPoster key={filterChild.id} filte rChild={filterChild} />
          ))} */}

        {/* {young.map((filterChild) => (
          
          <ChildPoster key={filterChild.id} filterChild={filterChild} />
        ))} */}
      </div>
      {selectedChild !== null && showChild && (
        <Modal
          movie={filteredData[selectedChild]}
          showModal={showChild}
          setShowModal={setShowChild}
        />
      )}
    </div>
  );
};

export default ChildrenComp;
