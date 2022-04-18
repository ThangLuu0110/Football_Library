import React, { Component } from 'react';
import { dataAgent, dataClubs, dataCoaches, dataPlayers, dataReferrees } from './Components/const/const';
import Header from './Components/Header/Header';
import SearchPart from './Components/Header/SearchPart';
import getData from './Components/Api/football.api';

interface AppState {
  inputValue: string;
  playersList: dataPlayers[];
  clubsList: dataClubs[];
  coachesList: dataCoaches[];
  agentsList: dataAgent[];
  refereesList: dataReferrees[];
}
class App extends Component {
  state = {
    inputValue: '',
    playersList: [],
    clubsList: [],
    coachesList: [],
    agentsList: [],
    refereesList: [],
  } as AppState;
  
  searchRef = React.createRef<HTMLInputElement>();

  updateInputValue = (e: any) => {
    this.setState({
      ...this.state,
      inputValue: e.target.value,
    })
  }

  handleSearch = () => {
    getData(this.state.inputValue)
    .then((data: any) => {
      console.log(data);
      this.setState({
        ...this.state,
        playersList: data?.players,
        clubsList: data?.clubs,
        coachesList: data?.coaches,
        agentsList: data?.agents,
        refereesList: data?.referees,
      }, () => {
        this.resetSearch();
      })
    });
  }

  resetSearch = () => {
    this.setState({
      ...this.state,
      inputValue: '',
    }, () => {
      this.searchRef.current?.focus();
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchPart />
        <input
          ref={this.searchRef}
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
        <button
          onClick={this.handleSearch}
          type="button"
        >
          Search
        </button>
    </div>
  )
  }
}

export default App;
