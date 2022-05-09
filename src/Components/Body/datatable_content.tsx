import React from "react";

interface DatatableContentProps {
  list: Array<any>;
}

export default function DatatableContent({ list }: DatatableContentProps) {
  const dataList: Array<any> = [];

  list &&
    list.forEach((item) => {
      dataList.push({
        dataId: item.id,
        dataName:
          item.name ||
          item.coachName ||
          item.competitionName ||
          item.playerName ||
          item.refereeName,
        dataInfor:
          item.country ||
          item.competitionName ||
          item.currentFunction ||
          item.club,
        dataImage:
          item.playerImage ||
          item.logoImage ||
          item.coachImage ||
          item.refereeImage ||
          item.competitionImage,
      });
    });

  return (
    <ul className="list">
      {dataList.map((data) => (
        <li key={data.dataId} className="list__items">
          <div className="list__items-logo">
            <img src={data.dataImage} alt="logo" />
          </div>
          <div className="list__items-text">
            <span className="heading">{data.dataName}</span>
            <br />
            <span className="adding">
              <i>{data.dataInfor}</i>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
