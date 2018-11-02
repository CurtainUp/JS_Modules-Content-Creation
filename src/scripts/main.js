import {postToDatabase, getAllFromDatabase} from "./contactCollection"
import createContact from "./contact"

// Event listener for save button that adds all input to database
document.querySelector("#save_button").addEventListener("click", () => {
  let newContact = createContact()
  postToDatabase(newContact)
})

// Event listener for get button that fetches ALL from database AND adds them to DOM
document.querySelector("#get_button").addEventListener("click", () => {
  getAllFromDatabase()
})