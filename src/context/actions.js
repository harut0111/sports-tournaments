export const SAVE_TOURNAMENT = "SAVE_TOURNAMENT";
export const REMOVE_TOURNAMENT = "REMOVE_TOURNAMENT";

export const saveTournament = (payload) => ({
  type: SAVE_TOURNAMENT,
  payload,
});
export const removeTournament = (payload) => ({
  type: REMOVE_TOURNAMENT,
  payload,
});
