# Overview

* We're using https://revealjs.com/#/ for slides and Markdown for simplicity. Only deviate if you have a very good reason :)
* Markdown cheat sheet: https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf
* Pages are served via GitHub pages, which is using Jekyll. Make sure your page doesn't contain tags that confuse Jekyll, e.g. three dashes on top of the markdown file

# How to add a new lesson

1. Create a new file for the lesson, e.g. `lesson42.md`. See template below
1. Add your lesson to `index.html` in the "slides" `div` element
1. Update `lesson1.md`, add your lesson to the table of contents
1. Try it out locally via a local http server, e.g. `python3 -m http.server`
1. Create a pull request and ask the other teachers on Slack for a review

# Template for new lesson

```markdown
---

<!-- .slide: id="lessonXX" -->

# Basic Frontend - Fall 2021

Lesson XX, Tuesday, 2021-DD-MM

---

### First slide

---

### Summary
```

Notes:

1. Replace `lessonXX` with the lesson number. This will create an anchor that lets us jump to that lesson directly.
1. Adapt the date accordingly
1. Last slide should be a summary slide of what we learned today
