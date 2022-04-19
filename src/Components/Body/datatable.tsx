import React from 'react';
import DatatableColumn from './datatable_column';

interface datatableProps{
    playersList: Array<any>;
    clubsList: Array<any>;
    coachesList: Array<any>;
    agentsList: Array<any>;
    refereesList: Array<any>;
    competitionsList: Array<any>;
}
export default function DataTable({ 
    playersList, 
    clubsList, 
    coachesList, 
    refereesList, 
    agentsList,
    competitionsList
}: datatableProps) {

    return(
        <table className="body__table">
            <thead className="body__table-head">
                <tr>
                    <th className="body__table-head__items"> Conpetitions </th>
                    <th className="body__table-head__items"> Clubs </th>
                    <th className="body__table-head__items"> Players </th>
                    <th className="body__table-head__items"> Coaches </th>
                    <th className="body__table-head__items"> Agents </th>
                    <th className="body__table-head__items"> Referees </th>
                </tr>
            </thead>
            <tbody className="body__table-body">
                <tr>
                    <td>
                        { 
                            competitionsList && <DatatableColumn datas={competitionsList}/>
                        }
                    </td>
                    <td>
                        { 
                            clubsList && <DatatableColumn datas={clubsList}/>
                        }
                    </td>
                    <td>
                        { 
                            playersList && <DatatableColumn datas={playersList}/>
                        }
                    </td>
                    <td>
                        { 
                            coachesList && <DatatableColumn datas={coachesList}/>
                        }
                    </td>
                    <td>
                        { 
                            agentsList && <DatatableColumn datas={agentsList}/>
                        }
                    </td>
                    <td>
                        { 
                            refereesList && <DatatableColumn datas={refereesList}/>
                        }
                    </td>   
                </tr>
            </tbody>
        </table>
        
    )
}