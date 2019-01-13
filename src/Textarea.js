import React, { Component, createRef } from "react";
import moment from "moment";

export default class Textarea extends Component {
  textRef = createRef();

  setClock = (date, time) => {
    //
    const parsedTime = time.split(":");
    //
    return date.add(parsedTime[0], "h").add(parsedTime[1], "m");
  };

  componentDidMount = () => {
    // const text = this.textRef.current.value;
  };
  insertText = () => {
    this.textRef.current.value =
      "User schedule for 7 Jan 2019 through to 13 Jan 2019 is shown below\n" +
      "\n" +
      "		Mon 7 Jan \n" +
      "		-----------\n" +
      "\n" +
      "						 Start: 07:30\n" +
      "\n" +
      "							 End: 17:00\n" +
      "\n" +
      "						 Total: 09:30\n" +
      "\n" +
      "						Breaks: 01:00\n" +
      "\n" +
      "							 Pay: 08:30\n" +
      "\n" +
      "							Role: Distribution Centre (SWMP)AdminDriver DC\n" +
      "\n" +
      "		Tue 8 Jan \n" +
      "		-----------\n" +
      "\n" +
      "						 Start: 08:30\n" +
      "\n" +
      "							 End: 17:30\n" +
      "\n" +
      "						 Total: 09:00\n" +
      "\n" +
      "						Breaks: 01:00\n" +
      "\n" +
      "							 Pay: 08:00\n" +
      "\n" +
      "							Role: Distribution Centre (SWMP)AdminDriver DC\n" +
      "\n" +
      "		Wed 9 Jan \n" +
      "		-----------\n" +
      "\n" +
      "						 Start: 08:30\n" +
      "\n" +
      "							 End: 17:00\n" +
      "\n" +
      "						 Total: 08:30\n" +
      "\n" +
      "						Breaks: 01:00\n" +
      "\n" +
      "							 Pay: 07:30\n" +
      "\n" +
      "							Role: Distribution Centre (SWMP)AdminDriver DC\n" +
      "\n" +
      "		Thu 10 Jan \n" +
      "		-----------\n" +
      "\n" +
      "						 Start: 08:30\n" +
      "\n" +
      "							 End: 12:00\n" +
      "\n" +
      "						 Total: 03:30\n" +
      "\n" +
      "						Breaks: 00:00\n" +
      "\n" +
      "							 Pay: 03:30\n" +
      "\n" +
      "							Role: Distribution Centre (SWMP)AdminDriver DC\n" +
      "\n" +
      "		Fri 11 Jan \n" +
      "		-----------\n" +
      "\n" +
      "						 Start: 08:30\n" +
      "\n" +
      "							 End: 17:00\n" +
      "\n" +
      "						 Total: 08:30\n" +
      "\n" +
      "						Breaks: 01:00\n" +
      "\n" +
      "							 Pay: 07:30\n" +
      "\n" +
      "							Role: Distribution Centre (SWMP)AdminDriver DC\n" +
      "\n" +
      "		Rostered hours are flexible and can change without notice depending on the needs of the business.   Please note that the break times shown above are indicative only.  You will need to confirm your break time with the manager/acting manager on the day.   \n" +
      "\n" +
      "\n" +
      "		DoNotReply@riteq.com.au";
  };
  getText = () => {
    const text = this.textRef.current.value;

    const arr = text
      .toLowerCase()
      .split("\n")
      .map(item => item.trim())
      .filter(item => item !== "");
    const result = {};

    const timeReg = /[A-Za-z]+:\s\d+:\d+/i;
    const dateReg = /\w{3}\s\d+\s\w{3}/i;
    const times = arr
      .filter(item => timeReg.test(item))
      .map(item => {
        const temp = item.split(": ");
        return [temp[0], temp[1]];
      });

    const dates = arr
      .filter(item => dateReg.test(item))
      .map(item => moment(item, "ddd D MMM").format("YYYY-MM-DD"));

    // const weekNum = moment(dates[1], "YYYY-MM-DD").format("W");
    dates.shift();

    for (let i = 0, j = 0; i < times.length; i += 5, j++) {
      result[dates[j]] = {
        date: dates[j],
        [times[i][0]]: times[i][1],
        [times[i + 1][0]]: times[i + 1][1],
        [times[i + 2][0]]: times[i + 2][1],
        [times[i + 3][0]]: times[i + 3][1],
        [times[i + 4][0]]: times[i + 4][1],
        week: moment(dates[j], "YYYY-MM-DD").format("WW")
      };
    }

    return result;
  };

  render() {
    return <textarea ref={this.textRef} />;
  }
}
