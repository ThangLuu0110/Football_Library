import React, { Component } from 'react';
import getData from '../Api/football.api';
import { 
    count,
    dataAgent, 
    dataClubs, 
    dataCoaches, 
    dataCompetitions, 
    dataPlayers, 
    dataReferrees 
} from '../const/const';
import DataTable from './datatable';
import SearchPart from './SearchPart';

interface BodyState{
    inputValue: string;
    playersList: dataPlayers[];
    clubsList: dataClubs[];
    coachesList: dataCoaches[];
    agentsList: dataAgent[];
    refereesList: dataReferrees[];
    competitionsList: dataCompetitions[];
    count: count[];
}

export default class Body extends Component {
    state = {
        inputValue: '',
        playersList: [],
        clubsList: [],
        coachesList: [],
        agentsList: [],
        refereesList: [],
        competitionsList: [],
        count: [],
      } as BodyState;

      updateInputValue = (e: any) => {
        this.setState({
          ...this.state,
          inputValue: e.target.value,
        })
      }
    
      handleSearch = () => {
        if(this.state.inputValue === ''){
            alert('Please enter');
        }else{
            getData(this.state.inputValue)
            .then((data: any) => {
              this.setState({
                ...this.state,
                playersList: data?.players,
                clubsList: data?.clubs,
                coachesList: data?.coaches,
                agentsList: data?.agents,
                refereesList: data?.referees,
                competitionsList: data?.competitions,
                count: data?.count,
              }, () => {
                  console.log('stop loading');
                  this.checkCount(data);
              })
            });
        }
      }
      
      checkCount(data: any){
          if(!data.clubs && !data.players && !data.competitions && !data.agents && !data.coaches && !data.referees){
              alert('No results');
          }  
      }

      resetSearch = () => {
        this.setState({
          ...this.state,
          inputValue: '',
        })
      }
      
    render() {
        return (
            <div className="body">
                <SearchPart 
                    value={this.state.inputValue}
                    updateValue={this.updateInputValue}
                    handleSearch={this.handleSearch}
                />
                <DataTable 
                    playersList={this.state.playersList}
                    clubsList={this.state.clubsList}
                    agentsList={this.state.agentsList}
                    refereesList={this.state.refereesList}
                    coachesList={this.state.coachesList}
                    competitionsList={this.state.competitionsList}
                />
            </div>
        )
    }
}