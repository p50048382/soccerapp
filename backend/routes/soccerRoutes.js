import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  UpdatePlayer,
  deletePlayer,
} from "../controllers/playerController";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);

  app
    .route("/player/:PlayerId")
    .get(getPlayerWithID)
    .get(UpdatePlayer)
    .delete(deletePlayer);
};

export default routes;
