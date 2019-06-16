import { getColorAndType } from "./utilityFunctions.js";
import { openConsoleGroupe, logNonCollectionItem, logErrorIfObjEmpty, closeConsoleGroupe } from "./logFunctions.js";




const processCollection = (obj) => {
  logErrorIfObjEmpty(obj);

  Object.entries(obj).map(([key, val]) => {

    let { type, color } = getColorAndType(val);

    if (
      type == "number_temp" ||
      type == "string_temp" ||
      type == "null_temp") {

      logNonCollectionItem(val, key, color);

    } else {
      openConsoleGroupe(type, key, color);
      processCollection(val);
      closeConsoleGroupe(type);
    }
  })

}

export default processCollection;