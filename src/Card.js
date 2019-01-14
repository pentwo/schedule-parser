import React, { Component } from "react";
import styled from "styled-components";

// import moment from "moment";

const Container = styled.div`
  /* font-size: 1.5rem; */
  /* padding: 0.5rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  border: 2px solid #111;
  background-color: #eee;

  label {
    text-transform: capitalize;
  }
  button {
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    grid-column: span 2;
    cursor: pointer;
    justify-self: end;
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

  .digi {
    font-size: 2rem;
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
        <h2 className="cardTitle">{date}</h2>
        <div className="start">
          <label>Start </label>
          <span className="digi">{start}</span>
        </div>
        <span role="img" aria-label="arrow-down">
          ⬇️
        </span>
        <div className="end">
          <label>End</label>
          <span className="digi">{end}</span>
        </div>
      </Container>
    );
  }
}

export default Card;
