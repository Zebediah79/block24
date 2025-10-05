import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";
/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ showData, selectedShow }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  if (!selectedShow === true) {
    return <p className="show">Please select a show to learn more.</p>;
  }
  return (
    <div className="show-details">
      <EpisodeList
        name={selectedShow.name}
        episodes={selectedShow.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      ></EpisodeList>
      <EpisodeDetails episode={selectedEpisode}></EpisodeDetails>
    </div>
  );
}
