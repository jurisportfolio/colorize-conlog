import { logGroupeOpenLine, logIfNotCollection } from "./logFunctions.js";
import processCollection from './processCollection.js';
import { labelToUpperCase } from './helpFunction.js';

const prettyDir = (label, obj) => {

  let propType = typeof obj;
  let isObjNull = obj == null;
  let upperLabel = labelToUpperCase(label);

  if (propType !== "object" || isObjNull) {
    logIfNotCollection(propType, isObjNull, upperLabel);
  } else {
    logGroupeOpenLine(upperLabel);
    processCollection(upperLabel, obj);
    console.groupEnd(upperLabel);
  }

};

export default prettyDir;