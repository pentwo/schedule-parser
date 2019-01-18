import React, { Component, createRef } from "react";
import omit from "lodash/omit";
import styled from "styled-components";
import moment from "moment";

import Textarea from "./Textarea";
import Card from "./Card";
import SummaryCard from "./SummaryCard";

import "./app.css";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
`;
// const Cards = styled.div`
//   /* padding: 1rem; */

//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//   gap: 1rem;
// `;

export default class App extends Component {
  textRef = createRef();

  state = {
    scheduleObj: {}
  };

  componentDidMount() {
    const localData = this.getLocal();

    if (localData) {
      this.setState({ scheduleObj: { ...localData } });
    }
  }

  saveLocal = obj => {
    const data = JSON.stringify(obj);

    localStorage.setItem("Week", data);
  };

  getLocal = () => {
    const data = localStorage.getItem("Week");
    return data ? JSON.parse(data) : [];
  };

  delCard = num => {
    const newObj = omit(this.state.scheduleObj, num);

    this.saveLocal(newObj);
    this.setState({
      scheduleObj: newObj
    });
  };

  insertText = () => {
    this.textRef.current.insertText();
  };

  getText = e => {
    e.preventDefault();
    const textObj = { ...this.textRef.current.getText() };
    const newState = { ...this.state.scheduleObj, ...textObj };

    this.setState({
      scheduleObj: newState
    });
    this.saveLocal(newState);
  };

  toggleNextSib = e => {
    // const cards = document.querySelector(".content");
    const toggleTarget = e.currentTarget.nextSibling;
    // console.log("e.currentTarget: ", e.currentTarget.nextSibling);

    // const display = cards.style.display;

    // display === "none"
    //   ? (cards.style.display = "grid")
    //   : (cards.style.display = "none");

    // const content = this.nextElementSibling;

    // const height = cards.style.maxHeight;

    // height === ""
    //   ? (cards.style.maxHeight = `${cards.scrollHeight}px`)
    //   : //  (cards.style.maxHeight = `500px`)
    //     (cards.style.maxHeight = "");

    const height = toggleTarget.style.maxHeight;

    height === ""
      ? (toggleTarget.style.maxHeight = `${toggleTarget.scrollHeight}px`)
      : //  (toggleTarget.style.maxHeight = `500px`)
        (toggleTarget.style.maxHeight = "");
  };

  render() {
    const { scheduleObj } = this.state;

    const today = moment().format("YYYY-MM-DD");
    // console.log("today: ", today);

    return (
      <div>
        {/* Header */}
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Schedule Parser
        </h1>

        <div className="parser">
          <h2 onClick={this.toggleNextSib}>Schedule Parser</h2>
          {/* <Button onClick={this.insertText}>Insert Text</Button> */}
          <div className="form">
            <Textarea ref={this.textRef} />
            <Button onClick={this.getText}>Run</Button>
          </div>
        </div>

        {/* Cards */}
        <div className="cards">
          <h2 onClick={this.toggleNextSib}>
            Schedule Cards
            {/* <span>
              <button onClick={this.toggleCards}>+</button>
            </span> */}
          </h2>

          <div className="content">
            {Object.keys(scheduleObj).map(item => {
              return (
                <Card
                  delCard={this.delCard}
                  key={item}
                  id={item}
                  info={scheduleObj[item]}
                  // today={moment().format("YYYY-MM-DD")}
                  checkToday={item === today ? "today" : ""}
                  // className="today"
                />
              );
            })}
          </div>
        </div>

        {/* Summary */}

        <div className="summary">
          <h2 onClick={this.toggleNextSib}>Summary</h2>
          <div className="summaryCard">
            <SummaryCard info={scheduleObj} />
          </div>
        </div>
      </div>
    );
  }
}
