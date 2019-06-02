import { getColorAndType } from "./utilityFunctions.js";
import { logGroupeOpenLine, logNonCollectionItem, logErrorIfObjEmpty } from "./logFunctions.js";




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
      logGroupeOpenLine(type, key, color);
      processCollection(val);
      console.groupEnd(type);
    }
  })

}

export default processCollection;