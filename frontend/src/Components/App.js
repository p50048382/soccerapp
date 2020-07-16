import React from "react";
import axios from "axios";
import "./App.css";
import PlayerList from "./Player/PlayerList";
import PlayerForm from "./Player/PlayerForm";
import PlayerSngle from "./Player/PlayerSngle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }
  componentDidMount() {
    const url = "http://localhost:4000/players";
    axios
      .get(url)
      .then((Response) => {
        this.setState({
          players: Response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue darken-3">
              <a href="#" className="brand-logo">
                Soccer Management
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            ></PlayerList>
          </div>
          <div className="col s9">
            <PlayerSngle player={this.state.currentPlayer}></PlayerSngle>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm></PlayerForm>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
