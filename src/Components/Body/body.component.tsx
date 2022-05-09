import React, { Component } from "react";
import Loading from "../Adding/loading";
import getData from "../Api/football.api";
import {
  DataClubs,
  DataCoaches,
  DataCompetitions,
  DataPlayers,
  DataReferrees,
} from "../const/const";
import DataTable from "./datatable";
import SearchPart from "./SearchPart";

interface BodyState {
  inputValue: string;
  playersList: DataPlayers[];
  clubsList: DataClubs[];
  coachesList: DataCoaches[];
  refereesList: DataReferrees[];
  competitionsList: DataCompetitions[];
  isShow: boolean;
  isLoading: boolean;
}

export default class Body extends Component {
  state = {
    inputValue: "",
    playersList: [],
    clubsList: [],
    coachesList: [],
    refereesList: [],
    competitionsList: [],
    isShow: false,
    isLoading: false,
  } as BodyState;

  updateInputValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({
      ...this.state,
      inputValue: e.target.value,
    });
  };

  handleSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (this.state.inputValue === "") {
      this.setState({
        ...this.state,
        isShow: false,
      });
      alert("Please enter");
    } else {
      this.setState(
        {
          ...this.state,
          isShow: false,
          isLoading: true,
        },
        () => {
          getData(this.state.inputValue).then((data: any) => {
            this.setState(
              {
                ...this.state,
                playersList: data?.players || [],
                clubsList: data?.clubs || [],
                coachesList: data?.coaches || [],
                refereesList: data?.referees || [],
                competitionsList: data?.competitions || [],
              },
              () => {
                console.log("stop loading");
                this.checkCount(data);
              }
            );
          });
        }
      );
    }
  };

  checkCount(data: any) {
    if (
      !data.clubs &&
      !data.players &&
      !data.competitions &&
      !data.coaches &&
      !data.referees
    ) {
      alert("No results");
    } else {
      this.setState({
        ...this.state,
        isShow: true,
        isLoading: false,
      });
    }
  }

  resetSearch = () => {
    this.setState({
      ...this.state,
      inputValue: "",
    });
  };

  render() {
    return (
      <div className="body">
        <SearchPart
          value={this.state.inputValue}
          updateValue={this.updateInputValue}
          handleSearch={this.handleSearch}
        />
        {this.state.isShow && (
          <DataTable
            playersList={this.state.playersList}
            clubsList={this.state.clubsList}
            refereesList={this.state.refereesList}
            coachesList={this.state.coachesList}
            competitionsList={this.state.competitionsList}
          />
        )}
        {this.state.isLoading === true && <Loading />}
      </div>
    );
  }
}
