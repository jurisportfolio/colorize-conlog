import { logGroupeOpenLine, logErrorIfNotCollection } from "./logFunctions.js";
import processCollection from './processCollection.js';


const prettyDir = (label, obj) => {

  let propType = typeof obj;
  let isObjNull = obj == null;


  if (propType !== "object" || isObjNull) {
    logErrorIfNotCollection(propType, isObjNull, label);
  } else {
    logGroupeOpenLine(label);
    processCollection(obj);
    console.groupEnd(label);
  }

};

export default prettyDir;