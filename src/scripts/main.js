import {postToDatabase, getAllFromDatabase} from "./contactCollection"
import createContact from "./contact"
// import "./contactForm"
// import "./contactList"

document.querySelector("#save_button").addEventListener("click", () => {
  let newContact = createContact()
  postToDatabase(newContact)
})

document.querySelector("#get_button").addEventListener("click", () => {
  getAllFromDatabase()
})