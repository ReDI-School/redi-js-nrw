// PART 1 - this is the easy part without bonus
function changeColor_part1(color) {
    document.body.style.backgroundColor = color;
  }

  // BONUS 1
  function changeColor(color) {
    let newColor;
    if (document.body.style.backgroundColor === color) {
      newColor = "light" + color;
    } else {
      newColor = color;
    }

    // apparently, there's no lightred in html
    if (newColor === "lightred") {
      newColor = "pink";
    }

    document.body.style.backgroundColor = newColor;
  }

  // BONUS 2
  function darkColor() {
      let color = document.body.style.backgroundColor;
      if (color === "red" || color === "pink") {
          document.body.style.backgroundColor = "darkred";
      } else if (color === "green" || color === "lightgreen") {
          document.body.style.backgroundColor = "darkgreen";
      } else if (color === "blue" || color === "lightblue") {
          document.body.style.backgroundColor = "darkblue";
      }
  }
