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
        logIfCollection("Array", val, color, key);
        color = null;
        break;
      } else {
        color = "green";
        logIfCollection("Object", val, color, key);
        color = null;
        break;
      }
    default:
      color = "black";
  }
  return color;
};



export const logIfCollection = (label, obj, color = null, key = null) => {
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

export const divideLog = (message, position = 'END') => {
  console.log(
    `%c%s`,
    `${position == 'END' ? "color: green; background: yellow;" : "color: mediumblue; background: moccasin;"}`,
    `${position} log --> ${message} `
  );
}


export const logIfNotCollection = (isPropNull, propType) => {
  return console.log(
    `%c%s`,
    "color: red",
    `You try to log "${isPropNull ? "null" : propType}". Function "prettyDir" accepts just iterable collections!`
  );;
};