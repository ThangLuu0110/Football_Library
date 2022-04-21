export interface DataPlayers{
    id: number;
    playerName: string;
    club: string;
    playerImage: string;
  }
export interface DataClubs{
  id: string;
  competitionName: string;
  name: string;
  logoImage: string;
}
export  interface DataCoaches{
  id: string;
  coachName: string;
  currentFunction: string;
  coachImage: string
}

export interface DataReferrees{
  id: string;
  club: string;
  refereeName: string;
  refereeImage: string;
}

export interface DataCompetitions{
  id: string;
  competitionName: string;
  country: string;
  competitionImage: string;
}
