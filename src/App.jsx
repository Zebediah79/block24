import { useState } from "react";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          showData={tvShows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        ></ShowSelection>
      </header>
      <main>
        <ShowDetails
          showData={tvShows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        ></ShowDetails>
      </main>
    </>
  );
}
