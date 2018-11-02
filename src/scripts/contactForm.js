// A ContactForm component that, when filled out and a submit button is pressed,
// adds a new contact to storage. It should import the ContactCollection component.

import postToDatabase from "./contactCollection"
import createContact from "./contact"

document.querySelector("#save_button").addEventListener("click", () => {
  let newContact = createContact()
  postToDatabase(newContact)
})

export default "./contactForm"

