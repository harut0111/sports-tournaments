import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useStateValue } from "../../context";
import { saveTournament } from "../../context/actions";
import TournamentCard from "../../core/TournamentCard";
import "./index.scss";

export default function SearchBox() {
  const [{ savedTournaments }, dispatch] = useStateValue();
  const [tournaments, setTournaments] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const fetchTournaments = async (event) => {
    const value = event.target.value;
    if(value.length < 2) return
    try {
      setLoading(true);
      const response = await fetch(
        `https://api-search.win.gg/search?q=${value}&index=tournament`
      );
      
      const result = await response.json();
      if (result.length) {
        const tournaments = result[0].documents;
        setTournaments(tournaments);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const renderOption = (option) => {
    const imgSrc = option.images?.default?.filePath;
    return (
      <React.Fragment>
        <TournamentCard
          imgSrc={imgSrc}
          title={option.title}
          description={option.description}
          showRemoveBnt={false}
        />
      </React.Fragment>
    );
  };

  const handleOnChange = (tournament) => {
    if (tournament) {
      const { description, id, images, title } = tournament;
      const imgSrc = images?.default?.filePath;
      if (id in savedTournaments) alert("already saved");
      else {
        const data = { [id]: { description, imgSrc, title } };
        dispatch(saveTournament(data));
      }
    }
  };

  return (
    <Autocomplete
      id="tournaments-search-box"
      className="tournaments-search-box"
      loading={isLoading}
      onChange={(event, tournament) => handleOnChange(tournament)}
      options={tournaments}
      getOptionLabel={(option) => option.title}
      renderOption={(option) => renderOption(option)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(event) => fetchTournaments(event)}
          label="Type here to search tournaments"
          variant="outlined"
        />
      )}
    />
  );
}
