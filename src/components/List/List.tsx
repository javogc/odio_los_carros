import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { Episode } from "../../models/Episode";
import { Response } from "../../models/Response";
import "./List.css";

interface IListProps {
  title: string;
  subtitle: string;
  fetchingSuccess: string;
  fetchingFailed: string;
}

const List: React.FC<IListProps> = ({
  title,
  subtitle,
  fetchingSuccess,
  fetchingFailed,
}): JSX.Element => {
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
  }, []);

  return (
    <div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p className={errors.length > 0 ? "error" : "noError"}>
        {errors.length > 0 ? fetchingFailed : fetchingSuccess}
      </p>
      <div className="episodeSlider">
        <button onClick={previousEpisode}>{"<"}</button>
        {episodes
          .filter((episode) => episode.id === currentEpisode)
          .map((episode) => (
            <Card title={episode.name} key={episode.id} />
          ))}
        <button onClick={nextEpisode}>{">"}</button>
      </div>
    </div>
  );
};

export default List;
