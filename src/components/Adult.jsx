import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import components
import Navbar from "./Navbar";
import AdultPoster from "./AdultPoster";
import Modal from "./Modal";
import heroBg from "../assets/hero-bg.png";

const Adult = () => {
  const [aboveTeen, setAboveTeen] = useState([]);
  const [showChild, setShowChild] = useState(false); //showing the modal component
  const [selectedChild, setSelectedChild] = useState(null); // for selecting index
  const [filteredData, setFilteredData] = useState([]); // for filtered index
  let filtered;
  const handleClick = (index) => {
    setSelectedChild(index);
    setShowChild(true);
  };

  const getAboveTeenData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.desc&include_adult=false&page=1&api_key=d68e08fbd2b798d2d15aca9b2f3f0ad4"
      )
      .then((response) => {
        console.log(" Adult movies data fetch");
        const results = response.data.results;
        setAboveTeen(results);

        console.log(response.data.results);
        filtered = results.filter((item) => item.original_language == "hi");
        setFilteredData(filtered);
      });
  };
  useEffect(() => {
    getAboveTeenData();
  }, []);
  console.log(filtered);

  console.log(`filtered DAta = ${filteredData}`);

  return (
    <div style={{ backgroundImage: `url(${heroBg})` }} className="h-full">
      <Navbar />

      <div className="sm:grid sm:grid-cols-3 sm:place-content-around gap-2 pb-2 mt-6">
        {filteredData.map((filterAdult, index) => (
          <div key={filterAdult.id} onClick={() => handleClick(index)}>
            {" "}
            <Link to={`/adult/${filterAdult.id}`}>
              <AdultPoster filterAdult={filterAdult} />
            </Link>
          </div>
        ))}
        {/* {aboveTeen
          .filter((item) => item.adult == true)
          .map((filterAdult, index) => (
            <div key={filterAdult.id} onClick={() => handleClick(index)}>
              {" "}
              <AdultPoster filterAdult={filterAdult} />
            </div>
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

export default Adult;
