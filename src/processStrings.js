export const labelToUpperCase = (label) => {

  if (typeof label !== "string" || label === "") {
    label = "NO NAME";
  };
  let upperLabel = label.toUpperCase();

  return upperLabel;
}