import React from "react";
import styled from "styled-components";

import { SimpleCard } from "./Card";

const Layout = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;

  /* padding: 0 0 0.5rem 0; */

  h2 {
    grid-column: 1/-1;
  }
`;

export const mL = [
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
// const mS = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "June",
//   "July",
//   "Aug",
//   "Sept",
//   "Oct",
//   "Nov",
//   "Dec"
// ];

export default function MonthlyView(props) {
  const monthly = props.monthly;
  const obj = props.info;
  const delCard = props.delCard;

  return Object.keys(monthly).map(m => {
    return (
      <React.Fragment key={m}>
        <h2 onClick={props.toggleNextSib}>{mL[m]}</h2>
        <Layout className="">
          {monthly[m].map(day => {
            return (
              <SimpleCard
                delCard={delCard}
                key={day}
                id={day}
                info={obj[day]}
              />
            );
          })}
          {/* <Month key={mS[m]} info={obj} month={monthly[m]} /> */}
        </Layout>
      </React.Fragment>
    );
  });
}
