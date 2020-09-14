import { SAVE_TOURNAMENT, REMOVE_TOURNAMENT } from "./actions";

const savedTournaments = localStorage.savedTournaments
  ? JSON.parse(localStorage.savedTournaments)
  : {};

export const initialState = {
  savedTournaments
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SAVE_TOURNAMENT:
      const savedTournaments = { ...state.savedTournaments, ...payload };
      localStorage.savedTournaments = JSON.stringify(savedTournaments);
      return {
        ...state,
        savedTournaments
      };
    case REMOVE_TOURNAMENT:
      localStorage.savedTournaments = JSON.stringify({ ...payload });
      return {
        ...state,
        savedTournaments: { ...payload }
      };
    default:
      return state;
  }
};
