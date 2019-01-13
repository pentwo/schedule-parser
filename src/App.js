import React, { Component, createRef } from "react";
import omit from "lodash/omit";
import styled from "styled-components";

import Textarea from "./Textarea";
import Card from "./Card";
import SummaryCard from "./SummaryCard";

import "./app.css";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  /* border: 2px solid palevioletred; */
  border-radius: 5px;
`;
const Cards = styled.div`
  padding: 1rem;

  display: grid;
  /* grid: auto-flow / minmax(); */
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  background-color: #ddd;
`;

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

  render() {
    const { scheduleObj } = this.state;
    return (
      <div>
        <h1>Schedule Parser</h1>
        {/* <Button onClick={this.insertText}>Insert Text</Button> */}
        <Textarea ref={this.textRef} />
        <Button onClick={this.getText} type="submit">
          Click
        </Button>
        <Cards>
          {Object.keys(scheduleObj).map(item => {
            return (
              <Card
                delCard={this.delCard}
                key={item}
                id={item}
                info={scheduleObj[item]}
              />
            );
          })}
        </Cards>
        <h1>Summary</h1>
        <SummaryCard info={scheduleObj} />
      </div>
    );
  }
}
