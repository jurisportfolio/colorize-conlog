import { validateLabel } from './utilityFunctions.js';

export const logErrorIfNotCollection = (propType, isPropNull, propLabel) => {

  return console.log(
    `%c%s`,
    "color: red",
    `By loging ${validateLabel(propLabel).toUpperCase()}, you try to log "${isPropNull ? "null" : propType}".
Function "prettyDir" accepts just iterable collections!`
  );;
};

export const logErrorIfObjEmpty = (obj) => {
  if (Object.entries(obj).length === 0) {
    console.log("this collection is empty")
  };
};

export const logNonCollectionItem = (val, key, color) => {

  if (key == null) { console.log("this collection is empty") };
  console.log(
    `%c%s`,
    `color: ${color}`,
    `${key} ${val}`
  )
}

export const logGroupeOpenLine = (label, key = "", color = "black") => {

  label = validateLabel(label);

  if (label.endsWith("_temp")) {

    console.groupCollapsed(

      `%c%s`,
      `color: ${color}`,
      `${key} ${label.slice(0, label.length - 5)}`);

  } else {
    console.group(`Collection:`, label);
  }
}