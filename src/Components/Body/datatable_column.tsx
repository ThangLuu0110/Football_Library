import React from 'react';

interface DatatableColumnProps{
    datas: Array<any>;

}

export default function DatatableColumn({datas}: DatatableColumnProps) {
        return(
            <div>
                <ul>
                    {datas.map(data => (
                        <li key={data.id}>
                            {
                                data.name || 
                                data.playerName || 
                                data.coachName || 
                                data.refereeName || 
                                data.agentName || 
                                data.competitionName
                            }
                        </li>
                    ))}
                </ul>
            </div>
        )
}   
