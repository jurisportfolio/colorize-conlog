import { logIfNotCollection } from "./logFunctions.js";
import processCollection from './processCollection.js';
import { labelToUpperCase } from './processStrings.js';

const prettyDir = (label, obj) => {

  let propType = typeof obj;
  let isObjNull = obj == null;
  let upperLabel = labelToUpperCase(label);

  if (propType !== "object" || isObjNull) {
    logIfNotCollection(propType, isObjNull, upperLabel);
  } else {
    processCollection(label, obj);
  }

};

export default prettyDir;