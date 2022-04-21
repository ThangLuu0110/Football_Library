import React from 'react';
import clsx from 'clsx';

interface SettingBoxProps{
    competitionsTab: boolean;
    clubsTab: boolean;
    playersTab: boolean;
    coachesTab: boolean;
    refereesTab:boolean;
    setCompetitionsTab: React.Dispatch<React.SetStateAction<boolean>>
    setClubsTab: React.Dispatch<React.SetStateAction<boolean>>;
    setPlayersTab: React.Dispatch<React.SetStateAction<boolean>>
    setCoachesTab: React.Dispatch<React.SetStateAction<boolean>>
    setRefereesTab: React.Dispatch<React.SetStateAction<boolean>>
}
export default function SettingBox({
    competitionsTab, 
    clubsTab, 
    playersTab,
    coachesTab,
    refereesTab,
    setCompetitionsTab, 
    setClubsTab,
    setPlayersTab,
    setCoachesTab,
    setRefereesTab
} : SettingBoxProps){

    return (
        <div className="setting-box">
            <ul className="setting-box__list">
                <li className="setting-box__items">
                    <span className={clsx("setting-box__items-text", competitionsTab === false && 'off')}> 
                        Competitions 
                    </span>
                    <div 
                        className={clsx("setting-box__items-switch", competitionsTab === false && 'off')}
                        onClick={() => setCompetitionsTab(!competitionsTab)}    
                    >
                        <div className="button">

                        </div>
                    </div>
                </li>
                <li className="setting-box__items">
                    <span className={clsx("setting-box__items-text", clubsTab === false && 'off')}> 
                        Clubs 
                    </span>
                    <div 
                        className={clsx("setting-box__items-switch", clubsTab === false && 'off')}
                        onClick={() => setClubsTab(!clubsTab)}    
                    >
                        <div className="button">

                        </div>
                    </div>
                </li>
                <li className="setting-box__items">
                    <span className={clsx("setting-box__items-text", playersTab === false && 'off')}> 
                       Players 
                    </span>
                    <div 
                        className={clsx("setting-box__items-switch", playersTab === false && 'off')}
                        onClick={() => setPlayersTab(!playersTab)}    
                    >
                        <div className="button">

                        </div>
                    </div>
                </li>
                <li className="setting-box__items">
                    <span className={clsx("setting-box__items-text", coachesTab === false && 'off')}> 
                       Coaches 
                    </span>
                    <div 
                        className={clsx("setting-box__items-switch", coachesTab === false && 'off')}
                        onClick={() => setCoachesTab(!coachesTab)}    
                    >
                        <div className="button">

                        </div>
                    </div>
                </li>
                <li className="setting-box__items">
                    <span className={clsx("setting-box__items-text", refereesTab === false && 'off')}> 
                       Referees 
                    </span>
                    <div 
                        className={clsx("setting-box__items-switch", refereesTab === false && 'off')}
                        onClick={() => setRefereesTab(!refereesTab)}    
                    >
                        <div className="button">

                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}