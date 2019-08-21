import React, { Component, createRef } from 'react';
import moment from 'moment';

export default class Textarea extends Component {
  textRef = createRef();

  setClock = (date, time) => {
    const parsedTime = time.split(':');

    return date.add(parsedTime[0], 'h').add(parsedTime[1], 'm');
  };

  getText = () => {
    const text = this.textRef.current.value;

    const arr = text
      .toLowerCase()
      .split('\n')
      .map(item => item.trim())
      .filter(item => item !== '');
    console.log('arr: ', arr);
    const result = {};

    const timeReg = /[A-Za-z]+:\s\d+:\d+/i;
    const dateReg = /\w{3}\s\d+\s\w{3}/i;
    const times = arr
      .filter(item => timeReg.test(item))
      .map(item => {
        const temp = item.split(': ');
        return [temp[0], temp[1]];
      });
    console.log('times: ', times);

    const dates = arr
      .filter(item => dateReg.test(item))
      .map(item => moment(item, 'ddd D MMM').format('YYYY-MM-DD'));

    // const weekNum = moment(dates[1], "YYYY-MM-DD").format("W");
    dates.shift();
    console.log('dates: ', dates);

    for (let i = 0, j = 0; i < times.length; i += 5, j++) {
      result[dates[j]] = {
        date: dates[j],
        [times[i][0]]: times[i][1],
        [times[i + 1][0]]: times[i + 1][1],
        [times[i + 2][0]]: times[i + 2][1],
        [times[i + 3][0]]: times[i + 3][1],
        [times[i + 4][0]]: times[i + 4][1],
        week: moment(dates[j], 'YYYY-MM-DD').format('WW'),
      };
    }

    console.log('result: ', result);
    return result;
  };

  getDay = () => {
    const text = this.textRef.current.value;
    const arr = text
      .split(/\n/i)
      .map(item => item.trim())
      .filter(item => item !== '')
      .join('')
      .split('Role: Distribution Centre (SWMP)\\Admin\\Driver DC').shift;
    console.log('arr: ', arr);

    const dayReg = /\w{3}\s\d+\s\w{3}.\n.[-]*.\n\n.+\n\n.+\n\n.+\n\n.+\n\n.+/i;
    // const arr = text.split(/\n\n/i);
    // console.log("arr: ", arr);
    // console.log("result: ", result);
    // console.log("dayReg.test(text): ", dayReg.test(text));
  };

  render() {
    return <textarea ref={this.textRef} />;
  }
}
