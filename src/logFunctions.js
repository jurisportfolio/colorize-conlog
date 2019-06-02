export const logIfNotCollection = (propType, isPropNull, propLabel) => {
  return console.log(
    `%c%s`,
    "color: red",
    `By loging ${propLabel}, you try to log "${isPropNull ? "null" : propType}".
Function "prettyDir" accepts just iterable collections!`
  );;
};

export const logGroupeOpenLine = (label, key = "") => {

  if (label.endsWith("_temp")) {

    console.groupCollapsed(key, label.slice(0, label.length - 5));
  } else {
    console.group(`Collection:`, label);
  }
}