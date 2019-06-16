Projects page

[Colorize Conlog](https://jurisportfolio.github.io/colorize-conlog/)

## Zadanie

Stwórz funkcję prettyDir(str, obj), jako ulepszoną funcję
console.dir() Funkcja ma wypisać wszystkie property obiektu lub tablicy
wewnątrz grupy i pokolorować je w zależności od typu. Liczby na
niebiesko. Stringi na czerwono. Obiekty na zielono. Tablice na różowo.

## Rozwiązanie

Funkcja <code>prettyDir()</code> przyjmuje stringowy "label" i kolekcję
"obj". Sprawdza czy "obj" może być iterowany i przekazuje go do funkcji
<code>logIfObjectOrArray()</code> ktora tworzy grupę w consoli dla
logowanie properties tego "obj". Jeżeli propertie to kolekcja, odbywa
się rekursywne wywółanie funkcji <code>logIfObjectOrArray()</code>

```
  const prePreObj = { foo: "some", boo: 5, woo: [], too: null };<br />
  const preTab = [1, 2, "napis", prePreObj];<br />
  const preObj = { foo: "napis", boo: 3, woo: null, too: preTab };<br />
  const tab = [1, "napis", preTab, preObj];
```
