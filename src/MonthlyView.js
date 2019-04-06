import React from "react";
import styled from "styled-components";

import { SimpleCard } from "./Card";

const Layout = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;

  h2 {
    grid-column: 1/-1;
  }
`;

const mL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const mS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

export default function MonthlyView(props) {
  const monthly = props.monthly;
  const obj = props.info;
  const delCard = props.delCard;
  console.log("obj: ", obj);
  console.log("monthly: ", monthly);

  return Object.keys(monthly).map(m => {
    return (
      <React.Fragment>
        <h2 onClick={props.toggleNextSib}>{mL[m]}</h2>
        <Layout className="content">
          {monthly[m].map(day => {
            return (
              <SimpleCard
                delCard={delCard}
                key={day}
                id={day}
                info={obj[day]}
                // passed={moment().format("YYYY-MM-DD") > day ? true : false}
                // checkToday={day === today ? "today" : ""}
              />
            );
          })}
          {/* <Month key={mS[m]} info={obj} month={monthly[m]} /> */}
        </Layout>
      </React.Fragment>
    );
  });
}
