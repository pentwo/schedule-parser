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
  border-radius: 10px;
  background-color: #eee;

  &:hover {
    /* background: lightgray; */
    box-shadow: 3px 3px 5px #111;
  }

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
  .today {
    background-color: red;
  }

  .etc {
    font-size: 0.8rem;
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
      <Container className={this.props.checkToday}>
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
        <div className="etc">
          <span>
            Breaks: {breaks} Hours: {pay}
          </span>
        </div>
      </Container>
    );
  }
}

export default Card;
