const colorOf = (key, val) => {
  let color = null;
  switch (typeof val) {
    case "number":
      color = "blue";
      break;
    case "string":
      color = "red";
      break;
    case "object":
      if (val == null) {
        color = "lightseagreen";
        break;
      } else if (Array.isArray(val)) {
        color = "magenta";
        processCollection("Array", val, color, key);
        color = null;
        break;
      } else {
        color = "green";
        processCollection("Object", val, color, key);
        color = null;
        break;
      }
    default:
      color = "black";
  }
  return color;
};

export const newProcessCollection = (val) => {
  switch (typeof val) {

    case "number":
      console.log('typeof val: ', typeof val);
      break;
    case "string":
      console.log('typeof val: ', typeof val);
      break;
    case "object":
      console.log('typeof val: ', typeof val);
      if (val == null) {
        console.log('val == null: ', val == null);

        break;
      } else if (Array.isArray(val)) {
        console.log('Array.isArray(val): ', Array.isArray(val));
        //mapowanie 'val'
        break;
      } else {
        console.log('Array.isArray(val): ', Array.isArray(val));
        //mapowanie 'val'
        break;
      }

  }

};

export const oLDprocessCollection = (label, obj, color = null, key = null) => {
  label === "Array" || label === "Object"
    ? console.groupCollapsed(
      `%c%s`,
      `color: ${color}`,
      `${key}${key ? ": " : null}${label}`
    )
    : console.group(label);

  Object.entries(obj).map(([key, val]) => {
    let color = colorOf(key, val);
    if (!color) {
      return null;
    }
    return console.log(`${key}: %c${val}`, `color: ${color}`);
  });

  console.groupEnd(label);
};

// export const divideLog = (message, position = 'END') => {
//   console.log(
//     `%c%s`,
//     `${position == 'END' ? "color: green; background: yellow;" : "color: mediumblue; background: moccasin;"}`,
//     `${position} log --> ${message} `
//   );
// }