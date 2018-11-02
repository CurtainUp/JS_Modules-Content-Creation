import {postToDatabase, getAllFromDatabase} from "./contactCollection"
// import "./contactForm"

let firstName = document.querySelector(".first_name")
let lastName = document.querySelector(".last_name")
let phoneNumber = document.querySelector(".phone_number")
let address1 = document.querySelector("#address_1")
let address2 = document.querySelector("#address_2")
let city = document.querySelector("#city")
let state = document.querySelector("#state")
let zipCode = document.querySelector("#zip_code")

let contactInfo = {}

document.querySelector("#save_button").addEventListener("click", () => {
  contactInfo.firstName = firstName.value
  contactInfo.lastName = lastName.value
  contactInfo.phoneNumber = phoneNumber.value
  contactInfo.address1 = address1.value
  contactInfo.address2 = address2.value
  contactInfo.city = city.value
  contactInfo.state = state.value
  contactInfo.zipCode = zipCode.value
  console.log(contactInfo)
  postToDatabase(contactInfo)
})

document.querySelector("#get_button").addEventListener("click", () => {
  console.log(getAllFromDatabase())
})