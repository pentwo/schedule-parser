import React, { Component } from "react";
import styled from "styled-components";

// import moment from "moment";

const Container = styled.div`
  /* font-size: 1.5rem; */
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  border: 2px solid #111;

  label {
    text-transform: capitalize;
  }
  button {
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    text-align: right;
    grid-column: span 2;
  }
  span {
    text-align: center;
    grid-column: span 2;
  }

  .cardTitle {
    margin-bottom: 0.5rem;
    text-align: center;
    grid-column: span 2;
  }
  .date,
  .start,
  .end,
  .total,
  .breaks,
  .pay,
  .week {
    margin: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-column: span 2;
    text-align: center;
  }
`;

export class Card extends Component {
  delCard = () => {
    this.props.delCard(this.props.id);
  };

  render() {
    // const day = this.props.info;

    const { date, start, end, total, breaks, pay, week } = this.props.info;

    // console.log("day: ", day);
    return (
      <Container>
        {/* {Object.keys(day).map(d => {
          return (
            <div className={d} key={d}>
              <label>{d}</label> <span>{day[d]}</span>
            </div>
          );
        })} */}
        <button onClick={this.delCard}>
          <span role="img" aria-label="cross">
            ❌
          </span>
        </button>
        <h3 className="cardTitle">{date}</h3>
        <div className="start">
          <label>Start</label>
          {start}
        </div>
        <span role="img" aria-label="arrow-down">
          ⬇️
        </span>
        <div className="end">
          <label>End</label>
          {end}
        </div>
      </Container>
    );
  }
}

export default Card;
