#!/usr/bin/env node

// This little script can be used to create a new skeleton lesson

const fs = require('fs');

function getMaxLesson() {
    return fs.readdirSync('.').reduce((maxLesson, file) => {
        const match = file.match(/lesson(\d+).md/);
        if (match === null) {
            return maxLesson;
        }
        return Math.max(maxLesson, parseInt(match[1]));
    }, 0);
}

function getNextDate() {
    const date = new Date();
    if (date.getDay() === 3 || date.getDay() === 4) {
        date.setDate(date.getDate() + 4 - date.getDay());
    } else {
        date.setDate(date.getDate() + (2 + 7 - date.getDay()) % 7);
    }
    return date;
}

const nextLesson = getMaxLesson() + 1;
const nextDate = getNextDate();
const template =
`<!-- .slide: id="lesson${nextLesson}" -->

# Basic Frontend - Spring 2020

Lesson ${nextLesson}, ${nextDate.getDay() == 2 ? "Tuesday" : Thursday}, ${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}

---
`;
fs.writeFileSync(`lesson${nextLesson}.md`, template);

function patchTableOfContents() {
    let lesson1 = fs.readFileSync("lesson1.md", { encoding: 'utf8' });
    lesson1 = lesson1.replace(/^(Direct link to lessons:.*)$/mg, `$1 [${nextLesson}](#lesson${nextLesson})`);
    fs.writeFileSync("lesson1.md", lesson1);
}
patchTableOfContents();

function patchIndexHtml() {
    let index = fs.readFileSync("index.html", { encoding: "utf-8" });
    index = index.replace(
        /^(.*NEW_SECTION_HERE.*)$/mg,
        `      <section data-markdown="lesson${nextLesson}.md" data-charset="utf-8"></section>\n$1`
    );
    fs.writeFileSync("index.html", index);
}
patchIndexHtml();
