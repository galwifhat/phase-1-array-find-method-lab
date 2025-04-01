// code your solution here

const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

function superbowlWin(records) {
  const winningRecord = records.find(function (record) {
    if (record.result === "W") {
      return true; // Found a win!
    } else {
      return false; // Keep searching
    }
  });

  if (winningRecord) {
    return winningRecord.year;
  } else {
    return undefined;
  }
}

console.log(superbowlWin(record));
/* 
//arrow function
const superbowlWin = (records) => {
  const win = records.find((record) => record.result === "W");
  return win ? win.year : undefined;
}; */
