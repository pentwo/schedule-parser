import React, { Component, createRef } from "react";
import styled from "styled-components";

// import moment from "moment";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
    grid-column: span 3;
    cursor: pointer;
    justify-self: end;
  }
  span {
    text-align: center;
    grid-column: span 1;
    align-content: center;
  }

  .cardTitle {
    margin-bottom: 0.5rem;
    text-align: center;
    grid-column: span 3;
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
    grid-column: span 1;
    text-align: center;
  }

  .runs {
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .digi {
    font-size: 1rem;
  }

  .emoji {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .etc {
    font-size: 0.8rem;
    grid-column: span 3;
    text-align: center;
  }
  .true {
    display: none;
  }
`;

export class Card extends Component {
  inputRef = createRef();

  delCard = () => {
    this.props.delCard(this.props.id);
  };

  // handleClick = e => {
  //   console.log("e: ", e.currentTarget.id);
  //   const date = e.currentTarget.id.slice(0, 10);
  //   console.log("date: ", date);
  //   const run = e.currentTarget.id.slice(-4);
  //   console.log("run: ", run);
  //   this.props.saveJobs(date, run);
  // };

  handleChange = e => {
    const date = e.currentTarget.id.slice(0, 10);
    const text = e.currentTarget.value;
    this.props.saveJobs(date, text);
  };

  render() {
    // const day = this.props.info;

    const { date, start, end, breaks, pay, job } = this.props.info;

    // console.log("day: ", day);
    return (
      <CardContainer className={[this.props.checkToday, this.props.passed]}>
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
        <div className="emoji">
          <span className="arrow-right" role="img" aria-label="arrow-right">
            ➡️
          </span>
        </div>
        <div className="end">
          <label>End</label>
          <span className="digi">{end}</span>
        </div>
        <div className="runs">
          <input
            type="text"
            onChange={this.handleChange}
            ref={this.inputRef}
            id={date}
            value={job}
          />
          {/* <div>
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
          </div> */}
        </div>
        <div className="etc">
          <span className="etc--breaks">Breaks: {breaks}</span>
          <span>; </span>
          <span className="etc--hours">Hours: {pay}</span>
        </div>
      </CardContainer>
    );
  }
}
export default Card;

const SimpleCardContainer = styled.div`
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
    text-align: center;
    grid-column: span 2;
  }
  .etc {
    font-size: 1rem;
    grid-column: span 2;
    text-align: center;
  }
`;

export function SimpleCard(props) {
  const { date, pay } = props.info;
  const delCard = () => {
    props.delCard(props.id);
  };
  return (
    <SimpleCardContainer className={[props.checkToday, props.passed]}>
      <button onClick={delCard}>
        <span role="img" aria-label="cross">
          ❌
        </span>
      </button>
      <h2 className="cardTitle">{date}</h2>
      <div className="etc">
        <span className="etc--hours">Hours: {pay}</span>
      </div>
    </SimpleCardContainer>
  );
}
