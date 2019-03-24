import React, { Component } from "react";
import Chart from "chart.js";
import uniq from "lodash/uniq";

class SummaryCard extends Component {
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

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart = () => {
    console.log("this: ", this);

    const obj = this.props.info;
    console.log("obj: ", obj);
    const weeks = uniq(Object.keys(obj).map(key => obj[key].week));
    console.log("weeks: ", weeks);
    const hours = weeks.map(week => this.calHours(week));
    console.log("hours: ", hours);
    const displayWeeks = weeks.map(week => `Week ${week}`);
    const chartData = {
      labels: displayWeeks,
      datasets: [
        {
          label: "Working Hours",
          backgroundColor: "rgba(94, 108, 118, .50)",
          borderColor: "rgba(13, 34, 50, .80)",
          fillColor: "rgba(253,237,128,0)",
          strokeColor: "rgba(0,0,0,1)",
          pointColor: "rgba(0,0,0,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: hours
        }
      ]
    };
    console.log("this.refs.: ", this.refs);
    console.log("this.refs.canvas: ", this.refs.canvas);
    const ctx = this.refs.canvas.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {}
    });
  };

  render() {
    const obj = this.props.info;
    const weeks = uniq(Object.keys(obj).map(key => obj[key].week));

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
        <canvas ref="canvas" />
      </React.Fragment>
    );
  }
}

export default SummaryCard;
