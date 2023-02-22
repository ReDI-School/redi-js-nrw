const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const form = document.querySelector(".form");
const save = document.querySelector("#save");

const contactsListElement = document.createElement("ol");
document.body.appendChild(contactsListElement);

const contactsList = JSON.parse(localStorage.getItem('List of Contacts'));

function deleteContact(index) {
  // delete contact at index
  contactsList.splice(index, 1);
  // delete the contact also from the localStorage
  saveContactsList();
}

function saveContactsList() {
  window.localStorage.setItem('List of Contacts', JSON.stringify(contactsList));
}

function renderList(contactsList) {
  // contactsList is an Array of these objects:
  //
  // const contactObj = {
  //   firstName: firstNameValue,
  //   lastName: lastNameValue,
  //   email: emailValue,
  // };

  contactsListElement.innerHTML = "";
  contactsList.forEach((contactObj, contactIndex) => {
    // create and add an item in the ordered list for the new contact
    let li = document.createElement("li");
    // li.setAttribute("class", "item");
    let { firstName, lastName, email } = contactObj;
    li.innerHTML = `${firstName} ${lastName} (${email})`;

    let btn = document.createElement("button");
    btn.textContent = "x";
    btn.addEventListener("click", (event) => {
      console.log("please delete index", contactIndex);
      // delete contact at index
      deleteContact(contactIndex);
      // re-render the list
      renderList(contactsList);
    });
    li.appendChild(btn);

    contactsListElement.appendChild(li);
  });
}

// render the list the first time the app is loaded
renderList(contactsList);

save.addEventListener("click", function (e) {
  e.preventDefault();

  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;

  const contactObj = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
  };
  // console.log(contactObj);

  contactsList.push(contactObj);
  // console.log(contactsList);
  renderList(contactsList);
  saveContactsList();
});
// const gottenList = [firstNameValue, lastNameValue, emailValue];

// const list = document.createElement("li");
// const listItems = document.createTextNode("fjf");
// list.appendChild(listItems);
// OL.appendChild(list);
