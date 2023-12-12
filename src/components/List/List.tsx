import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { Episode } from "../../models/Episode";
import { Response } from "../../models/Response";
import "./List.css";

interface IListProps {}

const List: React.FC<IListProps> = (): JSX.Element => {
  const [errors, setErrors] = useState([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [episodes2, setEpisodes2] = useState<Response>();
  const [currentEpisode, setCurrentEpisode] = useState(1);

  const nextEpisode = () => {
    if (currentEpisode < 20) {
      setCurrentEpisode(currentEpisode + 1);
    } else if (currentEpisode === 20) {
      setCurrentEpisode(1);
    }
  };

  const previousEpisode = () => {
    if (currentEpisode > 1) {
      setCurrentEpisode(currentEpisode - 1);
    } else if (currentEpisode === 1) {
      setCurrentEpisode(20);
    }
  };

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => {
        setEpisodes(response.data.results);
      })
      .catch((error) => {
        setErrors(error);
      });

    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((json) => setEpisodes2(json))
      .catch((error) => console.error(error));

    console.log("episode2", episodes2);
  }, []);

  return (
    <div>
      <h3>Browse through different Rick and Morty episodes</h3>
      <p>
        This a simple example using axios, typescript and the Rick and Morty API
        to fetch some data and display as a circular slider to users.
      </p>
      <p className={errors.length > 0 ? "error" : "noError"}>
        {errors.length > 0 ? "Error fetching data" : "Succesfull data fetching"}
      </p>
      <div className="episodeSlider">
        <button onClick={previousEpisode}>Previous</button>
        {episodes
          .filter((episode) => episode.id === currentEpisode)
          .map((episode) => (
            <Card title={episode.name} />
          ))}
        <button onClick={nextEpisode}>Next</button>
      </div>
    </div>
  );
};

export default List;
