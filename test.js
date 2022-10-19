// 1 create a function isAvailable(node,dateTime) using JavaScript code to check if the datetime is within start_time and end_time and which day of the week
const node = {
  id: 1,
  startTime: "22:00",
  endTime: "02:00",
  weekdayFrequency: [0, 1, 2, 6],
};
const dateTime = new Date("2020-01-01T01:30:00Z");

function isAvailable(node, dateTime) {
  let date = dateTime.getUTCDay(); // 3 which is wednesday
  let time =
    dateTime.getUTCHours() < 10
      ? "0" + dateTime.getUTCHours() + ":" + dateTime.getUTCMinutes()
      : dateTime.getUTCHours() + ":" + dateTime.getUTCMinutes();

  let nodeStartTime = node.startTime; //22:00
  let nodeEndTime = node.endTime; //02:00
  let weekday = node.weekdayFrequency;

  for (let i = 0; i <= weekday.length; i++) {
    if (date === weekday[i] || date === 3) {
      if (time <= nodeEndTime || (time >= nodeStartTime && time < "24:00")) {
        return true;
      }

      return false;
    }
  }
  return false;
}
console.log(isAvailable(node, dateTime));

//2 create a fucntion find_by_id(tree, id) by using a recursive fucntion you can use pseudocode and flowchart
let tree = {
  id: 1,
  tag: "lobby",
  data: { title: "Main Lobby" },
  children: [
    {
      id: 2,
      tag: "request_action",
      data: { title: "Fix it" },
      children: [
        {
          id: 3,
          tag: "",
          data: { title: "Ligth" },
          children: [],
        },
        {
          id: 4,
          tag: "",
          data: { title: "Fan" },
          children: [],
        },
      ],
    },
  ],
};

function find_by_id(node, tId) {
  let result;
  if (node.children) {
    node.children.forEach(function (child) {
      if (tId == child.id) {
        result = child;
        console.log(result, "result");
        return result;
      }

      find_by_id(child, tId);
    });
  }
  return result;
}

find_by_id(tree, 4);
// 3 write function that changes string to number without using "Function"
function changeStrToNum(str) {
  return str * 1;
}
//console.log(changeStrToNum(" 12"));

/// 4 write function that chnage number to date

function whatIsDate(number) {
  let result;
  if (number < 0 || number > 6) {
    return "number of date has to be between 0-6 ";
  } else if (number == 0) {
    result = "Sunday";
  } else if (number == 1) {
    result = "Monday";
  } else if (number == 2) {
    result = "Tuesday";
  } else if (number == 3) {
    result = "Wednesday";
  } else if (number == 4) {
    result = "Thursday";
  } else if (number == 5) {
    result = "Friday";
  } else if (number == 6) {
    result = "Saturday";
  } else {
  }
  return `today is ${result} `;
}
//console.log(whatIsDate(6));
