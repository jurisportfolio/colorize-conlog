import { validateLabel } from './utilityFunctions.js';

// var former = console.log;
// console.log = function (msg) {
//   former(msg);

//   // if(msg.indexOf("Brackets") >= 0 || msg.indexOf("Runtime") >= 0) {

//   //}
//   var ul = document.getElementById("log");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(msg));
//   ul.appendChild(li)
// }


export const logErrorIfNotCollection = (propType, isPropNull, propLabel) => {

  return console.log(
    `%c%s`,
    "color: red",
    `By log ${validateLabel(propLabel).toUpperCase()}, you try to log "${isPropNull ? "null" : propType}".
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
  );
  var ul = document.getElementById("log");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(val));
  ul.appendChild(li)
}

export const openConsoleGroupe = (label, key = "", color = "black") => {

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

export const closeConsoleGroupe = (label) => console.groupEnd(label)