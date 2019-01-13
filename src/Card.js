import React, { Component } from "react";
// import moment from "moment";

export class Card extends Component {
  delCard = () => {
    this.props.delCard(this.props.id);
  };

  render() {
    const day = this.props.info;
    return (
      <div>
        {Object.keys(day).map(d => {
          return (
            <div key={d}>
              {d}: {day[d]}
            </div>
          );
        })}
        <button onClick={this.delCard}>DEL</button>
      </div>
    );
  }
}

export default Card;
