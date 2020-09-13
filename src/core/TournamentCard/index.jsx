import React from "react";
import "./index.scss";
import { Card, CardContent, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const TournamentCard = ({
  id,
  imgSrc,
  title,
  description,
  showRemoveBnt,
  handleOnRemoveClick,
}) => {
  return (
    <Card className="tournaments-option">
      <CardContent className="tournaments-option-content">
        <img
          height="40"
          width="40"
          src={`https://cdn-images.win.gg/${imgSrc}`}
          alt=""
        />
        <div className="tournaments-option-description">
          <h2 className="tournaments-option-title text-elipsis">{title}</h2>
          <p
            className="tournaments-option-text text-elipsis"
            title={description}
          >
            {description}
          </p>
          {showRemoveBnt ? (
            <IconButton
              className="tournaments-option-btn-close"
              onClick={() => handleOnRemoveClick(id)}
              aria-label="delete"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default TournamentCard;
