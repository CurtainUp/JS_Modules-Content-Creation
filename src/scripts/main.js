import {postToDatabase, getAllFromDatabase} from "./contactCollection"
// import "./contactForm"
import createContact from "./contact"

document.querySelector("#save_button").addEventListener("click", () => {
  let newContact = createContact()
  postToDatabase(newContact)
})

document.querySelector("#get_button").addEventListener("click", () => {
  console.log(getAllFromDatabase())
})