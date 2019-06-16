import { openConsoleGroupe, logErrorIfNotCollection, closeConsoleGroupe } from '../logFunctions/logFunctions';
import processCollection from '../processCollection/processCollection';


const prettyDir = (label, obj) => {

  let propType = typeof obj;
  let isObjNull = obj == null;


  if (propType !== "object" || isObjNull) {
    logErrorIfNotCollection(propType, isObjNull, label);
  } else {
    openConsoleGroupe(label);
    processCollection(obj);
    closeConsoleGroupe(label);
  }

};

export default prettyDir;