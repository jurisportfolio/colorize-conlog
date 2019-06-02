import { getColorAndType } from "./helpFunction.js";
import { logGroupeOpenLine } from "./logFunctions.js";

export const logNonCollectionItem = () => {

}


const processCollection = (label, obj) => {

  Object.entries(obj).map(([key, val]) => {

    let itemColorAndType = getColorAndType(val);

    if (
      itemColorAndType.type == "number_temp" ||
      itemColorAndType.type == "string_temp" ||
      itemColorAndType.type == "null_temp") {

      console.log(key, val);

    } else {
      logGroupeOpenLine(itemColorAndType.type, key);
      processCollection(itemColorAndType.type, val);
      console.groupEnd(itemColorAndType.type);
    }
  })

}

export default processCollection;