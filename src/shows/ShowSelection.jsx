import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  showData,
  selectedShow,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      {showData.map((show) => (
        <a
          className={`show ${
            selectedShow?.name === show.name ? "selected" : ""
          }`}
          key={show.name}
          onClick={() => {
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
