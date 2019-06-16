import React from 'react';

function App() {
  const example1 = `const prePreObj = {foo: "some", boo: 5, woo: [], too: null };`;
  const example2 = `const preTab = [1, 2, "napis", prePreObj];`;
  const example3 = `const preObj = {foo: "napis", boo: 3, woo: null, too: preTab };`;
  const example4 = `const tab = [1, "napis", preTab, preObj];`;
  return (
    <div className="App">
      <div>
        <h1 className="warning">To see results please open console!!!</h1>
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
          "obj". Sprawdza czy "obj" może być iterowany i przekazuje go do funkcji
        <code> logIfObjectOrArray() </code> ktora tworzy grupę w consoli dla
                            logowanie properties tego "obj". Jeżeli propertie to kolekcja, odbywa
        się rekursywne wywółanie funkcji <code>logIfObjectOrArray()</code>
        </p>
        <div>
          <h2>Tu</h2>
          <ul id="log"></ul>
        </div>


        <code className="example">
          {example1}<br />
          {example2}<br />
          {example3}<br />
          {example4}
        </code>
      </div>

    </div>
  );
}

export default App;
