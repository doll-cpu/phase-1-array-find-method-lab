function superbowlWin(record) {
  // Use the find() method to locate the first object with a result of "W"
  const win = record.find(game => game.result === "W");
  
  // If a win was found, return the year; otherwise, return undefined
  return win ? win.year : undefined;
}
