export const validateLabel = (label) => {

  if (typeof label !== "string" || label === "") {
    label = `{ INVALID NAME }`;
  };
  return label;
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
        type = "null_temp";
        break;
      } else if (Array.isArray(val)) {
        color = "magenta";
        type = "array_temp";
        break;
      } else {
        color = "green";
        type = typeof val + "_temp";
        break;
      }
    default:
      color = null;
      type = null;
  }
  return { color: color, type: type };
}