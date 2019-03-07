import React, { Component, createRef } from "react";
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
  .runs,
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

  .etc {
    font-size: 0.8rem;
    grid-column: span 2;
    text-align: center;
  }
`;

export class Card extends Component {
  radioRef = createRef();

  delCard = () => {
    this.props.delCard(this.props.id);
  };

  handleClick = e => {
    console.log("e: ", e.currentTarget.id);
    const date = e.currentTarget.id.slice(0, 10);
    console.log("date: ", date);
    const run = e.currentTarget.id.slice(-4);
    console.log("run: ", run);
    this.props.saveRuns(date, run);

    // console.log(this.radioRef.current);
  };

  render() {
    // const day = this.props.info;

    const { date, start, end, breaks, pay, run } = this.props.info;

    // console.log("day: ", day);
    return (
      <Container className={this.props.checkToday}>
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
        <div className="runs" ref={this.radioRef}>
          <div>
            <label htmlFor="run1">
              <input
                type="radio"
                name={`${date}-run`}
                id={`${date}-run1`}
                onChange={this.handleClick}
                checked={run === `run1`}
              />
              Run 1
            </label>
          </div>
          <div>
            <label htmlFor="run2">
              <input
                type="radio"
                name={`${date}-run`}
                id={`${date}-run2`}
                onChange={this.handleClick}
                checked={run === `run2`}
              />
              Run 2
            </label>
          </div>
          <div>
            <label htmlFor="run3">
              <input
                type="radio"
                name={`${date}-run`}
                id={`${date}-run3`}
                onChange={this.handleClick}
                checked={run === `run3`}
              />
              Run 3
            </label>
          </div>
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
