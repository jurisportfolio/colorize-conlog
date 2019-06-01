import { oLDprocessCollection, newProcessCollection } from "./old.js";

export const getColorAndType = (val) => {
  let color = null;
  let type = null;
  switch (typeof val) {
    case "number":
      color = "blue";
      type = typeof val + "_temp";
      break;
    case "string":
      color = "red";
      type = typeof val + "_temp";
      break;
    case "object":
      if (val == null) {
        color = "orange";
        type = "null" + "_temp";
        break;
      } else if (Array.isArray(val)) {
        color = "pink";
        type = "array" + "_temp";
        break;
      } else {
        color = "green";
        type = typeof val + "_temp";
        break;
      }
  }
  return { color: color, type: type };
}

export const logGroupeOpenLine = (label) => {
  if (label == "array_temp" || label == "object_temp") {

    console.groupCollapsed(label);
  } else {
    console.group(`Collection:`, label);
  }
}


const processCollection = (label, obj) => {

  logGroupeOpenLine(label);

  Object.entries(obj).map(([key, val]) => {

    let itemColorAndType = getColorAndType(val);
    if (itemColorAndType.type == "number_temp" || "string_temp" || "null_temp") {
      // logItemWithColor(key, val);
      console.log('key, val: ', key, val);
    } else {
      processCollection(itemColorAndType.type, val);
    }
  })
  console.groupEnd(label);
}

export default processCollection;