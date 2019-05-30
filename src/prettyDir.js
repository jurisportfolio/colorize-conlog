import { logIfNotCollection, divideLog, logIfCollection } from "./logFunctions.js";

const typeVerification = (prop) => {
  let propType = typeof prop;
  let isPropNull = prop == null;

  if (propType !== "object" || isPropNull) {
    logIfNotCollection(isPropNull, propType);
    return false;
  } else {
    return true
  }
}

const prettyDir = (label, obj) => {

  const labelUpper = label.toUpperCase();

  divideLog(label, 'START');

  if (typeVerification(obj)) {
    logIfCollection(labelUpper, obj);
  }

  divideLog(label, 'END');
};

export default prettyDir;