const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    Novermber: 10,
    December: 11
};

export function areEqual(a, b) {
    if (!a || !b) return false;    

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

function isLeapYear(year) {
    return !((year % 4) || (!(year % 100) && (year % 400)));    
}

function getDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
}

function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();

    return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}


export default function getMonthData(year, month) {
    const result = [];

    const prevMonthDate = new Date(year, month - 1); // Предыдущий месяц    
    const currentDate = new Date(year, month); // Текущий месяц    
    // const nextMonthDate = new Date(year, month + 1); // Следующий месяц        

    const prevMonthDays = getDaysInMonth(prevMonthDate);    
    const currentMonthDays = getDaysInMonth(currentDate) - 1;   
    const monthStartsOn = getDayOfWeek(currentDate);    

    let day = prevMonthDays - monthStartsOn + 1;    

    for (let i = 0; i < 6; i++) {
        result[i] = [];
    
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
          if (i === 0 && j < monthStartsOn) {
            // Дни предыдущего месяца
            result[i][j] = new Date(year, month - 1, day++);
          } else if (day <= currentMonthDays) {
            // Дни текущего месяца
            result[i][j] = new Date(year, month, day++);
          } else {
            // Дни следующего месяца
            result[i][j] = new Date(year, month + 1, day++ - currentMonthDays);
          }
        }
      }

    return result;
}