import React from "react";
import "./index.scss";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../../context";
import TournamentCard from "../../core/TournamentCard";
import { removeTournament } from "../../context/actions";

export default function SavedItems() {
  const [{ savedTournaments }, dispatch] = useStateValue();

  const handleOnRemoveClick = (id) => {
    const { [id]: value, ...rest } = savedTournaments;
    dispatch(removeTournament(rest));
  };

  return (
    <div className="saved-items-wrapper">
      <Grid container mt={20} spacing={3}>
        {Object.keys(savedTournaments).map((key) => (
          <Grid key={key} item xs={12} md={6} lg={4}>
            <TournamentCard
              id={key}
              description={savedTournaments[key].description}
              imgSrc={savedTournaments[key].imgSrc}
              title={savedTournaments[key].title}
              showRemoveBnt={true}
              handleOnRemoveClick={handleOnRemoveClick}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
