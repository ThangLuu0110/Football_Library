export interface dataPlayers{
    id: number;
    playerName: string;
  }
  
export interface dataClubs{
  id: number;
  league: string;
  competitionName: string;
  name: string;
}

export interface dataAgent{
  id: number;
  companyName: string;
}

export  interface dataCoaches{
  id: number;
  coachName: string;
  currentFunction: string;
}

export interface dataReferrees{
  id: number;
  club: string;
  refereeName: string;
}

export interface dataCompetitions{
  id: string;
  competitionName: string;
  country: string;
}

export interface count{
  clubs: number;
  coaches: number;
  competitions: number;
  players: number;
  referees: number;
}