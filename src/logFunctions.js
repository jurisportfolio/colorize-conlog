export const logIfNotCollection = (propType, isPropNull, propLabel) => {
  return console.log(
    `%c%s`,
    "color: red",
    `By loging ${propLabel}, you try to log "${isPropNull ? "null" : propType}".
Function "prettyDir" accepts just iterable collections!`
  );;
};