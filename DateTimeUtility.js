import moment from 'moment';

const formatDate = (startDate, endDate) => {
  let fulldate='';
  if(startDate!='' && endDate!=''){
    var start_date = moment(startDate).format('MMM DD');
    var end_date = moment(endDate).format('DD');
    var end_date_year = moment(endDate).format('YYYY');
  
    let startMonth = moment(startDate).format('MM');
    let endMonth = moment(endDate).format('MM');
   
  
    let yearCOmaprision = moment(startDate).isSame(endDate, 'year');
  
     fulldate = start_date + ' - ' + end_date + ', ' + end_date_year;
    if (startMonth != endMonth) {
      start_date = moment(startDate).format('MMM DD');
      end_date = moment(endDate).format('MMM DD');
      fulldate = start_date + ' - ' + end_date + ', ' + end_date_year;
    } else if (yearCOmaprision === false) {
      start_date = moment(startDate).format('MMM DD YYYY');
      end_date = moment(endDate).format('MMM DD YYYY');
      fulldate = start_date + ' - ' + end_date;
    }
  }
 

  return fulldate;
};

const getDateTime = dateTimeStr => {
  // Creating variables to hold time.
  var date, dd, mm, yyyy, TimeType, hour, minutes, seconds, fullTime;
  date = new Date(dateTimeStr);
  // alert(date);
  dd = date.getDate();
  mm = date.getMonth() + 1; //January is 0!
  yyyy = date.getFullYear();

  hour = date.getHours();
  minutes = date.getMinutes();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
  if (hour <= 11) {
    TimeType = 'AM';
  } else {
    // If the Hour is Not less than equals to 11 then Set the Time format as PM.
    TimeType = 'PM';
  }

  // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
  if (hour > 12) {
    hour = hour - 12;
  }

  // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format.
  if (hour == 0) {
    hour = 12;
  }

  // Checking if the hour value is less then 10 then add 0 before hour.
  if (hour < 10) {
    hour = '0' + hour.toString();
  }

  // Getting the current minutes from date object.
  minutes = date.getMinutes();

  // Checking if the minutes value is less then 10 then add 0 before minutes.
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }

  //Getting current seconds from date object.
  seconds = date.getSeconds();

  // If seconds value is less than 10 then add 0 before seconds.
  if (seconds < 10) {
    seconds = '0' + seconds.toString();
  }

  // Adding all the variables in fullTime variable.
  fullTime =
    hour.toString() +
    ':' +
    minutes.toString() +
    ':' +
    seconds.toString() +
    ' ' +
    TimeType.toString();

  //date =  dd + "-" + mm + "-" + yyyy + " " + fullTime;
  date = yyyy + '-' + mm + '-' + dd + ' ' + fullTime;
  return date.toString();
};

const getDate = dateTimeStr => {
  // Creating variables to hold time.
  var date, dd, mm, yyyy;
  date = dateTimeStr ? new Date(dateTimeStr) : new Date();
  // alert(date);
  dd = date.getDate();
  mm = date.getMonth() + 1; //January is 0!
  yyyy = date.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  date = yyyy + '-' + mm + '-' + dd;
  return date.toString();
};

const getUTCDate = dateTimeStr => {
  // Creating variables to hold time.
  var date, dd, mm, yyyy;
  date = dateTimeStr ? new Date(dateTimeStr) : new Date();
  // alert(date);
  dd = date.getUTCDate();
  mm = date.getUTCMonth() + 1; //January is 0!
  yyyy = date.getUTCFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  date = yyyy + '-' + mm + '-' + dd;
  return date.toString();
};

const getTime = dateTimeStr => {
  // Creating variables to hold time.
  var date, TimeType, hour, minutes, seconds, fullTime;
  date = new Date(dateTimeStr);

  hour = date.getHours();
  minutes = date.getMinutes();

  // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
  if (hour <= 11) {
    TimeType = 'AM';
  } else {
    // If the Hour is Not less than equals to 11 then Set the Time format as PM.
    TimeType = 'PM';
  }

  // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
  if (hour > 12) {
    hour = hour - 12;
  }

  // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format.
  if (hour == 0) {
    hour = 12;
  }

  // Checking if the hour value is less then 10 then add 0 before hour.
  if (hour < 10) {
    hour = '0' + hour.toString();
  }

  // Getting the current minutes from date object.
  minutes = date.getMinutes();

  // Checking if the minutes value is less then 10 then add 0 before minutes.
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }

  //Getting current seconds from date object.
  seconds = date.getSeconds();

  // If seconds value is less than 10 then add 0 before seconds.
  if (seconds < 10) {
    seconds = '0' + seconds.toString();
  }

  // Adding all the variables in fullTime variable.
  fullTime =
    hour.toString() +
    ':' +
    minutes.toString() +
    ':' +
    seconds.toString() +
    ' ' +
    TimeType.toString();

  return fullTime.toString();
};

const getTimeIn24HourFormat = dateTimeStr => {
  // Creating variables to hold time.
  var date, hour, minutes, seconds, fullTime;
  date = new Date(dateTimeStr);

  hour = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  // Checking if the hour value is less then 10 then add 0 before hour.
  if (hour < 10) {
    hour = '0' + hour.toString();
  }

  // Checking if the minutes value is less then 10 then add 0 before minutes.
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }

  // If seconds value is less than 10 then add 0 before seconds.
  if (seconds < 10) {
    seconds = '0' + seconds.toString();
  }

  // Adding all the variables in fullTime variable.
  fullTime =
    hour.toString() + ':' + minutes.toString() + ':' + seconds.toString();

  return fullTime.toString();
};

const getUTCTime = dateTimeStr => {
  // Creating variables to hold time.
  var date, hour, minutes, seconds, fullTime;
  date = new Date(dateTimeStr);

  hour = date.getUTCHours();
  minutes = date.getUTCMinutes();

  // Checking if the hour value is less then 10 then add 0 before hour.
  if (hour < 10) {
    hour = '0' + hour.toString();
  }

  // Checking if the minutes value is less then 10 then add 0 before minutes.
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }

  //Getting current seconds from date object.
  seconds = date.getUTCSeconds();

  // If seconds value is less than 10 then add 0 before seconds.
  if (seconds < 10) {
    seconds = '0' + seconds.toString();
  }

  // Adding all the variables in fullTime variable.
  fullTime =
    hour.toString() + ':' + minutes.toString() + ':' + seconds.toString();

  return fullTime.toString();
};

const getMonthName = dateTimeStr => {
  //const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date(dateTimeStr);
  return monthNames[date.getMonth()];
};

const getMonthYear = dateTimeStr => {
  //const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = dateTimeStr ? new Date(dateTimeStr) : new Date();
  return monthNames[date.getMonth()] + ' ' + date.getFullYear();
};

const getUtcString = dateTimeStr => {
  var date = new Date(dateTimeStr);
  var utcString = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  ).toISOString();
  return utcString.toString();
};

const getLocalString = dateTimeStr => {
  var date = new Date(dateTimeStr);
  var localString = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  );
  var local = moment(localString , "h:mm A")
  return localString.toString();
};

function getDifferenceInDays(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60 * 24);
}

function getDifferenceInHours(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60);
}

function getDifferenceInMinutes(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60);
}

function getDifferenceInSeconds(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / 1000;
}
const convertUTCDateToLocalDate = date => {
  var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  console.log("newDatenewDatenewDate",newDate);
  var offset = date.getTimezoneOffset() / 60;
  var hours = date.getHours();
  newDate.setHours(hours - offset);
  return newDate;
};

export {
  getDate,
  getTime,
  getDateTime,
  getMonthName,
  getMonthYear,
  getUtcString,
  getUTCTime,
  getUTCDate,
  getTimeIn24HourFormat,
  getDifferenceInDays,
  getDifferenceInHours,
  getDifferenceInMinutes,
  getDifferenceInSeconds,
  convertUTCDateToLocalDate,
  formatDate,
  getLocalString
};
