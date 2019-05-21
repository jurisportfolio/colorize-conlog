const prePreObj = { foo: "some", boo: 5, woo: [], too: null };
const preTab = [1, 2, "napis", prePreObj];
const preObj = { foo: "napis", boo: 3, woo: null, too: preTab };
const tab = [1, "napis", preTab, preObj];


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



const logIfCollection = (label, obj, color = null, key = null) => {
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

const divideLog = (message, position = 'END') => {
  console.log(
    `%c%s`,
    `${position == 'END' ? "color: green; background: yellow;" : "color: mediumblue; background: moccasin;"}`,
    `${position} log --> ${message} `
  );
}


const logIfNotCollection = (isPropNull, propType) => {
  return console.log(
    `%c%s`,
    "color: red",
    `You try to log "${isPropNull ? "null" : propType}". Function "prettyDir" accepts just iterable collections!`
  );;
};

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


prettyDir("new1", preTab);
prettyDir("new2", tab);
prettyDir("new3", null);
prettyDir("new4", []);
prettyDir("new5", preObj);
prettyDir("", 6);
prettyDir("new6", "new log");
prettyDir("Array", tab);