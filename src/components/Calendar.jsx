import React, { Component } from "react";
import classnames from 'classnames';

import getMonthData from './functions';
import { areEqual } from './functions';

export class Calendar extends Component {
  static defaultProps = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    months: ['ЯНВАРЯ', 'ФЕВРАЛЯ', 'МАРТА', 'АПРЕЛЯ', 'МАЯ', 'ИЮНЯ', 'ИЮЛЯ', 'АВГУСТА', 'СЕНТЯБРЯ', 'ОКТЯБРЯ', 'НОЯБРЯ', 'ДЕКАБРЯ'],
    months2: ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'],
    weekDayNames: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
  }

    render() {
      const { days, months, months2, weekDayNames } = this.props;
      const { date } = this.props;
      const monthData = getMonthData(date.getFullYear(), date.getMonth());
      const currentDate = new Date();

      return (
        <div className="ui-datepicker">
          <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{days[date.getDay()]}</div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                <div className="ui-datepicker-material-month">{months[date.getMonth()]}</div>
                <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
            </div>
          </div>
          <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">{months2[date.getMonth()]}</span> <span className="ui-datepicker-year">{date.getFullYear()}</span>
            </div>
          </div>
          <table className="ui-datepicker-calendar">
            <colgroup>
                <col/>
                <col/>
                <col/>
                <col/>
                <col/>
                <col className="ui-datepicker-week-end"/>
                <col className="ui-datepicker-week-end"/>
            </colgroup>
            <thead>
                <tr>
                  {weekDayNames.map(name =>
                    <th key={name}>{name}</th>
                  )}
                </tr>
            </thead>
            <tbody>
              {monthData.map((week, index) =>
              <tr key={index}>
                {week.map((date, index) => date ?
                <td 
                key={index} 
                className={classnames({
                  "ui-datepicker-today": areEqual(date, currentDate),
                })}
                >{date.getDate()}</td>
                :
                <td key={index} className="ui-datepicker-other-month"></td>
                )}
              </tr>
              )}                
            </tbody>
          </table>
        </div>
      );
    }
  }  