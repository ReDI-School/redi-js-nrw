### Table Of Contents

1. Data Types, Operators: [1](#lesson1)
1. Variables
1. If statements
1. Functions
1. Loops
1. Arrays
1. Objects
1. DOM
1. Web APIs
1. Libraries

---

<!-- .slide: id="lesson1" -->

# Basic Frontend - Spring 2020

Lesson 1, Tuesday, 2020-02-25

---

### Hi!

Welcome to JavaScript!

```JavaScript
let x = 42;
let weather = "sunny";
let courseStarting = true;
```

---

### Pillars of Web Development

| HTML | CSS | JavaScript |
| ---- | --- | ---------- |
| ![HTML5](images/HTML5_Logo.svg) <!-- .element height="64px" width="64px" --> | ![CSS3](images/css3.svg) <!-- .element height="64px" width="64px" --> | ![JS](images/javascript-logo.svg) <!-- .element height="64px" width="64px" --> |
| *Content* |  *Presentation* | *Dynamic Effects* |
| Nouns | Adjectives | Verbs |

```html
<p></p>  <!-- HTML: Adds a paragraph -->
```

```css
P {color: red;}  /* CSS: Makes the paragraph red */
```

```js
p.remove(); // JavaScript: removes the paragraph
```

---

### JavaScript - What is it?

* JS is a lightweight, cross-platform, object-oriented programming language
* JS is one of three core technologies of web development
* JS makes modern web-development possible
  * Dynamic effects
  * Modern web applications that we can interact with

---

### JavaScript - "Full Stack"

* JS can be used for much more, though...
  * For Server-side: [Node.js](https://nodejs.org/en/)
  * For mobile apps: [Cordova](https://cordova.apache.org/) or [React Native](https://facebook.github.io/react-native/)
  * For desktop apps: [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps), [Elektron](https://www.electronjs.org/)
  * "embedded" JS engines: [QtQuick](https://doc.qt.io/qt-5/qtquick-index.html), [Rhino/Nashorn](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino)

---

### Tools

We'll be using these tools during our course:

* [Chrome Browser](https://www.google.com/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [MDN Web Documentation](https://developer.mozilla.org/en-US/)

---

### Tools: Chrome Browser

* https://www.google.com/chrome/
* Most common browser
* Most up to date
* Excellent Development Tools (F12)

---

### Tools: Visual Studio Code

* https://code.visualstudio.com/
* Open source IDE (**I**ntegrated **D**evelopment **E**nvironment)
* Great tools
* Good defaults
* Fast

---

### Tools: MDN Web Documentation

* https://developer.mozilla.org/en-US/
* Up to date reference for JS
* Good guides
* Free

---

### Additional Courseware

* [freecodecamp.org](https://www.freecodecamp.org/)
* [udemy.com](https://www.udemy.com): Introduction to JavaScript Development
* [codeacademy.com](https://www.codecademy.com): Introduction to JavaScript
* [edabit.com](https://edabit.com): Learn JavaScript with interactive challenges and external resources

---

### Special Characters

| Character | Character |
| --- | --- |
| `(` Parentheses `)` | `&` Ampersand `&` |
| `{` Braces, or curly braces `}` | `*` Asterisk `*` |
| `[` Brackets, or square brackets `]` | `^` Caret or circumflex `^` |
| `<` Angle brackets `>` | &#124; Vertical bar, or pipe &#124; |
| `'` Single quote `'`| `~` Tilde `~` |
| `"` Double quote `"` | `#` Hash or number sign `#` |
| `` ` `` Back tick `` ` `` | `_` Underscore `_` |
| `/` Slash, or Forward slash `/` | `:` Colon `:` |
| `\` Backslash `\` | `;` Semicolon `;` |
