import prettyDir from "./src/prettyDir.js";

const prePreObj = { foo: "some", boo: 5, woo: [], too: null };
const preTab = [1, 2, "napis", prePreObj];
const preObj = { foo: "napis", boo: 3, woo: null, too: preTab };
const tab = [1, "napis", preTab, preObj];

prettyDir("new1", preTab);
// prettyDir(preTab, preTab);
// prettyDir("new2", tab);
// prettyDir("new3", null);
// prettyDir("new4", []);
// prettyDir("new5", preObj);
// prettyDir("", 6);
// prettyDir(6, 6);
// prettyDir("new6", "new log");
// prettyDir("Array", tab);
