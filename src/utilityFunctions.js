export const labelToUpperCase = (label) => {

  if (typeof label !== "string" || label === "") {
    label = "NO NAME";
  };
  let upperLabel = label.toUpperCase();

  return upperLabel;
}

export const getColorAndType = (val) => {
  let color = null;
  let type = null;
  switch (typeof val) {
    case "number":
      color = "blue";
      type = typeof val + "_temp";
      break;
    case "string":
      color = "red";
      type = typeof val + "_temp";
      break;
    case "object":
      if (val == null) {
        color = "orange";
        type = "null" + "_temp";
        break;
      } else if (Array.isArray(val)) {
        color = "magenta";
        type = "array" + "_temp";
        break;
      } else {
        color = "green";
        type = typeof val + "_temp";
        break;
      }
  }
  return { color: color, type: type };
}