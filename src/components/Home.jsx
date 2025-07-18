import React, { useState, useEffect, Children } from "react";
import axios from "axios";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Card from "./Card";
import ChildrenComp from "./ChildrenComp";
import heroBg from "../assets/hero-bg.png";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  //
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const getMovieData = (query = "") => {
    axios
      .get(
        query
          ? `https://api.themoviedb.org/3/search/movie?include_adult=true&query=${encodeURIComponent(
              query
            )}&api_key=d68e08fbd2b798d2d15aca9b2f3f0ad4`
          : "https://api.themoviedb.org/3/discover/movie?include_adult=true&page=7&sort_by=popularity.desc&api_key=d68e08fbd2b798d2d15aca9b2f3f0ad4"
      )
      .then((response) => {
        console.log("data fetch");
        setMovieList(response.data.results);

        console.log(response.data.results);
      });
  };
  useEffect(() => {
    getMovieData(debounceSearchTerm);
  }, [debounceSearchTerm]);
  return (
    <div style={{ backgroundImage: `url(${heroBg})` }} >
      <Navbar />
      <Hero searchTerm={searchTerm} setsearchTerm={setSearchTerm} />
      <Card movieList={movieList}></Card>
    </div>
  );
};

export default Home;
