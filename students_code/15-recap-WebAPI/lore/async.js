async function func1() {
  await fetch("blah");
}

async function func2() {
  await func1();
  console.log("end of func2");
}

async function func3() {
  func1();
  console.log("end of func3");
}


func2();
console.log("something");