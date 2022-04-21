import React, { useState } from 'react';
import clsx from 'clsx';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { GiTrophyCup, GiSoccerKick, GiWhistle } from 'react-icons/gi';
import { BsFillPeopleFill, BsGear } from 'react-icons/bs';
import { MdManageAccounts } from 'react-icons/md';
import DatatableContent from './datatable_content';
import SettingBox from '../Adding/settings_box';

interface datatableProps{
    playersList: Array<any>;
    clubsList: Array<any>;
    coachesList: Array<any>;
    refereesList: Array<any>;
    competitionsList: Array<any>;
}

enum ActiveEnum {
    all,
    competition,
    club,
    player,
    coach,
    referee
}

type ActiveEnumKey = keyof typeof ActiveEnum;


export default function DataTable({ 
    playersList, 
    clubsList, 
    coachesList, 
    refereesList, 
    competitionsList,
}: datatableProps) {
    const [activeId, setActiveId] = useState<ActiveEnumKey>('all');
    const [showCompetitionsTab, setShowCompetitionsTab] = useState(true);
    const [showClubsTab, setShowCLubsTab] = useState(true);
    const [showPlayersTab, setShowPlayersTab] = useState(true);
    const [showCoachesTab, setShowCoachesTab] = useState(true);
    const [showRefereesTab, setShowRefereesTab] = useState(true);


    const [openSettings, setOpenSettings] = useState<boolean>(false);

    const allList = competitionsList.concat(playersList, clubsList, coachesList, refereesList)

    const handleAcivte = (id: ActiveEnumKey) => {
        setActiveId(id);
    }
    
    const handleOpenSettings:React.MouseEventHandler<HTMLDivElement> = (e) => {
        setOpenSettings(!openSettings);
    }
    return(
        <div className="body__table">
            <div className="table__title">
                <div 
                    className={clsx('settings',openSettings ? "clicked" : "unclicked")} 
                    onClick={handleOpenSettings}
                >
                    <BsGear />
                </div>
                {/* <div className={clsx('underline',
                    activeId === 'all' && 'all',    
                    activeId === 'competition' && 'competition',
                    activeId === 'club' && 'club',
                    activeId === 'player' && 'player',
                    activeId === 'coach' && 'coach',
                    activeId === 'referee' && 'referee'
                )}></div> */}
                <ul className="table__title-list">
                    <li 
                        id='all'
                        className={clsx("table__title-items", activeId === 'all' && 'active')}
                        onClick={(e)=> {handleAcivte('all')}}
                    >   
                        <span className="icon">
                            <AiOutlineUnorderedList />
                        </span>
                        <span className="text">
                            All 
                        </span>
                    </li>
                    {   
                        showCompetitionsTab && 
                        <li 
                            id='competition'
                            className={clsx("table__title-items", activeId === 'competition' && 'active')}
                            onClick={(e)=> {handleAcivte('competition')}}
                        >   
                            <span className="icon">
                                <GiTrophyCup /> 
                            </span>
                            <span className="text">
                                Competitions 
                            </span>
                        </li>
                    }
                    {
                        showClubsTab &&
                        <li 
                            className={clsx("table__title-items", activeId === 'club' && 'active')}
                            onClick={(e)=> {handleAcivte('club')}}
                        >   
                            <span className="icon">
                                <BsFillPeopleFill /> 
                            </span>
                            <span className="text">
                                Clubs 
                            </span>
                        </li>
                    }
                    {
                        showPlayersTab &&
                        <li className={clsx("table__title-items", activeId === 'player' && 'active')}
                            onClick={(e)=> {handleAcivte('player')}}
                        >
                            <span className="icon">
                                <GiSoccerKick /> 
                            </span>
                            <span className="text">
                                Players 
                            </span>
                        </li>
                    }
                    {
                        showCoachesTab &&
                        <li className={clsx("table__title-items", activeId === 'coach' && 'active')}
                            onClick={(e)=> {handleAcivte('coach')}}
                        >   
                            <span className="icon">
                                <MdManageAccounts /> 
                            </span>
                            <span className="text">
                                Coaches 
                            </span>
                        </li>
                    }
                    {
                        showRefereesTab &&
                        <li className={clsx("table__title-items", activeId === 'referee' && 'active')}
                            onClick={(e)=> {handleAcivte('referee')}}
                        > 
                            <span className="icon">
                                <GiWhistle /> 
                            </span>
                            <span className="text">
                                Referees 
                            </span>
                        </li>
                    }
                </ul>
            </div>
            <div className="table__content">
                { openSettings && <SettingBox 
                    competitionsTab={showCompetitionsTab}
                    clubsTab={showClubsTab}
                    playersTab={showPlayersTab}
                    coachesTab={showCoachesTab}
                    refereesTab={showRefereesTab}
                    setCompetitionsTab={setShowCompetitionsTab}
                    setClubsTab={setShowCLubsTab}
                    setPlayersTab={setShowPlayersTab}
                    setCoachesTab={setShowCoachesTab}
                    setRefereesTab={setShowRefereesTab}
                />}
                <div className="table__content-page">
                    { activeId === 'all' && <DatatableContent list={allList} /> }  
                    { activeId === 'competition' && <DatatableContent list={competitionsList} /> }
                    { activeId === 'club' && <DatatableContent list={clubsList} /> }
                    { activeId === 'player' && <DatatableContent list={playersList} />}
                    { activeId === 'coach' && <DatatableContent list={coachesList} />}
                    { activeId === 'referee' && <DatatableContent list={refereesList} />}
                </div>
            </div>
        </div>
    )
}