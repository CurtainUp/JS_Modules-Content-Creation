// A Contact component that displays a person's name, phone number, and address.

// ----TO DO----- Create Class constructor.
// Stretch: Setter that checks properties OR converts them to uniform data structure ()-- etc.
class Contact {
  constructor(props) {
    this.firstName = props.firstName
    this.lastName = props.lastName
    this.phoneNumber = props.phoneNumber
    this.address1 = props.address1
    this.address2 = props.address2
    this.city = props.city
    this.state = props.state
    this.zipCode = props.zipCode
  }
}

// Creates a new instance of Contact using input from user and returns the values
const createContact = () => {
  let newContact = new Contact ({
    firstName: document.querySelector(".first_name").value,
    lastName: document.querySelector(".last_name").value,
    phoneNumber: document.querySelector(".phone_number").value,
    address1: document.querySelector("#address_1").value,
    address2: document.querySelector("#address_2").value,
    city: document.querySelector("#city").value,
    state: document.querySelector("#state").value,
    zipCode: document.querySelector("#zip_code").value
  })
  // console.log(newContact)
  return newContact
}

export default createContact