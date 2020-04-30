
let myContacts = [];

function handleAddContactClick() {
    let firstName = document.getElementById('firstNameInput').value;
    let lastName = document.getElementById('lastNameInput').value;
    let emailAddress = document.getElementById('emailInput').value;

    let newContact = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress
    };

    myContacts.push(newContact);

    saveContacts();
    renderContacts();
}


function renderContacts() {
    let listElement = document.getElementById('contactList');

    // Clear out the existing list of contacts
    listElement.innerHTML = "";

    // Re-add all of our contacts
    for (let contact of myContacts) {
        let contactListItem = createContactListItem(contact);
        listElement.appendChild(contactListItem);
    }
}

// Helper function to create a new contact list item. Organizational preference, for when this code becomes more complicated.
function createContactListItem(contact) {
    let newContactListItem = document.createElement('li');
    newContactListItem.textContent = contact.firstName + ' ' + contact.lastName + ': ' + contact.emailAddress;

    return newContactListItem;
}

// Local Storage helper functions

let LOCAL_STORAGE_KEY = 'addressBookContacts';

function saveContacts() {
    let contactsAsJsonString = JSON.stringify(myContacts);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, contactsAsJsonString);
}

function loadContacts() {
    let savedContactsAsJsonString = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedContactsAsJsonString) {
        myContacts = JSON.parse(savedContactsAsJsonString);
    }
}

// On startup, we need to load any saved contacts and render them
loadContacts();
renderContacts();
