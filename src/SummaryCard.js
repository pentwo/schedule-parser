import React, { Component } from "react";
import uniq from "lodash/uniq";

export class SummaryCard extends Component {
  calHours = week => {
    const obj = this.props.info;

    const result = Object.keys(obj).reduce((pre, cur) => {
      const hours = obj[cur].pay.split(":").map(i => parseInt(i));
      if (obj[cur].week !== week) return (pre += 0);

      const temp = hours[0] + (hours[1] === 30 ? 0.5 : 0);

      return (pre += temp);
      // pre += hours[0];
      // return (pre += hours[1] === 30 ? 0.5 : 0);
    }, 0);

    return result;
  };

  componentDidMount() {}

  render() {
    const obj = this.props.info;
    const weeks = uniq(Object.keys(obj).map(key => obj[key].week));
    // const hours = Object.keys(obj).map(key => obj[key].total);

    //

    return (
      <React.Fragment>
        {weeks.map(week => {
          return (
            <div key={week}>
              <h3>Week {week}</h3>
              Paid Hours:{this.calHours(week)}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default SummaryCard;
