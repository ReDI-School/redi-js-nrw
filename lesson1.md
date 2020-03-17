### Table Of Contents

<!-- .slide: style="font-size:80%" -->

1. [Introduction](#lesson1): [Basic Data Types](#lesson1:datatypes) and [Operators](#lesson1:operators)
1. [Variables](#lesson2): [Console](#lesson2:console), [Comments](#lesson2:comments) and [Homework](#lesson2:homework)
1. [If statements](#lesson3)
1. [Functions](#lesson4), Homework [1](#lesson4:homework1) and [2](#lesson4:homework2)
1. [Loops](#lesson6:loops)
1. Arrays
1. Objects
1. DOM
1. Web APIs
1. Libraries

Direct link to lessons: [1](#lesson1) [2](#lesson2) [3](#lesson3) [4](#lesson4) [5](#lesson5) [6](#lesson6)

---

<!-- .slide: id="lesson1" -->

# Basic Frontend - Spring 2020

Lesson 1, Tuesday, 2020-02-25

---

### Welcome to JavaScript!

> It does not matter what we cover, but what you discover (Noam Chomsky)

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

# The standard

#### http://www.ecma-international.org/ecma-262/10.0/index.html

* Standardized Specification of JavaScript
* Very technical, not good for learning

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

---

<!-- .slide: style="font-size:70%" -->

### What is programming?

Programming involves knowing and doing the following things:
* input: Get data from the keyboard, a file, a sensor, or some other device.
* output: Display data on the screen, or send data to a file or other device.
* math: Perform basic mathematical operations like addition and division.
* decisions: Check for certain conditions and execute the appropriate code.
* repetition: Perform some action repeatedly, usually with some variation.

(Source: http://greenteapress.com/thinkpython/thinkpython.pdf, Page 3)

---

<!-- .slide: id="lesson1:datatypes" -->

# Basic Data Types

---

### Let's start with JavaScript!

* Open Google Chrome
* Hit `F12` key
* Click on **Console**

---

### Enter Some Data

* Try entering your name
* Try entering your shoe size

---

### Data Types

* JavaScript seems to be picky about the data we enter
* In order to understand how to enter data, we need to know about **Data Types**

---

### Data Types: Number

* One basic data type is called **Number**
* A Number can be a positive integer (`1`, `2`, `42`...)
* or negative with a leading `-` minus sign (`-1`, `-2`, `-42`)
* A Number can also be a positive or negative floating point (`0.25`, `-4.5`)
* A Number can _not_ contain fractions, only floating point (`1/3` vs. `0.33333`)

---

### Data Type: String

* Another basic data type is called **String**
* A String can contain any textual data
* It starts and ends with a `"` double quote
* It can also start and end with a `'` single quote
* Example: `"Hello"`, `'Carlo'`

---

### Data Type: Boolean

* The basic data type **Boolean** can only be `true` or `false`
* It can be used to represent logical states that can either be `true` or `false`
* You can use them for yes/no questions: "yes" (true) or "no" (false)
* Example: `true`, `false`

---

### Data Type: Undefined

* The basic data type **Undefined** has only one value: `undefined`
* Example: `undefined`

---

### Try it out

Now, try to enter some data to the JavaScript console, but think of the data type first:

* Try entering your name
* Try entering your shoe size
* Try entering whether you are older than the person next to you

---

### Try it out: Solution

```JavaScript
"Harald"
41
true
```

---

### Summary

* Try to summarize what we learned so far about data types

---

### Strings and Quotes

Strings start and end with single (`'`) or double quotes (`"`). But what if we want to add a quote within our string?

```js
"He said: "Hello""
```

Solution: We can escape the very next character with a backslash (`\`):

```js
"He said: \"Hello\""
```

---

### Strings and Control Characters

If you want a backslash in a string, you need to escape it: `"\\"`

There are some special characters in strings, for example:

* `"\n"` - new line
* `"\t"` - tab

These are called "Control Characters"

---

### Quiz: Which strings are correct?

```plaintext
"Hello"
'World'
"He said "hello" to me"
'Let's go!'
""
'This is a\nnew line'
'This is a backslash: \'
```

---

### Solution

```JavaScript
"Hello"                        // CORRECT
'World'                        // CORRECT
"He said "hello" to me";       // WRONG - unescaped quotes
'Let's go!'                    // WRONG - unescaped '
""                             // CORRECT
'This is a\nnew line';         // CORRECT
'This is a backslash: \';      // WRONG - escaped '
```

---

<!-- .slide: id="lesson1:operators" -->

# Operators

---

### Operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * /` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `temperature !== 25`<br/>`age >= 18` |
| Logical Operators | &#124;&#124; `&& !` | `a && !b`<br />`x >= 5 && x < 15` |
| Combined Operators | `+= -= *= /= ++` | `a *= 2`<br />`count++` |

---

### Numerical Operators

Basic mathematical operators:

* `+` addition
* `-` subtraction
* `*` multiplication
* `/` division
* `**` exponentiation

---

### Addition operator

The addition operator can be used on Strings and Numbers:

```javascript
1 + 1                // is 2
"hello" + " world"   // is "hello world"
```

---

### Importance of data types

```javascript
1 + 1        // is 2
"1" + "1"    // is "11"
```

Make sure to always choose the correct data type for your data,
because the operators in JavaScript behave differently depending on the data type.

---

### Let's practice

Compute the following with JavaScript:

* How old you will be in one year?
* What is the difference between your age and the person next to you?
* What is the square of 8?

---

### Solution

```javascript
42 + 1     // I'll be 43 next year!
42 - 20    // I'm 22 years older
8 ** 2     // Square of eight is 64
```

---

### Comparison operators

* `===` strict equality
* `!==` strict inequality
* `>` greater than
* `<` less than
* `>=` greater or equal
* `<=` less or equal

---

### Let's practice

Use JavaScript to compute the following:

* Figure out whether you are older than the person next to you
* Figure out whether you have the same first name as the person next to you

---

### Solution

```javascript
42 > 20                   // true - I am older
"Harald" === "Abdullah"   // false - not the same first name
```

---

### Logical Operators

These operators only make sense on Boolean:

* `&&` Logical AND
* `||` Logical OR
* `!` Logical NOT

---

### Logical AND

AND takes two booleans and returns `true` if both booleans are `true`

```javascript
true && true   // true
true && false  // false
false && true  // false
false && false // false
```

Example: I need bread (true/false) AND cheese (true/false) to make a cheese toast

---

### Logical OR

OR takes two booleans and returns `true` if any (or both) are `true`

```javascript
true || true   // true
true || false  // true
false || true  // true
false || false // false
```

Example: To apply to a job, I need to know German OR English.

---

### Let's practice

Use JavaScript to compute:

* Am I the youngest person in a group of three?
* Am I younger than at least one person in a group of three?

---

### Solution

Am I the youngest person in a group of three?
I need to be younger than person to my left AND I need to be younger than person to my right

```javascript
42 < 20 && 42 < 35  // false - I am not the youngest person
```

Am I younger than at least one person in a group of three?
I need to be younger than person to my left OR I need to be younger than person to my right

```javascript
42 < 20 || 42 < 35  // false - I am not younger than at least one other person
```

---

### Logical NOT

Logical NOT negates a boolean:

```javascript
!true  // false
!false // true
```

Example: Am I NOT the youngest person?

---

### Summary

* Try to summarize what we learned so far about operators

---

### Reflect

* Pretend your friend was absent from class today and asks you to explain the lesson. What would you tell?
* If you were writing a quiz over today's material, what are 2 questions that you would put in?
* What would you like us to review next time?
