import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

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
        logIfObjectOrArray("Array", val, color, key);
        color = null;
        break;
      } else {
        color = "green";
        logIfObjectOrArray("Object", val, color, key);
        color = null;
        break;
      }
    default:
      color = "black";
  }
  return color;
};

const logIfNotObjectOrIsNull = (label, obj, isObjNull, typeOfObj) => {
  return console.log(
    `%c%s`,
    "color: red",
    `${label} : You try to log ${
      isObjNull ? `"${obj}"` : typeOfObj
    }. Function "prettyDir" accepts just iterable collections!`
  );
};

// const logIfObjectIsEmpty = (label, obj) => {
//   console.log(`%c --> ${label} : You try to log empty object:`, "color: red");
//   console.dir(obj);
// };

const logIfObjectOrArray = (label, obj, color = null, key = null) => {
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

const prettyDir = (label, obj) => {
  let typeOfObj = typeof obj;
  let isObjNull = obj == null;
  console.log(
    `%c%s`,
    "color: green; background: yellow;",
    `START log --> ${label} `
  );
  const labelUpper = label.toUpperCase();
  if (typeOfObj !== "object" || isObjNull) {
    logIfNotObjectOrIsNull(labelUpper, obj, isObjNull, typeOfObj);
  } else if (Object.values(obj).length <= 0) {
    console.log(
      "%c%s",
      "color: red",
      `${labelUpper} : You try to log empty object:`
    );
    logIfObjectOrArray(labelUpper, obj);
  } else {
    logIfObjectOrArray(labelUpper, obj);
  }
  console.log(
    "%c%s",
    "color: mediumblue; background: moccasin;",
    `END log <-- ${label} `
  );
};

console.clear();
// prettyDir("new1", preTab);
prettyDir("new2", tab);
// prettyDir("new3", null);
// prettyDir("new4", []);
// prettyDir("new5", preObj);
// prettyDir("", 6);
// prettyDir("Array", tab);

function App() {
  return (
    <div className="App">
      <h2>Zadanie</h2>
      <p>
        1. Stwórz funkcję prettyDir(str, obj), jako ulepszoną funcję
        console.dir() Funkcja ma wypisać wszystkie property obiektu lub tablicy
        wewnątrz grupy i pokolorować je w zależności od typu. Liczby na
        niebiesko. Stringi na czerwono. Obiekty na zielono. Tablice na różowo.
      </p>
      <h2>Rozwiązanie</h2>
      <p>
        Funkcja <code>prettyDir()</code> przyjmuje stringowy "label" i kolekcję
        "obj". Sprawdza czy "obj" może być iterowany i przekazuje go do funkcji{" "}
        <code>logIfObjectOrArray()</code> ktora tworzy grupę w consoli dla
        logowanie properties tego "obj". Jeżeli propertie to kolekcja, odbywa
        się rekursywne wywółanie funkcji <code>logIfObjectOrArray()</code>{" "}
      </p>
      <h1 style={{ color: "red" }}>To see results please open console!!!</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
